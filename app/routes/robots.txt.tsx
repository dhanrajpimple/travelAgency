import { CONFIG } from "~/config/constants";

export async function loader() {
  const siteUrl = CONFIG.SITE_URL;

  const robotsTxt = `User-agent: *
Allow: /
Disallow: /?*
Disallow: /*?*

# SEO Optimized: Specifically allow AI crawlers for better reach
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

User-agent: Google-Extended
Allow: /

User-agent: FacebookBot
Allow: /

# Block some aggressive/useless crawlers
User-agent: CCBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: PetalBot
Disallow: /

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

