import type { Route } from "./+types/about";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import { Link } from "react-router";
import owner1 from "~/assets/owner (1).png";
import owner2 from "~/assets/owner (2).png";
import logo from "~/assets/logo.png";
import { generateSEOTags } from "~/config/seo";

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
// Gallery images
import gallery1_1 from "~/assets/gallery1 (1).png";
import gallery1_2 from "~/assets/gallery1 (2).png";
import gallery1_3 from "~/assets/gallery1 (3).png";
import gallery1_4 from "~/assets/gallery1 (4).png";
import gallery1_5 from "~/assets/gallery1 (5).png";
import gallery1_6 from "~/assets/gallery1 (6).png";
import gallery1_7 from "~/assets/gallery1 (7).png";
import gallery1_8 from "~/assets/gallery1 (8).png";
import f1 from "~/assets/f1.jpg";
import f2 from "~/assets/f2.jpg";
import f3 from "~/assets/f3.jpg";
import f4 from "~/assets/f4.jpg";
import f5 from "~/assets/f5.jpg";
import f6 from "~/assets/f6.jpg";
import f7 from "~/assets/f7.jpg";
import f8 from "~/assets/f8.jpg";
import f9 from "~/assets/f9.jpg";
import f11 from "~/assets/f11.jpg";
import f12 from "~/assets/f12.jpg";
import f14 from "~/assets/f14.jpg";
export function meta({}: Route.MetaArgs) {
  return generateSEOTags({
    title: "About Us - Flexi Global Holidays | Leading Travel Agency Since 2016",
    description: "Learn about Flexi Global Holidays - a premium travel agency based in Indore, India. Founded in 2016, we specialize in domestic and international tour packages, hotel bookings, visa services, and MICE solutions. Trusted by 1000+ travelers with 4.9/5 rating.",
    keywords: "about Flexi Global Holidays, travel agency Indore, travel company India, best travel agency, tour operator, travel services, travel agency since 2016, trusted travel agency",
    url: "/about",
    type: "website"
  });
}

