import { CONTACT } from '@/lib/constants';
import { FiPhone, FiMail, FiInstagram, FiClock } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="section-padding-lg bg-beige-light">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl mb-4 text-primary">
              Contacto
            </h2>
            <p className="text-xl text-gray-600">
              Estamos aquí para ayudarte. Contáctanos de la forma que prefieras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Información de contacto */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="font-heading text-2xl mb-6 text-primary">Información de Contacto</h3>
              
              <div className="space-y-6">
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center text-gray-700 hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <FiPhone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Teléfono</p>
                    <p className="font-semibold">{CONTACT.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center text-gray-700 hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <FiMail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-semibold">{CONTACT.email}</p>
                  </div>
                </a>

                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <FiInstagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Instagram</p>
                    <p className="font-semibold">@santapizzacl</p>
                  </div>
                </a>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <FiClock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Horarios</p>
                    <p className="font-semibold">Lunes - Viernes</p>
                    <p className="text-gray-600">{CONTACT.hours.weekdays}</p>
                    <p className="font-semibold mt-2">Sábado - Domingo</p>
                    <p className="text-gray-600">{CONTACT.hours.weekends}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mensaje */}
            <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col justify-center">
              <h3 className="font-heading text-2xl mb-4 text-primary">¿Tienes alguna pregunta?</h3>
              <p className="text-gray-600 mb-6">
                No dudes en contactarnos. Estamos aquí para hacer de tu experiencia en Santa Pizza 
                algo memorable.
              </p>
              <p className="text-gray-600">
                Puedes llamarnos, escribirnos un email o seguirnos en nuestras redes sociales 
                para estar al día con nuestras novedades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

