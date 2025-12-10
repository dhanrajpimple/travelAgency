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
  { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
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
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Flexi Global Holidays",
              "description": "Premium travel agency offering domestic and international tour packages, hotel bookings, visa services, and MICE solutions. Best travel agency in Indore, India since 2016.",
              "url": "https://flexiglobalholidays.in",
              "logo": "https://flexiglobalholidays.in/logo.png",
              "image": "https://flexiglobalholidays.in/logo.png",
              "sameAs": [
                "https://www.facebook.com/flexiglobalholidays",
                "https://www.instagram.com/flexiglobalholidays"
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
            })
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
