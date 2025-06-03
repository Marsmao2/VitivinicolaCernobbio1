import React from 'react';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[auto] flex flex-col items-center justify-center py-16"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Sovrapposizione scura semi-trasparente */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenuto centrale con satinatura più leggera (bg-opacity-60) */}
      <div className="relative z-10 bg-white bg-opacity-60 text-center text-black max-w-3xl p-6 rounded-lg space-y-6">
        {/* TITOLO PRINCIPALE */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          VITIVINICOLA CERNOBBIO, GIGI E CRISTINA WINERY
        </h1>

        {/* SOTTOTITOLO */}
        <h2 className="text-xl md:text-2xl">
          Affacciata sul Lago di Como, Gigi e Cristina Winery è un esempio autentico di viticoltura eroica.
        </h2>

        {/* TESTO DESCRITTIVO BILINGUE */}
        <div className="space-y-4 text-left">
          <p className="text-base md:text-lg leading-relaxed">
            Affacciata sul Lago di Como, Gigi e Cristina Winery è un esempio autentico di viticoltura eroica. 
            Premiati con la medaglia d'oro viticoltura eroica, coltiviamo manualmente vitigni resistenti su 
            terrazzamenti esposti a sud, dove ogni filare abbraccia il sole e la roccia. La nostra 
            vinificazione combina il metodo classico in barrique con la tecnica innovativa del “wine in 
            the stone”, dove la pietra diventa parte viva del processo, esaltando in modo unico il 
            carattere autentico del territorio. Un'esperienza di vino che nasce dalla passione, dalla 
            fatica e dalla bellezza del Lago di Como.
          </p>
          <p className="text-base md:text-lg leading-relaxed italic">
            Overlooking Lake Como, Gigi e Cristina Winery is a true example of heroic viticulture. 
            Awarded the Gold Medal for Heroic Viticulture, we manually cultivate disease-resistant 
            grape varieties on south-facing terraced slopes, where each vine row embraces both sun 
            and stone. Our winemaking combines the classic barrique method with the innovative 
            “wine in the stone” technique, where the stone becomes an active part of the process, 
            uniquely enhancing the authentic character of the land. A wine experience born of 
            passion, dedication, and the timeless beauty of Lake Como.
          </p>
        </div>

        {/* Sezione "Visite solo su prenotazione" */}
        <div className="mt-6 bg-white bg-opacity-60 p-4 rounded-lg">
          <p className="text-lg font-semibold text-olive-900">
            SI ACCETTANO VISITE E SOLO SU PRENOTAZIONE
          </p>
        </div>
      </div>
    </section>
  );
}
