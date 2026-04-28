import { Link } from "react-router";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import StickyQuoteButton from "~/components/StickyQuoteButton";
import WhatsAppButton from "~/components/WhatsAppButton";
import { CONFIG } from "~/config/constants";
import type { MainSeoPage, SupportSeoPage } from "~/data/cphiSeo";
import { getMainSeoPageBySlug, mainSeoPages } from "~/data/cphiSeo";

export function buildSupportPageSchema(page: SupportSeoPage) {
  return [
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.title,
      description: page.metaDescription,
      author: {
        "@type": "Organization",
        name: "Flexi Global Holidays",
      },
      publisher: {
        "@type": "Organization",
        name: "Flexi Global Holidays",
        logo: {
          "@type": "ImageObject",
          url: `${CONFIG.SITE_URL}/logo.png`,
        },
      },
      mainEntityOfPage: `${CONFIG.SITE_URL}/guides/${page.slug}`,
    },
  ];
}

function targetPage(path: MainSeoPage["slug"]) {
  return getMainSeoPageBySlug(path) ?? mainSeoPages[0];
}

export default function CphiSupportPage({ page }: { page: SupportSeoPage }) {
  const primaryLink = targetPage(page.targetPage);
  const supportingLinks = page.internalLinks
    .map((item) => getMainSeoPageBySlug(item))
    .filter((item): item is MainSeoPage => Boolean(item));

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900">
      <Navigation />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-10">
          <nav className="text-sm font-medium text-gray-500">
            <Link to="/blog" className="text-[#0066CC]">Blog</Link>
            <span className="mx-2">/</span>
            <span>{page.title}</span>
          </nav>

          <header className="mt-6 max-w-4xl">
            <span className="rounded-full bg-[#1A2B4A] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">{page.category}</span>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">{page.title}</h1>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              {page.keyword} is a highly practical search because buyers usually want a quick, business-safe answer before they lock travel. {page.quickAnswer}
            </p>
          </header>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
            <article className="space-y-10">
              <section className="space-y-5 text-base leading-8 text-gray-700">
                <p><strong>{page.primaryQuestion}</strong> In most cases, the right answer begins with the trip objective. Some delegates only need a clean visitor package. Others need exhibitor support, multiple meetings, or an onward Europe extension. That is why the right travel answer is rarely just a price tag. It is a planning framework.</p>
                <p>{page.whyItMatters} Indian business travellers attending a pharma exhibition in Italy usually care about four things at once: hotel practicality, flight timing, Italy visa confidence, and a predictable daily rhythm once they arrive. A weak plan in any one of those areas can affect the value of the entire trip.</p>
                <p>When teams search for terms like <em>{page.keyword}</em>, they are often trying to reduce uncertainty fast. They want to understand what is normal, what is risky, and how to avoid common booking mistakes. The safest approach is to treat the travel plan as part of the event strategy. That means building around confirmed dates, meeting priorities, and realistic commute patterns instead of chasing the cheapest visible option in isolation.</p>
              </section>

              <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#fffaf0] p-6">
                <h2 className="text-2xl font-bold text-gray-900">Quick answer</h2>
                <p className="mt-3 text-base leading-8 text-gray-700">{page.quickAnswer}</p>
                <p className="mt-3 text-base leading-8 text-gray-700"><strong>Typical planning range:</strong> {page.costRange}</p>
              </div>

              <section className="space-y-5 text-base leading-8 text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900">How to think about this search the right way</h2>
                <p>Many travellers assume the answer is static. In reality, event-week travel is dynamic. Hotel inventory, visa timing, flight comfort, and meeting density change what the best answer looks like. A solo delegate with one or two supplier meetings can travel differently from a three-person procurement team or a company sending exhibitor staff. That is why package recommendations should be contextual, not generic.</p>
                <p>For Indian pharma teams, the smartest decision is usually the one that balances budget with execution. If a slightly better hotel protects two hours a day in commute time, that change often pays for itself in useful meetings and lower fatigue. If an early flight option creates a same-day venue rush, the apparent saving may actually reduce the event's commercial value. These are the trade-offs that matter most.</p>
                <p>Another point worth noting is internal approvals. Search intent is often tied to management questions: why this hotel, why this budget, why this booking timeline? When the answer is documented clearly, travel decisions move faster. That is one reason managed <Link to={primaryLink.slug} className="font-semibold text-[#0066CC] hover:underline">{primaryLink.keyword}</Link> support performs well for business travellers who need speed and accountability.</p>
              </section>

              <div className="rounded-3xl bg-[#1A2B4A] p-6 text-white">
                <h2 className="text-2xl font-bold">Need a tailored answer instead of a generic one?</h2>
                <p className="mt-3 text-sm leading-7 text-blue-100">Send your city of departure, traveller count, and expected stay length. We will convert that into a package-ready recommendation you can actually use.</p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link to="/contact" className="rounded-full bg-[#D4AF37] px-5 py-3 text-center font-semibold text-[#1A2B4A]">Get Quote</Link>
                  <a
                    href={`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello, I need help with ${page.keyword}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/30 px-5 py-3 text-center font-semibold text-white"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </div>

              <section>
                <h2 className="text-3xl font-bold text-gray-900">Practical checklist for Indian travellers</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {page.checklist.map((item) => (
                    <div key={item} className="rounded-3xl border border-gray-100 bg-gray-50 p-5 text-sm leading-7 text-gray-700">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-5 text-base leading-8 text-gray-700">
                  <p>Use the checklist above before you request a quote or approve the trip. It keeps the conversation grounded in the real moving parts of CPHI travel: flights, hotel proximity, visa readiness, local logistics, and overall business purpose. This is especially useful for first-time travellers who may not yet know how quickly event-week hotel dynamics can change in Milan.</p>
                  <p>A checklist also improves communication between travellers and finance teams. When the travel desk receives clear information on city of departure, room preference, and whether the trip includes only the pharma exhibition or also post-event meetings, the package can be shaped more accurately. That reduces revisions and helps everyone move with more confidence.</p>
                  <p>If your company is still deciding who will attend, it is still worth opening the planning discussion. Early structure does not force immediate payment. It simply gives your team a more stable decision frame before the market becomes less forgiving.</p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900">Internal resources that help next</h2>
                <div className="mt-6 space-y-3">
                  {supportingLinks.map((item) => (
                    <Link key={item.slug} to={item.slug} className="block rounded-2xl border border-gray-100 p-4 text-sm font-semibold text-[#1A2B4A] hover:border-[#D4AF37]">
                      {item.title}
                    </Link>
                  ))}
                  <Link to={primaryLink.slug} className="block rounded-2xl border border-[#D4AF37]/30 bg-[#fffaf0] p-4 text-sm font-semibold text-[#1A2B4A]">
                    Main page: {primaryLink.title}
                  </Link>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900">FAQs</h2>
                <div className="mt-6 space-y-4">
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
                <h2 className="text-2xl font-bold text-gray-900">Main package page</h2>
                <p className="mt-3 text-sm leading-7 text-gray-600">Move from research to action with the dedicated landing page for this search theme.</p>
                <Link to={primaryLink.slug} className="mt-5 block rounded-full bg-[#D4AF37] px-5 py-3 text-center font-semibold text-[#1A2B4A]">
                  {primaryLink.title}
                </Link>
              </div>

              <div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h2 className="text-2xl font-bold text-gray-900">Trust signals</h2>
                <div className="mt-4 space-y-3 text-sm text-gray-700">
                  <p className="rounded-2xl bg-gray-50 p-4">India-focused visa planning support</p>
                  <p className="rounded-2xl bg-gray-50 p-4">Years of business travel coordination</p>
                  <p className="rounded-2xl bg-gray-50 p-4">WhatsApp-first response for urgent queries</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
      <StickyQuoteButton />
      <WhatsAppButton />
    </div>
  );
}
