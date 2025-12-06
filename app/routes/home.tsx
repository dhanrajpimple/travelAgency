import type { Route } from "./+types/home";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import WhatsAppButton from "~/components/WhatsAppButton";
import { Link } from "react-router";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, lazy, Suspense } from "react";
import { CardSkeleton } from "~/components/LoadingSkeleton";
import { generateSEOTags } from "~/config/seo";
// Trade Fair Images
import tradefair1 from "~/assets/upcomingtradefair (1).webp";
import tradefair2 from "~/assets/upcomingtradefair (2).webp";
import tradefair3 from "~/assets/upcomingtradefair (3).webp";
import tradefair4 from "~/assets/upcomingtradefair (4).webp";
import tradefair5 from "~/assets/upcomingtradefair (5).webp";
import tradefair6 from "~/assets/upcomingtradefair (6).webp";
import tradefair7 from "~/assets/upcomingtradefair (7).webp";
import tradefair8 from "~/assets/upcomingtradefair (8).webp";
import tradefair9 from "~/assets/upcomingtradefair (9).webp";
import tradefair10 from "~/assets/upcomingtradefair (10).webp";
import tradefair11 from "~/assets/upcomingtradefair (11).webp";
import tradefair12 from "~/assets/upcomingtradefair (12).webp";
import tradefair13 from "~/assets/upcomingtradefair (13).webp";
import tradefair14 from "~/assets/upcomingtradefair (14).webp";
// Client Images
import c1 from "~/assets/brand1.webp";
import c2 from "~/assets/brand2.webp";
import c3_1 from "~/assets/brand3.webp";
import c3_2 from "~/assets/brand4.webp";
import c3_3 from "~/assets/brand5.webp";
import c3_4 from "~/assets/brand6.webp";
import c3_6 from "~/assets/brand7.webp";
import c3_7 from "~/assets/brand8.webp";
import c3_8 from "~/assets/brand9.webp";
// Holiday Package Images
import honeymoonImg from "~/assets/honeymoon.webp";
import familyVacationImg from "~/assets/family-vacation.webp";
import heroBeachImg from "~/assets/hero-beach.webp";
import corporateTravelImg from "~/assets/corporate-travel.webp";

