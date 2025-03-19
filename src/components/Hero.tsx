
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="pt-16 pb-12 px-4 sm:px-6 lg:px-0 animate-on-load relative">
      {/* Header background image */}
      <div className="absolute inset-0 bg-cover bg-center z-0 opacity-15" 
           style={{backgroundImage: "url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"}}></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-8">
          <img 
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/yNs6MDaUC3lENJrSOcmE/media/64c3ef5114592c85c49e1956.png" 
            alt="First Tuesday Logo" 
            className="h-24 md:h-32"
          />
        </div>
        
        <div className="ft-pill-purple mb-6">
          First Tuesday: Scaling Impact, Strengthening Baton Rouge
        </div>
        
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          From Grassroots Movement to
          <br />
          <span className="text-ftpurple">Tech-Enabled Platform</span>
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
          Be Part of the Next Phase of Impact – When businesses serve, Baton Rouge wins.
        </p>

        <div className="mt-8">
          <button className="ft-btn-primary text-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
