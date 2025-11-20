'use client';

import { Link as ScrollLink } from 'react-scroll';
import { FiArrowDown } from 'react-icons/fi';
import { RESTAURANT_INFO } from '@/lib/constants';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo - Se reemplazará con foto real de Instagram/Google Maps */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />
        {/* Placeholder - Reemplazar con imagen real con vista al mar */}
        <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900" />
      </div>

      {/* Contenido */}
      <div className="relative z-20 container-custom text-center text-white px-4">
        <div className="mb-8 flex justify-center">
          <Image
            src="/icons/santapizza-white.svg"
            alt="Santa Pizza"
            width={800}
            height={60}
            className="w-[75%] h-auto"
            priority
          />
        </div>
        <p className="font-accent text-lg md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto text-balance">
          {RESTAURANT_INFO.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <a
            href="https://gour.media/booking/santa-pizza/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Reservar Mesa
          </a>
          <ScrollLink
            to="menu"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold border-2 border-white transition-all duration-300 cursor-pointer"
          >
            Ver Menú
          </ScrollLink>
        </div>
      </div>
      
      {/* Scroll indicator - al fondo de la sección */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="animate-bounce cursor-pointer"
        >
          <FiArrowDown className="w-8 h-8 text-white" />
        </ScrollLink>
      </div>
    </section>
  );
}

