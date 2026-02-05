import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { lodgings, practicalInfo } from '../data/siteData';
import { StarRating, SafeImage, ImageCredit } from './UI';

const LodgingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lodging = lodgings.find(l => l.id === parseInt(id));

  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [bookingStep, setBookingStep] = useState(1);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [activeInfoTab, setActiveInfoTab] = useState('currency');

  if (!lodging) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Lodging not found</p>
      </div>
    );
  }

  // Calculate number of nights
  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const diffTime = Math.abs(checkOut - checkIn);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const nights = calculateNights();
  const total = lodging.price * nights * rooms;

  const reviews = [
    { name: 'Michael T.', date: '1 week ago', rating: 5, text: 'Absolutely stunning property! The views were incredible and the service was impeccable.' },
    { name: 'Jennifer L.', date: '2 weeks ago', rating: 5, text: 'Perfect location and amazing amenities. We will definitely be back!' },
    { name: 'Robert K.', date: '1 month ago', rating: 4, text: 'Great stay overall. The rooms were clean and comfortable, staff was friendly.' },
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
          <Link to="/lodging" className="text-stone-500 hover:text-teal-600">Lodging</Link>
          <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-stone-800 font-medium">{lodging.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="relative rounded-2xl overflow-hidden h-72 md:h-96 mb-8">
              <SafeImage src={lodging.image} alt={lodging.name} className="w-full h-full object-cover" />
              <div className="absolute bottom-12 right-4 flex gap-2">
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
              <div className="absolute bottom-12 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-stone-700">
                {galleryIndex + 1} / 6
              </div>
              <ImageCredit src={lodging.image} position="overlay" />
            </div>

            <span className="text-xs font-medium text-teal-600 tracking-wider uppercase">{lodging.type}</span>
            <h1 className="text-3xl md:text-4xl font-serif font-light text-stone-800 mt-2 mb-4">{lodging.name}</h1>
            <div className="flex items-center gap-4 mb-8">
              <StarRating rating={lodging.rating} showCount count={lodging.reviews} />
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">{lodging.description}</p>

            {/* Info Cards */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { label: 'Check-in', value: lodging.checkIn, icon: '🕐' },
                { label: 'Check-out', value: lodging.checkOut, icon: '🕐' },
                { label: 'Max Guests', value: `${lodging.maxGuests} per room`, icon: '👥' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center border border-stone-100">
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <span className="text-xs text-stone-500 uppercase tracking-wider">{item.label}</span>
                  <p className="font-semibold text-stone-800 mt-1">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Amenities */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                {lodging.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-3 bg-teal-50 rounded-lg p-3">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Information Section - Prominent */}
            <div className="mb-10">
              <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-semibold text-white">Essential Travel Information</h3>
                </div>
                <p className="text-teal-50 text-sm">Everything you need to know about visiting Taniti Island</p>
              </div>

              {/* Tab Navigation */}
              <div className="flex gap-2 mb-6 border-b border-stone-200">
                {[
                  { id: 'currency', label: 'Currency', icon: '💵' },
                  { id: 'safety', label: 'Safety', icon: '🛡️' },
                  { id: 'gettingThere', label: 'Getting There', icon: '✈️' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveInfoTab(tab.id)}
                    className={`px-6 py-3 font-medium text-sm transition-all border-b-2 ${
                      activeInfoTab === tab.id
                        ? 'border-teal-600 text-teal-600'
                        : 'border-transparent text-stone-500 hover:text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-white rounded-xl p-8 border-2 border-teal-100 shadow-lg">
                {activeInfoTab === 'currency' && (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">💵</span>
                      <h4 className="text-2xl font-semibold text-stone-800">{practicalInfo.currency.title}</h4>
                    </div>
                    <p className="text-stone-600 text-lg mb-6">{practicalInfo.currency.description}</p>
                    <ul className="space-y-3">
                      {practicalInfo.currency.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-stone-700">
                          <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-base">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeInfoTab === 'safety' && (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🛡️</span>
                      <h4 className="text-2xl font-semibold text-stone-800">{practicalInfo.safety.title}</h4>
                    </div>
                    <p className="text-stone-600 text-lg mb-6">{practicalInfo.safety.description}</p>
                    <ul className="space-y-3">
                      {practicalInfo.safety.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-stone-700">
                          <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-base">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeInfoTab === 'gettingThere' && (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">✈️</span>
                      <h4 className="text-2xl font-semibold text-stone-800">{practicalInfo.gettingThere.title}</h4>
                    </div>
                    <p className="text-stone-600 text-lg mb-6">{practicalInfo.gettingThere.description}</p>
                    <ul className="space-y-3">
                      {practicalInfo.gettingThere.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-stone-700">
                          <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-base">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
                  <span className="text-4xl font-semibold text-stone-800">${lodging.price}</span>
                  <span className="text-stone-500"> / night</span>
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

              {/* Step 1: Select Dates, Guests & Rooms */}
              {bookingStep === 1 && (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-stone-700 mb-2">Check-in Date</label>
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-stone-700 mb-2">Check-out Date</label>
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      min={checkInDate || new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-stone-700 mb-2">Number of Guests</label>
                    <div className="flex items-center justify-between bg-stone-50 border border-stone-200 rounded-xl px-4 py-3">
                      <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:border-teal-500 transition-colors">−</button>
                      <span className="font-semibold text-stone-800">{guests} {guests === 1 ? 'guest' : 'guests'}</span>
                      <button onClick={() => setGuests(Math.min(lodging.maxGuests * rooms, guests + 1))} className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:border-teal-500 transition-colors">+</button>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-stone-700 mb-2">Number of Rooms</label>
                    <div className="flex items-center justify-between bg-stone-50 border border-stone-200 rounded-xl px-4 py-3">
                      <button onClick={() => {
                        const newRooms = Math.max(1, rooms - 1);
                        setRooms(newRooms);
                        if (guests > lodging.maxGuests * newRooms) {
                          setGuests(lodging.maxGuests * newRooms);
                        }
                      }} className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:border-teal-500 transition-colors">−</button>
                      <span className="font-semibold text-stone-800">{rooms} {rooms === 1 ? 'room' : 'rooms'}</span>
                      <button onClick={() => setRooms(rooms + 1)} className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:border-teal-500 transition-colors">+</button>
                    </div>
                  </div>
                  {nights > 0 && (
                    <div className="flex justify-between items-center py-4 border-t border-stone-100 mb-6">
                      <div>
                        <span className="text-stone-600 block text-sm">{nights} {nights === 1 ? 'night' : 'nights'}</span>
                        <span className="text-stone-500 text-xs">{rooms} {rooms === 1 ? 'room' : 'rooms'}</span>
                      </div>
                      <span className="text-2xl font-semibold text-stone-800">${total}</span>
                    </div>
                  )}
                  <button
                    onClick={() => setBookingStep(2)}
                    disabled={!checkInDate || !checkOutDate || nights === 0}
                    className={`w-full py-4 rounded-xl font-semibold transition-all ${checkInDate && checkOutDate && nights > 0 ? 'bg-teal-600 hover:bg-teal-700 text-white' : 'bg-stone-200 text-stone-400 cursor-not-allowed'}`}
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
                    <p className="text-emerald-600 text-sm">{rooms} {rooms === 1 ? 'room' : 'rooms'} available for {guests} {guests === 1 ? 'guest' : 'guests'}</p>
                    <p className="text-emerald-600 text-sm mt-1">{checkInDate} to {checkOutDate}</p>
                  </div>
                  <div className="bg-stone-50 rounded-xl p-4 mb-6 space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-stone-500">Property</span><span className="font-medium">{lodging.name}</span></div>
                    <div className="flex justify-between"><span className="text-stone-500">Check-in</span><span className="font-medium">{checkInDate}</span></div>
                    <div className="flex justify-between"><span className="text-stone-500">Check-out</span><span className="font-medium">{checkOutDate}</span></div>
                    <div className="flex justify-between"><span className="text-stone-500">Guests</span><span className="font-medium">{guests}</span></div>
                    <div className="flex justify-between"><span className="text-stone-500">Rooms</span><span className="font-medium">{rooms}</span></div>
                    <div className="flex justify-between"><span className="text-stone-500">Nights</span><span className="font-medium">{nights}</span></div>
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
                    <div className="flex justify-between"><span className="text-stone-500">Property</span><span className="font-medium">{lodging.name}</span></div>
                    <div className="flex justify-between"><span className="text-stone-500">Check-in</span><span className="font-medium">{checkInDate}</span></div>
                    <div className="flex justify-between"><span className="text-stone-500">Check-out</span><span className="font-medium">{checkOutDate}</span></div>
                    <div className="flex justify-between"><span className="text-stone-500">Guests</span><span className="font-medium">{guests}</span></div>
                    <div className="flex justify-between pt-3 border-t border-stone-200"><span className="text-stone-700 font-medium">Total Paid</span><span className="font-semibold text-emerald-600">${total}</span></div>
                  </div>
                  <button onClick={() => navigate('/lodging')} className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold transition-colors">
                    Browse More Lodging
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

export default LodgingDetail;
