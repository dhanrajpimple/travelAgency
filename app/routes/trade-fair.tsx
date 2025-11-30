import React from 'react';
import Navigation from '~/componets/Navbar';
import Footer from '~/components/Footer';
import { Link } from 'react-router';
import type { Route } from "./+types/trade-fair";
import { generateSEOTags } from "~/config/seo";

export function meta({}: Route.MetaArgs) {
  return generateSEOTags({
    title: "Trade Fair Travel Packages - Global Trade Exhibitions 2025-2026 | Flexi Global Holidays",
    description: "Book travel packages for global trade fairs and exhibitions including CES 2026, Mobile World Congress, Canton Fair, Anuga, Hannover Messe, and more. Complete travel solutions with flights, hotels, visa assistance, and exhibition registration.",
    keywords: "trade fair travel, exhibition travel, trade show packages, CES 2026, Mobile World Congress, Canton Fair, trade fair booking, exhibition travel packages, business travel, trade fair tours",
    url: "/trade-fair",
    type: "website"
  });
}

export default function TradeFair() {
  const tradeFairs = [
    {
      title: "CES 2026",
      date: "January 6-9, 2026",
      location: "Las Vegas Convention Center, Nevada, USA",
      description: "The world's most powerful tech event featuring groundbreaking innovations in AI, 5G, AR/VR, robotics, and consumer electronics. Over 4,500 exhibitors and 140,000+ attendees from across the globe.",
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      category: "Technology",
      featured: true
    },
    {
      title: "Mobile World Congress 2026",
      date: "March 2-5, 2026",
      location: "Fira Gran Via, Barcelona, Spain",
      description: "The world's largest connectivity event showcasing mobile technology, AI trends, and telecommunications. Join 3,000+ exhibitors and 109,000+ professionals in exploring The IQ Era.",
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80",
      category: "Mobile & Telecom",
      featured: true
    },
    {
      title: "Canton Fair 2025",
      date: "October 14-19, 2025",
      location: "China Import & Export Fair Pazhou Complex, Guangzhou",
      description: "The 138th Canton Fair, China's largest trade fair showcasing consumer goods, electronics, machinery, and textiles. Connect with global manufacturers and suppliers.",
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
      category: "General Trade"
    },
    {
      title: "Anuga 2025",
      date: "October 4-8, 2025",
      location: "Koelnmesse, Cologne, Germany",
      description: "The world's leading food and beverage trade fair featuring 10 specialized exhibitions covering everything from organic foods to frozen products and beverages.",
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      category: "Food & Beverage"
    },
  
    {
      title: "Hannover Messe 2026",
      date: "April 20-24, 2026",
      location: "Hannover Exhibition Grounds, Germany",
      description: "The world's leading industrial technology trade fair showcasing Industry 4.0, automation, energy solutions, and digital transformation for manufacturing.",
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      category: "Industrial"
    },
    {
      title: "FRUIT LOGISTICA 2026",
      date: "February 4-6, 2026",
      location: "Messe Berlin, Germany",
      description: "The world's most influential fresh produce trade fair with 2,600+ exhibitors from 151 countries. Discover innovations in sustainability, logistics, and technology.",
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80",
      category: "Agriculture"
    },
    {
      title: "gamescom 2026",
      date: "August 26-30, 2026",
      location: "Koelnmesse, Cologne, Germany",
      description: "The world's largest trade fair for interactive games and entertainment. Experience the latest in gaming hardware, software, esports, and virtual reality.",
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
      category: "Gaming & Entertainment"
    },
    {
      title: "Ambiente 2026",
      date: "February 6-10, 2026",
      location: "Messe Frankfurt, Germany",
      description: "The leading international consumer goods fair showcasing dining, living, and giving products. Discover trends in design, sustainability, and lifestyle products.",
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
      category: "Consumer Goods"
    }
  ];

  const categories = ["All", "Technology", "Mobile & Telecom", "Food & Beverage", "Industrial", "General Trade"];
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredFairs = tradeFairs.filter(fair => {
    const matchesCategory = activeCategory === "All" || fair.category === activeCategory;
    const matchesSearch = fair.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         fair.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navigation />
    <div className="min-h-screen py-16 bg-gradient-to-b from-gray-50 to-white">
    
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
            alt="Trade Fair"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B4A]/95 via-[#1A2B4A]/80 to-[#0066CC]/70" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Global Trade Fairs
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mt-2">
                2025-2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Connect with industry leaders at the world's most prestigious trade exhibitions
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
                </svg>
                <span className="font-semibold">50+ Events</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span className="font-semibold">Global Destinations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Search and Filter Section */}
  
      {/* Featured Events Banner */}
      <section className="py-8 bg-gradient-to-r from-[#0066CC]/5 to-[#D4AF37]/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 justify-center">
            <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="text-lg font-semibold text-gray-700">
              Showing {filteredFairs.length} {filteredFairs.length === 1 ? 'Event' : 'Events'}
            </span>
          </div>
        </div>
      </section>
      
      {/* Trade Fairs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {filteredFairs.length === 0 ? (
            <div className="text-center py-20">
              <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xl text-gray-500">No trade fairs found matching your criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFairs.map((fair, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={fair.image} 
                      alt={fair.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-[#0066CC] px-4 py-1.5 rounded-full text-sm font-bold">
                        {fair.category}
                      </span>
                    </div>

                    {/* Featured Badge */}
                    {fair.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-[#0066CC] transition-colors">
                      {fair.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2 text-[#0066CC]">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-semibold">{fair.date}</span>
                      </div>
                      
                      <div className="flex items-start gap-2 text-gray-600">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm leading-relaxed">{fair.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {fair.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    
                      <Link
                        to="/contact"
                        className="bg-gradient-to-r from-[#D4AF37] to-[#C9A634] text-white px-6 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all font-semibold flex items-center gap-2"
                      >
                        Book Now
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-[#1A2B4A] to-[#0066CC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Book With Us?
            </h2>
            <p className="text-xl text-gray-200">
              Complete trade fair travel solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: "Best Service",
                description: "Quality packages with no hidden fees"
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
                title: "Visa Assistance",
                description: "Complete visa support and documentation help"
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                ),
                title: "Hotel Bookings",
                description: "Premium accommodation near exhibition centers"
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                ),
                title: "24/7 Support",
                description: "Round-the-clock assistance during your trip"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-200 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-3xl p-12 shadow-xl text-center border border-blue-100">
            <div className="w-20 h-20 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Ready to Book Your Trade Fair Package?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact us for customized packages including flights, hotels, visa assistance, and exhibition registration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#D4AF37] to-[#C9A634] text-white px-10 py-4 rounded-xl hover:shadow-lg transition-all font-bold text-lg transform hover:scale-105 flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </button>
              <button className="bg-white border-2 border-[#0066CC] text-[#0066CC] px-10 py-4 rounded-xl hover:bg-[#0066CC] hover:text-white transition-all font-bold text-lg transform hover:scale-105 flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

     
    </div>
     <Footer />
    </>
  );
}