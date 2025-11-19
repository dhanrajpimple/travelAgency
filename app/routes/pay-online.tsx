import type { Route } from "./+types/pay-online";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import { CONFIG } from "~/config/constants";
import { CreditCard, Shield, Phone, Mail } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pay Online - Leisure N More" },
    { name: "description", content: "Secure online payment for your travel bookings." },
  ];
}

export default function PayOnline() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Pay Online</h1>
          <p className="text-center text-gray-600 mb-12">
            Secure and convenient online payment for your bookings
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <CreditCard className="mx-auto mb-4 text-[#0066CC]" size={64} />
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Payment Options</h2>
              <p className="text-gray-600 mb-6">
                We accept multiple secure payment methods for your convenience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
                <h3 className="font-semibold mb-2 text-gray-800">Credit/Debit Cards</h3>
                <p className="text-sm text-gray-600">Visa, Mastercard, RuPay</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
                <h3 className="font-semibold mb-2 text-gray-800">Net Banking</h3>
                <p className="text-sm text-gray-600">All major banks</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
                <h3 className="font-semibold mb-2 text-gray-800">UPI & Wallets</h3>
                <p className="text-sm text-gray-600">Google Pay, PhonePe, Paytm</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <Shield className="text-[#0066CC] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">Payment Security</h3>
                  <p className="text-sm text-gray-600">
                    Your payment is processed through secure payment gateways. All transactions are encrypted and secure. 
                    We use industry-standard SSL encryption to protect your financial information.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#D4AF37] to-[#C9A634] text-white p-6 rounded-lg text-center">
              <h3 className="font-semibold mb-2 text-lg">Ready to Make a Payment?</h3>
              <p className="mb-4">Contact us with your booking reference number</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href={`tel:${CONFIG.PHONE_PRIMARY}`}
                  className="flex items-center gap-2 bg-white text-[#0066CC] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Phone size={20} />
                  {CONFIG.PHONE_PRIMARY}
                </a>
                <a 
                  href={`mailto:${CONFIG.EMAIL}`}
                  className="flex items-center gap-2 bg-white text-[#0066CC] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Mail size={20} />
                  Email Us
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="font-semibold mb-4 text-gray-800 text-center">Need Help?</h3>
            <div className="text-center space-y-2">
              <p className="text-gray-600">Call us: <a href={`tel:${CONFIG.PHONE_PRIMARY}`} className="text-[#0066CC] hover:underline">{CONFIG.PHONE_PRIMARY}</a>, <a href={`tel:${CONFIG.PHONE_SECONDARY}`} className="text-[#0066CC] hover:underline">{CONFIG.PHONE_SECONDARY}</a></p>
              <p className="text-gray-600">Email: <a href={`mailto:${CONFIG.EMAIL}`} className="text-[#0066CC] hover:underline">{CONFIG.EMAIL}</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
