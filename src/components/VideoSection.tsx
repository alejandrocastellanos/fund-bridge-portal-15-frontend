
import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 animate-on-scroll">
          <h2 className="font-display text-3xl font-bold mb-4">See Our Impact</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Watch how First Tuesday is making a difference in Baton Rouge through business-led volunteerism.
          </p>
        </div>
        
        <div className="glass-morphism p-6 rounded-2xl overflow-hidden animate-on-scroll">
          <div className="aspect-w-16 aspect-h-9 relative">
            <iframe 
              className="absolute inset-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/g1gda17uddY" 
              title="First Tuesday Video" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
