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
        accent: ['var(--font-cormorant)', 'serif'],
      },
      spacing: {
        'section': '4rem',
        'section-lg': '6rem',
      },
    },
  },
  plugins: [],
};
export default config;

