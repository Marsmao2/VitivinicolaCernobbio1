import React from 'react';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[50vh] flex flex-col items-center justify-end pb-8"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Overlay nero semi-trasparente */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenuto spostato in basso */}
      <div className="relative z-10 text-center px-4 text-white">
        {/* Titolo (rimane sempre nella stessa posizione verticale bassa) */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-md">
          VITIVINICOLA CERNOBBIO, GIGI E CRISTINA WINERY
        </h1>

        {/* Frase in inglese leggermente più piccola */}
        <p className="mt-4 text-xl md:text-2xl font-semibold drop-shadow-md">
          Overlooking Lake Como, Gigi and Cristina Winery is an authentic example of heroic viticulture.
        </p>

        {/* Frase in italiano (più piccola) */}
        <p className="mt-2 text-base md:text-lg italic drop-shadow-md">
          Affacciata sul Lago di Como, Gigi e Cristina Winery è un esempio autentico di viticoltura eroica.
        </p>

        {/* Riquadro satinato ridotto */}
        <div className="mt-4 inline-block bg-white bg-opacity-70 px-4 py-2 rounded-sm">
          {/* Testo inglese */}
          <p className="text-xl font-bold text-gray-800">
            Visits accepted by reservation only
          </p>
          {/* Testo italiano, più piccolo */}
          <p className="mt-1 text-sm text-gray-800">
            si effettuano visite solo su prenotazione
          </p>
        </div>
      </div>
    </section>
  );
}
