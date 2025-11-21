import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores principales de Santa Pizza
        primary: {
          DEFAULT: '#DC143C', // Rojo Santa Pizza
          dark: '#B71C1C',
          light: '#EF5350',
        },
        // Colores secundarios (ambiente costero/mediterráneo)a
        beige: {
          DEFAULT: '#F5F5DC',
          light: '#FAF0E6',
        },
        olive: '#6B8E23',
        sea: {
          DEFAULT: '#4682B4',
          light: '#5F9EA0',
        },
        terracotta: '#CD853F',
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      spacing: {
        'section': '5rem',
        'section-lg': '7rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};
export default config;

