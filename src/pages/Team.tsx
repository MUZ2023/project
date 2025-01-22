import React from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  email: string;
  phone: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Anderson",
    role: "Senior Sales Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
    email: "sarah.anderson@111w57.com",
    phone: "(212) 555-0123"
  },
  {
    name: "Michael Chen",
    role: "Sales Executive",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    email: "michael.chen@111w57.com",
    phone: "(212) 555-0124"
  },
  {
    name: "Emily Thompson",
    role: "Client Relations Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
    email: "emily.thompson@111w57.com",
    phone: "(212) 555-0125"
  }
];

const Team = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Sales Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Meet our dedicated team of luxury real estate professionals, committed to
            providing an exceptional experience at 111 West 57th Street.
          </p>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="bg-[#1A1A1A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6 aspect-square overflow-hidden rounded-full mx-auto max-w-[300px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-2">{member.name}</h3>
                <p className="text-gold mb-4">{member.role}</p>
                <div className="space-y-2">
                  <a href={`mailto:${member.email}`} className="flex items-center justify-center text-gray-300 hover:text-gold transition">
                    <Mail size={16} className="mr-2" /> {member.email}
                  </a>
                  <a href={`tel:${member.phone}`} className="flex items-center justify-center text-gray-300 hover:text-gold transition">
                    <Phone size={16} className="mr-2" /> {member.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Get in Touch</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is ready to assist you with any questions about the residences
            at 111 West 57th Street.
          </p>
          <button className="inline-flex items-center px-8 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-black transition">
            Contact Us <ArrowRight className="ml-2" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;