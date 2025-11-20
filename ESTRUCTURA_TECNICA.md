# Estructura Técnica Detallada - Santa Pizza

## 🏗️ Arquitectura Recomendada: Next.js 14+ (App Router)

### ¿Por qué Next.js para este proyecto?

1. **Static Site Generation (SSG)**: Perfecto para sitios de restaurantes
   - Genera HTML estático en build time
   - Carga instantánea
   - SEO excelente

2. **Image Optimization**: Built-in
   - Next.js Image component optimiza automáticamente
   - Formatos modernos (WebP, AVIF)
   - Lazy loading automático

3. **Despliegue Súper Fácil**:
   - Vercel: 1 click deploy desde GitHub
   - Netlify: Similar facilidad
   - Cloudflare Pages: Gratis y rápido
   - Cualquier hosting estático funciona

4. **Mantenibilidad**:
   - Estructura modular clara
   - TypeScript para type safety
   - Fácil refactoring

---

## 📁 Estructura de Carpetas Detallada

```
santapizza/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   │   ├── hero-santo-domingo.jpg
│   │   │   └── hero-las-condes.jpg
│   │   ├── menu/
│   │   │   ├── pizzas/
│   │   │   ├── pastas/
│   │   │   ├── risottos/
│   │   │   └── postres/
│   │   ├── gallery/
│   │   │   ├── ambiente/
│   │   │   ├── comida/
│   │   │   └── vista-mar/
│   │   ├── locations/
│   │   └── logo/
│   │       └── logo.svg (o .png)
│   ├── icons/
│   └── favicon.ico
│
├── src/
│   ├── app/                          # Next.js 14 App Router
│   │   ├── layout.tsx                # Layout principal
│   │   ├── page.tsx                  # Página principal (one-page)
│   │   ├── menu/
│   │   │   └── page.tsx              # Página de menú (opcional, si no es one-page)
│   │   └── globals.css               # Estilos globales
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx            # Header con navegación
│   │   │   ├── Footer.tsx            # Footer con contacto
│   │   │   ├── Navigation.tsx        # Menú de navegación
│   │   │   └── MobileMenu.tsx        # Menú móvil
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx              # Hero section
│   │   │   ├── About.tsx             # Nuestra historia
│   │   │   ├── Experience.tsx        # La experiencia
│   │   │   ├── Menu.tsx              # Sección de menú
│   │   │   ├── MenuSection.tsx       # Componente para cada categoría del menú
│   │   │   ├── Gallery.tsx           # Galería de fotos
│   │   │   ├── Locations.tsx         # Ubicaciones
│   │   │   ├── Reservations.tsx      # Reservas
│   │   │   └── Contact.tsx           # Contacto
│   │   │
│   │   └── ui/                       # Componentes reutilizables
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Image.tsx             # Wrapper para Next Image
│   │       ├── Section.tsx           # Wrapper para secciones
│   │       ├── Container.tsx         # Container con max-width
│   │       └── MenuItem.tsx          # Item individual del menú
│   │
│   ├── lib/
│   │   ├── constants.ts              # Constantes (horarios, contacto, etc.)
│   │   ├── menu-data.ts              # Datos del menú (puede ser JSON o TS)
│   │   ├── locations.ts              # Datos de ubicaciones
│   │   └── utils.ts                  # Utilidades
│   │
│   ├── styles/
│   │   ├── variables.css             # CSS Variables (colores, tipografías)
│   │   ├── components.css            # Estilos de componentes
│   │   └── animations.css            # Animaciones (opcional)
│   │
│   └── types/
│       └── index.ts                  # TypeScript types
│
├── .env.local                        # Variables de entorno (si las hay)
├── .gitignore
├── next.config.js                    # Configuración de Next.js
├── package.json
├── tsconfig.json                     # Configuración TypeScript
├── tailwind.config.js                # Si usas Tailwind (opcional)
└── README.md
```

---

## 🎨 Sistema de Diseño: CSS Variables

### Archivo: `src/styles/variables.css`

```css
:root {
  /* Colores Principales */
  --color-primary: #DC143C;        /* Rojo Santa Pizza */
  --color-primary-dark: #B71C1C;
  --color-primary-light: #EF5350;
  
  --color-black: #000000;
  --color-white: #FFFFFF;
  
  /* Colores Secundarios */
  --color-beige: #F5F5DC;
  --color-beige-light: #FAF0E6;
  --color-olive: #6B8E23;
  --color-sea-blue: #4682B4;
  --color-terracotta: #CD853F;
  
  /* Colores de Texto */
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #666666;
  --color-text-light: #999999;
  
  /* Colores de Fondo */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F5F5DC;
  --color-bg-dark: #1A1A1A;
  
  /* Tipografías */
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
  --font-accent: 'Cormorant Garamond', serif;
  
  /* Tamaños de Fuente */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-size-5xl: 3rem;
  
  /* Espaciado */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;
  
  /* Breakpoints (para media queries) */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  
  /* Transiciones */
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 500ms ease;
}
```

