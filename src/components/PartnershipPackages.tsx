
import React from 'react';
import { Check } from 'lucide-react';

interface Package {
  title: string;
  tier: string;
  price: string;
  color: 'blue' | 'green' | 'orange' | 'purple';
  commitment: string;
  slots: string;
  benefits: string[];
}

const PartnershipPackages: React.FC = () => {
  const packages: Package[] = [
    {
      title: 'Quarterly Bronze Partner Pledge',
      tier: 'Bronze',
      price: '$10K per Quarter',
      color: 'orange',
      commitment: 'Three volunteer events over one quarter (three months).',
      slots: 'Designed for up to 30 volunteer per event.',
      benefits: [
        'Turnkey Execution: Each event comes with a briefing and full logistical support. Breakfast, lunch and snacks for all participants.',
        'Professional Photography: A photographer documents each event.',
        'Digital Assets: Receive event photos and a concise impact summary.',
        'Standard Impact Reporting: Basic metrics tracking volunteer hours and project outcomes.',
        'Swag Perk: Custom First Tuesday Tshirts for all volunteers.',
        'Bonus: Branded Volunteer Recognition Pins for employees who complete all three events.'
      ]
    },
    {
      title: 'Yearly Silver Partner Pledge',
      tier: 'Silver',
      price: '$50K per Year',
      color: 'blue',
      commitment: '12 volunteer events per year (one event per month).',
      slots: 'Designed for 40 employees per event.',
      benefits: [
        'All Quarterly Package Benefits: Turnkey event management, professional photography, digital assets, and standard impact reporting.',
        'On-Site Storytelling: Professional interviews and feature stories capturing your team\'s impact.',
        'Premium Digital Media Package: High-quality videos and executive testimonials for internal/external use.',
        'Enhanced Data Reporting: In-depth analytics to track volunteer participation, NPS, feedback and ROI.',
        'Feature Month Option: Opportunity to designate one month as your "exclusive partner" month with additional branding and targeted LinkedIn ad campaigns.',
        'Swag Perk: Premium First Tuesday TShirts or Hoodies for all participating volunteers.',
        'Co-Branding Opportunity: The First Tuesday Brand + Your Company Brand will appear together on select volunteer event materials.'
      ]
    },
    {
      title: 'Yearly Gold Partner Pledge',
      tier: 'Gold',
      price: '$100K per Year',
      color: 'green',
      commitment: 'A full year of monthly volunteer events (12 events per year).',
      slots: 'Designed for 60 employees per event.',
      benefits: [
        'All Benefits from the Yearly Package: Turnkey event management, professional photography, premium digital media, and enhanced reporting.',
        'Executive Visibility: Dedicated podcast interview featuring your company\'s leadership alongside a key non-profit partner.',
        'Bespoke Branding: Custom, exclusive branding solutions that set your company apart as a community leader.',
        'Priority Placement: Preferred scheduling on our volunteer management platform for the highest-impact projects.',
        'Integrated PR Campaign: Managed, targeted paid LinkedIn ads and local media outreach to boost your visibility in Baton Rouge.',
        'Swag Perk: Custom Executive shirt',
        'Partner Branding Opportunity: Service-First Branding – The partner\'s branding will take the lead on select materials, with First Tuesday as a supporting identity.'
      ]
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="ft-header text-3xl mb-4">Partnership Packages</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join First Tuesday with a partnership package that fits your company's goals and budget.
          Each package is designed to maximize impact while providing valuable benefits.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div key={index} className="border rounded-xl overflow-hidden shadow-sm">
            <div className={`ft-section-${pkg.color} border-none rounded-none p-5`}>
              <h3 className="font-display text-xl font-bold">{pkg.title}</h3>
            </div>
            
            <div className="bg-ftpurple p-4">
              <div className="text-white font-display text-2xl font-bold">
                {pkg.price}
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <strong className="text-gray-700">Commitment:</strong>
                <p className="text-gray-600">{pkg.commitment}</p>
              </div>
              
              <div>
                <strong className="text-gray-700">Volunteer Slots per Event:</strong>
                <p className="text-gray-600">{pkg.slots}</p>
              </div>
              
              <div>
                <strong className="text-gray-700 block mb-2">Benefits:</strong>
                <ul className="space-y-2">
                  {pkg.benefits.map((benefit, i) => (
                    <li key={i} className="flex">
                      <Check className={`h-5 w-5 text-ft${pkg.color} mt-1 mr-2 flex-shrink-0`} />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4">
                <button className={`w-full py-3 px-4 rounded-full font-semibold text-white bg-ft${pkg.color} hover:bg-ft${pkg.color}-dark transition-all duration-300`}>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnershipPackages;
