import type { Route } from "./+types/blog.$slug";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import WhatsAppButton from "~/components/WhatsAppButton";
import { useParams, Link } from "react-router";
import { generateSEOTags } from "~/config/seo";
import { blogPosts } from "~/data/blogData";

export function meta({ params }: Route.MetaArgs) {
  const slug = params.slug || '';
  const post = blogPosts.find(p => p.slug === slug);

  if (post) {
    // Convert date string to ISO format for publishedTime
    let publishedDate = new Date().toISOString();
    try {
      publishedDate = new Date(post.date).toISOString();
    } catch (e) { }

    return generateSEOTags({
      title: `${post.title} | Travel Blog - Flexi Global Holidays`,
      description: post.excerpt,
      keywords: `travel blog, ${post.title.toLowerCase()}, travel tips, travel guide, travel advice, ${slug.replace(/-/g, ', ')}`,
      url: `/blog/${slug}`,
      type: "article",
      image: post.image,
      publishedTime: publishedDate
    });
  }

  return generateSEOTags({
    title: "Travel Blog Post - Flexi Global Holidays",
    description: "Read travel tips, guides, and stories from Flexi Global Holidays travel blog.",
    keywords: "travel blog, travel tips, travel guides, travel stories",
    url: `/blog/${slug}`,
    type: "article"
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <section className="py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:underline">Back to Blog</Link>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="mb-8 text-sm font-medium">
            <Link to="/blog" className="text-[#D4AF37] hover:underline">Blog</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600 truncate inline-block max-w-[200px] align-bottom">{post.title}</span>
          </nav>

          <header className="mb-10 text-center">
            <span className="bg-[#1A2B4A] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
              <span>{post.date}</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
          </header>

          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[300px] md:h-[500px] object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <article className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                  {post.content}
                </div>
              </article>
            </div>

            <aside className="lg:col-span-4 space-y-8">
              {post.aiInsight && (
                <div className="bg-gradient-to-br from-[#1A2B4A] to-[#2A3B5A] text-white rounded-3xl p-6 shadow-xl border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="text-6xl">✨</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span>✨</span> AI Smart Tip
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed italic">
                    "{post.aiInsight}"
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">
                      Powered by Global Insights AI
                    </p>
                  </div>
                </div>
              )}

              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Need a Quote?</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Inspired by this story? Let us help you plan your next trip!
                </p>
                <Link
                  to="/contact"
                  className="block w-full bg-[#D4AF37] text-white text-center py-4 rounded-xl font-bold hover:bg-[#B1922D] transition-colors shadow-lg shadow-[#D4AF37]/20"
                >
                  Get Free Consultation
                </Link>
              </div>
            </aside>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[#1A2B4A] font-bold hover:text-[#D4AF37] transition-all group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Back to all articles
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
