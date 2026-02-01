import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { activities } from '../data/siteData';
import { StarRating, SafeImage } from './UI';

const ActivityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const activity = activities.find(a => a.id === parseInt(id));

  const [bookingDate, setBookingDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [bookingStep, setBookingStep] = useState(1);
  const [galleryIndex, setGalleryIndex] = useState(0);

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Activity not found</p>
      </div>
    );
  }

  const total = activity.price * guests;

  const reviews = [
    { name: 'Sarah M.', date: '2 weeks ago', rating: 5, text: 'Absolutely incredible experience! Our guide was so knowledgeable.' },
    { name: 'John D.', date: '1 month ago', rating: 5, text: 'Perfect activity for our family vacation. Highly recommend!' },
    { name: 'Emily R.', date: '1 month ago', rating: 4, text: 'Great tour, would definitely book again on our next visit.' },
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8">
          <Link to="/" className="text-stone-500 hover:text-teal-600">Home</Link>
          <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link to="/activities" className="text-stone-500 hover:text-teal-600">Activities</Link>
          <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-stone-800 font-medium">{activity.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="relative rounded-2xl overflow-hidden h-72 md:h-96 mb-8">
              <SafeImage src={activity.image} alt={activity.name} className="w-full h-full object-cover" />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button onClick={() => setGalleryIndex(i => Math.max(0, i - 1))} className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
                  <svg className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button onClick={() => setGalleryIndex(i => Math.min(5, i + 1))} className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
                  <svg className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-stone-700">
                {galleryIndex + 1} / 6
              </div>
            </div>

            <span className="text-xs font-medium text-teal-600 tracking-wider uppercase">{activity.category}</span>
            <h1 className="text-3xl md:text-4xl font-serif font-light text-stone-800 mt-2 mb-4">{activity.name}</h1>
            <div className="flex items-center gap-4 mb-8">
              <StarRating rating={activity.rating} showCount count={activity.reviews} />
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">{activity.description}</p>

            {/* Info Cards */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { label: 'Duration', value: activity.duration, icon: '⏱️' },
                { label: 'Group Size', value: `Max ${activity.maxGroup}`, icon: '👥' },
                { label: 'Difficulty', value: activity.difficulty, icon: '📊' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center border border-stone-100">
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <span className="text-xs text-stone-500 uppercase tracking-wider">{item.label}</span>
                  <p className="font-semibold text-stone-800 mt-1">{item.value}</p>
                </div>
              ))}
            </div>

            {/* What's Included */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-stone-800 mb-4">What's Included</h3>
              <div className="grid grid-cols-2 gap-3">
                {activity.includes.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-teal-50 rounded-lg p-3">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Requirements</h3>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <ul className="space-y-2">
                  {activity.requirements.map((req, i) => (
                    <li key={i} className="flex items-center gap-3 text-amber-800">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* What to Bring */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-stone-800 mb-4">What to Bring</h3>
              <div className="flex flex-wrap gap-2">
                {activity.whatToBring.map((item, i) => (
                  <span key={i} className="bg-stone-100 px-4 py-2 rounded-full text-stone-700 text-sm">{item}</span>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h3 className="text-xl font-semibold text-stone-800 mb-6">Guest Reviews</h3>
              <div className="space-y-4">
                {reviews.map((review, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-stone-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {review.name[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-stone-800">{review.name}</span>
                          <span className="text-sm text-stone-400">{review.date}</span>
                        </div>
                        <StarRating rating={review.rating} />
                        <p className="text-stone-600 mt-3">{review.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-28 border border-stone-100">
              <div className="text-center mb-6 pb-6 border-b border-stone-100">
                <span className="text-sm text-stone-500">From</span>
                <div className="mt-1">
                  <span className="text-4xl font-semibold text-stone-800">${activity.price}</span>
                  <span className="text-stone-500"> / person</span>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-6">
                {[1, 2, 3].map((step) => (
                  <React.Fragment key={step}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${bookingStep >= step ? 'bg-teal-600 text-white' : 'bg-stone-100 text-stone-400'}`}>
                      {bookingStep > step ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : step}
                    </div>
                    {step < 3 && <div className={`flex-1 h-0.5 mx-2 transition-all ${bookingStep > step ? 'bg-teal-600' : 'bg-stone-200'}`}></div>}
                  </React.Fragment>
                ))}
              </div>

              {/* Step 1: Select Date & Guests */}
              {bookingStep === 1 && (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-stone-700 mb-2">Select Date</label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-stone-700 mb-2">Number of Guests</label>
                    <div className="flex items-center justify-between bg-stone-50 border border-stone-200 rounded-xl px-4 py-3">
                      <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:border-teal-500 transition-colors">−</button>
                      <span className="font-semibold text-stone-800">{guests} {guests === 1 ? 'guest' : 'guests'}</span>
                      <button onClick={() => setGuests(Math.min(activity.maxGroup, guests + 1))} className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:border-teal-500 transition-colors">+</button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-4 border-t border-stone-100 mb-6">
                    <span className="text-stone-600">Total</span>
                    <span className="text-2xl font-semibold text-stone-800">${total}</span>
                  </div>
                  <button
                    onClick={() => setBookingStep(2)}
                    disabled={!bookingDate}
                    className={`w-full py-4 rounded-xl font-semibold transition-all ${bookingDate ? 'bg-teal-600 hover:bg-teal-700 text-white' : 'bg-stone-200 text-stone-400 cursor-not-allowed'}`}
                  >
                    Check Availability
                  </button>
                </>
              )}

              {/* Step 2: Confirm */}
              {bookingStep === 2 && (
                <>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-2 text-emerald-700 font-semibold mb-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Available
                    </div>
                    <p className="text-emerald-600 text-sm">Spots available for {guests} guests on {bookingDate}</p>
                  </div>
                  <div className="bg-stone-50 rounded-xl p-4 mb-6 space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-stone-500">Activity</span><span className="font-medium">{activity.name}</span></div>
                    <div className="flex justify-between"><span className="text-stone-500">Date</span><span className="font-medium">{bookingDate}</span></div>
                    <div className="flex justify-between"><span className="text-stone-500">Guests</span><span className="font-medium">{guests}</span></div>
                    <div className="flex justify-between pt-3 border-t border-stone-200"><span className="text-stone-700 font-medium">Total</span><span className="font-semibold text-lg">${total}</span></div>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setBookingStep(1)} className="flex-1 py-3 border border-stone-300 rounded-xl font-medium hover:bg-stone-50 transition-colors">Back</button>
                    <button onClick={() => setBookingStep(3)} className="flex-1 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-medium transition-colors">Confirm</button>
                  </div>
                </>
              )}

              {/* Step 3: Success */}
              {bookingStep === 3 && (
                <>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-1">Booking Confirmed</h3>
                    <p className="text-stone-500 text-sm">Confirmation sent to your email</p>
                  </div>
                  <div className="bg-stone-50 rounded-xl p-4 mb-6 space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-stone-500">Confirmation</span><span className="font-mono font-medium">TAN-{Math.random().toString(36).substr(2, 6).toUpperCase()}</span></div>
                    <div className="flex justify-between"><span className="text-stone-500">Activity</span><span className="font-medium">{activity.name}</span></div>
                    <div className="flex justify-between"><span className="text-stone-500">Date</span><span className="font-medium">{bookingDate}</span></div>
                    <div className="flex justify-between pt-3 border-t border-stone-200"><span className="text-stone-700 font-medium">Total Paid</span><span className="font-semibold text-emerald-600">${total}</span></div>
                  </div>
                  <button onClick={() => navigate('/activities')} className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold transition-colors">
                    Browse More Activities
                  </button>
                </>
              )}

              {bookingStep < 3 && (
                <div className="mt-6 flex items-center justify-center gap-4 text-sm text-stone-500">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Free cancellation
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Instant confirmation
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
