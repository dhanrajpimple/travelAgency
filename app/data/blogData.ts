import familyVacation from "~/assets/family-vacation.webp";
import honeymoon from "~/assets/honeymoon.webp";
import corporateTravel from "~/assets/corporate-travel.webp";
import heroBeach from "~/assets/hero-beach.webp";
import aboutTravelers from "~/assets/about-travelers.webp";

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    image: string;
    author: string;
    category: string;
    aiInsight?: string; // Added AI-powered suggestion/insight
}

export const blogPosts: BlogPost[] = [
    {
        slug: "top-10-destinations-to-visit-in-2025",
        title: "Top 10 International Destinations to Visit in 2025",
        excerpt: "Discover the most amazing global destinations to explore this year, from the beaches of Bali to the peaks of the Alps.",
        content: "Traveling in 2025 is all about unique experiences and sustainable journeys. Here are our top 10 picks for international travel:\n\n1. Bali, Indonesia: The island of gods offers a perfect blend of culture and relaxation.\n2. Switzerland: Experience the majesty of the Alps and pristine lakes.\n3. Japan: From cherry blossoms to futuristic cities.\n4. Iceland: A land of fire and ice.\n5. Portugal: Stunning coastlines and rich history.\n6. Peru: For the adventurous souls looking to conquer Machu Picchu.\n7. Greece: Iconic white-washed buildings and turquoise waters.\n8. Morocco: Vibrant markets and Saharan dunes.\n9. New Zealand: A paradise for nature lovers.\n10. Egypt: Explore the ancient mysteries of the Giza Pyramids.\n\nAt Flexi Global Holidays, we specialize in creating custom itineraries for all these destinations.",
        date: "January 15, 2025",
        image: heroBeach,
        author: "Siddharth Jain",
        category: "International Travel",
        aiInsight: "AI suggests: Based on current travel trends, booking at least 6 months in advance for Japan or Iceland can save you up to 30% on luxury accommodations."
    },
    {
        slug: "travel-tips-for-first-time-international-travelers",
        title: "7 Essential Tips for First-Time International Travelers",
        excerpt: "Going abroad for the first time? Here's everything you need to know for a stress-free international trip.",
        content: "Stepping onto foreign soil for the first time is exhilarating, but it can also be overwhelming. Follow these tips for a smooth journey:\n\n1. Check your passport validity: Most countries require at least 6 months validity from your travel date.\n2. Get travel insurance: Never travel without it. It covers medical emergencies and flight cancellations.\n3. Notify your bank: Ensure your cards work abroad without being blocked for 'suspicious activity'.\n4. Pack light: You'll thank yourself when navigating trains or busy streets.\n5. Learn basic local phrases: A simple 'Thank you' in the local language goes a long way.\n6. Carry some local currency: Not everywhere accepts cards.\n7. Keep digital copies of important documents: Save them on your email or cloud storage.",
        date: "January 10, 2025",
        image: corporateTravel,
        author: "Flexi Expert",
        category: "Travel Tips",
        aiInsight: "AI suggests: Use an eSIM for international travel to avoid high roaming charges. Apps like Airalo or Holafly are highly recommended for hassle-free connectivity."
    },
    {
        slug: "best-family-vacation-spots-india",
        title: "Best Family Vacation Spots in India for Summer 2025",
        excerpt: "Plan the perfect domestic getaway with your loved ones to beat the heat this summer.",
        content: "India offers diverse landscapes for families. Whether you like the mountains or the south, there's something for everyone:\n\n1. Kashmir: The 'Paradise on Earth' is perfect for escaping the summer heat.\n2. Leh Ladakh: Ideal for families with older children who love adventure.\n3. Munnar, Kerala: Beautiful tea plantations and serene weather.\n4. Manali: The quintessential hill station experience.\n5. Andaman Islands: For families who love beaches and water sports.\n\nFlexi Global Holidays offers specialized family packages that include kid-friendly activities and comfortable stays.",
        date: "January 20, 2025",
        image: familyVacation,
        author: "Local Guide",
        category: "Domestic Travel",
        aiInsight: "AI suggests: For summer travel in India, consider destinations like Spiti Valley which are becoming increasingly popular for their unique landscapes and cooler temperatures compared to traditional hill stations."
    },
    {
        slug: "romantic-honeymoon-destinations-2025",
        title: "Most Romantic Honeymoon Destinations for 2025",
        excerpt: "Begin your forever in the most beautiful corners of the world with our curated honeymoon guide.",
        content: "A honeymoon is the trip of a lifetime. Here are our top picks for romance:\n\n1. Maldives: Overwater villas and private dinners on the beach.\n2. Paris, France: The city of love never goes out of style.\n3. Santorini, Greece: Breathtaking sunsets and infinity pools.\n4. Bora Bora: Exotic luxury at its best.\n5. Fiordland, New Zealand: For couples who find romance in nature's grandeur.",
        date: "January 22, 2025",
        image: honeymoon,
        author: "Romance Specialist",
        category: "Honeymoon",
        aiInsight: "AI suggests: Consider 'Hidden Gems' like the Amalfi Coast in Italy or the Dalmatian Coast in Croatia for a more unique and less crowded romantic experience."
    }
];
