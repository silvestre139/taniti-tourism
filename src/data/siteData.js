// Local image paths - images should be in public/images/
// Run 'npm run download-images' to download images from Unsplash
// In Create React App, files in public/ are served from root URL
const getImagePath = (filename) => {
  // In development, PUBLIC_URL is usually empty or undefined
  // In production builds, it's set to the homepage value
  // Always use absolute path starting with /images/
  const publicUrl = process.env.PUBLIC_URL;
  
  // If PUBLIC_URL is set and not empty, use it (for production/GitHub Pages)
  if (publicUrl && publicUrl.trim() !== '') {
    const cleanBase = publicUrl.replace(/\/$/, '');
    return `${cleanBase}/images/${filename}`;
  }
  
  // In development, always use /images/ (PUBLIC_URL is empty)
  return `/images/${filename}`;
};

export const images = {
  hero: getImagePath('hero.jpg'),
  beach: getImagePath('beach.jpg'),
  volcano: getImagePath('volcano.jpg'),
  rainforest: getImagePath('rainforest.jpg'),
  culture: getImagePath('culture.jpg'),
  snorkeling: getImagePath('snorkeling.jpg'),
  zipline: getImagePath('zipline.jpg'),
  resort: getImagePath('resort.jpg'),
  hotel: getImagePath('hotel.jpg'),
  restaurant: getImagePath('restaurant.jpg'),
  helicopter: getImagePath('helicopter.jpg'),
  museum: getImagePath('museum.jpg'),
  aerial: getImagePath('aerial.jpg'),
  // Restaurant-specific images
  restaurantSeafood: getImagePath('restaurant-seafood.jpg'),
  restaurantAmerican: getImagePath('restaurant-american.jpg'),
  restaurantAsian: getImagePath('restaurant-asian.jpg'),
  restaurantBeachside: getImagePath('restaurant-beachside.jpg'),
};

export const activities = [
  {
    id: 1,
    name: 'Snorkeling Tours',
    category: 'Water Sports',
    price: 45,
    rating: 4.9,
    reviews: 124,
    duration: '3 hours',
    difficulty: 'Beginner-friendly',
    maxGroup: 8,
    image: images.snorkeling,
    description: 'Explore vibrant coral reefs around Yellow Leaf Bay with experienced local guides.',
    includes: ['All equipment', 'Professional guide', 'Safety briefing', 'Underwater photos'],
    requirements: ['Minimum age: 8 years', 'Basic swimming ability'],
    whatToBring: ['Swimsuit', 'Towel', 'Sunscreen']
  },
  {
    id: 2,
    name: 'Zip-lining Adventure',
    category: 'Land Adventures',
    price: 65,
    rating: 4.6,
    reviews: 89,
    duration: '2 hours',
    difficulty: 'Moderate',
    maxGroup: 10,
    image: images.zipline,
    description: 'Soar through the rainforest canopy on our exhilarating zip-line course.',
    includes: ['Safety equipment', 'Professional guide', 'Training session'],
    requirements: ['Minimum age: 12 years', 'Weight limit: 250 lbs'],
    whatToBring: ['Closed-toe shoes', 'Comfortable clothing']
  },
  {
    id: 3,
    name: 'Volcano Hiking Tour',
    category: 'Land Adventures',
    price: 55,
    rating: 4.8,
    reviews: 156,
    duration: '4 hours',
    difficulty: 'Moderate',
    maxGroup: 12,
    image: images.volcano,
    description: "Guided summit tour of Taniti's active volcano with breathtaking views.",
    includes: ['Expert guide', 'Safety briefing', 'Light refreshments'],
    requirements: ['Moderate fitness level', 'Minimum age: 10 years'],
    whatToBring: ['Hiking boots', 'Water bottle', 'Hat']
  },
  {
    id: 4,
    name: 'Helicopter Island Tour',
    category: 'Tours',
    price: 200,
    rating: 4.9,
    reviews: 98,
    duration: '45 min',
    difficulty: 'Easy',
    maxGroup: 4,
    image: images.helicopter,
    description: 'Breathtaking aerial views of the entire island including volcano and beaches.',
    includes: ['Professional pilot', 'Headset communication', 'Photo opportunities'],
    requirements: ['Weight limit: 250 lbs per passenger'],
    whatToBring: ['Camera', 'Comfortable clothing']
  },
  {
    id: 5,
    name: 'Heritage Museum Tour',
    category: 'Cultural',
    price: 15,
    rating: 4.5,
    reviews: 45,
    duration: '1.5 hours',
    difficulty: 'Easy',
    maxGroup: 20,
    image: images.museum,
    description: "Discover Taniti's rich heritage and indigenous culture at our history museum.",
    includes: ['Guided tour', 'Audio guide available'],
    requirements: ['None'],
    whatToBring: ['Comfortable walking shoes']
  },
  {
    id: 6,
    name: 'Rainforest Nature Walk',
    category: 'Land Adventures',
    price: 35,
    rating: 4.7,
    reviews: 112,
    duration: '3 hours',
    difficulty: 'Easy',
    maxGroup: 15,
    image: images.rainforest,
    description: 'Guided walk through lush tropical rainforest with wildlife spotting.',
    includes: ['Expert naturalist guide', 'Binoculars', 'Nature guidebook'],
    requirements: ['Basic mobility', 'Minimum age: 5 years'],
    whatToBring: ['Bug spray', 'Water', 'Camera']
  }
];

