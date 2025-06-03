import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contatti" className="py-16 bg-gray-300">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contatti & Prenotazioni</h2>
        <div className="space-y-4 text-lg">
          <p className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-gold" />
            <a
              href="https://www.google.it/maps/place/Gigi+e+Cristina+Winery+Como+Lake+,+vino+lago+di+Como,+Vitivinicola+Cernobbio,+Gold+medal+Heroic+Wineyard,+Viticoltura+eroica/@45.8480911,9.046156,17z/data=!3m1!4b1!4m6!3m5!1s0x47869d7d9a9694fb:0x581008da0cfda24d!8m2!3d45.8480911!4d9.0487309!16s%2Fg%2F11pqcq5jzv?hl=it&entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-olive-800 hover:underline"
            >
              Via Ronco 33, 22026 Maslianico (CO), Italia
            </a>
          </p>
          <p className="flex items-center">
            <FaPhoneAlt className="mr-2 text-gold" /> Telefono:
            <a
              href="tel:+393338746401"
              className="ml-1 text-olive-800 hover:underline"
            >
              +39 333 8746401
            </a>
          </p>
          <p className="flex items-center">
            <FaEnvelope className="mr-2 text-gold" /> Email:
            <a
              href="mailto:vitivinicolacernobbio@gmail.com"
              className="ml-1 text-olive-800 hover:underline"
            >
              vitivinicolacernobbio@gmail.com
            </a>
          </p>
          <p className="flex items-center">
            <FaWhatsapp className="mr-2 text-gold" /> Prenota su WhatsApp:
            <a
              href="https://wa.me/393338746401"
              className="ml-1 text-olive-800 hover:underline"
            >
              Chatta ora
            </a>
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
