import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import WhatsAppButton from "~/components/WhatsAppButton";
import { Link } from "react-router";
import { CONFIG } from "~/config/constants";
import { generateSEOTags } from "~/config/seo";

const heroImage =
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1600&q=80";

const faqItems = [
  {
    question: "What support do you provide for CPHI China travel from India?",
    answer:
      "We help with flights, hotel options near SNIEC, visa guidance, travel planning, business-friendly itineraries, and coordination support for individual delegates or company teams.",
  },
  {
    question: "Who should use a CPHI China travel package?",
    answer:
      "Our CPHI China packages are suitable for pharma manufacturers, API suppliers, biotech companies, packaging vendors, machinery exhibitors, sourcing teams, and first-time business travelers to China.",
  },
  {
    question: "Why is staying near SNIEC important during CPHI China?",
    answer:
      "A nearby hotel reduces commute time, helps your team reach the venue early, and makes it easier to manage multiple supplier meetings across busy exhibition days.",
  },
  {
    question: "Can you customize CPHI China travel for group delegations?",
    answer:
      "Yes. We can plan around team size, departure city, hotel preferences, visa timelines, and return schedules for pharma delegations travelling from India.",
  },
];

const packageInclusions = [
  "Return flight planning from major Indian departure cities",
  "Hotel shortlisting near Shanghai New International Expo Center",
  "Visa documentation guidance and travel checklist support",
  "Airport transfer and local movement planning",
  "Business-focused arrival and departure scheduling",
  "Optional extension planning for supplier visits in China",
];

const attendeeProfiles = [
  "API and ingredient sourcing teams",
  "Pharma machinery and packaging suppliers",
  "Biotech and contract manufacturing companies",
  "Distributors, importers, and procurement leads",
];

export function meta() {
  return generateSEOTags({
    title: "CPHI China 2026 Travel Package from India | Flights, Hotels, Visa Support",
    description:
      "Book a CPHI China 2026 travel package from India with Flexi Global Holidays. Get business travel support for flights, hotels near SNIEC Shanghai, visa guidance, transfers, and custom pharma trade fair itineraries.",
    keywords:
      "cphi china, cphi china 2026, cphi china travel package, cphi china travel from India, cphi shanghai hotel booking, pharma trade fair travel, pmec china travel, trade fair travel agency India, business travel china",
    url: "/trade-fair/cphi-china",
    type: "website",
    image: `${CONFIG.SITE_URL}/logo.png`,
    imageAlt: "CPHI China travel package from India by Flexi Global Holidays",
  });
}

export default function CphiChinaPage() {
  const pageSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: CONFIG.SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Trade Fair",
          item: `${CONFIG.SITE_URL}/trade-fair`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "CPHI China",
          item: `${CONFIG.SITE_URL}/trade-fair/cphi-china`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "CPHI & PMEC China 2026",
      startDate: "2026-06-16",
      endDate: "2026-06-18",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: "Shanghai New International Expo Center (SNIEC)",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Shanghai",
          addressCountry: "CN",
        },
      },
      image: [`${CONFIG.SITE_URL}/logo.png`],
      description:
        "CPHI & PMEC China 2026 is a major pharmaceutical and manufacturing trade fair in Shanghai. Flexi Global Holidays supports Indian delegates with travel planning for the event.",
      organizer: {
        "@type": "Organization",
        name: "CPHI China",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "CPHI China travel package from India",
      serviceType: "Trade fair travel planning",
      provider: {
        "@type": "TravelAgency",
        name: "Flexi Global Holidays",
        url: CONFIG.SITE_URL,
      },
      areaServed: "India",
      description:
        "Business travel planning for Indian delegates attending CPHI China, including flights, hotels, visa guidance, and trade fair itinerary coordination.",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: `${CONFIG.SITE_URL}/contact`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchemas) }}
      />

      <main className="pt-16">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Business delegates planning for a trade fair"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B4A]/95 via-[#1A2B4A]/85 to-[#0066CC]/75" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Pharma Trade Fair Travel
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                CPHI China 2026 Travel Package from India
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">
                Business-focused travel planning for delegates attending CPHI &
                PMEC China in Shanghai. We help Indian pharma teams with
                flights, hotels near SNIEC, visa guidance, and itinerary
                coordination built around exhibition days.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white">
                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                  16-18 June 2026
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                  SNIEC, Shanghai
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                  Flights, Hotels, Visa Guidance
                </span>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C9A634] px-8 py-4 font-semibold text-white transition-transform hover:scale-105"
                >
                  Get CPHI China Quote
                </Link>
                <Link
                  to="/trade-fair"
                  className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  View All Trade Fairs
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-18">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="mb-5 text-3xl font-bold text-gray-900">
                Why this page matters for CPHI China visitors
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-gray-600">
                <p>
                  Most business travelers searching for <strong>CPHI China</strong>{" "}
                  need more than a generic holiday package. They need a reliable
                  travel partner that understands exhibition timelines, venue
                  proximity, team coordination, and how small booking mistakes
                  can affect meeting schedules.
                </p>
                <p>
                  Flexi Global Holidays supports delegates travelling from India
                  to Shanghai with practical planning built around the event. We
                  focus on venue access, business-friendly flight options, hotel
                  convenience, and the operational details that matter during a
                  trade fair visit.
                </p>
                <p>
                  If your company is evaluating suppliers, exhibiting products,
                  or attending CPHI China for networking, this page is designed
                  to help you start with a realistic plan instead of fragmented
                  bookings.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                { label: "Event", value: "CPHI & PMEC China 2026" },
                { label: "Venue", value: "SNIEC, Shanghai" },
                { label: "Support", value: "Flight + Hotel + Visa Guidance" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl bg-gradient-to-br from-[#1A2B4A] to-[#0066CC] p-6 text-white shadow-lg"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-xl font-semibold leading-snug">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-gray-900">
                Who usually books this service
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                We usually help companies and professionals who need a business
                travel plan that fits exhibition schedules, supplier meetings,
                and post-event follow-up time.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {attendeeProfiles.map((profile) => (
                <div
                  key={profile}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <p className="text-lg font-semibold text-gray-900">{profile}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-gray-900">
                What a CPHI China travel package can include
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Every plan is customized, but these are the core items most
                business travelers ask us to handle for Shanghai exhibition
                travel.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {packageInclusions.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm"
                >
                  <div className="mb-4 h-10 w-10 rounded-full bg-[#D4AF37]/15" />
                  <p className="text-base font-semibold leading-relaxed text-gray-900">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#1A2B4A] to-[#0066CC] py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-white">
                FAQ for CPHI China travel planning
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-200">
                These are the questions we hear most often from Indian delegates
                preparing for pharma trade fairs in China.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {item.question}
                  </h3>
                  <p className="mt-3 leading-relaxed text-gray-200">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-18">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-blue-50 p-10 text-center shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900">
                Need a business-ready CPHI China itinerary?
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
                Share your departure city, team size, and preferred hotel
                category. We will help you plan a CPHI China travel package that
                matches the event schedule and your business objectives.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C9A634] px-8 py-4 font-semibold text-white transition-transform hover:scale-105"
                >
                  Request Proposal
                </Link>
                <a
                  href={`tel:${CONFIG.PHONE_PRIMARY}`}
                  className="rounded-xl border border-[#1A2B4A] px-8 py-4 font-semibold text-[#1A2B4A] transition-colors hover:bg-[#1A2B4A] hover:text-white"
                >
                  Call {CONFIG.PHONE_PRIMARY}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