export const lodgings = [
  {
    id: 1,
    name: 'Yellow Leaf Bay Resort',
    type: 'Luxury Resort',
    price: 350,
    rating: 4.8,
    reviews: 245,
    image: images.resort,
    amenities: ['Infinity Pool', 'Full-Service Spa', 'Fine Dining', 'Private Beach', 'Concierge'],
    description: 'Award-winning four-star luxury resort with stunning views of Yellow Leaf Bay.',
    rooms: 120,
    maxGuests: 4,
    checkIn: '3:00 PM',
    checkOut: '11:00 AM'
  },
  {
    id: 2,
    name: 'Taniti Oceanfront Hotel',
    type: 'Hotel',
    price: 150,
    rating: 4.5,
    reviews: 189,
    image: images.hotel,
    amenities: ['Pool', 'Restaurant', 'Free WiFi', 'Airport Shuttle', 'Gym'],
    description: 'Modern beachfront hotel in the heart of Taniti City with ocean views.',
    rooms: 85,
    maxGuests: 2,
    checkIn: '3:00 PM',
    checkOut: '11:00 AM'
  },
  {
    id: 3,
    name: 'Rainforest Retreat B&B',
    type: 'Bed & Breakfast',
    price: 95,
    rating: 4.7,
    reviews: 67,
    image: images.rainforest,
    amenities: ['Gourmet Breakfast', 'Tropical Garden', 'Free WiFi', 'Tour Booking'],
    description: 'Charming boutique B&B surrounded by lush tropical gardens.',
    rooms: 8,
    maxGuests: 2,
    checkIn: '2:00 PM',
    checkOut: '10:00 AM'
  },
  {
    id: 4,
    name: 'Volcano View Villas',
    type: 'Private Villa',
    price: 275,
    rating: 4.9,
    reviews: 34,
    image: images.volcano,
    amenities: ['Private Pool', 'Full Kitchen', 'Mountain Views', 'Daily Housekeeping'],
    description: "Exclusive private villas with unobstructed views of Taniti's volcano.",
    rooms: 12,
    maxGuests: 6,
    checkIn: '4:00 PM',
    checkOut: '12:00 PM'
  }
];

// Practical Information for Taniti Island
export const practicalInfo = {
  currency: {
    title: 'Currency',
    description: 'Taniti uses the US Dollar (USD) as its official currency.',
    details: [
      'US Dollar (USD) is the official currency',
      'Major credit cards accepted at most establishments',
      'ATMs available in Taniti City',
      'Currency exchange available at airport and major hotels',
      'Tipping is appreciated but not mandatory (10-15% is customary)'
    ]
  },
  safety: {
    title: 'Safety Information',
    description: 'Taniti is a safe destination, but it\'s always good to be prepared.',
    details: [
      'Emergency services: Dial 911',
      'Crime rate is very low on the island',
      'Swim only in designated areas with lifeguards',
      'Be cautious when hiking - stay on marked trails',
      'Volcano area requires guided tours only',
      'Travel insurance recommended for medical emergencies',
      'Keep valuables secure and don\'t leave items unattended on beaches'
    ]
  },
  gettingThere: {
    title: 'Getting There',
    description: 'Taniti is accessible by air and sea.',
    details: [
      'Taniti International Airport (TIA) - 20 minutes from Taniti City',
      'Direct flights from major US cities (4-6 hours)',
      'Ferry service available from nearby islands',
      'Airport shuttle service available to most hotels',
      'Car rentals available at airport and in Taniti City',
      'Taxi service available 24/7',
      'Public bus service connects airport to city center'
    ]
  }
};

export const restaurants = [
  { id: 1, name: 'Ocean Harvest', cuisine: 'Local Seafood', price: '$$', rating: 4.8, description: 'Fresh local fish and traditional Tanitian rice dishes.', image: images.restaurantSeafood },
  { id: 2, name: 'The American Grill', cuisine: 'American', price: '$$', rating: 4.3, description: 'Classic American comfort food with island twist.', image: images.restaurantAmerican },
  { id: 3, name: 'Sakura Garden', cuisine: 'Pan-Asian', price: '$$$', rating: 4.6, description: 'Upscale Asian fusion dining experience.', image: images.restaurantAsian },
  { id: 4, name: 'Beachside Bistro', cuisine: 'Local Seafood', price: '$', rating: 4.5, description: 'Casual beachfront dining with daily catch.', image: images.restaurantBeachside }
];

export const categories = ['All', 'Water Sports', 'Land Adventures', 'Cultural', 'Tours'];
export const priceRanges = ['All', 'Under $50', '$50-100', '$100-200', '$200+'];
