// SEO Configuration and Helper Functions
import { CONFIG } from "./constants";

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  imageAlt?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateSEOTags(data: SEOData) {
  const siteUrl = CONFIG.SITE_URL;
  const defaultImage = `${siteUrl}/logo.png`;
  const fullUrl = data.url ? `${siteUrl}${data.url}` : siteUrl;
  const imageUrl = data.image || defaultImage;

  return [
    // Basic Meta Tags
    { title: data.title },
    { name: "description", content: data.description },
    { name: "keywords", content: data.keywords || "travel, tour packages, holiday packages, travel agency, India tours, international tours, Flexi Global Holidays" },
    { name: "author", content: data.author || "Flexi Global Holidays" },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "language", content: "English" },
    { name: "revisit-after", content: "7 days" },
    
    // Open Graph Tags
    { property: "og:title", content: data.title },
    { property: "og:description", content: data.description },
    { property: "og:image", content: imageUrl },
    { property: "og:image:alt", content: data.imageAlt || data.title },
    { property: "og:url", content: fullUrl },
    { property: "og:type", content: data.type || "website" },
    { property: "og:site_name", content: "Flexi Global Holidays" },
    { property: "og:locale", content: "en_IN" },
    
    // Twitter Card Tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: data.title },
    { name: "twitter:description", content: data.description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:image:alt", content: data.imageAlt || data.title },
    { name: "twitter:site", content: "@flexiglobalholidays" },
    { name: "twitter:creator", content: "@flexiglobalholidays" },
    
    // Additional Meta Tags
    { name: "geo.region", content: "IN-MP" },
    { name: "geo.placename", content: "Indore" },
    { name: "geo.position", content: "22.7196;75.8577" },
    { name: "ICBM", content: "22.7196, 75.8577" },
    
    // Article specific (if type is article)
    ...(data.type === "article" && data.publishedTime ? [
      { property: "article:published_time", content: data.publishedTime },
      ...(data.modifiedTime ? [{ property: "article:modified_time", content: data.modifiedTime }] : [])
    ] : [])
  ];
}

// Default SEO data for the site
export const defaultSEO = {
  siteName: "Flexi Global Holidays",
  siteUrl: CONFIG.SITE_URL,
  defaultImage: `${CONFIG.SITE_URL}/logo.png`,
  defaultDescription: "Premium travel agency offering domestic and international tour packages, hotel bookings, visa services, and MICE solutions.",
  defaultKeywords: "travel agency, tour packages, holiday packages, India tours, international tours, hotel booking, visa services, travel agent Indore, best travel agency, Flexi Global Holidays"
};

