import React from 'react';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[50vh] flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Sovrapposizione nera semi-trasparente */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Titolo + Sottotitolo */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-md">
          VITIVINICOLA CERNOBBIO, GIGI E CRISTINA WINERY
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-md">
          Affacciata sul Lago di Como, Gigi e Cristina Winery è un esempio autentico di viticoltura eroica.
        </p>
      </div>
    </section>
  );
}
