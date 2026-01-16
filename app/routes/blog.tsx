import type { Route } from "./+types/blog";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import { Link } from "react-router";
import { generateSEOTags } from "~/config/seo";
import WhatsAppButton from "~/components/WhatsAppButton";
import { blogPosts } from "~/data/blogData";

export function meta({ }: Route.MetaArgs) {
  return generateSEOTags({
    title: "Travel Blog - Expert Travel Tips & Guides | Flexi Global Holidays",
    description: "Explore the Flexi Global Holidays travel blog for expert advice on international tours, domestic packages, and travel hacks. Get AI-powered travel insights and plan your perfect trip.",
    keywords: "travel blog, travel tips, international tours blog, domestic travel guide, AI travel suggestions, Flexi Global Holidays blog, holiday planning tips",
    url: "/blog",
    type: "website"
  });
}

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navigation />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Travel Blog</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert insights, travel guides, and AI-powered recommendations to help you explore the world.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col md:flex-row"
              >
                <Link to={`/blog/${post.slug}`} className="md:w-2/5 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#1A2B4A] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </Link>

                <div className="p-6 md:p-8 md:w-3/5 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-medium">
                    <span>{post.date}</span>
                    <span className="text-[#D4AF37]">•</span>
                    <span>By {post.author}</span>
                  </div>

                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#D4AF37] transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  {post.aiInsight && (
                    <div className="bg-blue-50/50 border-l-4 border-[#D4AF37] p-4 mb-6 rounded-r-lg group-hover:bg-blue-50 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">✨</span>
                        <span className="text-[10px] font-bold text-[#1A2B4A] uppercase tracking-widest">AI Travel Insight</span>
                      </div>
                      <p className="text-xs text-[#1A2B4A]/80 italic leading-relaxed">
                        {post.aiInsight}
                      </p>
                    </div>
                  )}

                  <div className="mt-auto">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-[#1A2B4A] font-bold hover:text-[#D4AF37] transition-all group/link text-sm"
                    >
                      Read Full Article
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
