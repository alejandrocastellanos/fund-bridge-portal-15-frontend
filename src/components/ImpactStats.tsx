
import React, { useEffect, useRef } from 'react';

interface ImpactStat {
  value: string;
  label: string;
}

const stats: ImpactStat[] = [
  {
    value: "1,001",
    label: "Volunteers mobilized"
  },
  {
    value: "8,000+",
    label: "Volunteer hours served"
  },
  {
    value: "$267,000",
    label: "Volunteer value contributed"
  },
  {
    value: "32",
    label: "First Tuesday events"
  }
];

const ImpactStats: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={statsRef} className="py-12 bg-ftgray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 animate-on-scroll">
          <h2 className="font-display text-3xl font-bold mb-4">First Tuesday's Impact So Far</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            For two years, First Tuesday has been a labor of love—a movement built by passionate business leaders and community members.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="neo-morphism py-8 px-6 h-full flex flex-col items-center justify-center">
                <div className="font-display text-4xl font-bold text-ftblue mb-2">{stat.value}</div>
                <div className="text-gray-600 text-center">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactStats;
