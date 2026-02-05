import React, { useState, useEffect } from 'react';
import { getImageCredit } from '../data/siteData';

// Image Component with Error Handling
export const SafeImage = ({ src, alt, className, fallback = null }) => {
  const [imgError, setImgError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  // Reset error state when src changes
  useEffect(() => {
    if (src && src !== imgSrc) {
      setImgError(false);
      setImgSrc(src);
    }
  }, [src]);

  const handleError = (e) => {
    // Only trigger error if image actually failed to load
    const img = e.target;
    console.log('Image error event:', {
      src: img.src,
      complete: img.complete,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight
    });
    
    // Wait a moment to ensure it's not just loading slowly
    setTimeout(() => {
      if (img.complete && img.naturalWidth === 0 && img.naturalHeight === 0) {
        // Image failed to load - only show error if we haven't already
        if (!imgError) {
          console.warn('Image failed to load after timeout:', img.src);
          setImgError(true);
          // Use a placeholder if fallback is not provided
          if (fallback) {
            setImgSrc(fallback);
          } else {
            setImgSrc(null); // Set to null to show placeholder div
          }
        }
      } else {
        console.log('Image loaded successfully:', img.src);
      }
    }, 1000); // Give images 1 second to load before showing error
  };

  if (imgError && !fallback && !imgSrc) {
    // Show a placeholder div when image fails and no fallback provided
    const colors = ['bg-teal-200', 'bg-emerald-200', 'bg-amber-200', 'bg-stone-200'];
    const colorIndex = (alt?.length || 0) % colors.length;
    return (
      <div className={`${className} ${colors[colorIndex]} flex items-center justify-center`}>
        <div className="text-center p-4">
          <svg className="w-12 h-12 mx-auto text-stone-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-xs text-stone-500">{alt || 'Image'}</p>
        </div>
      </div>
    );
  }

  // Always try to render the image, even if there was a previous error
  // This allows retry if the src changes
  return (
    <img
      key={src} // Force re-render when src changes
      src={imgSrc || fallback || src}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      onLoad={(e) => {
        // Reset error state if image loads successfully
        const img = e.target;
        if (img.naturalWidth > 0 && img.naturalHeight > 0) {
          setImgError(false);
          setImgSrc(src);
        }
      }}
    />
  );
};

// Image Credit Component - displays credit text for an image
// Can be used standalone or with SafeImage
// position: 'below' (default), 'overlay' (positioned at bottom of parent)
export const ImageCredit = ({ src, position = 'below', className = '' }) => {
  const credit = getImageCredit(src);

  if (!credit) return null;

  if (position === 'overlay') {
    return (
      <div className={`absolute bottom-0 left-0 right-0 bg-black/50 px-2 py-1 ${className}`}>
        <a
          href={credit.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] text-white/80 hover:text-white transition-colors truncate block"
          title={credit.credits}
          onClick={(e) => e.stopPropagation()}
        >
          Photo: {credit.credits.length > 50 ? credit.credits.substring(0, 50) + '...' : credit.credits}
        </a>
      </div>
    );
  }

  return (
    <div className={`text-xs text-stone-400 mt-1 ${className}`}>
      <a
        href={credit.url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-teal-600 transition-colors"
        title={credit.credits}
      >
        Photo: {credit.credits.length > 60 ? credit.credits.substring(0, 60) + '...' : credit.credits}
      </a>
    </div>
  );
};

// Image with Credit Component - displays image with citation below
export const ImageWithCredit = ({ src, alt, className, containerClassName = '', creditClassName = '', showCredit = true, fallback = null }) => {
  const credit = getImageCredit(src);

  return (
    <div className={containerClassName}>
      <SafeImage src={src} alt={alt} className={className} fallback={fallback} />
      {showCredit && credit && (
        <div className={`text-xs text-stone-400 mt-1 ${creditClassName}`}>
          <a
            href={credit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-600 transition-colors"
            title={credit.credits}
          >
            Photo: {credit.credits.length > 60 ? credit.credits.substring(0, 60) + '...' : credit.credits}
          </a>
        </div>
      )}
    </div>
  );
};

// Star Rating Component
export const StarRating = ({ rating, showCount = false, count = 0 }) => (
  <div className="flex items-center gap-1.5">
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-amber-400' : 'text-stone-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <span className="text-sm font-medium text-stone-600">{rating}</span>
    {showCount && <span className="text-sm text-stone-400">({count})</span>}
  </div>
);

// Activity Card Component
export const ActivityCard = ({ activity, onClick }) => (
  <div
    onClick={onClick}
    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
  >
    <div className="relative h-52 overflow-hidden">
      <SafeImage
        src={activity.image}
        alt={activity.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-teal-700">
        {activity.category}
      </div>
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-stone-700">
        {activity.duration}
      </div>
      <ImageCredit src={activity.image} position="overlay" />
    </div>
    <div className="p-5">
      <h3 className="font-semibold text-lg text-stone-800 mb-2">{activity.name}</h3>
      <p className="text-stone-500 text-sm mb-4 line-clamp-2">{activity.description}</p>
      <div className="flex justify-between items-center pt-3 border-t border-stone-100">
        <div>
          <span className="text-xl font-bold text-stone-800">${activity.price}</span>
          <span className="text-stone-500 text-sm"> / person</span>
        </div>
        <StarRating rating={activity.rating} showCount count={activity.reviews} />
      </div>
    </div>
  </div>
);

// Lodging Card Component
export const LodgingCard = ({ lodging, onClick }) => (
  <div
    onClick={onClick}
    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-stone-100"
  >
    <div className="relative h-48 overflow-hidden">
      <SafeImage
        src={lodging.image}
        alt={lodging.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-amber-700">
        {lodging.type}
      </div>
      <ImageCredit src={lodging.image} position="overlay" />
    </div>
    <div className="p-5">
      <h3 className="font-semibold text-lg text-stone-800 mb-2">{lodging.name}</h3>
      <p className="text-stone-500 text-sm mb-3 line-clamp-2">{lodging.description}</p>
      <div className="flex flex-wrap gap-1 mb-4">
        {lodging.amenities.slice(0, 3).map((amenity, i) => (
          <span key={i} className="text-xs bg-stone-100 px-2 py-1 rounded-full text-stone-600">
            {amenity}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center pt-3 border-t border-stone-100">
        <div>
          <span className="text-xl font-bold text-stone-800">${lodging.price}</span>
          <span className="text-stone-500 text-sm"> / night</span>
        </div>
        <StarRating rating={lodging.rating} />
      </div>
    </div>
  </div>
);

// Section Header Component
export const SectionHeader = ({ label, title, action, onAction }) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
    <div>
      <span className="text-teal-600 tracking-widest uppercase text-sm font-medium">{label}</span>
      <h2 className="text-3xl md:text-4xl font-serif font-light text-stone-800 mt-1">{title}</h2>
    </div>
    {action && (
      <button
        onClick={onAction}
        className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2 transition-colors"
      >
        {action}
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    )}
  </div>
);

// Page Header Component
export const PageHeader = ({ label, title, subtitle }) => (
  <div className="mb-8">
    <span className="text-teal-600 tracking-widest uppercase text-sm font-medium">{label}</span>
    <h1 className="text-4xl font-serif font-light text-stone-800 mt-1">{title}</h1>
    {subtitle && <p className="text-stone-500 mt-2">{subtitle}</p>}
  </div>
);
