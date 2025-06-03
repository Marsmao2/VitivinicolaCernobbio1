import React from 'react';

export default function Header() {
  return (
    <header className="bg-olive-800 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-2xl font-bold">Vitivinicola Cernobbio</span>
        <nav className="space-x-6">
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#esperienze" className="hover:underline">Esperienze</a>
          <a href="#contatti" className="hover:underline">Contatti</a>
        </nav>
      </div>
    </header>
  );
}