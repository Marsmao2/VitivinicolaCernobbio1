import React from 'react';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[50vh] flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Overlay nero semi-trasparente */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenuto sopra l’immagine */}
      <div className="relative z-10 text-center px-4 text-white">
        {/* Titolo */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-md">
          VITIVINICOLA CERNOBBIO, GIGI E CRISTINA WINERY
        </h1>

        {/* Frase in inglese (più grande) */}
        <p className="mt-4 text-2xl md:text-3xl font-semibold drop-shadow-md">
          Overlooking Lake Como, Gigi and Cristina Winery is an authentic example of heroic viticulture.
        </p>

        {/* Frase in italiano (più piccola) */}
        <p className="mt-2 text-base md:text-lg italic drop-shadow-md">
          Affacciata sul Lago di Como, Gigi e Cristina Winery è un esempio autentico di viticoltura eroica.
        </p>

        {/* Riquadro satinato per le visite su prenotazione */}
        <div className="mt-6 inline-block bg-white bg-opacity-70 px-6 py-4 rounded-sm">
          {/* Testo inglese, più grande */}
          <p className="text-2xl md:text-3xl font-bold text-gray-800">
            Visits accepted by reservation only
          </p>
          {/* Testo italiano, più piccolo */}
          <p className="mt-1 text-sm md:text-base text-gray-800">
            si effettuano visite solo su prenotazione
          </p>
        </div>
      </div>
    </section>
  );
}
