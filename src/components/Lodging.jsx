import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { lodgings } from '../data/siteData';
import { LodgingCard, PageHeader } from './UI';

const Lodging = () => {
  const navigate = useNavigate();
  const [typeFilter, setTypeFilter] = useState('All');

  const types = ['All', 'Luxury Resort', 'Hotel', 'Bed & Breakfast', 'Private Villa', 'Hostel'];

  const filteredLodgings = lodgings.filter(
    l => typeFilter === 'All' || l.type === typeFilter
  );

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PageHeader label="Accommodations" title="Where to Stay" subtitle="Find your perfect accommodation on Taniti Island" />

        {/* Type Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setTypeFilter(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                typeFilter === type
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Lodging Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredLodgings.map((lodging) => (
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

export default Lodging;
