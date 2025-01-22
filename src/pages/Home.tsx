import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((element) => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        if (element instanceof HTMLElement) {
          element.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?ixlib=rb-4.0.3")'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 parallax" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-serif mb-6 animate-slide-up">111 West 57th Street</h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              A New York Landmark Reborn
            </p>
            <Link 
              to="/availability" 
              className="inline-flex items-center px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 animate-slide-up btn-hover"
              style={{ animationDelay: '0.4s' }}
            >
              View Residences <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <ScrollReveal>
        <div className="bg-[#1A1A1A] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">A New Height of Luxury</h2>
                <p className="text-gray-300 mb-6">
                  At 111 West 57th Street, history meets modernity in perfect harmony. 
                  This architectural masterpiece soars above Central Park, offering unparalleled 
                  views and world-class residences in the heart of Manhattan.
                </p>
                <Link 
                  to="/gallery" 
                  className="inline-flex items-center text-gold hover:underline btn-hover"
                >
                  Explore the Building <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-4.0.3" 
                  alt="Building Interior" 
                  className="object-cover w-full h-full image-hover"
                />
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Features Section */}
      <ScrollReveal>
        <div className="bg-black py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-serif mb-4">Architecture</h3>
                <p className="text-gray-300">
                  A modern interpretation of New York's golden age of skyscrapers
                </p>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-serif mb-4">Residences</h3>
                <p className="text-gray-300">
                  Masterfully crafted full-floor and duplex residences
                </p>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-serif mb-4">Amenities</h3>
                <p className="text-gray-300">
                  World-class services and lifestyle offerings
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Home;