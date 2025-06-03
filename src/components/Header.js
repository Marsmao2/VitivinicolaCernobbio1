import React from 'react';
import { Link } from 'react-scroll';

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
          {/* 1. Experiences */}
          <Link
            to="esperienze"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-200"
          >
            Experiences
          </Link>

          {/* 2. Contacts */}
          <Link
            to="contatti"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-200"
          >
            Contacts
          </Link>

          {/* 3. Gallery */}
          <Link
            to="gallery"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-200"
          >
            Gallery
          </Link>
        </div>
      </nav>
    </header>
  );
}
