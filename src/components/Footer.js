import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-olive-900 text-white py-4 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Gigi e Cristina Winery – Vitivinicola Cernobbio. All rights reserved.</p>
      </div>
    </footer>
  );
}