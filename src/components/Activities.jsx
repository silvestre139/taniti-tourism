import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { activities, categories, priceRanges } from '../data/siteData';
import { ActivityCard, PageHeader } from './UI';

const Activities = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const initialFilter = location.state?.filter || 'All';
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [priceFilter, setPriceFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Popularity');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredActivities = activities
    .filter(a => activeFilter === 'All' || a.category === activeFilter)
    .filter(a => {
      if (priceFilter === 'All') return true;
      if (priceFilter === 'Under $50') return a.price < 50;
      if (priceFilter === '$50-100') return a.price >= 50 && a.price <= 100;
      if (priceFilter === '$100-200') return a.price > 100 && a.price <= 200;
      if (priceFilter === '$200+') return a.price > 200;
      return true;
    })
    .filter(a => a.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'Popularity') return b.reviews - a.reviews;
      if (sortBy === 'Price: Low') return a.price - b.price;
      if (sortBy === 'Price: High') return b.price - a.price;
      if (sortBy === 'Rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PageHeader label="Experiences" title="Activities & Tours" />

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search activities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-stone-800 placeholder-stone-400 shadow-sm"
            />
            <svg className="absolute left-4 top-4 w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-stone-200">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="px-4 py-2 bg-white border border-stone-200 rounded-xl text-sm text-stone-700 focus:ring-2 focus:ring-teal-500"
            >
              <option value="All">Any Price</option>
              {priceRanges.slice(1).map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white border border-stone-200 rounded-xl text-sm text-stone-700 focus:ring-2 focus:ring-teal-500"
            >
              <option value="Popularity">Most Popular</option>
              <option value="Price: Low">Price: Low to High</option>
              <option value="Price: High">Price: High to Low</option>
              <option value="Rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <p className="text-sm text-stone-500 mb-6">{filteredActivities.length} experiences available</p>

        {/* Activity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredActivities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              onClick={() => navigate(`/activities/${activity.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
