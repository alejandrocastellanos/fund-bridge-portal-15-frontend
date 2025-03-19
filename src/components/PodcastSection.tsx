
import React from 'react';

const PodcastSection: React.FC = () => {
  return (
    <div className="py-16 bg-ftgray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <div className="inline-block mb-2 px-3 py-1 bg-ftblue/10 text-ftblue text-sm font-medium rounded-full">
            New Season
          </div>
          
          <h2 className="font-display text-3xl font-bold mb-4">
            Muddy Waters, Clear Vision Podcast
          </h2>
          
          <p className="text-gray-600 mb-10">
            Back with a new season—focusing on local impact in Louisiana
          </p>
          
          <div className="glass-morphism p-8 rounded-2xl">
            <h3 className="font-display text-xl font-semibold mb-5">This season will feature interviews with:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-5 neo-morphism">
                <div className="font-semibold mb-2">Nonprofits</div>
                <p className="text-gray-600 text-sm">Driving real change in Baton Rouge</p>
              </div>
              
              <div className="p-5 neo-morphism">
                <div className="font-semibold mb-2">Business Owners</div>
                <p className="text-gray-600 text-sm">Passionate about community impact</p>
              </div>
              
              <div className="p-5 neo-morphism">
                <div className="font-semibold mb-2">Community Leaders</div>
                <p className="text-gray-600 text-sm">Creating lasting, positive change</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="bg-ftblue text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-ftblue-dark transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                Support Our Podcast
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastSection;
