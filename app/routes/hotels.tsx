import type { Route } from "./+types/hotels";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import { Link } from "react-router";
import { generateSEOTags } from "~/config/seo";

export function meta({}: Route.MetaArgs) {
  return generateSEOTags({
    title: "Hotels Booking - Luxury Hotels India & Worldwide | Flexi Global Holidays",
    description: "Book luxury hotels across India and worldwide with Flexi Global Holidays. Best hotel deals for Taj, Oberoi, Leela, ITC, and more premium properties. Get exclusive rates and special offers on hotel bookings.",
    keywords: "hotel booking, luxury hotels, hotel booking India, hotel deals, hotel reservation, 5 star hotels, hotel booking online, best hotel rates, hotel packages, hotel booking Indore",
    url: "/hotels",
    type: "website"
  });
}

export default function Hotels() {
  const domesticHotels = [
    {
      id: 1,
      name: "Taj Mahal Palace",
      location: "Mumbai, Maharashtra",
      price: 8999,
      rating: 5,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      amenities: ["WiFi", "Pool", "Spa", "Restaurant"]
    },
    {
      id: 2,
      name: "The Oberoi Udaivilas",
      location: "Udaipur, Rajasthan",
      price: 12999,
      rating: 5,
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
      amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Lake View"]
    },
    {
      id: 3,
      name: "ITC Maratha",
      location: "Mumbai, Maharashtra",
      price: 7999,
      rating: 5,
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      amenities: ["WiFi", "Pool", "Gym", "Restaurant"]
    },
    {
      id: 4,
      name: "The Leela Palace",
      location: "New Delhi",
      price: 10999,
      rating: 5,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Concierge"]
    },
    {
      id: 5,
      name: "Wildflower Hall",
      location: "Shimla, Himachal Pradesh",
      price: 14999,
      rating: 5,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      amenities: ["WiFi", "Spa", "Restaurant", "Mountain View"]
    },
    {
      id: 6,
      name: "Taj Lake Palace",
      location: "Udaipur, Rajasthan",
      price: 15999,
      rating: 5,
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80",
      amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Lake View"]
    },
    {
      id: 7,
      name: "The Leela Goa",
      location: "Goa",
      price: 6999,
      rating: 5,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
      amenities: ["WiFi", "Pool", "Beach Access", "Restaurant"]
    },
    {
      id: 8,
      name: "Taj Falaknuma Palace",
      location: "Hyderabad, Telangana",
      price: 11999,
      rating: 5,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Historic"]
    },
    {
      id: 9,
      name: "The Oberoi Amarvilas",
      location: "Agra, Uttar Pradesh",
      price: 13999,
      rating: 5,
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
      amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Taj Mahal View"]
    },
    {
      id: 10,
      name: "Kumarakom Lake Resort",
      location: "Kerala",
      price: 9999,
      rating: 5,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      amenities: ["WiFi", "Pool", "Backwater View", "Restaurant"]
    },
    {
      id: 11,
      name: "The Leela Kovalam",
      location: "Kovalam, Kerala",
      price: 8999,
      rating: 5,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
      amenities: ["WiFi", "Pool", "Beach Access", "Spa", "Restaurant"]
    },
    {
      id: 12,
      name: "Taj West End",
      location: "Bangalore, Karnataka",
      price: 8499,
      rating: 5,
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      amenities: ["WiFi", "Pool", "Gym", "Restaurant", "Garden"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
          alt="Hotels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B4A]/80 to-[#1A2B4A]/50 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">Hotels</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mt-4">Discover luxury accommodations across India</p>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domesticHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-[#D4AF37] fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{hotel.name}</h3>
                  <p className="text-gray-600 mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {hotel.location}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 3).map((amenity, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {amenity}
                      </span>
                    ))}
                    {hotel.amenities.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        +{hotel.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                   
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

          <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Looking for a Specific Hotel?</h2>
            <p className="text-gray-600 mb-6">Contact us for the best deals and exclusive rates!</p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#C9A634] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
