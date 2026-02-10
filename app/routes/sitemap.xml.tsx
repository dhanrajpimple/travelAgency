import { CONFIG } from "~/config/constants";
import { packages } from "~/data/packages";
import { blogPosts } from "~/data/blogData";

export async function loader() {
  const siteUrl = CONFIG.SITE_URL;
  const currentDate = new Date().toISOString().split('T')[0];

  // Static routes with priorities
  const staticRoutes = [
    { path: "/", priority: "1.0", changefreq: "daily" },
    { path: "/about", priority: "0.8", changefreq: "monthly" },
    { path: "/contact", priority: "0.9", changefreq: "monthly" },
    { path: "/hotels", priority: "0.8", changefreq: "weekly" },
    { path: "/visa", priority: "0.8", changefreq: "weekly" },
    { path: "/trade-fair", priority: "0.8", changefreq: "weekly" },
    { path: "/mice", priority: "0.7", changefreq: "monthly" },
    { path: "/blog", priority: "0.7", changefreq: "weekly" },
    { path: "/terms", priority: "0.5", changefreq: "monthly" },
    { path: "/pay-online", priority: "0.6", changefreq: "monthly" },
    { path: "/sitemap", priority: "0.4", changefreq: "monthly" },
  ];

  // Package routes
  const packageRoutes = packages.map(pkg => ({
    path: `/packages/${pkg.slug}`,
    priority: "0.8",
    changefreq: "weekly"
  }));

  // Package detail routes
  const packageDetailRoutes = packages.map(pkg => ({
    path: `/packages/${pkg.slug}/details`,
    priority: "0.7",
    changefreq: "weekly"
  }));

  // Blog post routes
  const blogRoutes = blogPosts.map(post => ({
    path: `/blog/${post.slug}`,
    priority: "0.6",
    changefreq: "monthly"
  }));

  // Combine all routes
  const allRoutes = [
    ...staticRoutes,
    ...packageRoutes,
    ...packageDetailRoutes,
    ...blogRoutes
  ];

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allRoutes.map(route => {
    const url = route.path === "/" ? siteUrl : `${siteUrl}${route.path}`;
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "X-Content-Type-Options": "nosniff"
    }
  });
}

