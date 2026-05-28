import { useState } from "react";
import { Link } from "react-router";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import FloatingEnquiryWidget from "~/components/FloatingEnquiryWidget";
import TripEnquiryForm from "~/components/TripEnquiryForm";
import { Calendar, MapPin, Check, ChevronDown, ChevronUp, Shield, Clock, Award, Users, ArrowRight, HelpCircle } from "lucide-react";
import { generateSEOTags } from "~/config/seo";
import { CONFIG } from "~/config/constants";

export function meta() {
  return generateSEOTags({
    title: "CPHI Milan 2026 Tour Packages from India | Flexi Global Holidays",
    description: "Book premium travel packages for CPHI Milan 2026. Custom business trips with Schengen visa assistance, luxury hotels, Duomo tours, and transfers.",
    keywords: "CPHI Milan 2026, CPHI India packages, CPHI exhibition travel, pharma tour packages, Milan business travel, Flexi Global Holidays",
    url: "/cphi-package-tour-from-india",
    type: "website"
  });
}

export default function CphiPackageTourFromIndia() {
  const [activeTab, setActiveTab] = useState<"details" | "itinerary" | "visa" | "booking">("details");
  const [openDay, setOpenDay] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleDay = (dayIndex: number) => {
    setOpenDay(openDay === dayIndex ? null : dayIndex);
  };

  const toggleFaq = (faqIndex: number) => {
    setOpenFaq(openFaq === faqIndex ? null : faqIndex);
  };

  const inclusions = [
    "Accommodation on Twin Sharing or Single Occupancy",
    "Daily Buffet breakfast",
    "Return Airport – Hotel – Airport transfers (as per group flight)",
    "Fairground transfers as per itinerary",
    "Indian Dinners in the comfort of hotel + 1 Networking night",
    "Milan City tour with Duomo shopping drop",
    "Daily 2 (500 ml) water bottles per person",
    "Schengen Visa support",
    "Overseas Travelers Mediclaim Policy till age 60 years",
    "Services of an Experienced Flexi Global Holidays Tour Leader"
  ];

  const exclusions = [
    "Airfare (International Flights)",
    "Entrances to the fairground/exhibition halls",
    "Lunches during exhibition days",
    "Laundry Porterage, excess baggage & expenses of personal nature",
    "All Items Specified in 'Extras' & any other items not mentioned in Inclusions."
  ];

  const itinerary = [
    {
      day: "DAY 1",
      date: "05 October - Monday",
      bullets: ["Arrive in Milan International Airport", "Meet and greet by your tour coordinator", "Private transfer to hotel for check-in", "Evening at leisure / welcome dinner"]
    },
    {
      day: "DAY 2",
      date: "06 October - Tuesday",
      bullets: ["Daily Buffet breakfast at hotel", "Morning transfer to Fiera Milano exhibition center", "Full day attending CPHI Milan 2026 exhibition", "Evening transfer back to hotel & Indian dinner"]
    },
    {
      day: "DAY 3",
      date: "07 October - Wednesday",
      bullets: ["Daily Buffet breakfast at hotel", "Morning transfer to Fiera Milano exhibition center", "Full day attending CPHI Milan 2026 exhibition", "Special 1-night business networking dinner"]
    },
    {
      day: "DAY 4",
      date: "08 October - Thursday",
      bullets: ["Daily Buffet breakfast at hotel", "Morning transfer to Fiera Milano exhibition center", "CPHI Milan 2026 exhibition meetings", "Afternoon Milan City tour with Duomo shopping drop", "Indian dinner at local restaurant"]
    },
    {
      day: "DAY 5",
      date: "09 October - Friday",
      bullets: ["Daily Buffet breakfast at hotel", "Morning check-out from hotel", "Private airport transfer", "Depart back to India"]
    }
  ];

  const faqs = [
    {
      question: "Do you offer CPHI Milan packages from all major Indian cities?",
      answer: "Yes, we coordinate flights, group departures, and travel support from all primary Indian hubs including Mumbai, Delhi, Bengaluru, Chennai, Hyderabad, and Ahmedabad."
    },
    {
      question: "Can you recommend hotels near Fiera Milano?",
      answer: "Yes. We curate a selection of hand-picked business-class hotels near metro lines and transport hubs connecting directly to Fiera Milano."
    },
    {
      question: "Is the package only for exhibitors?",
      answer: "No, our packages are fully customized for visitors, procurement executives, trade delegates, buyers, and exhibitor teams."
    },
    {
      question: "Can you add an Italy visa support service?",
      answer: "Yes, complete Schengen visa guidance, documentation checklists, VFS appointments, and travel insurance support are included."
    },
    {
      question: "Do you include airport transfers in Milan?",
      answer: "Yes, private and coordinated airport transfers are fully integrated into our package plans for your convenience."
    },
    {
      question: "Can we extend our tour to Switzerland or other European destinations?",
      answer: "Absolutely. We specialize in post-exhibition extensions across Switzerland, France, Germany, and other Schengen countries."
    },
    {
      question: "How many nights do you recommend in Milan for CPHI?",
      answer: "We recommend a minimum of 5 nights: 1 arrival recovery day, 3 full exhibition days, and 1 departure day."
    },
    {
      question: "Can you plan for group travel from multiple Indian cities?",
      answer: "Yes. We align different departures into one managed itinerary plan."
    },
    {
      question: "Will prices go up closer to the event?",
      answer: "Yes. Due to high global demand during CPHI exhibition weeks, flight and hotel prices in Milan escalate significantly closer to October."
    },
    {
      question: "How do we request a customized proposal?",
      answer: "Simply submit the enquiry form on this page with your team size, travel dates, and requirements, and our MICE experts will reach out to you within 24 hours."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-900 font-sans">
      <Navigation />

      {/* PREMIUM HERO BANNER SECTION */}
      <section 
        className="relative pt-36 pb-16 sm:pt-40 md:pt-48 md:pb-24 overflow-hidden text-white"
        style={{ backgroundColor: "#1A2B4A" }}
      >
        {/* Background Image with Dark Blue Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80')" }}
        />
        <div 
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(26, 43, 74, 0.95), rgba(26, 43, 74, 0.85))" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="mb-4 text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37] animate-hero-fadeIn">
            EXCLUSIVE TOUR PACKAGES FROM INDIA
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            CPHI Milan 2026
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed font-light">
            Explore <strong className="font-bold text-white">CPHI Milan 2026</strong>, Europe's leading pharmaceutical exhibition in Italy. It brings together global pharma leaders showcasing APIs, excipients, finished formulations, contract manufacturing, and packaging innovations.
          </p>

          {/* Details floating panel */}
          <div className="mt-8 inline-block bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 border border-white/20 text-left shadow-2xl max-w-md mx-auto w-full">
            <div className="flex items-center gap-4 mb-4 text-slate-100">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-black">Event Dates</p>
                <p className="text-xs sm:text-sm font-bold">6 – 8 October, 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-100">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-black">Fairground Venue</p>
                <p className="text-xs sm:text-sm font-bold">Fiera Milano, Milan, Italy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN TWO-COLUMN CONTENT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* LEFT COLUMN: TABS & CORE INFO */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Tabs Navigation Bar */}
            <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-3">
              {[
                { id: "details", label: "Package Details" },
                { id: "itinerary", label: "Package Itinerary" },
                { id: "visa", label: "Visa Information" },
                { id: "booking", label: "Booking Confirmation" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-[#D4AF37] text-[#1a2b4a] shadow-lg scale-[1.02]"
                      : "bg-white text-gray-700 hover:text-[#D4AF37] border border-gray-200/80 hover:border-[#D4AF37]/50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Contents Card */}
            <div className="bg-white rounded-[32px] p-6 sm:p-10 shadow-md ring-1 ring-black/5 min-h-[300px]">
              
              {/* Tab: Package Details */}
              {activeTab === "details" && (
                <div className="space-y-10 animate-fadeIn">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-6">
                      <span className="h-6 w-1 bg-[#D4AF37] rounded-full" />
                      Package Inclusions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {inclusions.map((inc, i) => (
                        <div key={i} className="flex gap-3 items-start text-sm text-gray-700 leading-relaxed p-3 rounded-2xl bg-blue-50/30 border border-blue-100/30 hover:border-[#D4AF37]/30 transition-all">
                          <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-6">
                      <span className="h-6 w-1 bg-gray-400 rounded-full" />
                      Package Exclusions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {exclusions.map((exc, i) => (
                        <div key={i} className="flex gap-3 items-start text-sm text-gray-700 leading-relaxed p-3 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all">
                          <span className="text-gray-400 font-bold shrink-0 mt-0.5">✕</span>
                          <span>{exc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Itinerary */}
              {activeTab === "itinerary" && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-6">
                    <span className="h-6 w-1 bg-[#D4AF37] rounded-full" />
                    CPHI Milan Exhibition Itinerary
                  </h2>
                  
                  <div className="space-y-4">
                    {itinerary.map((day, index) => {
                      const isOpen = openDay === index;
                      return (
                        <div 
                          key={index} 
                          className="border border-gray-100 rounded-3xl overflow-hidden bg-gray-50/50 hover:bg-gray-50 transition-all"
                        >
                          <button
                            onClick={() => toggleDay(index)}
                            className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-800 hover:text-[#1a2b4a]"
                          >
                            <span className="flex items-center gap-4">
                              <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-black tracking-wide">
                                {day.day}
                              </span>
                              <span className="text-sm sm:text-base font-semibold">{day.date}</span>
                            </span>
                            {isOpen ? (
                              <ChevronUp size={20} className="text-[#D4AF37]" />
                            ) : (
                              <ChevronDown size={20} className="text-gray-500" />
                            )}
                          </button>

                          {isOpen && (
                            <div className="p-6 bg-white border-t border-gray-100 space-y-3.5 animate-slideDown">
                              {day.bullets.map((bullet, bIdx) => (
                                <div key={bIdx} className="flex items-start gap-3 text-sm text-gray-600 pl-4 relative">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] absolute left-0 mt-2" />
                                  <span>{bullet}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Tab: Visa */}
              {activeTab === "visa" && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                    <span className="h-6 w-1 bg-[#D4AF37] rounded-full" />
                    Schengen Visa Assistance
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Flexi Global Holidays provides end-to-end guidance and documentation support for obtaining your Schengen Visa to attend CPHI Milan 2026.
                  </p>
                  
                  <div className="bg-[#fffaf0] rounded-[24px] p-6 border border-[#D4AF37]/20 space-y-4">
                    <h3 className="font-bold text-base text-gray-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      Required Documents Checklist:
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-600 pl-2">
                      <li className="flex items-center gap-2">✓ Valid Indian Passport (6 months validity)</li>
                      <li className="flex items-center gap-2">✓ CPHI Milan Official Invitation</li>
                      <li className="flex items-center gap-2">✓ Official Company NOC / Covering Letter</li>
                      <li className="flex items-center gap-2">✓ Personal & Company ITR for last 3 years</li>
                      <li className="flex items-center gap-2">✓ Bank statements (last 6 months)</li>
                      <li className="flex items-center gap-2">✓ Travel Mediclaim Insurance Policy</li>
                    </ul>
                  </div>

                  <div className="flex gap-3 items-start text-xs sm:text-sm text-amber-800 bg-amber-50 border border-amber-200/50 rounded-2xl p-4">
                    <Shield className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>
                      <strong>Important Notice:</strong> We strongly advise initiating the visa application at least 90 days before travel to ensure booking slots are secured timely at VFS Global centers.
                    </span>
                  </div>
                </div>
              )}

              {/* Tab: Booking */}
              {activeTab === "booking" && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                    <span className="h-6 w-1 bg-[#D4AF37] rounded-full" />
                    Booking & Payment Policy
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Secure delegate spots early to lock in flight routes and preferred accommodations near the Fiera Milano district.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 text-center">
                      <p className="text-xs text-gray-500 uppercase font-black tracking-wider">Initial Booking Deposit</p>
                      <p className="text-3xl font-extrabold text-[#1a2b4a] mt-2">₹50,000 /-</p>
                      <p className="text-xs text-gray-500 mt-1">Per delegate to block room & visa slots</p>
                    </div>
                  
                  </div>

                  <div className="border-t pt-5 space-y-2 text-xs text-gray-500">
                    <p>• Cancellation charges apply as per airline and hotel policies during trade exhibition weeks.</p>
                    <p>• Online payments can be processed securely via Credit Cards, Bank Wire Transfers, or UPI gateways.</p>
                  </div>
                </div>
              )}

            </div>

            {/* TRUST & WHY CHOOSE US SECTIONS */}
            <div className="space-y-8 bg-white rounded-[32px] p-6 sm:p-10 shadow-md ring-1 ring-black/5">
              
              {/* Why Choose Us */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Decades of trusted industry expertise",
                    "Personalized service tailored to your business needs",
                    "Reliable, efficient, and professional support",
                    "A commitment to making your trade fair experience exceptional"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start text-sm sm:text-base text-gray-700 font-medium">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#D4AF37] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dear Valued Client letter */}
              <div className="border-t pt-8 space-y-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                <h3 className="text-2xl font-bold text-gray-900">Dear Valued Client,</h3>
                <p className="italic">
                  We are excited to introduce <strong className="text-[#1a2b4a] not-italic">Flexi Global Holidays</strong>, your dedicated partner in trade fair travel solutions. Built on decades of mastery in logistics and event management, we transform the complexities of trade fair travel into effortless, tailor-made experiences.
                </p>
                <p className="italic">
                  At <strong className="text-[#1a2b4a] not-italic">Flexi Global Holidays</strong>, our philosophy is simple: Travel Made Personal. Whether you're traveling alone or with a team, we provide comprehensive support—from logistics and accommodation to on-ground assistance—so you can focus on what matters most: your business.
                </p>
                <p className="italic">
                  We look forward to helping you make your next trade fair experience successful and stress-free. Please do not hesitate to reach out for customized travel solutions or any assistance you may require.
                </p>
                <p className="font-bold text-[#1a2b4a] pt-2">— The Flexi Global Holidays Team</p>
              </div>
            </div>

            {/* FREQUENTLY ASKED QUESTIONS SECTION */}
            <div className="space-y-6 bg-white rounded-[32px] p-6 sm:p-10 shadow-md ring-1 ring-black/5">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <HelpCircle className="w-7 h-7 text-[#D4AF37]" />
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div 
                      key={index} 
                      className="border border-gray-100 rounded-3xl overflow-hidden bg-gray-50/40 hover:bg-gray-50 transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 hover:text-[#1a2b4a]"
                      >
                        <span className="text-sm sm:text-base font-semibold">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp size={20} className="text-[#D4AF37]" />
                        ) : (
                          <ChevronDown size={20} className="text-gray-400" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="p-6 bg-white border-t border-gray-100 text-sm text-gray-600 leading-relaxed animate-slideDown">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: SIDEBAR FEATS, QUICK FORM & RELATED LINKS */}
          <div className="space-y-8">
            
            {/* Why Exhibitors Choose Flexi Global Holidays */}
            <div className="bg-white rounded-[28px] p-6 shadow-sm ring-1 ring-black/5">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 flex items-center gap-2">
                <span className="h-5 w-1 bg-[#D4AF37] rounded-full" />
                Why Exhibitors Choose Us?
              </h2>
              <ul className="space-y-3">
                {[
                  "Seamless Trade Fair Participation",
                  "Tailored Exhibitor Packages",
                  "Prime Networking Opportunities",
                  "End-to-End Travel & Logistics",
                  "Marketing & Visibility Support",
                  "On-Site Assistance",
                  "Proven Expertise in MICE & Trade Fairs"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5 items-start text-xs text-gray-700 font-semibold">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Enquiry Sticky Card */}
            <div className="bg-white rounded-[28px] p-6 shadow-lg border border-gray-150 relative overflow-hidden sticky top-24">
              {/* Gold top accent line */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-[#D4AF37]" />
              
              <div className="mb-4">
                <span className="text-[10px] font-black uppercase bg-[#D4AF37]/10 text-[#D4AF37] px-2.5 py-1 rounded-full">
                  Contact Expert
                </span>
                <h3 className="text-lg font-bold text-gray-950 mt-2">Enquire Now</h3>
                <p className="text-xs text-gray-500">Get a custom quote within 24 business hours.</p>
              </div>

              {/* Renders the modernized form */}
              <TripEnquiryForm compact />
            </div>

            {/* Related CPHI Pages */}
            <div className="bg-white rounded-[28px] p-6 shadow-sm ring-1 ring-black/5">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="h-5 w-1 bg-[#D4AF37] rounded-full" />
                Related CPHI Pages
              </h2>
              <div className="space-y-3">
                {[
                  { title: "CPHI Milan 2026 Home", slug: "/cphi-tour-packages" },
                  { title: "CPHI 2026 Travel Planning", slug: "/cphi-2026" },
                  { title: "CPHI Milan Tour Packages", slug: "/cphi-milan-tour-packages" }
                ].map((item) => (
                  <Link 
                    key={item.slug} 
                    to={item.slug} 
                    className="flex justify-between items-center rounded-2xl border border-gray-100 p-4 text-sm font-semibold text-gray-800 hover:text-[#1a2b4a] hover:border-[#D4AF37] transition-all bg-gray-50/50 hover:bg-white"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Supporting Guides */}
            <div className="bg-white rounded-[28px] p-6 shadow-sm ring-1 ring-black/5">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="h-5 w-1 bg-[#D4AF37] rounded-full" />
                Supporting Guides
              </h2>
              <div className="space-y-3">
                {[
                  { title: "CPHI Milan Travel Cost Guide", slug: "/guides/cphi-milan-travel-cost-from-india" },
                  { title: "CPHI Italy Packages Info", slug: "/guides/cphi-exhibition-italy-packages" },
                  { title: "Best Hotels Near Fiera Milano", slug: "/guides/pharma-expo-milan-hotels" },
                  { title: "Business Visa for Italy Guide", slug: "/guides/business-visa-for-italy-from-india" },
                  { title: "CPHI Milan Transfer Guide", slug: "/guides/cphi-milan-airport-transfer-guide" }
                ].map((item) => (
                  <Link 
                    key={item.slug} 
                    to={item.slug} 
                    className="flex justify-between items-center rounded-2xl border border-gray-100 p-4 text-xs sm:text-sm font-semibold text-gray-800 hover:text-[#1a2b4a] hover:border-[#D4AF37] transition-all bg-gray-50/50 hover:bg-white"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
      
      {/* Floating Call / WhatsApp / Enquiry Widget */}
      <FloatingEnquiryWidget />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}