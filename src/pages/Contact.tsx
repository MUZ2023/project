import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Connect with our sales team to learn more about the extraordinary
            residences at 111 West 57th Street.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-[#1A1A1A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black border border-gold/20 focus:border-gold p-3 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black border border-gold/20 focus:border-gold p-3 text-white"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-black border border-gold/20 focus:border-gold p-3 text-white"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-black border border-gold/20 focus:border-gold p-3 text-white"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-black py-3 px-6 hover:bg-gold/90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-serif mb-6">Sales Gallery</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-gold mr-4 mt-1" />
                    <div>
                      <p className="text-white">111 West 57th Street</p>
                      <p className="text-gray-300">New York, NY 10019</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-gold mr-4" />
                    <a href="tel:+12125550100" className="text-white hover:text-gold transition">
                      (212) 555-0100
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-gold mr-4" />
                    <a href="mailto:info@111w57.com" className="text-white hover:text-gold transition">
                      info@111w57.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-6">Hours of Operation</h2>
                <div className="flex items-start">
                  <Clock className="text-gold mr-4 mt-1" />
                  <div className="space-y-2">
                    <p className="text-white">Monday - Friday: 10:00 AM - 6:00 PM</p>
                    <p className="text-white">Saturday: 11:00 AM - 5:00 PM</p>
                    <p className="text-white">Sunday: By Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;