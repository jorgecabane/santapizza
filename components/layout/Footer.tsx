'use client';

import Link from 'next/link';
import { CONTACT, LOCATIONS } from '@/lib/constants';
import { FiInstagram, FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import Button from '@/components/ui/Button';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container-custom section-padding-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Información */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-white text-3xl mb-6">Santa Pizza</h3>
            <p className="text-gray-300 mb-6 font-body leading-relaxed max-w-md">
              Una experiencia que mezcla tradición italiana, vida sana y el gusto por el arte. Desde
              2001 en las Rocas de Santo Domingo.
            </p>
            <div className="flex space-x-4">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FiInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Ubicación */}
          <div>
            <h4 className="font-heading text-white text-xl mb-6">Ubicación</h4>
            <div className="space-y-4">
              {LOCATIONS.map((location) => (
                <div key={location.id} className="text-gray-300">
                  <h5 className="font-semibold text-white mb-2">{location.name}</h5>
                  <p className="text-sm flex items-start mb-3">
                    <FiMapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-primary" />
                    <span className="leading-relaxed">{location.address}</span>
                  </p>
                  <a
                    href={`tel:${location.phone}`}
                    className="text-sm flex items-center hover:text-primary transition-colors group"
                  >
                    <FiPhone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    {location.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Reservas y Contacto */}
          <div>
            <h4 className="font-heading text-white text-xl mb-6">Reservas y Contacto</h4>
            <div className="space-y-4">
              <Button
                href={CONTACT.booking}
                variant="primary"
                size="sm"
                external
                className="w-full mb-6"
              >
                Reservar Mesa
              </Button>
              <div className="space-y-3">
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center hover:text-primary transition-colors group"
                >
                  <FiPhone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{CONTACT.phone}</span>
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center hover:text-primary transition-colors group"
                >
                  <FiMail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{CONTACT.email}</span>
                </a>
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-start space-x-3">
                    <FiClock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-white mb-1">Horarios</p>
                      <p className="text-gray-400 mb-1">Lunes a domingo</p>
                      <p className="text-gray-300">Brunch: {CONTACT.hours.weekdays}</p>
                      <p className="text-gray-300">Restaurante: {CONTACT.hours.weekends}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            &copy; {new Date().getFullYear()} Santa Pizza. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs font-body">
            Desde 2001 - Tradición Italiana con Vista al Mar
          </p>
        </div>
      </div>
    </footer>
  );
}