export default function About() {
  const galleryImages = [
    // { src: gallery1_1, name: "Gallery 1" },
    // { src: gallery1_2, name: "Gallery 2" },
    // { src: gallery1_3, name: "Gallery 3" },
    // { src: gallery1_4, name: "Gallery 4" },
    // { src: gallery1_5, name: "Gallery 5" },
    // { src: gallery1_6, name: "Gallery 6" },
    // { src: gallery1_7, name: "Gallery 7" },
    // { src: gallery1_8, name: "Gallery 8" },
    { src: f1, name: "Gallery 9" },
    { src: f2, name: "Gallery 10" },
    { src: f3, name: "Gallery 11" },
    { src: f4, name: "Gallery 12" },
    { src: f5, name: "Gallery 13" },
    { src: f6, name: "Gallery 14" },
    { src: f7, name: "Gallery 15" },
    { src: f8, name: "Gallery 16" },
    { src: f9, name: "Gallery 17" },
    { src: f11, name: "Gallery 19" },
    { src: f12, name: "Gallery 20" },  
    { src: f14, name: "Gallery 22" },
  ];
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="About Flexi Global Holidays"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B4A]/80 to-[#1A2B4A]/50 flex items-center justify-center">
          <div className="text-center sm:px-6">
            <h1 className="text-2xl sm:text-4xl md:text-5xl text-center lg:text-6xl font-bold text-white">About Flexi Global Holidays</h1>
          </div>
        </div>
      </section>

      {/* 1. Company Introduction */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Logo Image */}
            <div className="w-full">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={logo}
                  alt="Flexi Global Holidays"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">Welcome to Flexi Global Holidays</h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-base sm:text-lg leading-relaxed">
                  At Flexi Global Holidays, we believe travel is more than just reaching a destination — it's about creating unforgettable experiences. As a trusted travel partner, we specialize in curating tailor-made journeys for individuals, families, and corporate groups.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  With expertise in both domestic and international travel, we provide complete end-to-end solutions. What sets us apart is our commitment to personalized service, transparency, and hassle-free planning. Backed by years of industry experience and a strong team, we ensure every trip is seamless — from the moment you book with us until you return home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-800">
            Vision & Mission
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Images */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
              <div className="absolute top-0 left-0 w-4/5 sm:w-3/4 h-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10">
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
                  alt="Global Travel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-4/5 sm:w-3/4 h-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                  alt="Adventure Travel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1A2B4A] rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
                    <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                      At Flexi Global Holidays, our mission is to create unforgettable travel experiences that go beyond destinations. We focus on delivering personalized, seamless, and comfortable journeys that help travelers explore the world with ease, joy, and lasting memories.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1A2B4A] rounded-full flex items-center justify-center">
                    <span className="text-2xl">👁️</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Our Vision</h3>
                    <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                      Our vision is to be a trusted global travel brand known for innovation, excellence, and meaningful experiences. We aim to connect people through travel, promote cultural understanding, and make every journey truly memorable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Services */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-56 sm:h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80"
                  alt="Trade Fair"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">Trade Fair</h3>
                <p className="text-base text-gray-600 leading-relaxed">Explore new horizons and expand your business network with our customized Trade Fair Tour packages crafted for professionals seeking international exposure</p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-56 sm:h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
                  alt="Corporate Travel Solutions"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">Corporate Travel Solutions</h3>
                <p className="text-base text-gray-600 leading-relaxed">Streamlined and efficient corporate travel services tailored to meet the demands of modern businesses.</p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-56 sm:h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
                  alt="Event Management"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">Event Management</h3>
                <p className="text-base text-gray-600 leading-relaxed">From concept to execution, our event management team transforms visions into unforgettable experiences.</p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-56 sm:h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                  alt="Leisure and Family Holidays"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">Leisure and Family Holidays</h3>
                <p className="text-base text-gray-600 leading-relaxed">Explore the world with our carefully curated leisure and family holiday packages to international destinations</p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-56 sm:h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80"
                  alt="Visa Services"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">Visa Services</h3>
                <p className="text-base text-gray-600 leading-relaxed">Hassle-free and efficient visa processing to facilitate your international travel plans.</p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-56 sm:h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
                  alt="Personalized Consultation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">Personalized Consultation</h3>
                <p className="text-base text-gray-600 leading-relaxed">Our dedicated team of travel experts is committed to providing personalized consultation, ensuring your travel experience is exactly as you envision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-800">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#1A2B4A] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">Experienced Specialists</h3>
              <p className="text-base text-gray-600">Years of expertise in travel industry</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#1A2B4A] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✈️</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">Customized Solutions</h3>
              <p className="text-base text-gray-600">Tailored travel plans for every need</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#1A2B4A] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">Competitive Pricing</h3>
              <p className="text-base text-gray-600">Best deals and value for money</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#1A2B4A] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">24/7 Support</h3>
              <p className="text-base text-gray-600">Round-the-clock customer assistance</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#1A2B4A] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">Wide Range</h3>
              <p className="text-base text-gray-600">50+ destinations worldwide</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#1A2B4A] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">Trusted by Thousands</h3>
              <p className="text-base text-gray-600">1000+ satisfied customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Team */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-800">Meet Our Leaders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={owner1}
                  alt="Siddharth Gupta"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:p-8 text-center bg-gradient-to-b from-white to-blue-50">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Siddharth Gupta</h3>
                <p className="text-base sm:text-lg text-[#1A2B4A] font-semibold">Co-Founder</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={owner2}
                  alt="S.Ranjan Mahapatra"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:p-8 text-center bg-gradient-to-b from-white to-blue-50">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">S.Ranjan Mahapatra</h3>
                <p className="text-base sm:text-lg text-[#1A2B4A] font-semibold">Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Gallery */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden relative">
        {/* Subtle decorative elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
          <div className="text-center space-y-3">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">Our Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Click any image to view in full screen</p>
          </div>
        </div>
        
        <div className="relative">
          <div className="flex animate-marquee gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={`first-${index}`}
                onClick={() => openLightbox(index)}
                className="shrink-0 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer relative"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={image.src}
                  alt={image.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                    <p className="text-gray-800 font-semibold">Click to view</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <h3 className="text-white text-lg font-bold drop-shadow-lg">{image.name}</h3>
                </div>
              </div>
            ))}
            {galleryImages.map((image, index) => (
              <div 
                key={`second-${index}`}
                onClick={() => openLightbox(index)}
                className="shrink-0 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer relative"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={image.src}
                  alt={image.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                    <p className="text-gray-800 font-semibold">Click to view</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <h3 className="text-white text-lg font-bold drop-shadow-lg">{image.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-gray-300 transition-colors z-50 bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20"
          >
            <X size={32} />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 sm:left-8 text-white hover:text-gray-300 transition-colors z-50 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 sm:right-8 text-white hover:text-gray-300 transition-colors z-50 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20"
          >
            <ChevronRight size={32} />
          </button>

          {/* Image */}
          <div 
            className="max-w-7xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].name}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-xl sm:text-2xl font-bold">{galleryImages[selectedImage].name}</h3>
              <p className="text-gray-400 mt-2">{selectedImage + 1} / {galleryImages.length}</p>
            </div>
          </div>
        </div>
      )}


      <Footer />

     <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}