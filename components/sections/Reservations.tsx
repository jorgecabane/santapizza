'use client';

import { useState } from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import { CONTACT } from '@/lib/constants';

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    location: 'santo-domingo',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se integraría con el sistema de reservas
    alert('Sistema de reservas - Se integrará con el sistema existente');
  };

  return (
    <section id="reservations" className="section-padding-lg bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl mb-4 text-primary">
              Reservas
            </h2>
            <p className="text-xl text-gray-600">
              Reserva tu mesa y vive la experiencia Santa Pizza
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-beige-light rounded-lg p-6">
              <h3 className="font-heading text-xl mb-4 text-primary">Reserva por Teléfono</h3>
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center text-lg font-semibold text-gray-700 hover:text-primary transition-colors"
              >
                <FiPhone className="w-5 h-5 mr-3" />
                {CONTACT.phone}
              </a>
            </div>

            <div className="bg-beige-light rounded-lg p-6">
              <h3 className="font-heading text-xl mb-4 text-primary">Reserva por Email</h3>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center text-lg font-semibold text-gray-700 hover:text-primary transition-colors"
              >
                <FiMail className="w-5 h-5 mr-3" />
                {CONTACT.email}
              </a>
            </div>
          </div>

          {/* Formulario de reserva */}
          <form onSubmit={handleSubmit} className="bg-beige-light rounded-lg p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                  Ubicación *
                </label>
                <select
                  id="location"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                >
                  <option value="santo-domingo">Santo Domingo</option>
                  <option value="las-condes">Las Condes</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                  Fecha *
                </label>
                <input
                  type="date"
                  id="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">
                  Hora *
                </label>
                <input
                  type="time"
                  id="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-semibold text-gray-700 mb-2">
                  Número de Personas *
                </label>
                <select
                  id="guests"
                  required
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'persona' : 'personas'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Mensaje (opcional)
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                placeholder="Comentarios especiales, celebraciones, etc."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Enviar Reserva
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

