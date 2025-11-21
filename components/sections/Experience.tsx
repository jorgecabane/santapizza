'use client';

import { useEffect, useState, useRef } from 'react';
import Button from '@/components/ui/Button';

const experiences = [
  {
    id: 'pizza',
    title: 'Pizza Artesanal',
    subtitle: 'Tradición italiana en cada bocado',
    description:
      'Cada masa se amasa a mano con ingredientes frescos y se hornea en nuestro horno de leña, creando ese sabor auténtico que solo la tradición italiana puede ofrecer.',
    image: '/images/gallery/pizza2.png',
  },
  {
    id: 'ambiente',
    title: 'Chimenea y Terraza',
    subtitle: 'Calidez en invierno, frescura en verano',
    description:
      'En invierno, la chimenea crea un ambiente acogedor y romántico. En verano, nuestra terraza junto a la playa es el lugar perfecto para disfrutar al aire libre con la brisa marina.',
    image: '/images/gallery/terraza.png',
  },
  {
    id: 'vista',
    title: 'Vista al Mar',
    subtitle: 'Donde el océano se encuentra con la gastronomía',
    description:
      'Cada mesa tiene vista privilegiada al Pacífico. Disfruta de atardeceres espectaculares mientras saboreas auténtica comida italiana. El sonido de las olas y la brisa marina crean el ambiente perfecto.',
    image: '/images/gallery/lateral.png',
  },
  {
    id: 'vino',
    title: 'Vinos y Tragos',
    subtitle: 'Selección cuidadosa para cada momento',
    description:
      'Nuestra carta incluye los mejores vinos italianos y chilenos. Complementa tu experiencia con cócteles artesanales o un espresso italiano perfecto mientras contemplas el atardecer.',
    image: '/images/gallery/tragos.png',
  },
];

export default function Experience() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const hasBeenVisibleRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-experience-section]'),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-id');
          if (!id) return;

          // Si la sección está visible y no ha sido vista antes, activarla con animación
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            if (!hasBeenVisibleRef.current.has(id)) {
              hasBeenVisibleRef.current.add(id);
              // Pequeño delay para asegurar que la animación se vea
              setTimeout(() => {
                setActiveId(id);
              }, 150);
            } else {
              // Si ya fue vista, activarla inmediatamente
              setActiveId(id);
            }
          }
        });
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '-20% 0px -20% 0px', // Solo activar cuando esté bien visible en el centro
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return (
    <section id="experience" className="relative">
      {experiences.map((experience, index) => {
        const isActive = experience.id === activeId;

        return (
          <article
            key={experience.id}
            data-experience-section
            data-id={experience.id}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: '#00000063' }}
          >
            {/* Fondo con efecto parallax (background fijo) */}
            <div
              className={`absolute inset-0 -z-10 bg-fixed bg-center bg-cover transition-transform duration-1000 parallax-slow ${
                isActive ? 'scale-100' : 'md:scale-105 scale-100'
              }`}
              style={{
                backgroundImage: `url(${experience.image})`,
                willChange: 'transform',
              }}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

            {/* Contenido */}
            <div
              className={`container-custom px-4 md:px-6 lg:px-8 text-center text-white transition-all duration-700 ease-out ${
                isActive
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl mb-4 text-white drop-shadow-xl">
                {experience.title}
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl mb-6 text-white drop-shadow-md font-body font-light">
                {experience.subtitle}
              </p>
              <div
                className={`max-w-2xl mx-auto mt-8 transition-all duration-700 delay-300 ${
                  isActive
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <p className="text-lg md:text-xl text-white/90 font-body leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          </article>
        );
      })}

      {/* CTA final */}
      <div className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white py-20">
        <div className="container-custom text-center px-4">
          <h3 className="font-heading text-4xl md:text-5xl mb-6 text-white">
            Ven a vivir el momento
          </h3>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto font-body">
            Déjate llevar por una experiencia gastronómica única donde la tradición italiana se
            encuentra con la magia del océano.
          </p>
          <Button
            href="https://gour.media/booking/santa-pizza/"
            variant="primary"
            size="lg"
            external
          >
            Reservar Mesa
          </Button>
        </div>
      </div>
    </section>
  );
}

