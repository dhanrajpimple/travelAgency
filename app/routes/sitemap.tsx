import type { Route } from "./+types/sitemap";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sitemap - Leisure N More" },
    { name: "description", content: "Site map for Leisure N More website." },
  ];
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
              <ul className="space-y-2">
                <li><Link to="/hotels" className="text-blue-600 hover:text-blue-700">Hotels</Link></li>
                <li><Link to="/visa" className="text-blue-600 hover:text-blue-700">Visa</Link></li>
                <li><Link to="/mice" className="text-blue-600 hover:text-blue-700">MICE</Link></li>
                <li><Link to="/trade-fair" className="text-blue-600 hover:text-blue-700">Trade Fair</Link></li>
                <li><Link to="/pay-online" className="text-blue-600 hover:text-blue-700">Pay Online</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">India Holidays</h2>
              <ul className="space-y-2 grid grid-cols-2">
                <li><Link to="/packages/andaman-tour-packages" className="text-blue-600 hover:text-blue-700">Andaman Tour Packages</Link></li>
                <li><Link to="/packages/kerala-tour-packages" className="text-blue-600 hover:text-blue-700">Kerala Tour Packages</Link></li>
                <li><Link to="/packages/rajasthan-tour-packages" className="text-blue-600 hover:text-blue-700">Rajasthan Tour Packages</Link></li>
                <li><Link to="/packages/goa-tour-packages" className="text-blue-600 hover:text-blue-700">Goa Tour Packages</Link></li>
                <li><Link to="/packages/kashmir-tour-packages" className="text-blue-600 hover:text-blue-700">Kashmir Tour Packages</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">International Holidays</h2>
              <ul className="space-y-2 grid grid-cols-2">
                <li><Link to="/packages/europe-tour-packages" className="text-blue-600 hover:text-blue-700">Europe Tour Packages</Link></li>
                <li><Link to="/packages/dubai-tour-packages" className="text-blue-600 hover:text-blue-700">Dubai Tour Packages</Link></li>
                <li><Link to="/packages/thailand-tour-packages" className="text-blue-600 hover:text-blue-700">Thailand Tour Packages</Link></li>
                <li><Link to="/packages/singapore-tour-packages" className="text-blue-600 hover:text-blue-700">Singapore Tour Packages</Link></li>
                <li><Link to="/packages/bali-tour-packages" className="text-blue-600 hover:text-blue-700">Bali Tour Packages</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

