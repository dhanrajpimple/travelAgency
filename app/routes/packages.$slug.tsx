import type { Route } from "./+types/packages.$slug";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import ImageLightbox from "~/components/ImageLightbox";
import { useParams, Link } from "react-router";
import { getPackageBySlug, type Package } from "~/data/packages";
import { useState } from "react";

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

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tour Package - Leisure N More" },
    { name: "description", content: "Book your dream tour package with Leisure N More." },
  ];
}

export default function PackageDetail() {
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
            <span className="text-gray-600">{pkg.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                <div 
                  className="h-96 bg-gradient-to-br from-blue-400 to-blue-600 relative cursor-pointer group"
                  onClick={() => {
                    setLightboxIndex(0);
                    setLightboxOpen(true);
                  }}
                >
                  <img 
                    src={pkg.images[0]} 
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white font-semibold bg-black/50 px-4 py-2 rounded-lg transition-opacity">
                      Click to View Full Size
                    </span>
                  </div>
                </div>
                {pkg.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-2 p-4">
                    {pkg.images.slice(1, 4).map((img, idx) => (
                      <div 
                        key={idx} 
                        className="h-24 bg-gray-200 rounded overflow-hidden cursor-pointer group relative"
                        onClick={() => {
                          setLightboxIndex(idx + 1);
                          setLightboxOpen(true);
                        }}
                      >
                        <img 
                          src={img} 
                          alt={`${pkg.name} ${idx + 2}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
                      </div>
                    ))}
                    {pkg.images.length > 4 && (
                      <div 
                        className="h-24 bg-gray-300 rounded overflow-hidden cursor-pointer group relative flex items-center justify-center"
                        onClick={() => {
                          setLightboxIndex(0);
                          setLightboxOpen(true);
                        }}
                      >
                        <span className="text-gray-700 font-semibold group-hover:text-[#0066CC] transition-colors">
                          +{pkg.images.length - 4} More
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Package Info */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">{pkg.name}</h1>
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <span className="font-semibold">Duration:</span> {pkg.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="font-semibold">Location:</span> {pkg.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="font-semibold">Best Time:</span> {pkg.bestTime}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{pkg.shortDescription}</p>
                
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Highlights</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">What's Included</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <span className="text-green-600">✓</span>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">What's Not Included</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {pkg.excludes.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <span className="text-red-600">✗</span>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Read More Button */}
                <Link
                  to={`/packages/${pkg.slug}/details`}
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Read More Details →
                </Link>
              </div>

              {/* Quick Itinerary Preview */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Quick Itinerary Preview</h2>
                <div className="space-y-4">
                  {pkg.itinerary.slice(0, 3).map((day, idx) => (
                    <div key={idx} className="border-l-4 border-blue-600 pl-4">
                      <h3 className="font-semibold text-gray-800">Day {day.day}: {day.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{day.description}</p>
                    </div>
                  ))}
                  <Link
                    to={`/packages/${pkg.slug}/details`}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    View Full Itinerary →
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar - Booking */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Book Now</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Starting from</p>
                    <p className="text-3xl font-bold text-blue-600">{pkg.price}</p>
                    <p className="text-sm text-gray-600">{pkg.minPax}</p>
                    <p className="text-sm text-gray-600 mt-2">{pkg.duration}</p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3 text-gray-800">Package Includes:</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      {pkg.includes.slice(0, 5).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-green-600">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
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
                    to={`/packages/${pkg.slug}/details`}
                    className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-colors font-semibold"
                  >
                    View Full Details
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
    </div>
  );
}
