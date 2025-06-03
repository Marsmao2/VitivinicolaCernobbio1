import React from 'react';

const images = [
  { src: '/images/vineyard1.jpg', alt: 'Vigneto in primavera' },
  { src: '/images/winery_interior.jpg', alt: 'Interno della cantina' },
  { src: '/images/degustation.jpg', alt: 'Degustazione in cantina' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}