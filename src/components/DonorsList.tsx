
import React, {useEffect, useState} from 'react';
import { Heart, UserRound } from 'lucide-react';

import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";


interface Donor {
  id: number;
  name: string;
  amount: number;
  date: string;
  image?: string;
  isAnonymous?: boolean;
}

const DonorsList: React.FC = () => {

  const [donors, setDonors] = useState<Donor[]>([]);

  useEffect(() => {
    const fetchTotalDonations = async () => {
      try {
        const response = await fetch("/api/last-donations/", {
          method: "GET",
          mode: "cors",
        });

        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }

        const data = await response.json();
        console.log("Éxito:", data);
        const formattedDonors: Donor[] = data.map((donor: never, index: number) => ({
          id: index + 1,
          name: donor.name || "Anonymous",
          amount: parseFloat(donor.donation_amount),
          date: formatDistanceToNow(new Date(donor.created_at), { locale: enUS, addSuffix: true }),
        }));
        setDonors(formattedDonors);

      } catch (error) {
        console.error("Error en la donación:", error);
      }
    };

    fetchTotalDonations();
  }, []);

  return (
    <div className="animate-on-load animate-delay-300">
      <div className="flex items-center mb-4">
        <Heart className="h-5 w-5 text-ftblue mr-2" />
        <h3 className="font-display font-bold text-lg">Recent Supporters</h3>
      </div>
      
      <div className="space-y-4">
        {donors.map((donor) => (
          <div 
            key={donor.id} 
            className="p-4 rounded-xl neo-morphism transition-all duration-300 hover:shadow-neodark"
          >
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
                {donor.isAnonymous ? (
                  <div className="w-full h-full bg-ftgray-dark flex items-center justify-center">
                    <UserRound className="h-6 w-6 text-gray-500" />
                  </div>
                ) : (
                  <img 
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                    alt={donor.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="ml-3 flex-grow">
                <div className="flex justify-between">
                  <span className="font-semibold">{donor.name}</span>
                  <span className="font-display font-bold text-ftblue">${donor.amount}</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">{donor.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex -space-x-2 mt-6 justify-center">
        {donors.slice(0, 4).map((donor, index) => (
          <div 
            key={`bubble-${donor.id}`}
            className={`w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md transition-transform duration-300 hover:scale-110 hover:z-10 animate-float`}
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            {donor.isAnonymous ? (
              <div className="w-full h-full bg-ftgray-dark flex items-center justify-center">
                <UserRound className="h-5 w-5 text-gray-500" />
              </div>
            ) : (
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                alt={donor.name} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
          </div>
        ))}
        <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-ftblue text-white text-xs font-bold shadow-md animate-float" style={{ animationDelay: '2s' }}>
          +{donors.length - 4}
        </div>
      </div>
    </div>
  );
};

export default DonorsList;
