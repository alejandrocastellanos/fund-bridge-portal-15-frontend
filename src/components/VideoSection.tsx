
import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 animate-on-scroll">
          <h2 className="font-display text-3xl font-bold mb-4">Impact in Action</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Watch how First Tuesday is making a difference in Baton Rouge through business-led volunteerism.
          </p>
        </div>
        
        <div className="glass-morphism p-6 rounded-2xl overflow-hidden animate-on-scroll shadow-lg">
          <div className="aspect-w-16 aspect-h-9 relative rounded-xl overflow-hidden">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/g1gda17uddY" 
              title="First Tuesday Video" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="mt-6 flex justify-center">
            <button className="inline-flex items-center space-x-2 bg-ftpurple text-white px-4 py-2 rounded-full hover:bg-ftpurple-dark transition-all duration-300">
              <Play size={18} />
              <span>Watch Our Story</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
