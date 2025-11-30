import type { Route } from "./+types/terms";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import { generateSEOTags } from "~/config/seo";

export function meta({}: Route.MetaArgs) {
  return generateSEOTags({
    title: "Terms & Conditions - Terms of Use | Flexi Global Holidays",
    description: "Read the terms and conditions for Flexi Global Holidays travel services. Understand our booking policies, cancellation terms, payment terms, and service agreements.",
    keywords: "terms and conditions, travel terms, booking terms, cancellation policy, travel agency terms, service agreement, terms of use",
    url: "/terms",
    type: "website"
  });
}

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Terms of Use</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials on Flexi Global Holidays' website for personal, non-commercial transitory viewing only.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Booking Terms</h2>
                <p>
                  All bookings are subject to availability and confirmation. Prices are subject to change without notice. Payment terms and cancellation policies apply as per the specific package.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Travel Documents</h2>
                <p>
                  It is the responsibility of the traveler to ensure they have valid travel documents including passports, visas, and health certificates as required.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Limitation of Liability</h2>
                <p>
                  Flexi Global Holidays shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Modifications</h2>
                <p>
                  Flexi Global Holidays reserves the right to revise these terms of use at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Use.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Contact Information</h2>
                <p>
                  For any questions regarding these Terms of Use, please contact us at info@flexiglobalholiday.in or call +91 9599476155.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

