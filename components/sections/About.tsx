'use client';

import { RESTAURANT_INFO } from '@/lib/constants';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedNumber from '@/components/ui/AnimatedNumber';

export default function About() {
  return (
    <section id="about" className="section-padding-lg bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="right" delay={0}>
            <div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-primary">
                Nuestra Historia
              </h2>
              <div className="space-y-6 text-lg text-gray-700 font-body leading-relaxed">
                <p>
                  Santa Pizza comenzó en el año{' '}
                  <strong className="text-primary font-semibold text-2xl">
                    <AnimatedNumber value={RESTAURANT_INFO.founded} reverse />
                  </strong>{' '}
                  junto al mar en las Rocas de Santo Domingo, gracias al sueño de una pareja de
                  amantes del mar, la vida sana y la buena gastronomía italiana.
                </p>
                <p>
                  Ofrecemos comida italiana auténtica: pizza artesanal, pasta fresca, risottos
                  cremosos, acompañados de una selección de vinos, café italiano y tragos. Todo
                  esto en un ambiente único con vista al mar, chimenea, terraza y playa.
                </p>
                <div className="pt-4 border-t-2 border-primary/20">
                  <p className="font-heading text-2xl text-primary italic">
                    Tradición italiana en un ambiente costero inigualable.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Imagen */}
          <ScrollReveal direction="left" delay={100}>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Vista al mar desde las Rocas de Santo Domingo"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={false}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

