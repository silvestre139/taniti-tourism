import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: 'Practical Info',
      items: ['Currency: USD, Euro, Yen', 'Power: 120V (US standard)', 'Language: English widely spoken']
    },
    {
      title: 'Getting Here',
      items: ['Small jets & propeller planes', 'Weekly cruise ship service', 'Airport expansion underway']
    },
    {
      title: 'Safety & Health',
      items: ['Hospital with multilingual staff', 'Very low crime rate', '24/7 Emergency: 911']
    }
  ];

  const contactInfo = {
    email: 'info@tanitiisland.com',
    phone: '+1 (555) 123-4567'
  };

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xl font-serif font-semibold text-white">Taniti Island</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Your Pacific paradise awaits. Pristine beaches, lush rainforests, and volcanic wonders.
            </p>
          </div>

          {/* Info Sections */}
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-3 text-sm text-stone-400">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Us Section */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-4 text-sm text-stone-400">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 hover:text-teal-400 transition-colors group"
              >
                <svg className="w-5 h-5 text-teal-500 group-hover:text-teal-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{contactInfo.email}</span>
              </a>
              <a 
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 hover:text-teal-400 transition-colors group"
              >
                <svg className="w-5 h-5 text-teal-500 group-hover:text-teal-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{contactInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-sm">© 2024 Taniti Island Tourism Board. All rights reserved.</p>
          <Link to="/photo-credits" className="text-stone-500 text-sm hover:text-teal-400 transition-colors">
            Photo Credits
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
