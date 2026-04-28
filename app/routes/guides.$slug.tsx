import type { Route } from "./+types/guides.$slug";
import { Link, useParams } from "react-router";
import CphiSupportPage, { buildSupportPageSchema } from "~/components/CphiSupportPage";
import Footer from "~/components/Footer";
import Navigation from "~/componets/Navbar";
import { generateSEOTags } from "~/config/seo";
import { getSupportSeoPageBySlug } from "~/data/cphiSeo";

export function meta({ params }: Route.MetaArgs) {
  const page = getSupportSeoPageBySlug(params.slug || "");

  if (!page) {
    return generateSEOTags({
      title: "Trade Fair Guide | Flexi Global Holidays",
      description: "Trade fair travel guide for CPHI and business travel from India.",
      url: `/guides/${params.slug || ""}`,
      type: "article",
    });
  }

  return generateSEOTags({
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: `${page.keyword}, pharma exhibition, Milan travel packages, Italy visa, business travel`,
    url: `/guides/${page.slug}`,
    type: "article",
  });
}

export default function GuideRoute() {
  const { slug } = useParams();
  const page = getSupportSeoPageBySlug(slug || "");

  if (!page) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Guide not found</h1>
          <p className="mt-4 text-gray-600">The guide you requested is not available.</p>
          <Link to="/blog" className="mt-8 inline-block rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-[#1A2B4A]">
            Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSupportPageSchema(page)) }} />
      <CphiSupportPage page={page} />
    </>
  );
}
