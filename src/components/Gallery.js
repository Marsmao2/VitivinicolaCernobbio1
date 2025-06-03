import React from 'react';

const images = [
  { src: '/images/1.jpg', alt: 'Foto 1: Vigneto panorama' },
  { src: '/images/2.jpg', alt: 'Foto 2: Stacco di palo in legno' },
  { src: '/images/3.jpg', alt: 'Foto 3: Misuratore pressione su bottiglia' },
  { src: '/images/4.jpg', alt: 'Foto 4: Terrazzamenti del vigneto' },
  { src: '/images/5.jpg', alt: 'Foto 5: Filari di vite con recinzione' },
  { src: '/images/6.jpg', alt: 'Foto 6: Vista muro di pietra con viti' },
  { src: '/images/7.jpg', alt: 'Foto 7: Anfore con liquido' },
  { src: '/images/8.jpg', alt: 'Foto 8: Attrezzo da laboratorio in cantina' },
  { src: '/images/9.jpg', alt: 'Foto 9: Bottiglie appoggiate in cantina' },
  { src: '/images/10.jpg', alt: 'Foto 10: Dettaglio di una vino-barrique' },
  { src: '/images/11.jpg', alt: 'Foto 11: Dettaglio di filare di vite' },
  { src: '/images/12.jpg', alt: 'Foto 12: Grappolo d’uva matura' },
  { src: '/images/13.jpg', alt: 'Foto 13: Travertino e viti su terrazzamento' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
