
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CampaignInfo: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto animate-on-scroll">
        <h2 className="font-display text-3xl font-bold mb-6">Why This Fundraising Campaign Matters</h2>
        
        <p className="text-gray-700 mb-8 text-lg">
          For two years, First Tuesday has been powered by sheer effort—manually coordinating volunteers, 
          managing logistics via emails, and rallying businesses through grassroots outreach.
        </p>
        
        <div className="mb-10">
          <h3 className="font-display text-xl font-semibold mb-4">The Next Phase: A Tech-Enabled Future for Business-Led Service</h3>
          
          <div className="glass-morphism p-6 rounded-2xl mb-6">
            <h4 className="flex items-center font-semibold text-lg mb-4">
              <span className="bg-ftblue/10 p-1.5 rounded-full mr-3">
                <ArrowRight className="h-4 w-4 text-ftblue" />
              </span>
              Imagine a digital platform where:
            </h4>
            
            <ul className="space-y-3 pl-10">
              <li className="text-gray-700">Businesses can browse nonprofit needs, sign up, and track their impact.</li>
              <li className="text-gray-700">Nonprofits can post their service projects and instantly match with businesses.</li>
              <li className="text-gray-700">Employees can get involved in projects seamlessly, without friction or delays.</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center animate-on-scroll">
          <div className="font-display text-xl font-semibold mb-4">Your support makes this a reality.</div>
          <p className="text-gray-700 mb-6">
            Together, we're not just building an event—we're launching a platform that connects 
            businesses and nonprofits for years to come.
          </p>
          <div className="inline-block bg-ftgray-light px-6 py-3 rounded-xl font-semibold text-ftblue">
            Invest in the future of First Tuesday and be part of a groundbreaking shift in business-led volunteerism.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignInfo;
