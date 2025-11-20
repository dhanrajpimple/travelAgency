import type { Route } from "./+types/about";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import { Link } from "react-router";
import owner1 from "~/assets/owner (1).png";
import owner2 from "~/assets/owner (2).png";
import logo from "~/assets/logo.jpg";
// Gallery images

import gallery1_1 from "~/assets/gallery1 (1).png";
import gallery1_2 from "~/assets/gallery1 (2).png";
import gallery1_3 from "~/assets/gallery1 (3).png";
import gallery1_4 from "~/assets/gallery1 (4).png";
import gallery1_5 from "~/assets/gallery1 (5).png";
import gallery1_6 from "~/assets/gallery1 (6).png";
import gallery1_7 from "~/assets/gallery1 (7).png";
import gallery1_8 from "~/assets/gallery1 (8).png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us - Flexi Global Holidays" },
    { name: "description", content: "Learn about Flexi Global Holidays travel services." },
  ];
}

export default function About() {
  // All gallery images
  const galleryImages = [

    { src: gallery1_1, name: "Gallery 1" },
    { src: gallery1_2, name: "Gallery 2" },
    { src: gallery1_3, name: "Gallery 3" },
    { src: gallery1_4, name: "Gallery 4" },
    { src: gallery1_5, name: "Gallery 5" },
    { src: gallery1_6, name: "Gallery 6" },
    { src: gallery1_7, name: "Gallery 7" },
    { src: gallery1_8, name: "Gallery 8" }
    
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="About Flexi Global Holidays"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B4A]/80 to-[#1A2B4A]/50 flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center px-4">About Flexi Global Holidays</h1>
        </div>
      </section>
      
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-12 md:mb-16">
            {/* Image Section */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={logo}
                alt="Travel Team"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8 text-gray-700">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-800">Welcome to Flexi Global Holidays</h2>
                <p className="mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
                  At Flexi Global Holidays, we believe travel is more than just reaching a destination — it's about creating unforgettable experiences. As a trusted travel partner, we specialize in curating tailor-made journeys for individuals, families, and corporate groups.
                </p>
                <p className="mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
                  With expertise in both domestic and international travel, we provide complete end-to-end solutions. What sets us apart is our commitment to personalized service, transparency, and hassle-free planning. Backed by years of industry experience and a strong team, we ensure every trip is seamless — from the moment you book with us until you return home.
                </p>
              </div>
            </div>
          </div>

          {/* Services Section with Images */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-gray-800 px-2">OUR SERVICES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 sm:h-48 md:h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80"
                    alt="Trade Fair"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Trade Fair</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">Explore new horizons and expand your business network with our customized Trade Fair Tour packages crafted for professionals seeking international exposure</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 sm:h-48 md:h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
                    alt="Corporate Travel Solutions"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Corporate Travel Solutions</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">Streamlined and efficient corporate travel services tailored to meet the demands of modern businesses.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 sm:h-48 md:h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
                    alt="Event Management"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Event Management</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">From concept to execution, our event management team transforms visions into unforgettable experiences.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 sm:h-48 md:h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                    alt="Leisure and Family Holidays"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Leisure and Family Holidays</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">Explore the world with our carefully curated leisure and family holiday packages to international destinations</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 sm:h-48 md:h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80"
                    alt="Visa Services"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Visa Services</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">Hassle-free and efficient visa processing to facilitate your international travel plans.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 sm:h-48 md:h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
                    alt="Personalized Consultation"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Personalized Consultation</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">Our dedicated team of travel experts is committed to providing personalized consultation, ensuring your travel experience is exactly as you envision.</p>
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
              <div className="bg-blue-50 rounded-lg p-4 sm:p-5 md:p-6 text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">✈️</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-gray-800">Customized Solutions</h3>
                <p className="text-xs sm:text-sm text-gray-600">Tailored travel plans for every need</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 sm:p-5 md:p-6 text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💰</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-gray-800">Competitive Pricing</h3>
                <p className="text-xs sm:text-sm text-gray-600">Best deals and value for money</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 sm:p-5 md:p-6 text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📞</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-gray-800">24/7 Support</h3>
                <p className="text-xs sm:text-sm text-gray-600">Round-the-clock customer assistance</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 sm:p-5 md:p-6 text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌍</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-gray-800">Wide Range</h3>
                <p className="text-xs sm:text-sm text-gray-600">50+ destinations worldwide</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 sm:p-5 md:p-6 text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⭐</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-gray-800">Trusted by Thousands</h3>
                <p className="text-xs sm:text-sm text-gray-600">1000+ satisfied customers</p>
              </div>
            </div>
          </div>

          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-gray-800 px-2">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                <div className="h-64 sm:h-80 overflow-hidden">
                  <img 
                    src={owner1}
                    alt="S.Ranjan Mahapatra"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">Siddharth Gupta</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                <div className="h-64 sm:h-80 overflow-hidden">
                  <img 
                    src={owner2}
                    alt="Siddharth Gupta"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">S.Ranjan Mahapatra</h3>
                </div>
              </div>
            </div>
          </div>


          {/* Vision & Mission Section */}
          <div className="mb-8 sm:mb-12 md:mb-16 bg-gray-50 py-8 sm:py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
                {/* Left Side - Images */}
                <div className="relative flex items-center justify-center lg:justify-start">
                  <div className="relative w-full max-w-md">
                    {/* Top Image - Circular */}
                    <div className="relative z-10 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 mx-auto lg:mx-0 lg:ml-8 mb-4">
                      <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white">
                        <img 
                          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80"
                          alt="Global Travel"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Bottom Image - Circular, Overlapping */}
                    <div className="relative z-0 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 mx-auto lg:mx-0 -mt-20 sm:-mt-24 md:-mt-28 lg:ml-0">
                      <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white">
                        <img 
                          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
                          alt="Adventure Travel"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                

                {/* Right Side - Text Content */}
                <div className="space-y-6 sm:space-y-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-gray-800 px-2">
                    Vision & Mission
                  </h2>
                  
                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                        At Flexi Global Holidays, our mission is to create unforgettable travel experiences that go beyond destinations. We focus on delivering personalized, seamless, and comfortable journeys that help travelers explore the world with ease, joy, and lasting memories.
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                        Our vision is to be a trusted global travel brand known for innovation, excellence, and meaningful experiences. We aim to connect people through travel, promote cultural understanding, and make every journey truly memorable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Owners Section */}
          
          {/* Gallery Marquee Section */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-gray-800 px-2">Our Gallery</h2>
            
            {/* Marquee Container */}
            <div className="relative overflow-hidden bg-gray-50 py-6 sm:py-8">
              <div className="flex animate-marquee gap-4 sm:gap-6">
                {/* First set of images */}
                {galleryImages.map((image, index) => (
                  <div 
                    key={`first-${index}`}
                    className="shrink-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                  >
                    <img 
                      src={image.src}
                      alt={image.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {galleryImages.map((image, index) => (
                  <div 
                    key={`second-${index}`}
                    className="shrink-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                  >
                    <img 
                      src={image.src}
                      alt={image.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Static Grid Gallery (for better mobile experience) */}
           
          </div>

          {/* Contact Section */}
        
        </div>
      </section>

      <Footer />
    </div>
  );
}
