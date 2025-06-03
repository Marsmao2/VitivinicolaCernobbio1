import React from 'react';

export default function Header() {
  return (
    <header className="bg-olive-700 text-white fixed w-full z-20">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Nome attività */}
        <div className="text-xl font-bold">
          Vitivinicola Cernobbio
        </div>

        {/* Link di navigazione */}
        <div className="space-x-8 flex">
          <a href="#esperienze" className="cursor-pointer hover:text-gray-200">
            Experiences
          </a>
          <a href="#contatti" className="cursor-pointer hover:text-gray-200">
            Contacts
          </a>
          <a href="#gallery" className="cursor-pointer hover:text-gray-200">
            Gallery
          </a>
        </div>
      </nav>
    </header>
  );
}
