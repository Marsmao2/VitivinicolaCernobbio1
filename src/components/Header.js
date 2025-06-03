import React from 'react';

export default function Header() {
  return (
    <header>
      {/* Banda verde spessa come il footer, con testo bianco centrato */}
      <div className="bg-olive-700 h-12 flex items-center fixed top-0 left-0 w-full z-20">
        <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center w-full">
          {/* Logo / Nome attività */}
          <div className="text-white text-xl font-bold">
            Vitivinicola Cernobbio
          </div>

          {/* Link di navigazione */}
          <div className="flex space-x-8">
            <a
              href="#esperienze"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Experiences
            </a>
            <a
              href="#contatti"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Contacts
            </a>
            <a
              href="#gallery"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Gallery
            </a>
          </div>
        </nav>
      </div>

      {/* Per evitare che il contenuto “scorra” sotto l’header fisso, aggiungiamo un margine top equivalente */}
      <div className="h-12"></div>
    </header>
  );
}
