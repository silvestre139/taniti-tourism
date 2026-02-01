import React from 'react';
import { useNavigate } from 'react-router-dom';
import { images, activities, lodgings } from '../data/siteData';
import { ActivityCard, LodgingCard, SectionHeader, SafeImage } from './UI';

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Beaches & Water', image: images.beach, filter: 'Water Sports' },
    { name: 'Rainforest', image: images.rainforest, filter: 'Land Adventures' },
    { name: 'Volcano', image: images.volcano, filter: 'Land Adventures' },
    { name: 'Culture', image: images.culture, filter: 'Cultural' },
  ];


  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-teal-600"
          style={{ backgroundImage: `url(${images.hero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-900/60"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <span className="text-teal-300 tracking-[0.3em] uppercase text-sm mb-4 font-medium">Welcome to</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-6 text-center">
            Taniti Island
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/80 text-center max-w-2xl font-light">
            Where pristine beaches meet volcanic peaks in the heart of the Pacific
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/activities')}
              className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Experiences
            </button>
            <button
              onClick={() => navigate('/lodging')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white rounded-full font-medium transition-all"
            >
              Plan Your Stay
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <span className="text-teal-600 tracking-widest uppercase text-sm font-medium">Discover</span>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-stone-800 mt-2">Explore the Island</h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => navigate('/activities', { state: { filter: cat.filter } })}
              className="group relative h-48 md:h-64 rounded-2xl overflow-hidden"
            >
              <SafeImage src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-white font-serif font-medium text-lg md:text-xl">{cat.name}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Activities Section */}
      <div className="bg-stone-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Experiences"
            title="Popular Activities"
            action="View All Activities"
            onAction={() => navigate('/activities')}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {activities.slice(0, 3).map((activity) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                onClick={() => navigate(`/activities/${activity.id}`)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lodging Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          label="Accommodations"
          title="Where to Stay"
          action="View All Lodging"
          onAction={() => navigate('/lodging')}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {lodgings.slice(0, 3).map((lodging) => (
            <LodgingCard
              key={lodging.id}
              lodging={lodging}
              onClick={() => navigate(`/lodging/${lodging.id}`)}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