export function meta({}: Route.MetaArgs) {
  return generateSEOTags({
    title: "Flexi Global Holidays - Best Travel Agency | Tour Packages India & International",
    description: "Book your dream holiday with Flexi Global Holidays. Premium travel agency offering best tour packages for India and International destinations including Dubai, Thailand, Singapore, Europe, USA, and more. Hotel bookings, visa services, and MICE solutions.",
    keywords: "travel agency, tour packages, holiday packages, India tours, international tours, Dubai packages, Thailand packages, Singapore packages, Europe tours, USA tours, travel agent Indore, best travel agency, hotel booking, visa services, MICE",
    url: "/",
    type: "website"
  });
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState('');

  const internationalDestinations = [
    { 
      name: "Europe", 
      price: "₹88,490",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80",
      route: "Paris → Rome → Barcelona → Amsterdam"
    },
    { 
      name: "Dubai", 
      price: "₹23,999",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
      route: "Burj Khalifa → Palm Jumeirah → Desert Safari → Dubai Mall"
    },
    { 
      name: "Australia", 
      price: "₹71,000",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
      route: "Sydney → Melbourne → Gold Coast → Great Barrier Reef"
    },
    { 
      name: "Singapore", 
      price: "₹22,900",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80",
      route: "Marina Bay → Sentosa → Universal Studios → Gardens by the Bay"
    },
    { 
      name: "Bali", 
      price: "₹16,490",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=80",
      route: "Ubud → Seminyak → Tanah Lot → Mount Batur"
    },
    { 
      name: "USA", 
      price: "₹63,500",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80",
      route: "New York → Los Angeles → Las Vegas → Grand Canyon"
    },
    { 
      name: "Thailand", 
      price: "₹7,499",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=80",
      route: "Bangkok → Pattaya → Phuket → Phi Phi Islands"
    },
  ];

  const domesticPackages = [
    { 
      name: "Goa Tour Packages", 
      price: "₹5,990/- P.P",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80"
    },
    { 
      name: "Kerala Tour Packages", 
      price: "₹9,999/- P.P",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
    },
    { 
      name: "Kashmir Tour Packages", 
      price: "₹10,999/- P.P",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
    },
  ];

  const testimonials = [
    { name: "Customer", location: "", text: "Absolutely Exceptional Experience! the entire trip was flawlessly organized every detail was thoughtfully planned and perfectly executed. What truly sets this agency apart is their owner Siddharth's professionalism, responsiveness, and personal touch", rating: 5 },
    { name: "Daniyal Chippa", location: "", text: "Wonderful Experience! This travel company made our trip absolutely seamless. From booking flights to hotel arrangements and sightseeing tours, everything was perfectly organized. We didn't have to worry about a single thing. Highly recommended!", rating: 5 },
    { name: "Anikitraj Golkar", location: "", text: "Had a fantastic holiday. Well organised, smooth and exactly what we hoped for. Great service 👍🏻", rating: 5 },
    { name: "Sunny Jain", location: "", text: "Thank You!", rating: 5 },
  ];

  useEffect(() => {
    const timer1 = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % internationalDestinations.length);
    }, 4000);
    
    const timer2 = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, [internationalDestinations.length, testimonials.length]);

 useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % internationalDestinations.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % internationalDestinations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + internationalDestinations.length) % internationalDestinations.length);
  };
  const holidayPackages = [
    { title: "Honeymoon Package", duration: "4N / 5D", image: honeymoonImg },
    { title: "Family Package", duration: "3N / 4D", image: familyVacationImg },
    { title: "Weekend Package", duration: "2N / 3D", image: heroBeachImg },
    { title: "Group Package", duration: "4N / 5D", image: corporateTravelImg },
  ];

  const tradeFairs = [
    { title: "Canton Fair 2025", description: "The 138th Canton Fair is going to be held from 14 - 19 Oct 2025 at China Import & Export Fair Pazhou Complex,Guangzhou..." },
    { title: "ProPak China 2019", description: "ProPak China 2019, will take place in a new venue, National Exhibition and Convention Center, from 19 to 21 June, 2019...." },
    { title: "Wire and cable 2019", description: "Wire and Cable taking place in Guangzhou is the largest technical fair dealing with wiring and cabling in South China and...." },
  ];

  // Upcoming Trade Fair Images
  const upcomingTradeFairImages = [
    tradefair1,
    tradefair2,
    tradefair3,
    tradefair4,
    tradefair5,
    tradefair6,
    tradefair7,
    tradefair8,
    tradefair9,
    tradefair10,
    tradefair11,
    tradefair12,
    tradefair13,
    tradefair14,
  ];

  // Client Images
  const clientImages = [
    c1,
    c2,
    c3_1,
    c3_2,
    c3_3,
    c3_4,
    c3_6,
    c3_7,
    c3_8,
  ];

  const featuredPackages = [
    { 
      name: "Singapore", 
      duration: "03 Nights / 04 Days", 
      price: "₹22,900/-", 
      minPax: "Min 2 pax",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80"
    },
    { 
      name: "Thailand", 
      duration: "03 Nights / 04 Days", 
      price: "₹7,499/-", 
      minPax: "Min 2 pax",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80"
    },
    { 
      name: "Goa", 
      duration: "03 Nights / 04 Days", 
      price: "₹5,990/-", 
      minPax: "Min 2 pax",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80"
    },
    { 
      name: "Europe", 
      duration: "06 Nights / 07 Days", 
      price: "₹72,999/-", 
      minPax: "Min 2 pax",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80"
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <WhatsAppButton />
      
      {/* Hero Section */}
       <section id="home" className="relative h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A2B4A]/85 via-[#1A2B4A]/70 to-[#1A2B4A]/50" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <h1 className="font-display text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-5 leading-tight animate-fadeInScale">
          Your Journey Begins Here
        </h1>
      
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-5 sm:mb-8 text-[#D4AF37] animate-fadeIn">
          <span className="flex items-center gap-1.5 text-xs sm:text-base">
            ✨ 1000+ Travelers
          </span>
          <span className="flex items-center gap-1.5 text-xs sm:text-base">
            🌍 50+ Destinations
          </span>
          <span className="flex items-center gap-1.5 text-xs sm:text-base">
            ⭐ 4.9/5 Rating
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fadeUp max-w-md sm:max-w-none mx-auto">
          <a
            href="#destinations"
            className="bg-gradient-to-r from-[#D4AF37] to-[#C9A634] text-white rounded-full px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold hover:scale-105 active:scale-95 transition-transform shadow-xl"
          >
            Explore Destinations
          </a>
          <a
            href="/contact"
            className="rounded-full px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#1A2B4A] transition-all"
          >
            Get Free Quote
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInScale {
          animation: fadeInScale 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fadeUp {
          animation: fadeUp 1s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>
    </section>

      {/* International Destinations - Marquee Slider */}
      <section id="destinations" className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-800">
          International Destinations
        </h2>
        
        {/* Circular Image Slider */}
        <div className="relative max-w-2xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
            aria-label="Previous destination"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
            aria-label="Next destination"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
          </button>

          {/* Circular Image Container */}
          <div className="flex flex-col items-center justify-center px-8 sm:px-12">
            {/* Circular Image */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mb-6 sm:mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#F4E5A6] to-[#D4AF37] p-1 shadow-2xl">
                <div 
                  className="w-full h-full rounded-full overflow-hidden transition-all duration-700 ease-in-out"
                  style={{
                    backgroundImage: `url(${internationalDestinations[currentSlide].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>
              
              {/* Decorative Ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-dashed border-[#D4AF37]/30 animate-spin-slow"></div>
            </div>

            {/* Content Below Circle */}
            <div className="text-center max-w-md">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-gray-800">
                {internationalDestinations[currentSlide].name}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4">
                {internationalDestinations[currentSlide].route}
              </p>
          
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#C9A634] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:scale-105 active:scale-95 transition-transform text-sm sm:text-base shadow-lg hover:shadow-xl"
              >
                Explore Package
              </Link>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
            {internationalDestinations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 sm:h-2.5 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-[#D4AF37] w-8 sm:w-10' 
                    : 'bg-gray-300 w-2 sm:w-2.5 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>

      {/* Domestic Destinations */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-gray-800 px-2">
            Domestic Destinations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {domesticPackages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-800 line-clamp-2">{pkg.name}</h3>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 mb-3 sm:mb-3 md:mb-4">
                    <span className="bg-blue-100 text-blue-800 text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded">Hotel</span>
                    <span className="bg-blue-100 text-blue-800 text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded">Sightseeing</span>
                    <span className="bg-blue-100 text-blue-800 text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded">Meals</span>
    
                  </div>
                 
                  <Link
                    to={`/packages/${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full bg-blue-600 text-white text-center py-2.5 sm:py-3 md:py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors text-xs sm:text-sm md:text-base font-semibold touch-manipulation"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* Testimonials - Marquee */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-gray-800 px-2">
            See What Our Customers Say About Us
          </h2>
          
          {/* Marquee Container */}
          <div className="relative h-72 sm:h-80 md:h-96 lg:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
            <div className="absolute inset-0">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentTestimonial ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="h-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
                    <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 md:p-8 max-w-3xl w-full mx-2 sm:mx-4">
                      {/* Star Rating */}
                      <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4 justify-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#D4AF37] fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      
                      <p className="text-gray-700 text-center text-sm sm:text-base md:text-lg mb-3 sm:mb-4 italic leading-relaxed px-1">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="text-center">
                        <h4 className="font-bold text-gray-800 text-base sm:text-lg md:text-xl">{testimonial.name}</h4>
                        {testimonial.location && (
                          <p className="text-xs sm:text-sm md:text-base text-[#0066CC] mt-1">- {testimonial.location}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-1.5 w-1.5 sm:h-2 sm:w-2 md:h-3 md:w-3 rounded-full transition-all touch-manipulation ${
                    index === currentTestimonial ? 'bg-[#D4AF37] w-5 sm:w-6 md:w-8' : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* A Holiday For Every Mood */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {featuredPackages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-44 sm:h-48 md:h-52 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">{pkg.duration}</p>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-gray-800">{pkg.name}</h3>
                 
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{pkg.minPax}</p>
                  <Link
                    to="/contact"
                    className="block w-full bg-blue-600 text-white text-center py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors text-xs sm:text-sm font-semibold touch-manipulation"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-gray-800 px-2">
            A Holiday For Every Mood
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {holidayPackages.map((pkg) => (
              <div
                key={pkg.title}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6 text-center">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-gray-800">{pkg.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{pkg.duration}</p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    If you want a great travel experience, Flexi Global Holidays gives you the best travelling experience with lots of joy
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-blue-600 text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors text-xs sm:text-sm font-semibold touch-manipulation"
                  >
                    contact us
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Fair */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
       

          {/* Upcoming Trade Fair Images Gallery */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-gray-800 px-2">Upcoming Trade Fairs</h3>
            
            {/* Static Gallery Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {upcomingTradeFairImages.map((image, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer w-full flex flex-col"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden relative flex items-center justify-center bg-gray-50">
                    <img 
                      src={image}
                      alt={`Upcoming Trade Fair ${index + 1}`}
                      className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-gray-800 px-2">Our Clients</h2>
          
          {/* Static Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {clientImages.map((image, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer w-full flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative flex items-center justify-center bg-gray-50">
                  <img 
                    src={image}
                    alt={`Client ${index + 1}`}
                    className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
     
      <Footer />
    </div>
  );
}
