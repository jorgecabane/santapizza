'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

const navigation = [
  { name: 'Inicio', href: 'hero', offset: -80 },
  { name: 'Nuestra Historia', href: 'about', offset: -80 },
  { name: 'La Experiencia', href: 'experience', offset: -80 },
  { name: 'Ubicación', href: 'menu', offset: -80 },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevenir scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-md'
            : 'bg-transparent'
        }`}
      >
        <nav className={`container-custom transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-6'
        } px-4 md:px-6 lg:px-8`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/icons/logo-red.svg"
                alt="Santa Pizza"
                width={40}
                height={60}
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-8 w-auto' : 'h-10 w-auto'
                }`}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    isScrolled
                      ? 'text-black hover:text-primary-dark'
                      : 'text-white hover:text-primary-light'
                  }`}
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden transition-colors z-50 relative ${
                isScrolled
                  ? 'text-primary hover:text-primary-dark'
                  : 'text-white hover:text-primary-light'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header del drawer */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Image
              src="/icons/logo-red.svg"
              alt="Santa Pizza"
              width={40}
              height={60}
              className="h-10 w-auto"
              priority
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Cerrar menú"
            >
              <FiX className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Navegación del drawer */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-2">
              {navigation.map((item, index) => (
                <ScrollLink
                  key={item.name}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-4 px-6 rounded-lg text-base font-medium text-gray-800 hover:text-white hover:bg-primary transition-all duration-300 cursor-pointer transform active:scale-95 ${
                    isMobileMenuOpen
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                  }}
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          </nav>

          {/* Horarios de operación */}
          <div className="border-t border-gray-200 px-6 py-6">
            <div
              className={`transform transition-all duration-300 ${
                isMobileMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${navigation.length * 50 + 100}ms` : '0ms',
              }}
            >
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Horarios
              </h3>
              <p className="text-xs text-gray-500 mb-4">Lunes a domingo</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Horario brunch</span>
                  <span className="text-sm font-medium text-gray-800">10:00 - 12:30</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Horario restaurante</span>
                  <span className="text-sm font-medium text-gray-800">13:00 - 21:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

