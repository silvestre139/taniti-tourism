import React from 'react';
import { imageCredits } from '../data/siteData';
import { PageHeader } from './UI';

const PhotoCredits = () => {
  const creditsList = Object.entries(imageCredits).map(([filename, data]) => ({
    filename,
    ...data
  }));

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PageHeader label="Attribution" title="Photo Credits" />

        <div className="bg-white shadow rounded-2xl p-6 mb-8 border border-stone-100">
          <p className="text-stone-600">
            All photographs used in this website are from Unsplash, a platform providing freely-usable images.
            We are grateful to the photographers who make their work available to the public.
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 border border-stone-100">
          <h2 className="text-xl font-semibold text-stone-800 mb-6">Image Sources</h2>
          <div className="space-y-4">
            {creditsList.map((credit, index) => (
              <div key={index} className="border-b border-stone-100 pb-4 last:border-b-0 last:pb-0">
                <p className="text-sm text-teal-600 font-mono mb-1">{credit.filename}</p>
                <p className="text-sm text-stone-700">
                  <a
                    href={credit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-600 transition-colors"
                  >
                    {credit.credits}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-white shadow rounded-2xl p-6 border border-stone-100">
          <h2 className="text-xl font-semibold text-stone-800 mb-4">License Information</h2>
          <p className="text-stone-600">
            All images are used under the{' '}
            <a
              href="https://unsplash.com/license"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              Unsplash License
            </a>
            , which allows free use for commercial and non-commercial purposes without attribution required
            (though appreciated).
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoCredits;
