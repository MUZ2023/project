import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Address */}
          <div>
            <Link to="/" className="text-2xl font-serif mb-6 block">111W57</Link>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start">
                <MapPin className="text-gold mr-3 mt-1" size={18} />
                <div>
                  <p>111 West 57th Street</p>
                  <p>New York, NY 10019</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-gold mr-3" size={18} />
                <a href="tel:+12125550100" className="hover:text-gold transition">
                  (212) 555-0100
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="text-gold mr-3" size={18} />
                <a href="mailto:info@111w57.com" className="hover:text-gold transition">
                  info@111w57.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <Link to="/availability" className="hover:text-gold transition">
                  Availability
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-gold transition">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-serif mb-6">Hours</h3>
            <ul className="space-y-4 text-gray-300">
              <li>Monday - Friday: 10:00 AM - 6:00 PM</li>
              <li>Saturday: 11:00 AM - 5:00 PM</li>
              <li>Sunday: By Appointment Only</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-serif mb-6">Legal</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#" className="hover:text-gold transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} 111 West 57th Street. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;