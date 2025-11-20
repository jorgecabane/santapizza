import { RESTAURANT_INFO } from '@/lib/constants';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section-padding-lg bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl mb-6 text-primary">
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Santa Pizza comenzó en el año <strong>{RESTAURANT_INFO.founded}</strong> junto al mar 
                en las Rocas de Santo Domingo, gracias al sueño de una pareja de amantes del mar, 
                la vida sana y la buena gastronomía italiana.
              </p>
              <p>
                Ofrecemos comida italiana auténtica: pizza artesanal, pasta fresca, risottos cremosos, 
                acompañados de una selección de vinos, café italiano y tragos. Todo esto en un ambiente 
                único con vista al mar, chimenea, terraza y playa.
              </p>
              <p className="font-accent text-xl text-primary">
                Tradición italiana en un ambiente costero inigualable.
              </p>
            </div>
          </div>
          
          {/* Imagen */}
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Vista al mar desde las Rocas de Santo Domingo"
              fill
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

