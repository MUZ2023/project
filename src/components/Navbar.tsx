import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 navbar-blur' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className={`text-2xl font-serif transition-all duration-300 ${
              isScrolled ? 'text-gold' : 'text-white'
            }`}
          >
            111W57
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`transition-all duration-300 ${
                location.pathname === '/' ? 'text-gold' : 'text-white hover:text-gold'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/availability" 
              className={`transition-all duration-300 ${
                location.pathname === '/availability' ? 'text-gold' : 'text-white hover:text-gold'
              }`}
            >
              Availability
            </Link>
            <Link 
              to="/gallery" 
              className={`transition-all duration-300 ${
                location.pathname === '/gallery' ? 'text-gold' : 'text-white hover:text-gold'
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/team" 
              className={`transition-all duration-300 ${
                location.pathname === '/team' ? 'text-gold' : 'text-white hover:text-gold'
              }`}
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className={`transition-all duration-300 ${
                location.pathname === '/contact' ? 'text-gold' : 'text-white hover:text-gold'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-gold transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-black/95 absolute w-full left-0 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="/" 
            className="block px-3 py-2 text-white hover:text-gold transition-colors duration-300"
          >
            Home
          </Link>
          <Link 
            to="/availability" 
            className="block px-3 py-2 text-white hover:text-gold transition-colors duration-300"
          >
            Availability
          </Link>
          <Link 
            to="/gallery" 
            className="block px-3 py-2 text-white hover:text-gold transition-colors duration-300"
          >
            Gallery
          </Link>
          <Link 
            to="/team" 
            className="block px-3 py-2 text-white hover:text-gold transition-colors duration-300"
          >
            Team
          </Link>
          <Link 
            to="/contact" 
            className="block px-3 py-2 text-white hover:text-gold transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;