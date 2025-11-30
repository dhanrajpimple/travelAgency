import type { Route } from "./+types/contact";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import WhatsAppButton from "~/components/WhatsAppButton";
import { CONFIG } from "~/config/constants";
import { MapPin, Phone, Mail } from "lucide-react";
import { generateSEOTags } from "~/config/seo";

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
        </div>
      </section>

      <Footer />
    </div>
  );
}
