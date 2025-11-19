import type { Route } from "./+types/home";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import WhatsAppButton from "~/components/WhatsAppButton";
import { Link } from "react-router";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, lazy, Suspense } from "react";
import { CardSkeleton } from "~/components/LoadingSkeleton";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Leisure N More - Your Travel Partner" },
    { name: "description", content: "Book your dream holiday with Leisure N More. Best tour packages for India and International destinations." },
  ];
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
    { name: "Sachin Ved", location: "Bali Tour", text: "The tour was well planned and organised. Food and accommodation was very good and had no complaints.", rating: 5 },
    { name: "Manjunath Baddi", location: "Canton Fair 2025", text: "Recently we had been to canton fair 2025 phase 1 🔥 we would like to thank each one", rating: 5 },
    { name: "KARAN P", location: "Canton Fair 2025", text: "I booked canton fair business trip april 2025 with Mr. Anuj and Mr. ashwini, the management was good. Hotel and food was up to the mark", rating: 5 },
    { name: "Tej Prakash", location: "", text: "I had an amazing experience with Leisure N More Travel Services! Their team is incredibly professional, friendly, and efficient.", rating: 5 },
    { name: "Qin Wang", location: "", text: "I had a wonderful trip to north India for 11 days organized by Anuj. he was very helpful, always with quick response, especially in unexpected", rating: 5 },
    { name: "Philomena Princy", location: "Manali", text: "We booked our family Trip to Manali through leisure N More travel services. Mr Ashwin was very responsive to all our needs and queries.", rating: 5 },
    { name: "Jenifer Mercy", location: "Manali", text: "Great service provided by Leisure n More. Kudos to Mr.Ashwin who accompanied us during our trip to Manali he made sure all our needs are", rating: 5 },
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % internationalDestinations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + internationalDestinations.length) % internationalDestinations.length);
  };

  const holidayPackages = [
    { title: "Honeymoon Package", duration: "4N / 5D" },
    { title: "Family Package", duration: "3N / 4D" },
    { title: "Weekend Package", duration: "2N / 3D" },
    { title: "Group Package", duration: "4N / 5D" },
  ];

  const tradeFairs = [
    { title: "Canton Fair 2025", description: "The 138th Canton Fair is going to be held from 14 - 19 Oct 2025 at China Import & Export Fair Pazhou Complex,Guangzhou..." },
    { title: "ProPak China 2019", description: "ProPak China 2019, will take place in a new venue, National Exhibition and Convention Center, from 19 to 21 June, 2019...." },
    { title: "Wire and cable 2019", description: "Wire and Cable taking place in Guangzhou is the largest technical fair dealing with wiring and cabling in South China and...." },
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
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A2B4A]/80 via-[#1A2B4A]/60 to-[#1A2B4A]/40" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto py-20 sm:py-24 md:py-32">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fadeInScale">
            Your Journey Begins Here
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F5F1E8] mb-4 sm:mb-6 animate-fadeUp px-2">
            Crafting Unforgettable Experiences Across the Globe
          </p>
          <p className="text-[#D4AF37] text-xs sm:text-sm md:text-base mb-6 sm:mb-8 animate-fadeIn flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-2">
            <span className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
              ✨ Trusted by 1000+ Happy Travelers
            </span>
            <span className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">🌍 50+ Destinations</span>
            <span className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">⭐ 4.9/5 Rating</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fadeUp px-2">
            <Link
              to="#destinations"
              className="bg-gradient-to-r from-[#D4AF37] to-[#C9A634] text-white rounded-full px-6 py-3 sm:px-8 sm:py-4 md:px-8 md:py-6 text-sm sm:text-base md:text-lg font-semibold hover:scale-105 active:scale-95 transition-transform shadow-xl inline-block text-center touch-manipulation"
            >
              Explore Destinations
            </Link>
            <Link
              to="/contact"
              className="rounded-full px-6 py-3 sm:px-8 sm:py-4 md:px-8 md:py-6 text-sm sm:text-base md:text-lg font-semibold bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[#1A2B4A] active:bg-white/20 transition-all inline-block text-center touch-manipulation"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* International Destinations - Marquee Slider */}
      <section id="destinations" className="py-6 sm:py-8 md:py-12 lg:py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-gray-800 px-2">
            International Destinations
          </h2>
        
          {/* Marquee Container */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
            <div 
              className="absolute inset-0 transition-all duration-1000 ease-in-out"
              style={{
                backgroundImage: `url(${internationalDestinations[currentSlide].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-12 text-white z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
                {internationalDestinations[currentSlide].name}
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-3 md:mb-4 text-gray-200 line-clamp-2">
                {internationalDestinations[currentSlide].route}
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#D4AF37] mb-3 sm:mb-4 md:mb-6">
                Starting from {internationalDestinations[currentSlide].price}
              </p>
              <Link
                to={`/packages/${internationalDestinations[currentSlide].name.toLowerCase().replace(/\s+/g, '-')}-tour-packages`}
                className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#C9A634] text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold hover:scale-105 active:scale-95 transition-transform text-xs sm:text-sm md:text-base w-fit touch-manipulation"
              >
                Explore Package
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
              {internationalDestinations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 w-1.5 sm:h-2 sm:w-2 md:h-3 md:w-3 rounded-full transition-all touch-manipulation ${
                    index === currentSlide ? 'bg-[#D4AF37] w-5 sm:w-6 md:w-8' : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
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
                    <span className="bg-blue-100 text-blue-800 text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded">Transfers</span>
                    <span className="bg-blue-100 text-blue-800 text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded">Visa</span>
                  </div>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mb-1">starting from</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-3 sm:mb-3 md:mb-4">{pkg.price}</p>
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
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-gray-800 px-2">
            A Holiday For Every Mood
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {holidayPackages.map((pkg) => (
              <div
                key={pkg.title}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-800">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.duration}</p>
                <p className="text-gray-600 mb-6">
                  If you want a great travel experience, Leisure n more gives you the best travelling experience with lots of joy
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  contact us
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Fair */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-gray-800 px-2">Trade Fair</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {tradeFairs.map((fair) => (
              <div
                key={fair.title}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">{fair.title}</h3>
                <p className="text-gray-600 mb-4">{fair.description}</p>
                <Link
                  to="/trade-fair"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  book now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
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
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-1">{pkg.price}</p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{pkg.minPax}</p>
                  <Link
                    to="/contact"
                    className="block w-full bg-blue-600 text-white text-center py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors text-xs sm:text-sm font-semibold touch-manipulation"
                  >
                    starting from
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
