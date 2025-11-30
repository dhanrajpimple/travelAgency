import type { Route } from "./+types/mice";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import { Link } from "react-router";
import { generateSEOTags } from "~/config/seo";

export function meta({}: Route.MetaArgs) {
  return generateSEOTags({
    title: "MICE Services - Meetings, Incentives, Conferences & Exhibitions | Flexi Global Holidays",
    description: "Professional MICE (Meetings, Incentives, Conferences, and Exhibitions) services by Flexi Global Holidays. Complete event management, corporate travel, team building, and conference planning solutions for businesses.",
    keywords: "MICE services, corporate travel, business travel, meetings and conferences, event management, corporate events, team building, conference planning, incentive travel, exhibition services",
    url: "/mice",
    type: "website"
  });
}

export default function Mice() {
  const miceServices = [
    {
      title: "Meetings",
      description: "Organize your business meetings with our comprehensive meeting solutions. We provide venue selection, catering, and all necessary arrangements.",
      features: [
        "Venue selection and booking",
        "Audio-visual equipment",
        "Catering services",
        "Transportation"
      ],
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
    },
    {
      title: "Incentives",
      description: "Reward your team with memorable incentive trips. We design customized programs to motivate and engage your employees.",
      features: [
        "Team building activities",
        "Luxury accommodations",
        "Entertainment programs",
        "Special experiences"
      ],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
    },
    {
      title: "Conferences",
      description: "Host successful conferences with our end-to-end conference management services.",
      features: [
        "Conference planning",
        "Delegate management",
        "Registration services",
        "Networking events"
      ],
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80"
    },
    {
      title: "Exhibitions",
      description: "Maximize your exhibition presence with our comprehensive exhibition support services.",
      features: [
        "Booth design and setup",
        "Staff travel arrangements",
        "Marketing support",
        "Logistics management"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&q=80"
          alt="MICE Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B4A]/80 to-[#1A2B4A]/50 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">MICE Services</h1>
            <p className="text-xl md:text-2xl text-white">Meetings, Incentives, Conferences, and Exhibitions</p>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {miceServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Expertise</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                With years of experience in organizing MICE events, we understand the complexities and requirements of corporate travel. Our team ensures seamless execution from planning to completion.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>500+ successful events</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Global network of venues</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>24/7 support during events</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#C9A634]/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">What We Offer</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                From intimate board meetings to large-scale international conferences, we provide comprehensive solutions tailored to your specific needs and budget.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-[#D4AF37]">★</span>
                  <span>End-to-end event management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#D4AF37]">★</span>
                  <span>Customized packages</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#D4AF37]">★</span>
                  <span>Cost-effective solutions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#0066CC] to-[#004499] rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get a Customized Quote</h2>
            <p className="text-lg mb-6 opacity-90">
              Contact us to discuss your MICE requirements and get a tailored solution for your organization.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#C9A634] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
