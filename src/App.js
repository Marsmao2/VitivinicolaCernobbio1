import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* 1. Hero: solo titolo + sottotitolo */}
      <Hero />

      {/* 2. Sezione “Descrizione bilingue” */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {/* Italiano */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-center">Descrizione</h3>
            <p className="text-base md:text-lg leading-relaxed text-gray-800">
              Affacciata sul Lago di Como, Gigi e Cristina Winery è un esempio autentico di viticoltura eroica. 
              Premiati con la medaglia d'oro viticoltura eroica, coltiviamo manualmente vitigni resistenti su 
              terrazzamenti esposti a sud, dove ogni filare abbraccia il sole e la roccia. La nostra 
              vinificazione combina il metodo classico in barrique con la tecnica innovativa del “wine in 
              the stone”, dove la pietra diventa parte viva del processo, esaltando in modo unico il 
              carattere autentico del territorio. Un'esperienza di vino che nasce dalla passione, dalla 
              fatica e dalla bellezza del Lago di Como.
            </p>
          </div>

          {/* Inglese */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-center">Description</h3>
            <p className="text-base md:text-lg leading-relaxed text-gray-800 italic">
              Overlooking Lake Como, Gigi e Cristina Winery is a true example of heroic viticulture. 
              Awarded the Gold Medal for Heroic Viticulture, we manually cultivate disease-resistant 
              grape varieties on south-facing terraced slopes, where each vine row embraces both sun 
              and stone. Our winemaking combines the classic barrique method with the innovative 
              “wine in the stone” technique, where the stone becomes an active part of the process, 
              uniquely enhancing the authentic character of the land. A wine experience born of 
              passion, dedication, and the timeless beauty of Lake Como.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Esperienze */}
      <Experiences />

      {/* 4. Contatti & Prenotazioni */}
      <Contact />

      {/* 5. Gallery */}
      <Gallery />

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}

export default App;
