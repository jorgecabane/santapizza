'use client';

import { LOCATIONS } from '@/lib/constants';
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiExternalLink,
  FiNavigation,
  FiHeart,
  FiEye,
  FiHome,
  FiSun,
  FiWifi,
  FiCalendar
} from 'react-icons/fi';

const features = [
  { icon: FiNavigation, text: 'Estacionamiento propio liberado' },
  { icon: FiHeart, text: 'Pet friendly' },
  { icon: FiEye, text: 'Vista al mar' },
  { icon: FiSun, text: 'Terraza al aire libre' },
  { icon: FiHome, text: 'Chimenea' },
  { icon: FiSun, text: 'Acceso a playa' },
  { icon: FiWifi, text: 'WiFi gratuito' },
  { icon: FiCalendar, text: 'Reservas disponibles' },
];

export default function Location() {
  const location = LOCATIONS[0];

  return (
    <section id="menu" className="section-padding-lg bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-primary">
            Ubicación y Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encuéntranos en las Rocas de Santo Domingo. Un espacio único con todas las comodidades.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:items-stretch">
            {/* Mapa */}
            <div className="rounded-lg overflow-hidden shadow-lg md:h-full">
              <iframe
                src={`https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}&hl=es&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{ minHeight: '400px', border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Información y características */}
            <div className="flex flex-col md:h-full">
              {/* Características */}
              <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
                <h3 className="font-heading text-xl mb-4 text-primary">
                  Nuestras Comodidades
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

