import type { Route } from "./+types/contact";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import TripEnquiryForm from "~/components/TripEnquiryForm";
import WhatsAppButton from "~/components/WhatsAppButton";
import { CONFIG } from "~/config/constants";
import { MapPin, Phone, Mail } from "lucide-react";
import { generateSEOTags } from "~/config/seo";

export type ContactActionData = {
  ok: boolean;
  message: string;
  fieldErrors?: Partial<Record<"name" | "email" | "phone" | "message", string>>;
};

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ContactInsertRow = {
  name: string;
  email: string;
  phone: string;
  message: string;
  isRead: boolean;
};

function cleanEnvValue(value: string | undefined) {
  return value?.trim().replace(/^["']|["']$/g, "");
}

function getContactConfig() {
  const env = import.meta.env;

  return {
    supabaseUrl: cleanEnvValue(
      process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || env.SUPABASE_URL || env.VITE_SUPABASE_URL
    ),
    supabaseKey: cleanEnvValue(
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.SUPABASE_ANON_KEY ||
      process.env.VITE_SUPABASE_ANON_KEY ||
      env.SUPABASE_SERVICE_ROLE_KEY ||
      env.SUPABASE_ANON_KEY ||
      env.VITE_SUPABASE_ANON_KEY
    ),
    formspreeEndpoint: cleanEnvValue(
      process.env.FORMSPREE_ENDPOINT || process.env.VITE_FORMSPREE_ENDPOINT || env.FORMSPREE_ENDPOINT || env.VITE_FORMSPREE_ENDPOINT
    ),
  };
}

async function saveContactToSupabase(
  payload: ContactPayload,
  supabaseUrl: string,
  supabaseKey: string
) {
  const row: ContactInsertRow = {
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    message: payload.message,
    isRead: false,
  };

  const response = await fetch(`${supabaseUrl.replace(/\/+$/, "")}/rest/v1/contact_us`, {
    method: "POST",
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }
}

async function sendContactToFormspree(payload: ContactPayload, formspreeEndpoint: string) {
  const response = await fetch(formspreeEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload,
      _subject: `New travel enquiry from ${payload.name}`,
    }),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }
}

export async function action({ request }: Route.ActionArgs): Promise<ContactActionData> {
  const formData = await request.formData();
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const digitsOnly = phone.replace(/\D/g, "");
  const fieldErrors: ContactActionData["fieldErrors"] = {};

  if (!name) {
    fieldErrors.name = "Name is required.";
  } else if (name.length < 3) {
    fieldErrors.name = "Please enter at least 3 characters.";
  }

  if (!email) {
    fieldErrors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (!phone) {
    fieldErrors.phone = "Phone number is required.";
  } else if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    fieldErrors.phone = "Please enter a valid phone number.";
  }

  if (!message) {
    fieldErrors.message = "Message is required.";
  } else if (message.length < 10) {
    fieldErrors.message = "Please enter at least 10 characters.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      message: "Please check the highlighted fields.",
      fieldErrors,
    };
  }

  const { supabaseUrl, supabaseKey, formspreeEndpoint } = getContactConfig();

  if (!supabaseUrl || !supabaseKey || !formspreeEndpoint) {
    return {
      ok: false,
      message: "Contact form is not configured yet. Please call or email us directly.",
    };
  }

  const payload = { name, email, phone, message };

  const [supabaseResult, formspreeResult] = await Promise.allSettled([
    saveContactToSupabase(payload, supabaseUrl, supabaseKey),
    sendContactToFormspree(payload, formspreeEndpoint),
  ]);

  if (supabaseResult.status === "rejected") {
    console.error("Supabase contact_us insert failed", supabaseResult.reason);
  }

  if (formspreeResult.status === "rejected") {
    console.error("Formspree contact email failed", formspreeResult.reason);
  }

  if (supabaseResult.status === "rejected") {
    return {
      ok: false,
      message: "We could not save your enquiry right now. Please try again or contact us directly.",
    };
  }

  return {
    ok: true,
    message: "Thank you. Our travel expert will contact you shortly.",
  };
}

export function meta({}: Route.MetaArgs) {
  return generateSEOTags({
    title: "Contact Us - Flexi Global Holidays | Get Free Travel Quote",
    description: "Contact Flexi Global Holidays for your travel needs. Call +91 9599476155 or visit our office in Indore. Get free quotes for tour packages, hotel bookings, visa services, and MICE solutions. We're available 24/7 to help plan your perfect trip.",
    keywords: "contact travel agency, travel agent contact, Flexi Global Holidays contact, travel agency Indore, travel booking contact, tour package inquiry, travel quote",
    url: "/contact",
    type: "website"
  });
}

export default function Contact() {
  // Google Maps embed URL for Corporate Office (Noida)
  // To update: Go to Google Maps, search for the address, click Share > Embed a map, and copy the iframe src URL
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(CONFIG.CORPORATE_OFFICE.address)}&output=embed`;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />
      
      <section className="py-8 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
            Contact Us
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* Map */}
            <div className="w-full h-96 lg:h-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Flexi Global Holidays Corporate Office Location"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Get in Touch
              </h2>
              
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                    <Phone className="text-[#0066CC]" size={24} />
                    Talk to Experts
                  </h3>
                  <a href={`tel:${CONFIG.PHONE_PRIMARY}`} className="block text-gray-600 hover:text-[#0066CC] mb-2 transition-colors text-lg">
                    {CONFIG.PHONE_PRIMARY}
                  </a>
                  <a href={`tel:${CONFIG.PHONE_SECONDARY}`} className="block text-gray-600 hover:text-[#0066CC] transition-colors text-lg">
                    {CONFIG.PHONE_SECONDARY}
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                    <Mail className="text-[#0066CC]" size={24} />
                    Email Us
                  </h3>
                  <a href={`mailto:${CONFIG.EMAIL}`} className="block text-gray-600 hover:text-[#0066CC] transition-colors text-lg break-all">
                    {CONFIG.EMAIL}
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                    <MapPin className="text-[#0066CC]" size={24} />
                    CORPORATE OFFICE
                  </h3>
                  <p className="text-gray-600 mb-2 leading-relaxed">
                    {CONFIG.CORPORATE_OFFICE.address}
                  </p>
                  <a href={`tel:${CONFIG.OFFICE_PHONE}`} className="block text-gray-600 hover:text-[#0066CC] mb-2 transition-colors">
                    Phone: {CONFIG.OFFICE_PHONE}
                  </a>
                  <a href={`mailto:${CONFIG.EMAIL}`} className="block text-gray-600 hover:text-[#0066CC] transition-colors">
                    Email: {CONFIG.EMAIL}
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                    <MapPin className="text-[#0066CC]" size={24} />
                    BRANCH OFFICE
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {CONFIG.BRANCH_OFFICE.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white p-5 shadow-xl md:p-8">
            <TripEnquiryForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
