import type { Route } from "./+types/sitemap";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import WhatsAppButton from "~/components/WhatsAppButton";
import { Link } from "react-router";
import { generateSEOTags } from "~/config/seo";
import { packages } from "~/data/packages";

export function meta({}: Route.MetaArgs) {
  return generateSEOTags({
    title: "Sitemap - Site Map | Flexi Global Holidays",
    description: "Browse the complete sitemap of Flexi Global Holidays website. Find all pages, tour packages, services, and travel information in one place.",
    keywords: "sitemap, site map, website navigation, travel agency sitemap",
    url: "/sitemap",
    type: "website"
  });
}

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Sitemap</h1>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Main Pages</h2>
              <ul className="space-y-2">
                <li><Link to="/" className="text-blue-600 hover:text-blue-700">Home</Link></li>
                <li><Link to="/about" className="text-blue-600 hover:text-blue-700">About</Link></li>
                <li><Link to="/contact" className="text-blue-600 hover:text-blue-700">Contact</Link></li>
                <li><Link to="/blog" className="text-blue-600 hover:text-blue-700">Blog</Link></li>
                <li><Link to="/terms" className="text-blue-600 hover:text-blue-700">Terms of Use</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Services</h2>
              <ul className="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li><Link to="/hotels" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors">Hotels Booking</Link></li>
                <li><Link to="/visa" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors">Visa Services</Link></li>
                <li><Link to="/trade-fair" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors">Trade Fair Packages</Link></li>
                <li><Link to="/mice" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors">MICE Services</Link></li>
                <li><Link to="/pay-online" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors">Pay Online</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">India Tour Packages</h2>
              <ul className="space-y-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {packages
                  .filter(pkg => pkg.category === 'india')
                  .map(pkg => (
                    <li key={pkg.id}>
                      <Link 
                        to={`/packages/${pkg.slug}`} 
                        className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                      >
                        {pkg.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">International Tour Packages</h2>
              <ul className="space-y-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {packages
                  .filter(pkg => pkg.category === 'international')
                  .map(pkg => (
                    <li key={pkg.id}>
                      <Link 
                        to={`/packages/${pkg.slug}`} 
                        className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                      >
                        {pkg.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

