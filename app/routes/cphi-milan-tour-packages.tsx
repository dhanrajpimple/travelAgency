import type { Route } from "./+types/cphi-milan-tour-packages";
import CphiLandingPage, { buildMainPageSchema } from "~/components/CphiLandingPage";
import { generateSEOTags } from "~/config/seo";
import { getMainSeoPageBySlug } from "~/data/cphiSeo";

const page = getMainSeoPageBySlug("/cphi-milan-tour-packages")!;

export function meta({}: Route.MetaArgs) {
  return generateSEOTags({
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: `${page.keyword}, pharma exhibition, Milan travel packages, Italy visa, business travel, pharma conference travel`,
    url: page.slug,
    type: "website",
  });
}

export default function RouteComponent() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildMainPageSchema(page)) }} />
      <CphiLandingPage page={page} />
    </>
  );
}
