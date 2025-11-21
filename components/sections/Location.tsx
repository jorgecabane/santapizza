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
  FiCalendar,
} from 'react-icons/fi';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

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
    <section id="menu" className="section-padding-lg bg-gradient-to-b from-white to-beige-light">
      <div className="container-custom">
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-primary">
              Ubicación y Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
              Encuéntranos en las Rocas de Santo Domingo. Un espacio único con todas las
              comodidades.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 md:items-stretch">
            {/* Mapa */}
            <ScrollReveal direction="right" delay={100}>
              <div className="rounded-2xl overflow-hidden shadow-2xl md:h-full">
                <iframe
                  src={`https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}&hl=es&z=15&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ minHeight: '500px', border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </ScrollReveal>

            {/* Información y características */}
            <ScrollReveal direction="left" delay={200}>
              <div className="flex flex-col md:h-full gap-6">
                {/* Dirección y contacto */}
                <Card hover padding="lg" className="bg-white">
                  <div className="space-y-4">
                    <h3 className="font-heading text-2xl mb-4 text-primary">
                      Información
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <FiMapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">{location.name}</p>
                          <p className="text-gray-600 text-sm">{location.address}</p>
                        </div>
                      </div>
                      <a
                        href={`tel:${location.phone}`}
                        className="flex items-center space-x-3 text-gray-700 hover:text-primary transition-colors group"
                      >
                        <FiPhone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                        <span className="font-semibold">{location.phone}</span>
                      </a>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <Button
                        href={`https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`}
                        variant="primary"
                        size="md"
                        external
                        className="w-full"
                      >
                        <FiNavigation className="mr-2" />
                        Cómo llegar
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Características */}
                <Card hover padding="lg" className="bg-white flex-1">
                  <h3 className="font-heading text-2xl mb-6 text-primary">
                    Nuestras Comodidades
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300 group"
                        >
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                          </div>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                            {feature.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