---

## 📦 Dependencias Recomendadas

### package.json básico

```json
{
  "name": "santapizza",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0"
  }
}
```

### Dependencias Opcionales (según necesidades)

```json
{
  "dependencies": {
    // Animaciones suaves
    "framer-motion": "^10.16.0",
    
    // Formularios (si hay formulario de reservas)
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0",
    
    // Iconos
    "react-icons": "^4.11.0",
    
    // Smooth scroll (para navegación one-page)
    "react-scroll": "^1.9.0"
  },
  "devDependencies": {
    // Si usas Tailwind CSS
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.31"
  }
}
```

---

## ⚙️ Configuración Next.js

### next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generación estática
  output: 'export', // Para generar sitio completamente estático
  
  // Optimización de imágenes
  images: {
    unoptimized: true, // Solo si usas output: 'export'
    // O configuración para optimización:
    // domains: ['example.com'], // Dominios permitidos para imágenes
    // formats: ['image/avif', 'image/webp'],
  },
  
  // Configuración de rutas
  trailingSlash: true, // Opcional: URLs con trailing slash
  
  // Variables de entorno públicas
  env: {
    INSTAGRAM_URL: 'https://www.instagram.com/santapizzacl/',
    GOOGLE_MAPS_URL: 'https://maps.google.com/...',
  },
}

module.exports = nextConfig
```

---

## 🔧 Configuración TypeScript

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/styles/*": ["./src/styles/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## 📝 Estructura de Datos

### src/lib/constants.ts

```typescript
export const RESTAURANT_INFO = {
  name: 'Santa Pizza',
  tagline: 'Una experiencia que mezcla tradición italiana, vida sana y el gusto por el arte',
  founded: 2001,
  philosophy: 'Combinación de comida italiana mediterránea tradicional, vida sana, gusto por el arte y la cultura',
} as const;

export const LOCATIONS = [
  {
    id: 'santo-domingo',
    name: 'Santa Pizza Santo Domingo',
    address: 'Rocas de Santo Domingo',
    description: 'Vista al mar, experiencia original desde 2001',
    googleMapsUrl: 'https://maps.google.com/...',
    phone: '+56 X XXXX XXXX',
    email: 'santodomingo@santapizza.cl',
  },
  {
    id: 'las-condes',
    name: 'Santa Pizza Las Condes',
    address: 'Las Condes, Santiago',
    description: 'Ubicación urbana',
    googleMapsUrl: 'https://maps.google.com/...',
    phone: '+56 X XXXX XXXX',
    email: 'lascondes@santapizza.cl',
  },
] as const;

export const CONTACT = {
  instagram: 'https://www.instagram.com/santapizzacl/',
  phone: '+56 X XXXX XXXX',
  email: 'contacto@santapizza.cl',
  hours: {
    weekdays: '12:00 - 23:00',
    weekends: '12:00 - 00:00',
  },
} as const;
```

---

## 🚀 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run start

# Linting
npm run lint
```

---

## 📤 Despliegue

### Opción 1: Vercel (Recomendado)

1. Conectar repositorio GitHub a Vercel
2. Vercel detecta Next.js automáticamente
3. Deploy automático en cada push

### Opción 2: Netlify

1. Conectar repositorio GitHub a Netlify
2. Build command: `npm run build`
3. Publish directory: `out` (si usas `output: 'export'`)

### Opción 3: Cloudflare Pages

1. Conectar repositorio
2. Framework preset: Next.js
3. Build command: `npm run build`

### Opción 4: Hosting Estático (GitHub Pages, S3, etc.)

Si usas `output: 'export'` en next.config.js:
- Genera carpeta `out/` con HTML estático
- Sube esa carpeta a cualquier hosting estático

---

## ✅ Checklist de Mejores Prácticas

- [ ] TypeScript estricto habilitado
- [ ] Variables CSS para colores/tipografías
- [ ] Componentes modulares y reutilizables
- [ ] Optimización de imágenes (Next Image)
- [ ] SEO: meta tags, Open Graph, structured data
- [ ] Accesibilidad: ARIA labels, contraste, navegación por teclado
- [ ] Mobile-first responsive design
- [ ] Performance: lazy loading, code splitting
- [ ] Error boundaries
- [ ] 404 page personalizada
- [ ] Loading states
- [ ] Analytics (opcional: Google Analytics, Plausible)

---

## 🔄 Flujo de Trabajo Recomendado

1. **Setup inicial**: Crear proyecto Next.js con TypeScript
2. **Sistema de diseño**: Variables CSS, componentes base
3. **Layout**: Header, Footer, Navigation
4. **Secciones**: Una por una, empezando por Hero
5. **Contenido**: Integrar datos reales (menú, ubicaciones)
6. **Optimización**: Performance, SEO, accesibilidad
7. **Testing**: Probar en diferentes dispositivos
8. **Deploy**: Subir a hosting elegido

---

## 📚 Recursos Útiles

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

