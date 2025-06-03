import React from 'react';

export default function Experiences() {
  return (
    <section id="esperienze" className="py-16 bg-gray-50">
      {/* Aumentato max-w da 4xl a 6xl */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Titolo centrato */}
        <h2 className="text-3xl font-semibold mb-8 text-center">Esperienze</h2>

        {/* Container flex: immagine-sinistra | testi bilingue in due colonne | immagine-destra */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6">
          {/* Immagine di sinistra spinta verso l’esterno (mr-20) */}
          <div className="flex-shrink-0 mr-20">
            <img
              src="/images/10.jpg"
              alt="Esperienza degustazione in cantina"
              className="w-40 h-40 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Testi in due colonne con linea verticale tra le due (su md+) */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left md:divide-x divide-gray-300">
            {/* Colonna Italiana con padding a destra */}
            <ul className="list-disc list-inside text-lg space-y-2 md:pr-8">
              <li>Visite guidate in vigna con degustazione in cantina</li>
              <li>Vendita diretta in cantina</li>
              <li>Eventi privati su richiesta</li>
            </ul>

            {/* Colonna Inglese con padding a sinistra */}
            <ul className="list-disc list-inside text-lg space-y-2 md:pl-8">
              <li>Guided vineyard tours with wine tasting in the cellar</li>
              <li>Direct sales at the cellar</li>
              <li>Private events upon request</li>
            </ul>
          </div>

          {/* Immagine di destra spinta verso l’esterno (ml-20) */}
          <div className="flex-shrink-0 ml-20">
            <img
              src="/images/9.jpg"
              alt="Bottiglie in cantina"
              className="w-40 h-40 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
