import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contatti" className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contatti & Prenotazioni</h2>
        <div className="space-y-4 text-lg">
          <p className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-gold" /> Indirizzo: Via Ronco 33, 22026 Maslianico (CO), Italia
          </p>
          <p className="flex items-center">
            <FaPhoneAlt className="mr-2 text-gold" /> Telefono:
            <a href="tel:+393338746401" className="ml-1 text-olive-800 hover:underline">+39 333 8746401</a>
          </p>
          <p className="flex items-center">
            <FaEnvelope className="mr-2 text-gold" /> Email:
            <a href="mailto:vitivinicolacernobbio@gmail.com" className="ml-1 text-olive-800 hover:underline">vitivinicolacernobbio@gmail.com</a>
          </p>
          <p className="flex items-center">
            <FaWhatsapp className="mr-2 text-gold" /> Prenota su WhatsApp:
            <a href="https://wa.me/393338746401" className="ml-1 text-olive-800 hover:underline">Chatta ora</a>
          </p>
          <div className="mt-4 flex space-x-6">
            <a
              href="https://www.instagram.com/vitivinicolacernobbio/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-pink-600 hover:underline"
            >
              <FaInstagram className="mr-2" /> Instagram
            </a>
            <a
              href="https://www.facebook.com/vitivinicola.cernobbio/?locale=it_IT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-700 hover:underline"
            >
              <FaFacebook className="mr-2" /> Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
