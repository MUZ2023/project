import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Residence {
  floor: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  price: string;
  status: 'available' | 'pending' | 'sold';
}

const residences: Residence[] = [
  {
    floor: '72nd Floor',
    bedrooms: 4,
    bathrooms: 5.5,
    sqft: 7128,
    price: '$66,000,000',
    status: 'available'
  },
  {
    floor: '69th Floor',
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 4492,
    price: '$28,750,000',
    status: 'available'
  },
  {
    floor: '65th Floor',
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 6513,
    price: '$52,000,000',
    status: 'pending'
  },
  {
    floor: '61st Floor',
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 4492,
    price: 'SOLD',
    status: 'sold'
  }
];

const Availability = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Available Residences</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Experience unprecedented luxury in these meticulously crafted residences,
            offering breathtaking views of Central Park and Manhattan's skyline.
          </p>
        </div>
      </div>

      {/* Residences List */}
      <div className="bg-[#1A1A1A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {residences.map((residence, index) => (
              <div 
                key={index}
                className="border border-gold/20 hover:border-gold transition p-8 grid md:grid-cols-6 gap-6 items-center"
              >
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-serif mb-2">{residence.floor}</h3>
                  <p className="text-gray-300">
                    {residence.bedrooms} Bed • {residence.bathrooms} Bath • {residence.sqft.toLocaleString()} Sq Ft
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-2xl font-serif">{residence.price}</p>
                  <p className={`text-sm uppercase mt-1 ${
                    residence.status === 'available' ? 'text-green-400' :
                    residence.status === 'pending' ? 'text-gold' :
                    'text-red-400'
                  }`}>
                    {residence.status}
                  </p>
                </div>
                <div className="md:col-span-2 flex justify-end">
                  {residence.status === 'available' && (
                    <button className="inline-flex items-center px-6 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-black transition">
                      Request Details <ArrowRight className="ml-2" size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Schedule a Private Tour</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the height of luxury living firsthand. Our team is available
            to arrange a private viewing of our available residences.
          </p>
          <button className="inline-flex items-center px-8 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-black transition">
            Contact Sales Team <ArrowRight className="ml-2" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Availability;