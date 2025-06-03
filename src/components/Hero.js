import React from 'react';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          Gigi e Cristina Winery
        </h1>
        <p className="text-lg md:text-2xl mb-4">
          Vitivinicoltura eroica sul Lago di Como
        </p>
        <p className="text-sm md:text-base italic mb-2">
          <strong>Italiano:</strong> Affacciata sul Lago di Como, Gigi e Cristina Winery è un esempio autentico di viticoltura eroica. Premiati con la medaglia d'oro Viticoltura Eroica, coltiviamo manualmente vitigni resistenti su terrazzamenti esposti a sud, dove ogni filare abbraccia il sole e la roccia. La nostra vinificazione combina il metodo classico in barrique con la tecnica innovativa del “wine in the stone”, dove la pietra diventa parte viva del processo, esaltando in modo unico il carattere autentico del territorio. Un'esperienza di vino che nasce dalla passione, dalla fatica e dalla bellezza del Lago di Como.
        </p>
        <p className="text-sm md:text-base italic">
          <strong>English:</strong> Overlooking Lake Como, Gigi e Cristina Winery is a true example of heroic viticulture. Awarded the Gold Medal for Heroic Viticulture, we manually cultivate disease-resistant grape varieties on south-facing terraced slopes, where each vine row embraces both sun and stone. Our winemaking combines the classic barrique method with the innovative “wine in the stone” technique, where the stone becomes an active part of the process, uniquely enhancing the authentic character of the land. A wine experience born of passion, dedication, and the timeless beauty of Lake Como.
        </p>
      </div>
    </section>
  );
}