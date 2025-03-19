
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="hero-gradient pt-16 pb-12 px-4 sm:px-6 lg:px-0 animate-on-load">
      <div className="max-w-4xl mx-auto text-center">
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
      </div>
    </div>
  );
};

export default Hero;
