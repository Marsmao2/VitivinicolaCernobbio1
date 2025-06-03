import React from 'react';

export default function Header() {
  return (
    <header className="bg-olive-700 text-white fixed w-full z-20">
      <nav className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo / Nome attività */}
        <div className="text-xl font-bold">
          Vitivinicola Cernobbio
        </div>

        {/* Link di navigazione */}
        <div className="flex space-x-8">
          <a href="#esperienze" className="hover:text-gray-200">
            Experiences
          </a>
          <a href="#contatti" className="hover:text-gray-200">
            Contacts
          </a>
          <a href="#gallery" className="hover:text-gray-200">
            Gallery
          </a>
        </div>
      </nav>
    </header>
}
