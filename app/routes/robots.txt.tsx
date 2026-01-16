import { CONFIG } from "~/config/constants";

export async function loader() {
  const siteUrl = CONFIG.SITE_URL;

  const robotsTxt = `User-agent: *
Allow: /

# Specifically allow AI crawlers
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: YouBot
Allow: /

# Disallow admin or private areas (if any)
# Disallow: /admin/
# Disallow: /private/

# Sitemap location
Sitemap: ${siteUrl}/sitemap.xml
`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400"
    }
  });
}

