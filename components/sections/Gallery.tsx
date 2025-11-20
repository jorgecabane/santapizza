'use client';

import { useState } from 'react';
import { CONTACT } from '@/lib/constants';
import { FiInstagram, FiX } from 'react-icons/fi';
import Image from 'next/image';

// Placeholder - Se reemplazará con imágenes reales de Instagram y Google Maps
const galleryImages = [
  { id: '1', url: '/images/gallery/placeholder-1.jpg', alt: 'Ambiente del restaurante', category: 'ambiente' },
  { id: '2', url: '/images/gallery/placeholder-2.jpg', alt: 'Pizza artesanal', category: 'comida' },
  { id: '3', url: '/images/gallery/placeholder-3.jpg', alt: 'Vista al mar', category: 'vista-mar' },
  { id: '4', url: '/images/gallery/placeholder-4.jpg', alt: 'Plato destacado', category: 'comida' },
  { id: '5', url: '/images/gallery/placeholder-5.jpg', alt: 'Ambiente relajado', category: 'ambiente' },
  { id: '6', url: '/images/gallery/placeholder-6.jpg', alt: 'Atardecer en el restaurante', category: 'vista-mar' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding-lg bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-primary">
            Galería
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Descubre la experiencia Santa Pizza a través de nuestras imágenes
          </p>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary-dark font-semibold"
          >
            <FiInstagram className="w-5 h-5 mr-2" />
            Ver más en Instagram
          </a>
        </div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-sm">{image.alt}</p>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  Click para ampliar
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de imagen ampliada */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <FiX className="w-8 h-8" />
            </button>
            <div className="max-w-4xl max-h-full">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg">
                <p className="text-gray-500 p-8 text-center">Imagen ampliada</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

