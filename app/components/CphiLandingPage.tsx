import { Link } from "react-router";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import FloatingEnquiryWidget from "~/components/FloatingEnquiryWidget";
import { CONFIG } from "~/config/constants";
import type { MainSeoPage } from "~/data/cphiSeo";
import { mainSeoPages, supportSeoPages } from "~/data/cphiSeo";
import expoImage from "~/assets/sxpo.webp";
import { Check, X as Close, ArrowRight, Shield, Clock, Award, Users } from "lucide-react";

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

const upcomingTradeFairImages = [
  tradefair1, tradefair2, tradefair3, tradefair4, tradefair5, 
  tradefair6, tradefair7, tradefair8, tradefair9, tradefair10, 
  tradefair11, tradefair12, tradefair13, tradefair14
];

const clientImages = [c1, c2, c3_1, c3_2, c3_3, c3_4, c3_6, c3_7, c3_8];

function CtaCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="my-10 rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-r from-[#1A2B4A] to-[#243B61] p-6 text-white shadow-xl">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-blue-100">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="rounded-full bg-[#D4AF37] px-5 py-3 text-center font-semibold text-[#1A2B4A]">
            Request Quote
          </Link>
          <a
            href={`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I need CPHI travel details.")}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/30 px-5 py-3 text-center font-semibold text-white"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}

export function buildMainPageSchema(page: MainSeoPage) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const tripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: page.title,
    description: page.metaDescription,
    touristType: "Indian business travelers attending pharma exhibitions",
    provider: {
      "@type": "TravelAgency",
      name: "Flexi Global Holidays",
      url: CONFIG.SITE_URL,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${CONFIG.SITE_URL}${page.slug}`,
    },
    itinerary: page.itinerary.map((day, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: day.title,
      description: day.description,
    })),
  };

  const schemas: Record<string, unknown>[] = [faqSchema, tripSchema];

  if (page.slug === "/cphi-2026" || page.slug === "/cphi-milan-tour-packages") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Event",
      name: "CPHI Milan 2026",
      startDate: "2026-10-06",
      endDate: "2026-10-08",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: "Fiera Milano",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Milan",
          addressCountry: "IT",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "CPHI",
        url: "https://www.cphi.com/europe/en/home.html/",
      },
      description:
        "CPHI Milan 2026 is scheduled for 6-8 October 2026 at Fiera Milano, Italy.",
      url: `${CONFIG.SITE_URL}${page.slug}`,
    });
  }

  return schemas;
}

