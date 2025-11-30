import type { Route } from "./+types/blog.$slug";
import Navigation from "~/componets/Navbar";
import Footer from "~/components/Footer";
import { useParams, Link } from "react-router";
import { generateSEOTags } from "~/config/seo";

export function meta({ params }: Route.MetaArgs) {
  const slug = params.slug || '';
  const post = blogPosts[slug];
  
  if (post) {
    // Convert date string to ISO format for publishedTime
    const publishedDate = new Date(post.date).toISOString();
    
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
  
  // Default SEO for unknown blog posts
  return generateSEOTags({
    title: "Travel Blog Post - Flexi Global Holidays",
    description: "Read travel tips, guides, and stories from Flexi Global Holidays travel blog.",
    keywords: "travel blog, travel tips, travel guides, travel stories",
    url: `/blog/${slug}`,
    type: "article"
  });
}

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  date: string;
  content: string;
  image: string;
}> = {
  "top-10-destinations-to-visit-in-2025": {
    title: "Top 10 Destinations to Visit in 2025",
    excerpt: "Discover the most amazing destinations to explore this year.",
    date: "January 15, 2025",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
    content: `
      <p class="mb-4">As we step into 2025, the world is full of incredible destinations waiting to be explored. Whether you're seeking adventure, relaxation, or cultural immersion, this year offers endless possibilities for unforgettable journeys.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">1. Bali, Indonesia</h2>
      <p class="mb-4">Known as the Island of Gods, Bali offers stunning beaches, lush rice terraces, and a rich cultural heritage. From the spiritual temples of Ubud to the vibrant nightlife of Seminyak, Bali has something for every traveler.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">2. Santorini, Greece</h2>
      <p class="mb-4">The iconic white-washed buildings against the azure Aegean Sea make Santorini a photographer's paradise. Enjoy breathtaking sunsets, world-class cuisine, and the unique volcanic landscape.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">3. Tokyo, Japan</h2>
      <p class="mb-4">Experience the perfect blend of traditional culture and cutting-edge technology in Tokyo. From ancient temples to futuristic districts, this city never fails to amaze.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">4. Dubai, UAE</h2>
      <p class="mb-4">A city of superlatives, Dubai offers luxury shopping, stunning architecture, and desert adventures. Visit the Burj Khalifa, explore the Palm Jumeirah, or experience a desert safari.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">5. Paris, France</h2>
      <p class="mb-4">The City of Light continues to enchant visitors with its romantic ambiance, world-class museums, and exquisite cuisine. Don't miss the Eiffel Tower, Louvre Museum, and charming Montmartre.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">6. Maldives</h2>
      <p class="mb-4">For the ultimate tropical paradise, the Maldives offers pristine beaches, crystal-clear waters, and luxurious overwater bungalows. Perfect for honeymooners and those seeking pure relaxation.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">7. New York, USA</h2>
      <p class="mb-4">The city that never sleeps offers endless attractions, from Broadway shows to world-famous landmarks. Experience the energy of Times Square, Central Park, and the Statue of Liberty.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">8. Switzerland</h2>
      <p class="mb-4">Alpine beauty at its finest, Switzerland offers stunning mountain landscapes, charming villages, and world-class skiing. The Swiss Alps provide breathtaking views year-round.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">9. Thailand</h2>
      <p class="mb-4">From the bustling streets of Bangkok to the serene beaches of Phuket, Thailand offers incredible value and diverse experiences. Enjoy delicious cuisine, rich culture, and warm hospitality.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">10. Iceland</h2>
      <p class="mb-4">A land of fire and ice, Iceland offers unique natural wonders including geysers, glaciers, and the Northern Lights. Experience otherworldly landscapes and adventure activities.</p>
      
      <p class="mt-6 mb-4">These destinations offer unique experiences that will create memories to last a lifetime. Plan your 2025 adventure with Flexi Global Holidays and let us help you create the perfect itinerary!</p>
    `
  },
  "travel-tips-for-first-time-international-travelers": {
    title: "Travel Tips for First-Time International Travelers",
    excerpt: "Essential tips to make your first international trip smooth and enjoyable.",
    date: "January 10, 2025",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
    content: `
      <p class="mb-4">Embarking on your first international trip can be both exciting and overwhelming. Here are essential tips to ensure your journey is smooth, safe, and memorable.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">1. Plan and Research Thoroughly</h2>
      <p class="mb-4">Research your destination's culture, customs, weather, and local laws. Understanding local etiquette will help you blend in and show respect to the local community.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">2. Get Travel Insurance</h2>
      <p class="mb-4">Never skip travel insurance. It protects you from medical emergencies, trip cancellations, and lost luggage. It's a small investment for peace of mind.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">3. Check Visa Requirements</h2>
      <p class="mb-4">Ensure you have the necessary visas well in advance. Some countries require visa applications months before travel. Check entry requirements and validity of your passport.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">4. Make Copies of Important Documents</h2>
      <p class="mb-4">Keep digital and physical copies of your passport, visa, travel insurance, and booking confirmations. Store them separately from originals and share with a trusted contact.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">5. Notify Your Bank</h2>
      <p class="mb-4">Inform your bank about your travel plans to avoid card blocks. Consider carrying multiple payment methods including cash, cards, and digital wallets.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">6. Pack Smart</h2>
      <p class="mb-4">Pack light but include essentials. Don't forget adapters, medications, comfortable shoes, and weather-appropriate clothing. Leave room for souvenirs!</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">7. Learn Basic Local Phrases</h2>
      <p class="mb-4">Learning a few basic phrases like "hello," "thank you," and "please" in the local language shows respect and can enhance your travel experience.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">8. Stay Connected</h2>
      <p class="mb-4">Research local SIM cards or international roaming plans. Having internet access helps with navigation, translation, and staying in touch with loved ones.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">9. Be Flexible</h2>
      <p class="mb-4">Travel doesn't always go as planned. Stay flexible, maintain a positive attitude, and embrace unexpected experiences - they often make the best memories.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">10. Trust Your Instincts</h2>
      <p class="mb-4">If something feels wrong, trust your gut. Stay aware of your surroundings, especially in unfamiliar places, and don't hesitate to ask for help.</p>
      
      <p class="mt-6 mb-4">Remember, every experienced traveler was once a first-timer. With proper preparation and an open mind, your first international trip will be the beginning of many amazing adventures!</p>
    `
  },
  "best-time-to-visit-kashmir": {
    title: "Best Time to Visit Kashmir",
    excerpt: "Plan your Kashmir trip at the perfect time of the year.",
    date: "January 5, 2025",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    content: `
      <p class="mb-4">Kashmir, often called "Paradise on Earth," offers breathtaking beauty throughout the year. However, each season brings its own unique charm and experiences.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">Spring (March to May)</h2>
      <p class="mb-4">Spring is one of the best times to visit Kashmir. The weather is pleasant with temperatures ranging from 15°C to 30°C. The famous tulip gardens bloom in April, creating a spectacular display of colors. This is perfect for sightseeing and outdoor activities.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">Summer (June to August)</h2>
      <p class="mb-4">Summer offers the most comfortable weather for tourists. With temperatures between 20°C and 35°C, it's ideal for exploring Dal Lake, Shalimar Bagh, and taking gondola rides. This is peak tourist season, so book accommodations in advance.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">Autumn (September to November)</h2>
      <p class="mb-4">Autumn brings stunning fall colors to the valley. The weather is crisp and pleasant, making it perfect for trekking and photography. The Chinar trees turn golden, creating a magical atmosphere.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">Winter (December to February)</h2>
      <p class="mb-4">Winter transforms Kashmir into a winter wonderland. If you love snow, this is the perfect time. Gulmarg becomes a skiing paradise, and the frozen Dal Lake offers unique experiences. Temperatures can drop below freezing, so pack warm clothes.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">What to Pack</h2>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Warm clothing for winter visits</li>
        <li>Comfortable walking shoes</li>
        <li>Sun protection for summer</li>
        <li>Camera for capturing the stunning landscapes</li>
        <li>Medications if you have altitude concerns</li>
      </ul>
      
      <p class="mt-6 mb-4">No matter when you visit, Kashmir's natural beauty will leave you spellbound. Plan your trip with Leisure N More for the best experience!</p>
    `
  },
  "how-to-get-a-visa-for-europe": {
    title: "How to Get a Visa for Europe",
    excerpt: "Complete guide to applying for a Schengen visa.",
    date: "December 28, 2024",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80",
    content: `
      <p class="mb-4">Planning a trip to Europe? You'll likely need a Schengen visa, which allows you to travel to 27 European countries. Here's a comprehensive guide to help you through the process.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">What is a Schengen Visa?</h2>
      <p class="mb-4">A Schengen visa is a short-stay visa that allows you to travel to any of the 27 Schengen Area countries for up to 90 days within a 180-day period. The countries include France, Germany, Italy, Spain, and many others.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">Step 1: Determine Which Country to Apply To</h2>
      <p class="mb-4">Apply to the country where you'll spend the most time, or if equal time, the country you'll enter first. This is your "main destination."</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">Step 2: Gather Required Documents</h2>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Completed visa application form</li>
        <li>Valid passport (with at least 2 blank pages)</li>
        <li>Two recent passport-sized photographs</li>
        <li>Travel insurance (minimum €30,000 coverage)</li>
        <li>Flight reservations (round trip)</li>
        <li>Hotel bookings or accommodation proof</li>
        <li>Bank statements (last 3-6 months)</li>
        <li>Employment letter or business registration</li>
        <li>Cover letter explaining your trip purpose</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">Step 3: Book an Appointment</h2>
      <p class="mb-4">Schedule an appointment at the embassy or consulate of your main destination country. Book well in advance as slots fill up quickly, especially during peak travel seasons.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">Step 4: Attend the Interview</h2>
      <p class="mb-4">Arrive on time with all documents. Be prepared to answer questions about your travel plans, accommodation, and financial situation. Be honest and confident.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">Step 5: Processing Time</h2>
      <p class="mb-4">Visa processing typically takes 15-30 days, but can take up to 60 days in some cases. Apply at least 3 months before your planned travel date.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">Tips for Success</h2>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Apply early - don't wait until the last minute</li>
        <li>Ensure all documents are authentic and up-to-date</li>
        <li>Show strong ties to your home country</li>
        <li>Have sufficient funds in your bank account</li>
        <li>Provide clear travel itinerary</li>
      </ul>
      
      <p class="mt-6 mb-4">Need help with your visa application? Leisure N More offers expert visa assistance services to make the process smooth and stress-free. Contact us today!</p>
    `
  }
};

function createSlug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Back to Blog
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
      
      <section className="py-8 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-700">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link to="/blog" className="text-blue-600 hover:text-blue-700">Blog</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-600">{post.title}</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {/* Post Content */}
          <article className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <p className="text-sm text-gray-500 mb-4">{post.date}</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">{post.title}</h1>
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Back to Blog */}
          <div className="mt-8 text-center">
            <Link 
              to="/blog"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

