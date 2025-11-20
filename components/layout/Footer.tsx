import Link from 'next/link';
import { CONTACT, LOCATIONS } from '@/lib/constants';
import { FiInstagram, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white">
      <div className="container-custom section-padding-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Información */}
          <div>
            <h3 className="font-heading text-white text-2xl mb-4">Santa Pizza</h3>
            <p className="text-gray-300 mb-4">
                Una experiencia que mezcla tradición italiana, vida sana y el gusto por el arte. Desde 2001 en las Rocas de Santo Domingo.
            </p>
            <div className="flex space-x-4">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Ubicación */}
          <div>
            <h4 className="font-heading text-white text-xl mb-4">Ubicación</h4>
            <div className="space-y-4">
              {LOCATIONS.map((location) => (
                <div key={location.id} className="text-gray-300">
                  <h5 className="font-semibold text-white mb-1">{location.name}</h5>
                  <p className="text-sm flex items-start">
                    <FiMapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    {location.address}
                  </p>
                  <a
                    href={`tel:${location.phone}`}
                    className="text-sm flex items-center mt-1 hover:text-primary transition-colors"
                  >
                    <FiPhone className="w-4 h-4 mr-2" />
                    {location.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Reservas y Contacto */}
          <div>
            <h4 className="font-heading text-white text-xl mb-4">Reservas</h4>
            <div className="space-y-3 text-gray-300">
              <a
                href={CONTACT.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary-light font-semibold mb-4"
              >
                Reservar Mesa
              </a>
              <div className="pt-4 border-t border-gray-700">
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center hover:text-primary transition-colors mb-3"
                >
                  <FiPhone className="w-5 h-5 mr-3" />
                  {CONTACT.phone}
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center hover:text-primary transition-colors mb-4"
                >
                  <FiMail className="w-5 h-5 mr-3" />
                  {CONTACT.email}
                </a>
                <div>
                  <p className="text-sm mb-2">Horarios lunes a domingo:</p>
                  <p className="text-sm">Brunch: {CONTACT.hours.weekdays}</p>
                  <p className="text-sm">Restaurante: {CONTACT.hours.weekends}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Santa Pizza. Todos los derechos reservados.</p>
          <p className="mt-2">Desde 2001 - Tradición Italiana con Vista al Mar</p>
        </div>
      </div>
    </footer>
  );
}

