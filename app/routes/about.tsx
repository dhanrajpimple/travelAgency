import type { Route } from "./+types/about";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us - Leisure N More" },
    { name: "description", content: "Learn about Leisure N More travel services." },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="About Leisure N More"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B4A]/80 to-[#1A2B4A]/50 flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center px-4">About Us</h1>
        </div>
      </section>
      
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-12 md:mb-16">
            {/* Image Section */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
                alt="Travel Team"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8 text-gray-700">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-800">Welcome to Leisure N More</h2>
                <p className="mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
                  Leisure n More is a young organization managed by travel industry specialists. The term itself clarifies that we design holidays for you, as per your requirements. With a successful & proven track record, we bring together years of learning, skills & experiences to deliver the best of travel services, be it tour programs.
                </p>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">Our Mission</h2>
                <p className="mb-4 text-sm sm:text-base leading-relaxed">
                  Our mission is to provide exceptional travel experiences that exceed our customers' expectations. We strive to make travel accessible, enjoyable, and memorable for everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Services Section with Images */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-gray-800 px-2">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 sm:h-48 md:h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
                    alt="Tour Packages"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Tour Packages</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">Domestic and International tour packages tailored to your needs</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                    alt="Hotel Bookings"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Hotel Bookings</h3>
                  <p className="text-gray-600">Best hotel deals across India and worldwide</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80"
                    alt="Visa Services"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Visa Assistance</h3>
                  <p className="text-gray-600">Expert visa processing for all countries</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
                    alt="MICE Services"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">MICE Services</h3>
                  <p className="text-gray-600">Meetings, Incentives, Conferences, and Exhibitions</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80"
                    alt="Trade Fair"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Trade Fair Packages</h3>
                  <p className="text-gray-600">Complete travel solutions for trade fair attendees</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
                    alt="Customized Holidays"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Customized Holidays</h3>
                  <p className="text-gray-600">Personalized travel experiences designed for you</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-gray-800 px-2">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              <div className="bg-blue-50 rounded-lg p-4 sm:p-5 md:p-6 text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-gray-800">Experienced Specialists</h3>
                <p className="text-xs sm:text-sm text-gray-600">Years of expertise in travel industry</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Customized Solutions</h3>
                <p className="text-gray-600">Tailored travel plans for every need</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Competitive Pricing</h3>
                <p className="text-gray-600">Best deals and value for money</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock customer assistance</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Wide Range</h3>
                <p className="text-gray-600">50+ destinations worldwide</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Trusted by Thousands</h3>
                <p className="text-gray-600">1000+ satisfied customers</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
        
        </div>
      </section>

      <Footer />
    </div>
  );
}
