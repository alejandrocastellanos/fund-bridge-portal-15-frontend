
import React from 'react';

const GrowWithAlliance: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="ft-header text-3xl mb-4">Grow With the Alliance</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Locally owned, entrepreneur-driven companies create two of every three new jobs, engage in
          charitable giving and volunteerism, and invest nearly 70% of each dollar earned back into their
          local communities.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="ft-card">
          <div className="bg-ftgreen/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <span className="font-bold text-ftgreen">GROW</span>
          </div>
          <h3 className="font-display text-xl font-bold mb-3">The Alliance</h3>
          <p className="text-gray-600 mb-4">
            Connects small businesses to resources and relationships for economic growth and community impact.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">2024 SNAPSHOT</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• 37 member businesses</li>
              <li>• 14 peer engagement events</li>
              <li>• 50+ 1:1 coaching sessions</li>
              <li>• Vision: 75+ members by September 2025</li>
            </ul>
          </div>
        </div>
        
        <div className="ft-card">
          <div className="bg-ftblue/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <span className="font-bold text-ftblue">SERVE</span>
          </div>
          <h3 className="font-display text-xl font-bold mb-3">First Tuesday</h3>
          <p className="text-gray-600 mb-4">
            Draws businesses together to serve local nonprofits, foster unity and build a citywide culture of giving back.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">GROWING IMPACT</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• 1,001 volunteers; 8,000 volunteer hours (2022-24)</li>
              <li>• $267,920 volunteer value (2022-24)</li>
              <li>• Eight local non-profits served (2024)</li>
              <li>• Vision: 100+ local businesses & 1,000+ volunteers serving every month</li>
            </ul>
          </div>
        </div>
        
        <div className="ft-card">
          <div className="bg-ftorange/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <span className="font-bold text-ftorange">SHARE</span>
          </div>
          <h3 className="font-display text-xl font-bold mb-3">The Muddy Waters, Clear Vision podcast</h3>
          <p className="text-gray-600 mb-4">
            Delivers inspiring stories from Louisiana's most successful leaders.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">2024 WRAPPED</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• 40 podcast interviews</li>
              <li>• Broad range of dynamic guests from diverse industries</li>
              <li>• Apple Music & Spotify placement</li>
              <li>• Vision: Build our own podcast studio and offer community access</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-ftpurple/10 p-8 rounded-xl">
        <div className="text-center mb-6">
          <h3 className="ft-header text-2xl mb-2">Your support of these small business and community catalysts fuels a future Baton Rouge that brings out the best in all of us.</h3>
          <p className="text-gray-600">
            We're looking for generous, like-minded supporters to help seed Grow With the Alliance for long-term, self-sustaining success. 
            This is your chance to impact and inspire the next generation of business and community leaders.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="ft-btn-primary">
            Become a Partner
          </button>
          <button className="ft-btn-secondary">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default GrowWithAlliance;
