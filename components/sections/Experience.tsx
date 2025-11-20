'use client';

import { useEffect, useState } from 'react';

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
  const [activeId, setActiveId] = useState<string | null>(
    experiences[0]?.id ?? null,
  );

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-experience-section]'),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-id');
          if (!id) return;

          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            // Cuando una sección está al menos al 60% en pantalla, la marcamos como activa
            setActiveId(id);
          }
        });
      },
      {
        threshold: [0.4, 0.6, 0.8],
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
            className="relative min-h-screen flex items-center justify-center"
            style={{ backgroundColor: '#00000063' }}
          >
            {/* Fondo con efecto parallax (background fijo) */}
            <div
              className="absolute inset-0 -z-10 bg-fixed bg-center bg-cover"
              style={{ backgroundImage: `url(${experience.image})` }}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

            {/* Contenido */}
            <div
              className={`container-custom px-4 md:px-6 lg:px-8 text-center text-white transition-all duration-700 ease-out transform ${
                isActive
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl mb-4 text-white drop-shadow-xl">
                {experience.title}
              </h2>
              <p className="xl md:text-2xl lg:text-3xl mb-6 text-white drop-shadow-md">
                {experience.subtitle}
              </p>
            </div>
          </article>
        );
      })}

      {/* CTA final */}
      <div className="relative bg-black text-white py-20">
        <div className="container-custom text-center px-4">
          <h3 className="font-heading text-4xl md:text-5xl mb-6 text-white">
            Ven a vivir el momento
          </h3>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Déjate llevar por una experiencia gastronómica única{' '}
            donde la tradición italiana se encuentra con la magia del océano.
          </p>
          <a
            href="https://gour.media/booking/santa-pizza/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Reservar Mesa
          </a>
        </div>
      </div>
    </section>
  );
}

