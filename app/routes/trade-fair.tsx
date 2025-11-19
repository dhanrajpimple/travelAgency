import type { Route } from "./+types/trade-fair";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Trade Fair - Leisure N More" },
    { name: "description", content: "Book your trade fair travel packages with Leisure N More." },
  ];
}

export default function TradeFair() {
  const tradeFairs = [
    {
      title: "Canton Fair 2025",
      date: "14 - 19 Oct 2025",
      location: "China Import & Export Fair Pazhou Complex, Guangzhou",
      description: "The 138th Canton Fair is going to be held from 14 - 19 Oct 2025 at China Import & Export Fair Pazhou Complex, Guangzhou. Join us for this premier international trade event.",
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80"
    },
    {
      title: "ProPak China 2019",
      date: "19 - 21 June 2019",
      location: "National Exhibition and Convention Center",
      description: "ProPak China 2019, will take place in a new venue, National Exhibition and Convention Center, from 19 to 21 June, 2019.",
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
    },
    {
      title: "Wire and Cable 2019",
      date: "Various dates",
      location: "Guangzhou",
      description: "Wire and Cable taking place in Guangzhou is the largest technical fair dealing with wiring and cabling in South China.",
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&q=80"
          alt="Trade Fair"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B4A]/80 to-[#1A2B4A]/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">Trade Fair</h1>
        </div>
      </section>
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-600 mb-12 text-lg">
            Book your travel packages for international trade fairs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tradeFairs.map((fair, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={fair.image} 
                    alt={fair.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{fair.title}</h3>
                  <p className="text-[#0066CC] font-semibold mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {fair.date}
                  </p>
                  <p className="text-gray-600 mb-4 flex items-start gap-2">
                    <svg className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {fair.location}
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{fair.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <p className="text-lg font-semibold text-gray-800">{fair.price}</p>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-[#D4AF37] to-[#C9A634] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 text-center">Request a Quote</h2>
            <p className="text-gray-600 mb-6 text-center">
              Contact us for customized trade fair travel packages including flights, hotels, and visa assistance.
            </p>
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#C9A634] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
