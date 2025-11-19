import type { Route } from "./+types/blog";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog - Leisure N More" },
    { name: "description", content: "Travel tips, guides, and stories from Leisure N More." },
  ];
}

export default function Blog() {
  const blogPosts = [
    {
      slug: "top-10-destinations-to-visit-in-2025",
      title: "Top 10 Destinations to Visit in 2025",
      excerpt: "Discover the most amazing destinations to explore this year.",
      date: "January 15, 2025",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80"
    },
    {
      slug: "travel-tips-for-first-time-international-travelers",
      title: "Travel Tips for First-Time International Travelers",
      excerpt: "Essential tips to make your first international trip smooth and enjoyable.",
      date: "January 10, 2025",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80"
    },
    {
      slug: "best-time-to-visit-kashmir",
      title: "Best Time to Visit Kashmir",
      excerpt: "Plan your Kashmir trip at the perfect time of the year.",
      date: "January 5, 2025",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
    },
    {
      slug: "how-to-get-a-visa-for-europe",
      title: "How to Get a Visa for Europe",
      excerpt: "Complete guide to applying for a Schengen visa.",
      date: "December 28, 2024",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Blog</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                    <h2 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <span className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                      Read More →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

