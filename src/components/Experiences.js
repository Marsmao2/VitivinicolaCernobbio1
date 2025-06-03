import React from 'react';

export default function Experiences() {
  return (
    <section id="esperienze" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Titolo centrato */}
        <h2 className="text-3xl font-semibold mb-8 text-center">Esperienze</h2>

        {/* Container flex: immagine sinistra | lista | immagine destra */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Immagine di sinistra: usa 10.jpg */}
          <div className="flex-shrink-0">
            <img
              src="/images/10.jpg"
              alt="Esperienza degustazione in cantina"
              className="w-40 h-40 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Lista delle esperienze: al centro su md+ */}
          <ul className="flex-1 list-disc list-inside text-lg space-y-2 text-center md:text-left">
            <li>Visite guidate in vigna con degustazione in cantina</li>
            <li>Vendita diretta in cantina</li>
            <li>Eventi privati su richiesta</li>
          </ul>

          {/* Immagine di destra: usa 9.jpg */}
          <div className="flex-shrink-0">
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
