import type { Route } from "./+types/visa";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import { CONFIG } from "~/config/constants";
import { Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router";
import { generateSEOTags } from "~/config/seo";

export function meta({}: Route.MetaArgs) {
  return generateSEOTags({
    title: "Visa Services - Visa Application Assistance | Flexi Global Holidays",
    description: "Get expert visa assistance for USA, UK, Europe, Canada, Australia, Dubai, Singapore, Thailand, and more. Fast visa processing with complete documentation support. Contact Flexi Global Holidays for visa services.",
    keywords: "visa services, visa application, visa assistance, USA visa, UK visa, Europe visa, Schengen visa, Canada visa, Australia visa, Dubai visa, Singapore visa, Thailand visa, visa processing, visa documentation",
    url: "/visa",
    type: "website"
  });
}

export default function Visa() {
  const visaServices = [
    { country: "USA", processingTime: "15-20 days", price: "₹15,000" },
    { country: "UK", processingTime: "10-15 days", price: "₹12,000" },
    { country: "Europe (Schengen)", processingTime: "10-15 days", price: "₹8,000" },
    { country: "Australia", processingTime: "15-20 days", price: "₹10,000" },
    { country: "Canada", processingTime: "20-25 days", price: "₹12,000" },
    { country: "Thailand", processingTime: "3-5 days", price: "₹2,500" },
    { country: "Singapore", processingTime: "3-5 days", price: "₹1,500" },
    { country: "Dubai", processingTime: "3-5 days", price: "₹3,500" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Visa Services</h1>
          <p className="text-center text-gray-600 mb-12">
            Get expert assistance for your visa application process
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {visaServices.map((service) => (
              <div
                key={service.country}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.country}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Clock size={16} />
                  <span className="text-sm">
                    <span className="font-semibold">Processing:</span> {service.processingTime}
                  </span>
                </div>
                <Link
                  to="/contact"
                  className="text-[#0066CC] hover:text-[#0052A3] font-semibold underline mb-4 block transition-colors flex items-center gap-2"
                >
                  Contact for best pricing
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-[#D4AF37] to-[#C9A634] text-white py-2 rounded-lg hover:opacity-90 transition-opacity text-center font-semibold"
                >
                  Contact Us
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Need Visa Assistance?</h2>
            <p className="text-center text-gray-600 mb-6">
              Our expert team is here to help you with your visa application process. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href={`tel:${CONFIG.PHONE_PRIMARY}`}
                className="flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#C9A634] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                <Phone size={20} />
                Call: {CONFIG.PHONE_PRIMARY}
              </a>
              <a 
                href={`mailto:${CONFIG.EMAIL}`}
                className="flex items-center gap-2 bg-white text-[#0066CC] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors border-2 border-[#0066CC]"
              >
                <Mail size={20} />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
