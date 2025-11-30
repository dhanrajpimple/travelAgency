import { CONFIG } from "~/config/constants";

export async function loader() {
  const siteUrl = CONFIG.SITE_URL;
  
  const robotsTxt = `User-agent: *
Allow: /

# Disallow admin or private areas (if any)
# Disallow: /admin/
# Disallow: /private/

# Allow all important pages
Allow: /
Allow: /about
Allow: /contact
Allow: /hotels
Allow: /trade-fair
Allow: /blog
Allow: /packages/
Allow: /sitemap

# Sitemap location
Sitemap: ${siteUrl}/sitemap.xml

# Crawl-delay (optional - uncomment if needed)
# Crawl-delay: 1

# Block specific bots if needed (uncomment if required)
# User-agent: BadBot
# Disallow: /
`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400"
    }
  });
}

