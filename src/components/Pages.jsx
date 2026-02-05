import React from 'react';
import { restaurants, images } from '../data/siteData';
import { PageHeader, StarRating, SafeImage, ImageCredit } from './UI';

// Dining Page
export const Dining = () => {
  const cuisines = ['All', 'Local Seafood', 'American', 'Pan-Asian', 'Café'];
  const [filter, setFilter] = React.useState('All');

  const filteredRestaurants = restaurants.filter(r => filter === 'All' || r.cuisine === filter);

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PageHeader label="Culinary" title="Dining & Cuisine" subtitle="Discover the flavors of Taniti Island" />

        <div className="flex flex-wrap gap-2 mb-8">
          {cuisines.map((cuisine) => (
            <button
              key={cuisine}
              onClick={() => setFilter(cuisine)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cuisine ? 'bg-teal-600 text-white' : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cuisine}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative h-44 overflow-hidden">
                <SafeImage src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover" />
                <ImageCredit src={restaurant.image} position="overlay" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full">{restaurant.cuisine}</span>
                  <span className="text-xs font-medium text-stone-600 bg-stone-100 px-2.5 py-1 rounded-full">{restaurant.price}</span>
                </div>
                <h3 className="font-semibold text-lg text-stone-800 mb-2">{restaurant.name}</h3>
                <p className="text-stone-500 text-sm mb-4">{restaurant.description}</p>
                <StarRating rating={restaurant.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Grocery Info */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-stone-100">
          <h3 className="text-xl font-semibold text-stone-800 mb-6">Grocery & Convenience</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Supermarkets', desc: '2 full-service supermarkets in Taniti City' },
              { title: 'Grocery Stores', desc: '2 smaller grocery stores for daily essentials' },
              { title: '24-Hour Store', desc: '1 convenience store open around the clock' },
            ].map((item, i) => (
              <div key={i} className="bg-stone-50 rounded-xl p-5">
                <h4 className="font-semibold text-stone-800 mb-2">{item.title}</h4>
                <p className="text-stone-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Transport Page
export const Transport = () => {
  const transportOptions = [
    { icon: '🚌', title: 'Public Bus', desc: 'Serves Taniti City, 5am-11pm daily', badge: 'Affordable' },
    { icon: '🚕', title: 'Taxi Service', desc: 'Available throughout Taniti City', badge: 'Convenient' },
    { icon: '🚗', title: 'Car Rental', desc: 'Available near the airport', badge: 'Flexible' },
    { icon: '🚲', title: 'Bike Rental', desc: 'Multiple vendors available', badge: 'Eco-friendly' },
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PageHeader label="Travel" title="Getting Here & Around" />

        <h2 className="text-2xl font-semibold text-stone-800 mb-6">Arriving in Taniti</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative rounded-2xl overflow-hidden h-64">
            <SafeImage src={images.aerial} alt="By Air" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent"></div>
            <ImageCredit src={images.aerial} position="overlay" />
            <div className="absolute bottom-8 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">By Air</h3>
              <p className="text-white/80 text-sm">Our airport accommodates small jets and propeller planes. Expansion underway for larger aircraft.</p>
              <span className="inline-block mt-3 text-xs bg-teal-500 px-3 py-1 rounded-full">Most Popular</span>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-64">
            <SafeImage src={images.beach} alt="By Cruise" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent"></div>
            <ImageCredit src={images.beach} position="overlay" />
            <div className="absolute bottom-8 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">By Cruise Ship</h3>
              <p className="text-white/80 text-sm">A cruise ship docks in Yellow Leaf Bay for one night per week.</p>
              <span className="inline-block mt-3 text-xs bg-amber-500 px-3 py-1 rounded-full">Weekly Service</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-stone-800 mb-6">Island Transportation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transportOptions.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center border border-stone-100 hover:shadow-lg transition-shadow">
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="font-semibold text-lg text-stone-800 mb-2">{item.title}</h3>
              <p className="text-stone-500 text-sm mb-4">{item.desc}</p>
              <span className="text-xs font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full">{item.badge}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <span className="text-3xl">🚶</span>
            <div>
              <h3 className="font-semibold text-emerald-800 mb-1">Walking Friendly</h3>
              <p className="text-emerald-700 text-sm">Taniti City is flat and very walkable. The Merriton Landing area is also easy to explore on foot.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// About Page
export const About = () => {
  const infoCards = [
    { icon: '💵', title: 'Currency', info: 'U.S. Dollar accepted everywhere. Euro and Yen also widely accepted.' },
    { icon: '🔌', title: 'Power', info: '120 volts, same as the United States. No adapter needed.' },
    { icon: '🗣️', title: 'Language', info: 'Many younger Tanitians speak fluent English.' },
    { icon: '🏥', title: 'Healthcare', info: 'One hospital with multilingual employees and clinics.' },
    { icon: '🛡️', title: 'Safety', info: 'Violent crime is very rare. Be aware of pickpocketing.' },
    { icon: '🍺', title: 'Alcohol', info: 'Drinking age is 18. No sales between midnight and 9am.' },
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PageHeader label="Discover" title="About Taniti Island" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative rounded-2xl overflow-hidden h-80">
            <SafeImage src={images.hero} alt="Taniti Island" className="w-full h-full object-cover" />
            <ImageCredit src={images.hero} position="overlay" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Island Overview</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Taniti is a small, tropical island in the Pacific with an area of less than 500 square miles. Despite its size, the terrain is incredibly varied, including sandy and rocky beaches, a small but safe harbor, lush tropical rainforests, and a mountainous interior featuring a small, active volcano.
            </p>
            <p className="text-stone-600 leading-relaxed">
              With an indigenous population of about 20,000, Taniti has traditionally relied on fishing and agriculture. Recent growth in tourism is bringing new opportunities while preserving the island's natural beauty and cultural heritage.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-stone-800 mb-6">Essential Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoCards.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-stone-100">
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="font-semibold text-lg text-stone-800 mb-2">{item.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{item.info}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <span className="text-3xl">📅</span>
            <div>
              <h3 className="font-semibold text-amber-800 mb-1">Plan for Holidays</h3>
              <p className="text-amber-700 text-sm">Taniti enjoys many national holidays. Tourist attractions and restaurants may be closed, so visitors should plan accordingly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
