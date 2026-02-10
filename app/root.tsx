import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

// removed missing local type import; using inline types below
import "./app.css";

export const meta = () => [
  { title: "Flexi Global Holidays - Best Travel Agency in India | International & Domestic Tours" },
  { name: "description", content: "Flexi Global Holidays is the best travel agency in India offering premium international and domestic tour packages. We specialize in Dubai, Thailand, Europe, and Bali tours. Book flights, hotels, and visas with us. (Bharat ki sabse acchi travel agency)." },
  { name: "keywords", content: "Indian travel agency, Best travel agency in India, best tour operators in India, luxury travel agents India, budget travel agents India, honeymoon packages India, international tour packages from India, Dubai tour packages from India, Thailand tour packages from India, Europe tour packages from India, Bali tour packages from India, cheapest flight bookings India, visa assistance India, Bharat ki sabse acchi travel agency, sasti flight tickets, international ghumne ke liye best package, madhu marks tour packages, family holiday packages" },
  { property: "og:title", content: "Flexi Global Holidays - Best Travel Agency in India" },
  { property: "og:description", content: "Plan your perfect holiday with Flexi Global Holidays. Best international and domestic tour packages." },
  { property: "og:image", content: "https://flexiglobalholidays.in/logo.png" },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Flexi Global Holidays - Best Travel Agency in India" },
  { name: "twitter:description", content: "Book your dream vacation with the top travel agency in India." },
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
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "TravelAgency",
                "name": "Flexi Global Holidays",
                "description": "Flexi Global Holidays is the best travel agency in Indore, offering premium domestic and international tour packages. We specialize in Dubai, Thailand, Europe, and Bali tours, along with hotel bookings, visa services, and MICE solutions. Trusted by thousands since 2016.",
                "url": "https://flexiglobalholidays.in",
                "logo": "https://flexiglobalholidays.in/logo.png",
                "image": "https://flexiglobalholidays.in/logo.png",
                "priceRange": "$$",
                "areaServed": ["India", "United Arab Emirates", "Thailand", "Europe", "Singapore", "Bali"],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Travel Services",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "International Tour Packages" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Domestic India Tours" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Visa Assistance" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Travel (MICE)" } }
                  ]
                },
                "sameAs": [
                  "https://www.facebook.com/flexiglobalholidays",
                  "https://www.instagram.com/flexiglobalholidays",
                  "https://www.linkedin.com/company/flexiglobalholidays"
                ],
                "foundingDate": "2016",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Ho- 9 floor,919 Shekhar Central , Palasia",
                  "addressLocality": "Indore",
                  "addressRegion": "Madhya Pradesh",
                  "addressCountry": "IN"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91 9599476155",
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi"]
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "1000"
                }
              },
              {
                "@context": "https://schema.org",  
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Which is the best travel agency in Indore for international tours?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Flexi Global Holidays is highly rated as the best travel agency in Indore for international tours, specializing in packages for Dubai, Thailand, Europe, and Bali with comprehensive visa and hotel assistance."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does Flexi Global Holidays provide corporate travel services?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, Flexi Global Holidays offers specialized MICE (Meetings, Incentives, Conferences, and Exhibitions) solutions for corporate clients worldwide."
                    }
                  }
                ]
              }
            ])
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
