import type { Route } from "./+types/about";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import WhatsAppButton from "~/components/WhatsAppButton";
import { Link } from "react-router";
import owner1 from "~/assets/founder.webp";
import owner2 from "~/assets/cofounder.webp";
import logo from "~/assets/logo.jpg";
import { generateSEOTags } from "~/config/seo";

import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Pause, Play, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';

import f1 from "~/assets/f1.webp"; 
import f2 from "~/assets/f2.webp";
import f3 from "~/assets/f3.webp";
import f4 from "~/assets/f4.webp";
import f5 from "~/assets/f5.webp";
import f6 from "~/assets/f6.webp";
import f7 from "~/assets/f7.webp";
import f8 from "~/assets/f8.webp";
import f9 from "~/assets/f9.webp";
import f11 from "~/assets/f11.webp";
import f12 from "~/assets/f12.webp";
import f14 from "~/assets/f14.webp";
import f15 from "~/assets/g1.webp";
import f16 from "~/assets/g2.webp";
import f17 from "~/assets/g3.webp";
import f18 from "~/assets/g4.webp";
import f19 from "~/assets/g5.webp";
import f20 from "~/assets/g6.webp";
import f21 from "~/assets/g7.webp";
import f22 from "~/assets/g8.webp";
import f23 from "~/assets/g9.webp";
import f24 from "~/assets/g10.webp";
import f25 from "~/assets/g11.webp";
import f26 from "~/assets/g12.webp";
import f28 from "~/assets/g13.webp";
import f27 from "~/assets/g14.webp";
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
    { src: f15, name: "Gallery 23" },
    { src: f16, name: "Gallery 24" },
    { src: f17, name: "Gallery 25" },
    { src: f18, name: "Gallery 26" },
    { src: f19, name: "Gallery 27" },
    { src: f20, name: "Gallery 28" },
    { src: f21, name: "Gallery 29" },
    { src: f22, name: "Gallery 30" },
    { src: f23, name: "Gallery 31" },
    { src: f24, name: "Gallery 32" },
    { src: f25, name: "Gallery 33" },
    { src: f26, name: "Gallery 34" },
    { src: f28, name: "Gallery 35" },
    { src: f27, name: "Gallery 36" },
  ];
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const carouselRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const pinchStartDistance = useRef<number>(0);
  const pinchStartZoom = useRef<number>(1);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      // Handle infinite loop - if we go below the middle set, jump to end of second set
      if (newIndex < galleryImages.length) {
        return galleryImages.length * 2 - 1;
      }
      return newIndex;
    });
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev === 0 ? galleryImages.length - 1 : (prev || 0) - 1));
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      // Handle infinite loop - if we go past the second set, jump to start of middle set
      if (newIndex >= galleryImages.length * 2) {
        return galleryImages.length;
      }
      return newIndex;
    });
    if (selectedImage !== null) {
      setSelectedImage((prev) => ((prev || 0) === galleryImages.length - 1 ? 0 : (prev || 0) + 1));
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const goToSlide = (index: number) => {
    // Ensure we're in the middle set for infinite loop
    setCurrentIndex(index + galleryImages.length);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    // Handle pinch zoom in lightbox
    if (selectedImage !== null && e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      pinchStartDistance.current = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );
      pinchStartZoom.current = zoom;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (selectedImage !== null && e.touches.length === 2) {
      // Handle pinch zoom
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );
      const scale = (distance / pinchStartDistance.current) * pinchStartZoom.current;
      setZoom(Math.max(1, Math.min(scale, 3)));
    } else {
      touchEndX.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = () => {
    if (selectedImage === null) {
      // Only handle swipe when not in lightbox
      if (!touchStartX.current || !touchEndX.current) return;
      const distance = touchStartX.current - touchEndX.current;
      const minSwipeDistance = 50;

      if (distance > minSwipeDistance) {
        goToNext();
      } else if (distance < -minSwipeDistance) {
        goToPrevious();
      }
    }
  };

  // Mouse drag for zoomed image
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Zoom functions
  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.5, 1));
    if (zoom <= 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleResetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  // Initialize carousel to middle set for infinite loop
  useEffect(() => {
    setCurrentIndex(galleryImages.length);
  }, [galleryImages.length]);

  // Handle infinite loop reset
  useEffect(() => {
    if (currentIndex >= galleryImages.length * 2) {
      // Reset to middle set without animation
      const timer = setTimeout(() => {
        setCurrentIndex(galleryImages.length);
      }, 50);
      return () => clearTimeout(timer);
    } else if (currentIndex < galleryImages.length) {
      // Reset to middle set without animation
      const timer = setTimeout(() => {
        setCurrentIndex(galleryImages.length + currentIndex);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, galleryImages.length]);

  // Auto-play carousel
  useEffect(() => {
    if (!isPaused && selectedImage === null) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const newIndex = prev + 1;
          if (newIndex >= galleryImages.length * 2) {
            return galleryImages.length;
          }
          return newIndex;
        });
      }, 3000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, galleryImages.length, selectedImage]);

  const togglePause = () => {
    setIsPaused(!isPaused);
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
                <p className="text-base sm:text-lg text-[#1A2B4A] font-semibold">Founder</p>
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
     <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">Our Gallery</h2>
            <p className="text-base text-gray-600">Capturing moments from our journeys</p>
          </div>
        </div>
        
        {/* Marquee Gallery */}
        <div className="relative w-full">
          {/* Marquee Container */}
          <div 
            className="flex gap-4 sm:gap-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              animation: isPaused ? 'none' : 'scroll 60s linear infinite',
            }}
          >
            {/* Triple the images for seamless loop */}
            {[...galleryImages, ...galleryImages, ...galleryImages].map((image, index) => (
              <div
                key={`marquee-${index}`}
                onClick={() => openLightbox(index % galleryImages.length)}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-base sm:text-lg font-bold">{image.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-blue-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
        
        {/* Control Button */}
        <div className="text-center mt-8">
          <button
            onClick={togglePause}
            className="inline-flex items-center gap-2 bg-[#1A2B4A] text-white px-6 py-3 rounded-full hover:bg-[#2A3B5A] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            {isPaused ? (
              <>
                <Play size={20} />
                <span>Play</span>
              </>
            ) : (
              <>
                <Pause size={20} />
                <span>Pause</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* Lightbox Modal with Zoom */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center overflow-hidden"
          onClick={closeLightbox}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 text-white hover:text-gray-300 transition-colors z-50 bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white/20 touch-manipulation"
          >
            <X size={24} className="sm:w-8 sm:h-8" />
          </button>

          {/* Zoom Controls */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 z-50 flex flex-col gap-2 sm:gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleZoomIn();
              }}
              className="bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white/20 text-white transition-colors touch-manipulation"
              aria-label="Zoom in"
            >
              <ZoomIn size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleZoomOut();
              }}
              className="bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white/20 text-white transition-colors touch-manipulation"
              aria-label="Zoom out"
            >
              <ZoomOut size={20} className="sm:w-6 sm:h-6" />
            </button>
            {zoom > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleResetZoom();
                }}
                className="bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white/20 text-white transition-colors touch-manipulation"
                aria-label="Reset zoom"
              >
                <RotateCw size={20} className="sm:w-6 sm:h-6" />
              </button>
            )}
          </div>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-50 bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-3 md:p-4 hover:bg-white/20 touch-manipulation"
          >
            <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-50 bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-3 md:p-4 hover:bg-white/20 touch-manipulation"
          >
            <ChevronRight size={24} className="sm:w-8 sm:h-8" />
          </button>

          {/* Image with Zoom */}
          <div 
            className="w-full h-full flex items-center justify-center p-2 sm:p-4 md:p-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default', touchAction: 'none' }}
          >
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <img
                ref={imageRef}
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].name}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl select-none"
                style={{
                  transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                  transition: isDragging ? 'none' : 'transform 0.3s ease-out',
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
                draggable={false}
              />
            </div>
          </div>

          {/* Image Info */}
          <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 text-center bg-black/50 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3">
            <h3 className="text-white text-sm sm:text-base md:text-lg font-bold">{galleryImages[selectedImage].name}</h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-1">{selectedImage + 1} / {galleryImages.length}</p>
            {zoom > 1 && (
              <p className="text-gray-300 text-xs sm:text-sm mt-1">Zoom: {Math.round(zoom * 100)}%</p>
            )}
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />

     <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-280px * ${galleryImages.length} - ${galleryImages.length * 16}px));
          }
        }
        
        @media (min-width: 640px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-320px * ${galleryImages.length} - ${galleryImages.length * 24}px));
            }
          }
        }
        
        @media (min-width: 768px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-380px * ${galleryImages.length} - ${galleryImages.length * 24}px));
            }
          }
        }
        
        @media (min-width: 1024px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-420px * ${galleryImages.length} - ${galleryImages.length * 24}px));
            }
          }
        }
      `}</style>
    </div>
  );
}