# Santa Pizza - Website

Sitio web estático elegante para Santa Pizza, restaurante italiano con vista al mar en Santo Domingo y Las Condes.

## 🚀 Inicio Rápido

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🛠️ Tecnologías

- **Next.js 14+** - Framework React con App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilos utilitarios
- **Framer Motion** - Animaciones suaves
- **React Icons** - Iconos
- **React Scroll** - Navegación suave

## 📁 Estructura del Proyecto

```
santapizza/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/
│   ├── layout/            # Header, Footer
│   └── sections/           # Secciones de la página
├── lib/
│   ├── constants.ts       # Constantes (ubicaciones, contacto)
│   └── types.ts           # TypeScript types
├── public/
│   └── images/            # Imágenes estáticas
└── styles/                # Estilos adicionales
```

## 🎨 Sistema de Diseño

### Colores

- **Primary (Rojo Santa Pizza)**: `#DC143C`
- **Beige**: `#F5F5DC` - Fondos cálidos
- **Sea Blue**: `#4682B4` - Ambiente costero
- **Terracotta**: `#CD853F` - Toques mediterráneos

### Tipografías

- **Headings**: Playfair Display (serif elegante)
- **Body**: Inter (sans-serif moderna)
- **Accent**: Cormorant Garamond (serif para acentos)

## 📸 Integración de Imágenes

Ver `INTEGRACION_IMAGENES.md` para instrucciones detalladas sobre cómo integrar imágenes de Instagram y Google Maps.

## 🚢 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio GitHub a Vercel
2. Vercel detecta Next.js automáticamente
3. Deploy automático en cada push

### Netlify

1. Conecta tu repositorio
2. Build command: `npm run build`
3. Publish directory: `out`

### Cloudflare Pages

1. Conecta tu repositorio
2. Framework preset: Next.js
3. Build command: `npm run build`

## 📝 Próximos Pasos

- [ ] Integrar imágenes reales de Instagram
- [ ] Integrar imágenes de Google Maps
- [ ] Actualizar información de contacto (teléfonos, emails)
- [ ] Integrar menú completo desde gour.media
- [ ] Configurar sistema de reservas
- [ ] Optimizar SEO
- [ ] Testing en diferentes dispositivos

## 📄 Licencia

Privado - Santa Pizza

