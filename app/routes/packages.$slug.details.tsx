import type { Route } from "./+types/packages.$slug.details";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import WhatsAppButton from "~/components/WhatsAppButton";
import ImageLightbox from "~/components/ImageLightbox";
import { useParams, Link } from "react-router";
import { getPackageBySlug, type Package } from "~/data/packages";
import { useState } from "react";
import { generateSEOTags } from "~/config/seo";

function createDefaultPackage(slug: string): Package {
  const name = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const isInternational = ['europe', 'usa', 'bali', 'mauritius', 'hong-kong', 'turkey', 'vietnam', 'dubai', 'thailand', 'singapore', 'maldives', 'sri-lanka'].some(s => slug.includes(s));
  
  return {
    id: slug,
    name: name + ' Tour Packages',
    slug: slug,
    category: isInternational ? 'international' : 'india',
    price: isInternational ? '₹25,000' : '₹15,000',
    duration: '4N / 5D',
    minPax: 'Min 2 pax',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800'
    ],
    shortDescription: `Experience the beauty and culture of ${name}. This carefully curated package offers the best of what this destination has to offer.`,
    fullDescription: `${name} is a beautiful destination offering a perfect blend of natural beauty, rich culture, and memorable experiences. Our package includes carefully selected accommodations, guided tours, and authentic local experiences. Whether you're seeking adventure, relaxation, or cultural immersion, this package has something for everyone.`,
    highlights: [
      'Visit top attractions and landmarks',
      'Experience local culture and traditions',
      'Enjoy comfortable accommodations',
      'Guided tours with expert local guides',
      'Authentic local cuisine experiences'
    ],
    itinerary: [
      { day: 1, title: 'Arrival', description: `Arrive at ${name}, transfer to hotel. Evening at leisure to explore the local area.` },
      { day: 2, title: 'City Tour', description: `Full day city tour covering major attractions, historical sites, and cultural landmarks.` },
      { day: 3, title: 'Sightseeing', description: 'Visit popular tourist spots, enjoy local experiences, and immerse in the culture.' },
      { day: 4, title: 'Adventure & Activities', description: 'Enjoy adventure activities, shopping, or relax at leisure. Optional tours available.' },
      { day: 5, title: 'Departure', description: 'After breakfast, transfer to airport/station for departure with beautiful memories.' }
    ],
    includes: ['Hotel accommodation', 'Breakfast', 'All transfers', 'Sightseeing', 'Entry tickets'],
    excludes: ['Airfare', 'Lunch & Dinner', 'Personal expenses', 'Optional activities'],
    location: name,
    bestTime: 'Year-round'
  };
}

export function meta({ params }: Route.MetaArgs) {
  const slug = params.slug || '';
  const pkg = slug ? (getPackageBySlug(slug) || null) : null;
  
  if (pkg) {
    const category = pkg.category === 'international' ? 'International' : 'India';
    return generateSEOTags({
      title: `${pkg.name} - Complete Details & Itinerary | Flexi Global Holidays`,
      description: `Complete details of ${pkg.name}. ${pkg.fullDescription} Includes ${pkg.duration} itinerary, highlights, what's included, and booking information. Book now with Flexi Global Holidays.`,
      keywords: `${pkg.name.toLowerCase()}, ${category.toLowerCase()} tour package details, ${pkg.location.toLowerCase()} itinerary, ${pkg.duration} tour details, travel package information, ${pkg.category === 'international' ? 'international travel' : 'domestic travel'}`,
      url: `/packages/${slug}/details`,
      type: "website",
      image: pkg.images[0]
    });
  }
  
  // Default SEO for unknown packages
  const name = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return generateSEOTags({
    title: `${name} Tour Package - Complete Details | Flexi Global Holidays`,
    description: `Complete details and itinerary for ${name} tour package. Includes full day-by-day itinerary, highlights, inclusions, and booking information.`,
    keywords: `${name.toLowerCase()} tour package details, ${name.toLowerCase()} itinerary, ${name.toLowerCase()} travel details`,
    url: `/packages/${slug}/details`,
    type: "website"
  });
}

export default function PackageDetails() {
  const { slug } = useParams();
  const pkg = slug ? (getPackageBySlug(slug) || createDefaultPackage(slug)) : null;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!pkg) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Package Not Found</h1>
            <p className="text-gray-600 mb-8">The package you're looking for doesn't exist.</p>
            <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Go to Home
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-700">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link to={`/packages/${pkg.slug}`} className="text-blue-600 hover:text-blue-700">{pkg.name}</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-600">Details</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-6 text-gray-800">{pkg.name} - Complete Details</h1>

              {/* Full Description */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">About This Package</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{pkg.fullDescription}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Duration</h3>
                    <p className="text-gray-600">{pkg.duration}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
                    <p className="text-gray-600">{pkg.location}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Best Time to Visit</h3>
                    <p className="text-gray-600">{pkg.bestTime}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Minimum Pax</h3>
                    <p className="text-gray-600">{pkg.minPax}</p>
                  </div>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pkg.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      className="h-64 bg-gray-200 rounded-lg overflow-hidden cursor-pointer group relative"
                      onClick={() => {
                        setLightboxIndex(idx);
                        setLightboxOpen(true);
                      }}
                    >
                      <img 
                        src={img} 
                        alt={`${pkg.name} ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 text-white font-semibold bg-black/50 px-4 py-2 rounded-lg transition-opacity">
                          Click to Enlarge
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complete Itinerary */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Complete Itinerary</h2>
                <div className="space-y-6">
                  {pkg.itinerary.map((day, idx) => (
                    <div key={idx} className="border-l-4 border-blue-600 pl-6 pb-6 last:pb-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                          {day.day}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">{day.title}</h3>
                      </div>
                      <p className="text-gray-700 mt-3 leading-relaxed">{day.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Package Highlights</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pkg.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-green-600 text-xl mt-1">✓</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Includes & Excludes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 rounded-lg shadow-lg p-6">
                  <h2 className="text-xl font-bold mb-4 text-gray-800">What's Included</h2>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <span className="text-green-600">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg shadow-lg p-6">
                  <h2 className="text-xl font-bold mb-4 text-gray-800">What's Not Included</h2>
                  <ul className="space-y-2">
                    {pkg.excludes.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <span className="text-red-600">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Package Summary</h3>
                <div className="space-y-4">
                  <div>
                   
                    <p className="text-sm text-gray-600">{pkg.minPax}</p>
                  </div>
                  
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold">{pkg.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-semibold text-right">{pkg.location}</span>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Book Now
                  </Link>
                  
                  <Link
                    to="/contact"
                    className="block w-full bg-gray-200 text-gray-800 text-center py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                  >
                    Get Quote
                  </Link>

                  <Link
                    to={`/packages/${pkg.slug}`}
                    className="block w-full text-center py-2 text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    ← Back to Package
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageLightbox
        images={pkg.images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={pkg.name}
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

