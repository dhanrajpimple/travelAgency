import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

// removed missing local type import; using inline types below
import "./app.css";
import { CONFIG } from "./config/constants";

export const meta = () => [
  { title: "Flexi Global Holidays | Travel Agency, Tour Packages, Trade Fair Travel" },
  { name: "description", content: "Flexi Global Holidays is a travel agency in India offering international holidays, domestic tours, hotel bookings, visa support, MICE solutions, and trade fair travel services including CPHI China support." },
  { name: "keywords", content: "travel agency India, travel agency Indore, international tour packages, domestic tour packages, trade fair travel, CPHI China travel, visa assistance, hotel bookings, Flexi Global Holidays" },
  { name: "application-name", content: "Flexi Global Holidays" },
  { name: "apple-mobile-web-app-title", content: "Flexi Global Holidays" },
  { property: "og:title", content: "Flexi Global Holidays | Travel Agency and Trade Fair Travel" },
  { property: "og:description", content: "International holidays, domestic tours, visa support, hotel bookings, and business travel services from Flexi Global Holidays." },
  { property: "og:image", content: `${CONFIG.SITE_URL}/logo.png` },
  { property: "og:type", content: "website" },
  { property: "og:site_name", content: "Flexi Global Holidays" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Flexi Global Holidays | Travel Agency and Trade Fair Travel" },
  { name: "twitter:description", content: "Book international holidays, domestic tours, and trade fair travel with Flexi Global Holidays." },
];


export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "preconnect", href: "https://images.unsplash.com" },
  { rel: "dns-prefetch", href: "https://images.unsplash.com" },
  // Favicons
  { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  { rel: "shortcut icon", href: "/favicon.ico" },
  { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-96x96.png" },
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  { rel: "manifest", href: "/site.webmanifest" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const path = location.pathname === "/" ? "/" : location.pathname.replace(/\/+$/, "");
  const canonicalUrl = `${CONFIG.SITE_URL}${path}`;
  const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const siteSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${CONFIG.SITE_URL}/#organization`,
      name: "Flexi Global Holidays",
      alternateName: ["Flexi Global", "Flexi Global Holidays India"],
      legalName: "Flexi Global Holidays",
      url: CONFIG.SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${CONFIG.SITE_URL}/logo.png`,
      },
      image: `${CONFIG.SITE_URL}/logo.png`,
      email: CONFIG.EMAIL,
      telephone: CONFIG.PHONE_PRIMARY,
      sameAs: [
        "https://www.instagram.com/flexiglobalholidays?igsh=dXUxZmh1MmphMjh0",
        "https://www.facebook.com/people/Flexi-Global-Holidays/61576773903048/",
        "https://www.linkedin.com/company/31339407/admin/page-posts/published",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: CONFIG.PHONE_PRIMARY,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          telephone: CONFIG.PHONE_SECONDARY,
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "@id": `${CONFIG.SITE_URL}/#travel-agency`,
      name: "Flexi Global Holidays",
      alternateName: "Flexi Global",
      parentOrganization: {
        "@id": `${CONFIG.SITE_URL}/#organization`,
      },
      description:
        "Flexi Global Holidays is a travel agency in India offering domestic and international tour packages, visa services, hotel bookings, MICE travel, and trade fair travel planning.",
      url: CONFIG.SITE_URL,
      logo: `${CONFIG.SITE_URL}/logo.png`,
      image: `${CONFIG.SITE_URL}/logo.png`,
      priceRange: "$$",
      foundingDate: "2016",
      telephone: CONFIG.PHONE_PRIMARY,
      email: CONFIG.EMAIL,
      areaServed: ["India", "China", "United Arab Emirates", "Thailand", "Europe", "Singapore", "Bali"],
      sameAs: [
        "https://www.instagram.com/flexiglobalholidays?igsh=dXUxZmh1MmphMjh0",
        "https://www.facebook.com/people/Flexi-Global-Holidays/61576773903048/",
        "https://www.linkedin.com/company/31339407/admin/page-posts/published",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ho- 9 floor,919 Shekhar Central , Palasia",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        postalCode: "452001",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: CONFIG.PHONE_PRIMARY,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          telephone: CONFIG.PHONE_SECONDARY,
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Travel Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "International Tour Packages" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Domestic Tour Packages" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trade Fair Travel Packages" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Visa Assistance" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hotel Bookings" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "MICE Travel Solutions" } },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${CONFIG.SITE_URL}/#website`,
      url: CONFIG.SITE_URL,
      name: "Flexi Global Holidays",
      alternateName: "Flexi Global",
      publisher: {
        "@id": `${CONFIG.SITE_URL}/#organization`,
      },
      inLanguage: "en-IN",
    },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1A2B4A" />
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="v_aJnz3t-yWWYyzmUJ7EaClu6MCY0jXfNeJ_7DruQa8" />
        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Flexi Global Holidays" />
        <meta name="application-name" content="Flexi Global Holidays" />
        <meta name="msapplication-TileColor" content="#1A2B4A" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="dcterms.audience" content="Travelers, Tourists, Business Travelers, Honeymooners" />
        <meta name="dcterms.subject" content="International Tour Packages, Domestic India Tours, Visa Services, Hotel Bookings" />
        <link rel="canonical" href={canonicalUrl} />
        <Meta />
        <Links />
        {gaMeasurementId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaMeasurementId}', { page_path: '${path}' });
                `,
              }}
            />
          </>
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteSchemas)
          }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: { error: unknown }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
