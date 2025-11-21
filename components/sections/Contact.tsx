'use client';

import { CONTACT } from '@/lib/constants';
import { FiPhone, FiMail, FiInstagram, FiClock } from 'react-icons/fi';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Card from '@/components/ui/Card';

export default function Contact() {
  return (
    <section id="contact" className="section-padding-lg bg-gradient-to-b from-beige-light to-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-primary">
                Contacto
              </h2>
              <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto">
                Estamos aquí para ayudarte. Contáctanos de la forma que prefieras.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Información de contacto */}
            <ScrollReveal direction="right" delay={100}>
              <Card hover padding="lg">
                <h3 className="font-heading text-2xl mb-8 text-primary">
                  Información de Contacto
                </h3>

                <div className="space-y-6">
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="flex items-center text-gray-700 hover:text-primary transition-all duration-300 group p-3 rounded-xl hover:bg-primary/5"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <FiPhone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Teléfono</p>
                      <p className="font-semibold text-lg">{CONTACT.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center text-gray-700 hover:text-primary transition-all duration-300 group p-3 rounded-xl hover:bg-primary/5"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <FiMail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <p className="font-semibold text-lg">{CONTACT.email}</p>
                    </div>
                  </a>

                  <a
                    href={CONTACT.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary transition-all duration-300 group p-3 rounded-xl hover:bg-primary/5"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <FiInstagram className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Instagram</p>
                      <p className="font-semibold text-lg">@santapizzacl</p>
                    </div>
                  </a>

                  <div className="flex items-start p-3 rounded-xl pt-6 border-t border-gray-200">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <FiClock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-3 font-semibold">Horarios</p>
                      <div className="space-y-2">
                        <div>
                          <p className="font-semibold text-gray-800">Lunes a domingo</p>
                          <p className="text-gray-600 text-sm">Brunch: {CONTACT.hours.weekdays}</p>
                          <p className="text-gray-600 text-sm">
                            Restaurante: {CONTACT.hours.weekends}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            {/* Mensaje */}
            <ScrollReveal direction="left" delay={200}>
              <Card hover padding="lg" className="flex flex-col justify-center bg-gradient-to-br from-primary/5 to-transparent">
                <h3 className="font-heading text-2xl mb-6 text-primary">
                  ¿Tienes alguna pregunta?
                </h3>
                <p className="text-gray-700 mb-6 font-body leading-relaxed">
                  No dudes en contactarnos. Estamos aquí para hacer de tu experiencia en Santa Pizza
                  algo memorable.
                </p>
                <p className="text-gray-600 font-body leading-relaxed">
                  Puedes llamarnos, escribirnos un email o seguirnos en nuestras redes sociales para
                  estar al día con nuestras novedades.
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