export default function CphiLandingPage({ page }: { page: MainSeoPage }) {
  const relatedPages = supportSeoPages.filter((item) => page.supportSlugs.includes(item.slug));
  const siblings = mainSeoPages.filter((item) => item.slug !== page.slug);
  const isHub = page.slug === "/cphi-tour-packages";

  if (isHub) {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />
        
        {/* Centered Premium Hero */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={expoImage} alt={page.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1A2B4A]/90 via-[#1A2B4A]/80 to-[#1A2B4A]/60" />
          </div>
          
          <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37] animate-hero-fadeIn">
              {page.heroEyebrow}
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight animate-hero-fadeInScale">
              {page.title}
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed animate-hero-fadeUp">
              {page.hookHeadline}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-12 text-[#D4AF37]">
              <span className="flex items-center gap-2 text-sm sm:text-base font-semibold">
                <Users className="w-5 h-5" /> 1000+ Travelers
              </span>
              <span className="flex items-center gap-2 text-sm sm:text-base font-semibold">
                <Shield className="w-5 h-5" /> Visa Success Guarantee
              </span>
              <span className="flex items-center gap-2 text-sm sm:text-base font-semibold">
                <Award className="w-5 h-5" /> 10+ Years Expertise
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-hero-fadeUp">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#D4AF37] to-[#C9A634] text-[#1A2B4A] rounded-full px-8 py-4 text-lg font-bold hover:scale-105 active:scale-95 transition-transform shadow-xl"
              >
                Get Custom Quote
              </Link>
              <a
                href={`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello, I need details for CPHI Milan 2026.`)}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-8 py-4 text-lg font-bold bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#1A2B4A] transition-all"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </section>

        {/* CPHI Specialist Options */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our CPHI Travel Solutions</h2>
              <p className="text-lg text-gray-600">Tailored packages for exhibitors, visitors, and corporate delegations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Exhibition Specialist",
                  desc: "Complete support for exhibitors including booth setup days, baggage planning, and prime venue access.",
                  link: "/cphi-milan-tour-packages",
                  image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
                  tag: "Most Popular"
                },
                {
                  title: "Budget & Planning 2026",
                  desc: "Early-bird roadmap for CPHI 2026 with realistic budget bands and long-term accommodation strategy.",
                  link: "/cphi-2026",
                  image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
                  tag: "Best Value"
                },
                {
                  title: "Corporate Delegation",
                  desc: "Managed group travel from multiple Indian cities with consolidated invoicing and VIP transfers.",
                  link: "/contact",
                  image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
                  tag: "Groups Only"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="h-56 relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#1A2B4A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {item.tag}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{item.desc}</p>
                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-2 font-bold text-[#0066CC] hover:gap-3 transition-all"
                    >
                      View Details <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Pricing & Package Details */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Package Inclusions & Details</h2>
                <p className="text-lg text-gray-600 mb-12">{page.pricingIntro[0]}</p>
                
                <div className="space-y-6">
                  {page.packageInclusions.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-100 hover:border-[#D4AF37]/30 transition-colors">
                      <div className="mt-1 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1A2B4A] rounded-[40px] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-bl-full" />
                <h3 className="text-2xl font-bold mb-8 text-white">Estimated Budget Bands</h3>
                <div className="space-y-8">
                  {page.pricingItems.map((item, i) => (
                    <div key={i} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                      <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-2">{item.label}</p>
                      <p className="text-3xl font-bold text-[#D4AF37] mb-2">{item.value}</p>
                      <p className="text-blue-100/70 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="mt-12 block w-full bg-white text-[#1A2B4A] text-center py-4 rounded-full font-bold text-lg hover:bg-[#D4AF37] transition-colors"
                >
                  Request Final Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trade Fair Gallery (Authority Section) */}
       

        {/* Client Trust Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16 italic">"Trusted by India's leading pharmaceutical companies"</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
              {clientImages.map((img, i) => (
                <div key={i} className="h-16 flex items-center justify-center">
                  <img src={img} alt="Client" className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-gradient-to-r from-[#1A2B4A] to-[#243B61] rounded-[40px] p-12 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl text-white sm:text-4xl font-bold mb-6">Ready to secure your CPHI Milan 2026 travel?</h2>
                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                  Share your team size and preferred dates. We reply with a focused cost range within 24 business hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="bg-[#D4AF37] text-[#1A2B4A] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                    Start Custom Proposal
                  </Link>
                  <a href={`tel:${CONFIG.PHONE_PRIMARY}`} className="bg-white/10 backdrop-blur-sm border border-white/30 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                    Call {CONFIG.PHONE_PRIMARY}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingEnquiryWidget />

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-infinite {
            animation: marquee 40s linear infinite;
          }
          .animate-hero-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
          .animate-hero-fadeInScale {
            animation: fadeInScale 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-hero-fadeUp {
            animation: fadeUp 0.8s ease-out 0.2s forwards;
            opacity: 0;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900">
      <Navigation />
      <main className="pb-20 pt-16">
        <section className="relative overflow-hidden bg-[#0f1f38] text-white">
          <div className="absolute inset-0 opacity-20">
            <img src={expoImage} alt={page.title} className="h-full w-full object-cover" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">{page.heroEyebrow}</p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-white">{page.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">{page.hookHeadline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-[#1A2B4A]">
                  Get Custom Quote
                </Link>
                <a
                  href={`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello, I want details for ${page.keyword}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white"
                >
                  WhatsApp Now
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full bg-white/10 px-4 py-2">Visa success guidance</span>
                <span className="rounded-full bg-white/10 px-4 py-2">10+ years experience</span>
                <span className="rounded-full bg-white/10 px-4 py-2">Business travel specialists</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
          <article className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-10">
            <div className="space-y-6 text-base leading-8 text-gray-700">
              {page.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {page.visitorIndustries.length > 0 && (
              <section className="mt-12">
                <h2 className="text-3xl font-bold text-gray-900">Visitor Industries</h2>
                <p className="mt-4 text-gray-700">At CPHI Milan, visitors typically come from a variety of industries and roles such as:</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {page.visitorIndustries.map((industry) => (
                    <div key={industry} className="flex items-center gap-3 rounded-2xl bg-gray-50 p-4 border border-gray-100">
                      <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />
                      <span className="text-sm font-medium text-gray-900">{industry}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <CtaCard title="Need a quote while rates are still manageable?" description={page.ctaLine} />

            {page.whyChooseUs.length > 0 && (
              <section className="mt-12">
                <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {page.whyChooseUs.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="h-6 w-6 flex-shrink-0 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="mt-12 rounded-3xl bg-blue-50/50 p-8 border border-blue-100/50">
              <h2 className="text-2xl font-bold text-gray-900">{page.dearValuedClient.title}</h2>
              <div className="mt-6 space-y-4 text-base leading-8 text-gray-700 italic">
                {page.dearValuedClient.message.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-6 font-bold text-[#1A2B4A]">— The Flexi Global Holidays Team</p>
            </section>

            <section className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900">Why Indian pharma teams choose this page first</h2>
              <div className="mt-6 space-y-6 text-base leading-8 text-gray-700">
                {page.overview.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            <CtaCard title="Want the itinerary adapted for your company?" description="We can shorten, extend, or redesign the trip around exhibitor setup, buyer meetings, or leadership travel preferences." />

            <section className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900">Event itinerary</h2>
              <div className="mt-8 space-y-6">
                {page.itinerary.map((day, index) => (
                  <div key={day.title} className="rounded-3xl border border-gray-100 bg-gray-50 p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0066CC]">Day {index + 1}</p>
                    <h3 className="mt-2 text-2xl font-bold text-gray-900">{day.title}</h3>
                    <p className="mt-3 text-base leading-8 text-gray-700">{day.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <CtaCard title="Need pricing with and without flights?" description="Ask for two quote formats if your finance team wants to compare full support against land-only options." />

            <section className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900">Package Details</h2>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#fffaf0] p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="h-6 w-1 bg-[#D4AF37] rounded-full" />
                    Package Inclusions
                  </h3>
                  <ul className="space-y-4">
                    {page.packageInclusions.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                        <span className="text-[#D4AF37] mt-1">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="h-6 w-1 bg-gray-400 rounded-full" />
                    Package Exclusions
                  </h3>
                  <ul className="space-y-4">
                    {page.packageExclusions.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                        <span className="text-gray-400 mt-1">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900">Benefits over generic competitors</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {page.benefits.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-gray-100 p-6 hover:border-[#D4AF37]/30 transition-colors">
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
              {page.seamlessParticipation.length > 0 && (
                <div className="mt-8 rounded-3xl bg-[#1A2B4A] p-8 text-white">
                  <h3 className="text-xl font-bold text-white mb-6">Seamless Trade Fair Participation</h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {page.seamlessParticipation.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                        <span className="text-sm font-medium text-blue-100">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-8 space-y-6 text-base leading-8 text-gray-700">
                {page.competitorSection.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            <CtaCard title="Want a fast comparison quote?" description="Send your city, dates, traveller count, and preferred hotel style. We will reply with a practical cost range." />

            <section className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900">Frequently asked questions</h2>
              <div className="mt-8 space-y-4">
                {page.faq.map((item) => (
                  <div key={item.question} className="rounded-3xl border border-gray-100 bg-gray-50 p-6">
                    <h3 className="text-xl font-bold text-gray-900">{item.question}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-700">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>

          <aside className="space-y-6">
            <div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h2 className="text-2xl font-bold text-gray-900">Quick enquiry</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">Get a focused quotation for your pharma exhibition travel in Milan.</p>
              <div className="mt-5 space-y-3 text-sm text-gray-700">
                <p><strong>Phone:</strong> {CONFIG.PHONE_PRIMARY}</p>
                <p><strong>Email:</strong> {CONFIG.EMAIL}</p>
                <p><strong>WhatsApp:</strong> +{CONFIG.WHATSAPP_NUMBER}</p>
              </div>
              <Link to="/contact" className="mt-6 block rounded-full bg-[#D4AF37] px-5 py-3 text-center font-semibold text-[#1A2B4A]">
                Get Quote
              </Link>
            </div>

            <div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h2 className="text-2xl font-bold text-gray-900">Related CPHI pages</h2>
              <div className="mt-4 space-y-3">
                {siblings.map((item) => (
                  <Link key={item.slug} to={item.slug} className="block rounded-2xl border border-gray-100 p-4 text-sm font-semibold text-[#1A2B4A] hover:border-[#D4AF37]">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h2 className="text-2xl font-bold text-gray-900">Supporting guides</h2>
              <div className="mt-4 space-y-3">
                {relatedPages.map((item) => (
                  <Link key={item.slug} to={`/guides/${item.slug}`} className="block rounded-2xl border border-gray-100 p-4 text-sm font-semibold text-[#1A2B4A] hover:border-[#D4AF37]">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
      <FloatingEnquiryWidget />
    </div>
  );
}
