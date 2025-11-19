export interface Package {
  id: string;
  name: string;
  slug: string;
  category: 'india' | 'international';
  price: string;
  duration: string;
  minPax: string;
  images: string[];
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  includes: string[];
  excludes: string[];
  location: string;
  bestTime: string;
}

export const packages: Package[] = [
  {
    id: 'andaman-tour-packages',
    name: 'Andaman Tour Packages',
    slug: 'andaman-tour-packages',
    category: 'india',
    price: '₹24,999',
    duration: '5N / 6D',
    minPax: 'Min 2 pax',
    images: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'
    ],
    shortDescription: 'Explore the pristine beaches and crystal-clear waters of Andaman & Nicobar Islands. Perfect for beach lovers and adventure enthusiasts.',
    fullDescription: 'The Andaman and Nicobar Islands are a tropical paradise in the Bay of Bengal. This package takes you through the most beautiful beaches, coral reefs, and historical sites. Experience water sports, visit Cellular Jail, and relax on the white sandy beaches. The islands offer a perfect blend of adventure, history, and relaxation.',
    highlights: [
      'Visit Radhanagar Beach - one of Asia\'s best beaches',
      'Snorkeling and scuba diving at Havelock Island',
      'Explore Cellular Jail and light & sound show',
      'Boat ride to Ross Island',
      'Witness bioluminescent waters at Havelock'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Port Blair', description: 'Arrive at Port Blair airport, transfer to hotel. Visit Cellular Jail and witness the light & sound show in the evening.' },
      { day: 2, title: 'Port Blair to Havelock', description: 'Early morning ferry to Havelock Island. Check-in at resort. Visit Radhanagar Beach - one of Asia\'s best beaches.' },
      { day: 3, title: 'Havelock Island', description: 'Full day for water activities - snorkeling, scuba diving, or just relax on the beach. Evening visit to Kalapathar Beach.' },
      { day: 4, title: 'Havelock to Neil Island', description: 'Ferry to Neil Island. Visit Laxmanpur Beach, Bharatpur Beach, and Natural Bridge. Overnight stay at Neil Island.' },
      { day: 5, title: 'Neil Island to Port Blair', description: 'Return to Port Blair. Visit Ross Island, North Bay Island for water sports. Shopping at local markets.' },
      { day: 6, title: 'Departure', description: 'After breakfast, transfer to airport for departure with beautiful memories.' }
    ],
    includes: ['Hotel accommodation', 'Breakfast & Dinner', 'All transfers', 'Ferry tickets', 'Sightseeing', 'Entry tickets'],
    excludes: ['Airfare', 'Personal expenses', 'Water sports activities', 'Lunch'],
    location: 'Andaman & Nicobar Islands, India',
    bestTime: 'October to May'
  },
  {
    id: 'kerala-tour-packages',
    name: 'Kerala Tour Packages',
    slug: 'kerala-tour-packages',
    category: 'india',
    price: '₹9,999',
    duration: '6N / 7D',
    minPax: 'Min 2 pax',
    images: [
      'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'
    ],
    shortDescription: 'Experience God\'s Own Country with backwaters, hill stations, and rich cultural heritage. Perfect for nature lovers and peace seekers.',
    fullDescription: 'Kerala, known as God\'s Own Country, offers a unique blend of natural beauty, culture, and tranquility. This package covers the famous backwaters of Alleppey, the hill station of Munnar with tea plantations, and the cultural capital Kochi. Experience houseboat stays, spice plantations, and traditional Kathakali performances.',
    highlights: [
      'Houseboat stay in Alleppey backwaters',
      'Tea plantation tour in Munnar',
      'Visit Periyar Wildlife Sanctuary',
      'Kathakali and Kalaripayattu shows',
      'Spice plantation tour'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Cochin', description: 'Arrive at Cochin airport, transfer to hotel. Evening visit to Fort Kochi, Chinese fishing nets, and Jewish Synagogue.' },
      { day: 2, title: 'Cochin to Munnar', description: 'Drive to Munnar (130 km, 4 hours). En route visit spice plantations. Check-in at hotel. Evening at leisure.' },
      { day: 3, title: 'Munnar Sightseeing', description: 'Full day tour of Munnar - visit tea plantations, Eravikulam National Park, Mattupetty Dam, and Echo Point.' },
      { day: 4, title: 'Munnar to Thekkady', description: 'Drive to Thekkady (110 km, 3 hours). Visit Periyar Wildlife Sanctuary. Evening spice plantation tour.' },
      { day: 5, title: 'Thekkady to Alleppey', description: 'Drive to Alleppey (150 km, 4 hours). Check-in at houseboat. Overnight stay in houseboat with traditional Kerala meals.' },
      { day: 6, title: 'Alleppey to Cochin', description: 'Disembark from houseboat. Drive back to Cochin. Visit local markets for shopping.' },
      { day: 7, title: 'Departure', description: 'After breakfast, transfer to airport for departure.' }
    ],
    includes: ['Hotel & Houseboat accommodation', 'Breakfast & Dinner', 'All transfers', 'Sightseeing', 'Entry tickets'],
    excludes: ['Airfare', 'Lunch', 'Personal expenses', 'Optional activities'],
    location: 'Kerala, India',
    bestTime: 'October to March'
  },
  {
    id: 'goa-tour-packages',
    name: 'Goa Tour Packages',
    slug: 'goa-tour-packages',
    category: 'india',
    price: '₹5,990',
    duration: '3N / 4D',
    minPax: 'Min 2 pax',
    images: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'
    ],
    shortDescription: 'Enjoy the sun, sand, and sea in Goa. Perfect for beach lovers, party enthusiasts, and those seeking a relaxed vacation.',
    fullDescription: 'Goa is India\'s party capital and beach paradise. This package offers the best of North and South Goa - pristine beaches, water sports, Portuguese heritage, vibrant nightlife, and delicious seafood. Experience the perfect blend of relaxation and adventure.',
    highlights: [
      'Visit famous beaches - Calangute, Baga, Anjuna',
      'Water sports activities',
      'Explore Portuguese heritage in Old Goa',
      'Dudhsagar Falls excursion',
      'Sunset cruise on Mandovi River'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Goa', description: 'Arrive at Goa airport/railway station, transfer to hotel. Evening visit to Calangute Beach and Baga Beach.' },
      { day: 2, title: 'North Goa Tour', description: 'Full day tour - visit Fort Aguada, Anjuna Beach, Vagator Beach, and Chapora Fort. Evening explore nightlife at Tito\'s Lane.' },
      { day: 3, title: 'South Goa Tour', description: 'Visit Old Goa churches, Spice Plantation, and Dudhsagar Falls. Evening sunset cruise on Mandovi River.' },
      { day: 4, title: 'Departure', description: 'After breakfast, transfer to airport/railway station for departure.' }
    ],
    includes: ['Hotel accommodation', 'Breakfast', 'All transfers', 'Sightseeing'],
    excludes: ['Airfare/Train fare', 'Lunch & Dinner', 'Water sports', 'Personal expenses'],
    location: 'Goa, India',
    bestTime: 'November to February'
  },
  {
    id: 'dubai-tour-packages',
    name: 'Dubai Tour Packages',
    slug: 'dubai-tour-packages',
    category: 'international',
    price: '₹23,999',
    duration: '4N / 5D',
    minPax: 'Min 2 pax',
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=800',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800'
    ],
    shortDescription: 'Experience the luxury and grandeur of Dubai - from Burj Khalifa to desert safaris. Perfect for luxury travelers and adventure seekers.',
    fullDescription: 'Dubai is a city of superlatives - home to the world\'s tallest building, largest shopping malls, and most luxurious hotels. This package offers a perfect mix of modern attractions, traditional experiences, and desert adventures. Visit iconic landmarks, enjoy shopping, and experience the Arabian hospitality.',
    highlights: [
      'Visit Burj Khalifa - world\'s tallest building',
      'Desert Safari with BBQ dinner',
      'Dubai Mall and Dubai Fountain show',
      'Palm Jumeirah and Atlantis',
      'Dubai Marina and JBR Beach'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Dubai', description: 'Arrive at Dubai airport, transfer to hotel. Evening Dhow Cruise with dinner on Dubai Creek.' },
      { day: 2, title: 'Dubai City Tour', description: 'Half day city tour - visit Burj Al Arab (photo stop), Jumeirah Beach, Palm Jumeirah, and Dubai Marina. Evening visit to Dubai Mall and Burj Khalifa (124th floor).' },
      { day: 3, title: 'Desert Safari', description: 'Morning at leisure. Afternoon desert safari with dune bashing, camel ride, BBQ dinner, and belly dance show.' },
      { day: 4, title: 'Abu Dhabi Day Trip', description: 'Full day trip to Abu Dhabi - visit Sheikh Zayed Mosque, Ferrari World (optional), and Yas Island.' },
      { day: 5, title: 'Departure', description: 'After breakfast, transfer to airport for departure.' }
    ],
    includes: ['Hotel accommodation', 'Breakfast', 'All transfers', 'Sightseeing', 'Desert Safari', 'Dhow Cruise'],
    excludes: ['Airfare', 'Visa', 'Lunch & Dinner (except mentioned)', 'Personal expenses'],
    location: 'Dubai, UAE',
    bestTime: 'November to March'
  },
  {
    id: 'thailand-tour-packages',
    name: 'Thailand Tour Packages',
    slug: 'thailand-tour-packages',
    category: 'international',
    price: '₹7,499',
    duration: '4N / 5D',
    minPax: 'Min 2 pax',
    images: [
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=800',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800'
    ],
    shortDescription: 'Discover the land of smiles with beautiful beaches, rich culture, and amazing cuisine. Perfect for beach lovers and culture enthusiasts.',
    fullDescription: 'Thailand offers a perfect blend of tropical beaches, ancient temples, vibrant cities, and delicious cuisine. This package covers Bangkok and Pattaya - experience the bustling capital, visit ancient temples, enjoy beach activities, and indulge in Thai massages and cuisine.',
    highlights: [
      'Visit Grand Palace and Wat Phra Kaew in Bangkok',
      'Beach activities in Pattaya',
      'Coral Island tour',
      'Thai cultural shows',
      'Shopping at floating markets'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Bangkok', description: 'Arrive at Bangkok airport, transfer to hotel. Evening visit to Asiatique Riverfront for shopping and dinner.' },
      { day: 2, title: 'Bangkok City Tour', description: 'Full day tour - visit Grand Palace, Wat Phra Kaew (Temple of Emerald Buddha), Wat Pho, and take a boat ride on Chao Phraya River.' },
      { day: 3, title: 'Bangkok to Pattaya', description: 'Drive to Pattaya (150 km, 2.5 hours). Check-in at hotel. Evening visit to Walking Street and enjoy nightlife.' },
      { day: 4, title: 'Coral Island Tour', description: 'Full day Coral Island tour with water sports - parasailing, jet skiing, snorkeling. Return to Pattaya in evening.' },
      { day: 5, title: 'Departure', description: 'After breakfast, transfer to airport for departure.' }
    ],
    includes: ['Hotel accommodation', 'Breakfast', 'All transfers', 'Sightseeing', 'Coral Island tour'],
    excludes: ['Airfare', 'Visa', 'Lunch & Dinner', 'Water sports', 'Personal expenses'],
    location: 'Thailand',
    bestTime: 'November to April'
  },
  {
    id: 'singapore-tour-packages',
    name: 'Singapore Tour Packages',
    slug: 'singapore-tour-packages',
    category: 'international',
    price: '₹22,900',
    duration: '3N / 4D',
    minPax: 'Min 2 pax',
    images: [
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=800',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800'
    ],
    shortDescription: 'Explore the modern city-state of Singapore with its iconic attractions, world-class shopping, and diverse cuisine.',
    fullDescription: 'Singapore is a vibrant city-state that seamlessly blends modernity with tradition. This package covers iconic attractions like Marina Bay Sands, Sentosa Island, Gardens by the Bay, and Universal Studios. Experience the perfect mix of entertainment, culture, and shopping.',
    highlights: [
      'Visit Marina Bay Sands and Gardens by the Bay',
      'Universal Studios Singapore',
      'Sentosa Island attractions',
      'Singapore Flyer and Merlion',
      'Shopping on Orchard Road'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Singapore', description: 'Arrive at Singapore airport, transfer to hotel. Evening visit to Marina Bay Sands, Gardens by the Bay, and light show.' },
      { day: 2, title: 'Universal Studios', description: 'Full day at Universal Studios Singapore. Experience thrilling rides and shows. Evening return to hotel.' },
      { day: 3, title: 'Sentosa Island', description: 'Full day at Sentosa Island - visit S.E.A. Aquarium, Adventure Cove Waterpark, and enjoy beach activities.' },
      { day: 4, title: 'City Tour & Departure', description: 'Half day city tour - visit Merlion Park, Orchard Road for shopping. Afternoon transfer to airport for departure.' }
    ],
    includes: ['Hotel accommodation', 'Breakfast', 'All transfers', 'Universal Studios ticket', 'Sentosa attractions'],
    excludes: ['Airfare', 'Visa', 'Lunch & Dinner', 'Personal expenses'],
    location: 'Singapore',
    bestTime: 'Year-round (best: February to April)'
  }
];

export function getPackageBySlug(slug: string): Package | undefined {
  return packages.find(pkg => pkg.slug === slug);
}

export function getPackagesByCategory(category: 'india' | 'international'): Package[] {
  return packages.filter(pkg => pkg.category === category);
}

