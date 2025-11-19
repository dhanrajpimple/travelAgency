import type { Route } from "./+types/terms";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Terms of Use - Leisure N More" },
    { name: "description", content: "Terms and conditions for Leisure N More travel services." },
  ];
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
                  Permission is granted to temporarily download one copy of the materials on Leisure N More's website for personal, non-commercial transitory viewing only.
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
                  Leisure N More shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Modifications</h2>
                <p>
                  Leisure N More reserves the right to revise these terms of use at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Use.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Contact Information</h2>
                <p>
                  For any questions regarding these Terms of Use, please contact us at info@leisurenmore.com or call +91-7531987990.
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

