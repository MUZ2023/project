import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GalleryImage {
  url: string;
  category: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
    category: "Residences",
    title: "Living Room"
  },
  {
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3",
    category: "Amenities",
    title: "Private Pool"
  },
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3",
    category: "Architecture",
    title: "Building Exterior"
  },
  {
    url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3",
    category: "Residences",
    title: "Master Bedroom"
  },
  {
    url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3",
    category: "Amenities",
    title: "Spa"
  },
  {
    url: "https://images.unsplash.com/photo-1600573472591-ee6c8e695481?ixlib=rb-4.0.3",
    category: "Views",
    title: "Central Park View"
  }
];

const Gallery = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Gallery</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Experience the unparalleled luxury and sophistication of 111 West 57th Street
            through our curated collection of images.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="bg-[#1A1A1A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-gold text-sm uppercase tracking-wider mb-2">{image.category}</p>
                  <h3 className="text-xl font-serif">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Experience it in Person</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a private tour to experience the grandeur of 111 West 57th Street firsthand.
          </p>
          <button className="inline-flex items-center px-8 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-black transition">
            Schedule a Tour <ArrowRight className="ml-2" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;