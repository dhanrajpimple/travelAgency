import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("contact", "routes/contact.tsx"),
  route("terms", "routes/terms.tsx"),
  route("hotels", "routes/hotels.tsx"),
  route("visa", "routes/visa.tsx"),
  route("trade-fair", "routes/trade-fair.tsx"),
  route("trade-fair/cphi-china", "routes/trade-fair.cphi-china.tsx"),
  route("mice", "routes/mice.tsx"),
  route("pay-online", "routes/pay-online.tsx"),
  route("about", "routes/about.tsx"),
  route("blog", "routes/blog.tsx"),
  route("blog/:slug", "routes/blog.$slug.tsx"),
  route("sitemap", "routes/sitemap.tsx"),
  route("sitemap.xml", "routes/sitemap.xml.tsx"),
  route("robots.txt", "routes/robots.txt.tsx"),
  route("packages/:slug", "routes/packages.$slug.tsx"),
  route("packages/:slug/details", "routes/packages.$slug.details.tsx"),
] satisfies RouteConfig;
