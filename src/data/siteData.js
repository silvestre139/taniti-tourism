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

// Image credits data - keyed by filename for easy lookup
export const imageCredits = {
  'hero.jpg': {
    credits: 'Unsplash. (2019, May 29). Photo by Tom Winckels on Unsplash. Unsplash.com.',
    url: 'https://unsplash.com/photos/green-trees-on-cliff-I7oLRdM9YIw'
  },
  'beach.jpg': {
    credits: 'Unsplash. (2017, October 9). Photo by Sean Oulashin on Unsplash. Unsplash.com.',
    url: 'https://unsplash.com/photos/seashore-during-golden-hour-KMn4VEeEPR8'
  },
  'volcano.jpg': {
    credits: 'Unsplash. (2016, May 4). Photo by NASA on Unsplash. Unsplash.com.',
    url: 'https://unsplash.com/photos/nebula--hI5dX2ObAs'
  },
  'rainforest.jpg': {
    credits: 'Unsplash. (2015, November 24). Photo by Sebastian Unrau on Unsplash. Unsplash.com.',
    url: 'https://unsplash.com/photos/trees-on-forest-with-sun-rays-sp-p7uuT0tw'
  },
  'culture.jpg': {
    credits: 'Anasch, R. (2018, August 7). assorted-color filling book lot. Unsplash.com; Unsplash.',
    url: 'https://unsplash.com/photos/assorted-color-filling-book-lot-McX3XuJRsUM'
  },
  'snorkeling.jpg': {
    credits: 'Lambarri, S. P. (2018, December 11). two people scuba diving underwater. Unsplash.com; Unsplash.',
    url: 'https://unsplash.com/photos/two-people-scuba-diving-underwater-7i5HMCGupVw'
  },
  'zipline.jpg': {
    credits: 'Rune Haugseng. (2018, July 6). group of people kayaking on body of water. Unsplash.com; Unsplash.',
    url: 'https://unsplash.com/photos/group-of-people-kayaking-on-body-of-water-qNe4XPYDnSY'
  },
  'resort.jpg': {
    credits: 'Unsplash. (2019, October 24). Photo by Anmol Seth on Unsplash. Unsplash.com.',
    url: 'https://unsplash.com/photos/blue-outdoor-pool-hDbCjHNdF48'
  },
  'hotel.jpg': {
    credits: 'Unsplash. (2019, August 17). Photo by Edvin Johansson on Unsplash. Unsplash.com.',
    url: 'https://unsplash.com/photos/person-in-swimming-pool-during-daytime-rlwE8f8anOc'
  },
  'restaurant.jpg': {
    credits: 'Unsplash. (2018, January 29). Photo by Jason Leung on Unsplash. Unsplash.com.',
    url: 'https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA'
  },
  'helicopter.jpg': {
    credits: 'G, Y. (2018, October 31). white airliner on gray pavement. Unsplash.com; Unsplash.',
    url: 'https://unsplash.com/photos/white-airliner-on-gray-pavement-Qhy9A3NQZAE'
  },
  'museum.jpg': {
    credits: 'Unsplash. (2019, April 10). Photo by Andrew Neel on Unsplash. Unsplash.com.',
    url: 'https://unsplash.com/photos/assorted-picture-frames-on-wall-acowe0pCVBg'
  },
  'aerial.jpg': {
    credits: 'Parmly, R. (2015, July 10). aerial photography of airliner. Unsplash.com; Unsplash.',
    url: 'https://unsplash.com/photos/aerial-photography-of-airliner-rf6ywHVkrlY'
  },
  'restaurant-seafood.jpg': {
    credits: 'Unsplash. (2019, May 31). Photo by Albert on Unsplash. Unsplash.com.',
    url: 'https://unsplash.com/photos/a-restaurant-with-a-view-of-the-water-YYZU0Lo1uXE'
  },
  'restaurant-american.jpg': {
    credits: 'Shawn. (2019, April 16). brown and gray concrete store. Unsplash.com; Unsplash.',
    url: 'https://unsplash.com/photos/brown-and-gray-concrete-store-nmpW_WwwVSc'
  },
  'restaurant-asian.jpg': {
    credits: 'Unsplash. (2020, January 21). Photo by Derek Duran on Unsplash. Unsplash.com.',
    url: 'https://unsplash.com/photos/sushi-on-white-ceramic-plate-Jz4QMhLvGgw'
  },
  'restaurant-beachside.jpg': {
    credits: 'Welcome To Zscaler Directory Authentication. (2026). Unsplash.com.',
    url: 'https://unsplash.com/photos/clear-drinking-glass-on-table-OFJGlG3sKik'
  }
};

// Helper function to get credit info from image path
export const getImageCredit = (imagePath) => {
  if (!imagePath) return null;
  // Extract filename from path (handles both /images/name.jpg and full URLs)
  const filename = imagePath.split('/').pop();
  return imageCredits[filename] || null;
};
