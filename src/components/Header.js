import React from 'react';

export default function Header() {
  return (
    <header>
      {/* Barra verde oliva (stessa tonalità del footer) */}
      <div className="bg-olive-900 h-12 flex items-center">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center w-full">
          {/* Logo / Nome attività */}
          <div className="text-white text-xl font-bold">
            Vitivinicola Cernobbio
          </div>

          {/* Link di navigazione */}
          <div className="flex space-x-8">
            <a href="#esperienze" className="text-white hover:text-gray-200 transition-colors">
              Experiences
            </a>
            <a href="#contatti" className="text-white hover:text-gray-200 transition-colors">
              Contacts
            </a>
            <a href="#gallery" className="text-white hover:text-gray-200 transition-colors">
              Gallery
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
