import { Link } from "react-router";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import StickyQuoteButton from "~/components/StickyQuoteButton";
import WhatsAppButton from "~/components/WhatsAppButton";
import { CONFIG } from "~/config/constants";
import type { MainSeoPage } from "~/data/cphiSeo";
import { mainSeoPages, supportSeoPages } from "~/data/cphiSeo";
import expoImage from "~/assets/sxpo.webp";

function CtaCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="my-10 rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-r from-[#1A2B4A] to-[#243B61] p-6 text-white shadow-xl">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-blue-100">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="rounded-full bg-[#D4AF37] px-5 py-3 text-center font-semibold text-[#1A2B4A]">
            Request Quote
          </Link>
          <a
            href={`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I need a CPHI travel package quote.")}`}
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

  if (page.slug === "/cphi-2026") {
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
              <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{page.title}</h1>
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

            <CtaCard title="Need a quote while rates are still manageable?" description={page.ctaLine} />

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
              <h2 className="text-3xl font-bold text-gray-900">Suggested day-by-day itinerary</h2>
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

            <CtaCard title="Need pricing with and without flights?" description="Ask for two quote formats if your finance team wants to compare a full package against land-only support." />

            <section className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900">Pricing guidance</h2>
              <div className="mt-6 space-y-6 text-base leading-8 text-gray-700">
                {page.pricingIntro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {page.pricingItems.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-[#D4AF37]/20 bg-[#fffaf0] p-6">
                    <h3 className="text-xl font-bold text-gray-900">{item.label}</h3>
                    <p className="mt-2 text-lg font-semibold text-[#0066CC]">{item.value}</p>
                    <p className="mt-3 text-sm leading-7 text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900">Benefits over generic competitors</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {page.benefits.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-gray-100 p-6">
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-6 text-base leading-8 text-gray-700">
                {page.competitorSection.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            <CtaCard title="Want a fast comparison quote?" description="Send your city, dates, traveller count, and preferred hotel style. We will reply with a practical package range." />

            <section className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900">Testimonials from business travellers</h2>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {[
                  {
                    name: "Rohan Mehta",
                    company: "API Export Team",
                    quote: "The biggest difference was commute planning. We got more useful meetings because the hotel and transfer setup was sensible.",
                  },
                  {
                    name: "Sonal Shah",
                    company: "Packaging Procurement",
                    quote: "Visa guidance and schedule clarity made approvals much easier inside our company.",
                  },
                  {
                    name: "Ankit Bansal",
                    company: "Pharma Leadership Delegate",
                    quote: "It felt like business travel support, not a holiday package with random extras.",
                  },
                ].map((item) => (
                  <div key={item.name} className="rounded-3xl bg-[#1A2B4A] p-6 text-white">
                    <p className="text-sm leading-7 text-blue-100">"{item.quote}"</p>
                    <p className="mt-5 font-semibold">{item.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">{item.company}</p>
                  </div>
                ))}
              </div>
            </section>

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
      <StickyQuoteButton />
      <WhatsAppButton />
    </div>
  );
}
