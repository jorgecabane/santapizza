# Planificación - Santa Pizza Website

## 📋 Fase 1: Investigación y Análisis ✅ COMPLETADA

### Información Recopilada
- [x] Revisar página web actual (gour.media/santa-pizza/)
- [x] Analizar perfil de Instagram (@santapizzacl)
- [x] Revisar Google Maps (fotos, reseñas, ubicación)
- [x] Identificar paleta de colores
- [x] Identificar tipografía
- [x] Entender el tono y estilo de comunicación
- [x] Analizar el público objetivo
- [x] Revisar menú y ofertas

### Características Identificadas

#### Historia y Filosofía
- **Fundación**: 2001 en las Rocas de Santo Domingo
- **Fundadores**: Pareja de amantes del mar, vida sana y buena gastronomía
- **Filosofía**: Combinación de comida italiana mediterránea tradicional, vida sana, gusto por el arte y la cultura
- **Estilo de vida**: Saludable y amigable con el entorno

#### Ubicaciones
- **Santo Domingo**: Rocas de Santo Domingo (vista al mar, experiencia original)
- **Las Condes**: Ubicación urbana

#### Experiencia del Cliente
- **Experiencia premium**: Vista al mar, atención personalizada
- **Ambiente relajado**: "Un relajo", ambiente costero
- **Precio alto**: No es barato pero siempre está lleno
- **Enfoque en experiencia**: La comida es "un viaje"
- **Factores únicos**: Tradición italiana + vida sana + arte + cultura + conexión con el mar

---

## 🎨 Fase 2: Diseño y Branding

### Identidad Visual Identificada

#### Logo y Marca
- **Logo**: Letra 'a' minúscula en rojo vibrante con halo rojo sobre fondo negro
- **Estilo**: Minimalista, elegante, alto contraste
- **Tipografía del logo**: Serif elegante con flourishes (ascender y descender decorativos)

#### Paleta de Colores
**Colores Principales (del logo):**
- **Rojo Santa Pizza**: `#DC143C` o `#C41E3A` (rojo vibrante, similar al del logo)
- **Negro**: `#000000` (fondo del logo)
- **Blanco**: `#FFFFFF` (texto sobre fondos oscuros)

**Colores Secundarios (ambiente costero/mediterráneo):**
- **Beige/Natural**: `#F5F5DC` o `#FAF0E6` (tonos cálidos naturales)
- **Verde Oliva**: `#6B8E23` (conexión con naturaleza)
- **Azul Mar**: `#4682B4` o `#5F9EA0` (vista al mar, ambiente costero)
- **Terracota**: `#CD853F` (tierra, mediterráneo)

**Uso de Colores:**
- Rojo: Acentos, CTAs, elementos destacados
- Negro: Textos principales, elementos elegantes
- Beige/Natural: Fondos, secciones de contenido
- Azul Mar: Secciones relacionadas con la ubicación costera

#### Tipografía
**Recomendaciones basadas en el logo:**
- **Títulos/Headings**: 
  - Serif elegante (Playfair Display, Cormorant Garamond, o similar)
  - Refleja la tradición italiana y sofisticación
- **Cuerpo de texto**: 
  - Sans-serif legible y moderna (Inter, Poppins, o Open Sans)
  - Balance entre elegancia y legibilidad
- **Acentos**: 
  - Mantener serif para elementos especiales (citas, destacados)

#### Estilo de Imágenes
- **Fotografía premium**: Alta calidad, iluminación natural
- **Temáticas**: 
  - Vista al mar y ambiente costero
  - Platos presentados artísticamente
  - Ambiente relajado y acogedor
  - Detalles de decoración (arte, cultura)
  - Vida sana y natural
- **Estilo**: Cálido, natural, mediterráneo, sofisticado pero relajado

#### Iconografía y Elementos Gráficos
- Líneas orgánicas y suaves
- Referencias al mar (olas sutiles, formas orgánicas)
- Elementos minimalistas
- Espacios en blanco generosos (elegancia)

### Secciones de la Página

#### Estructura Principal (One-Page o Multi-Page)
**Opción Recomendada: One-Page con navegación suave (scroll)**

1. **Hero Section**: 
   - Imagen impactante con vista al mar
   - Logo prominente
   - Tagline: "Una experiencia que mezcla tradición italiana, vida sana y el gusto por el arte"
   - CTA: "Reservar Mesa" / "Ver Menú"

2. **Nuestra Historia**: 
   - Fundación 2001 en las Rocas de Santo Domingo
   - Filosofía: mar, vida sana, gastronomía, arte y cultura
   - Valores: estilo de vida saludable y amigable con el entorno

3. **La Experiencia**: 
   - Vista al mar
   - Ambiente relajado
   - Atención personalizada
   - "Un viaje" gastronómico

4. **Menú**: 
   - Estructura basada en gour.media:
     - **Desayunos** (si aplica)
     - **Comida** (pizzas, pastas, risottos, antipastos, postres)
     - **Barra** (bebidas, vinos, cócteles)
     - **Vinos** (sección dedicada)
   - Presentación premium con fotos de platos
   - Descripciones evocadoras

5. **Galería**: 
   - Ambiente del restaurante
   - Platos destacados
   - Vista al mar
   - Eventos especiales
   - Fotos de Instagram integradas

6. **Ubicaciones**: 
   - **Santo Domingo**: Rocas de Santo Domingo (vista al mar)
   - **Las Condes**: Ubicación urbana
   - Mapas integrados (Google Maps)
   - Información de contacto por ubicación

7. **Reservas**: 
   - Formulario de reservas (integrar con sistema existente si tienen)
   - O enlace a sistema de reservas externo
   - Información de horarios

8. **Contacto**: 
   - Teléfono
   - Email
   - Redes sociales (Instagram: @santapizzacl)
   - Horarios de atención
   - Footer con toda la información

---

## 🛠️ Fase 3: Arquitectura Técnica

### Recomendación: Next.js (Static Site Generation)

**Ventajas para este proyecto:**
- ✅ Generación estática (SSG) perfecta para sitios de restaurantes
- ✅ SEO optimizado automáticamente
- ✅ Fácil despliegue en Vercel, Netlify, Cloudflare Pages, etc.
- ✅ React como base (ya conoces)
- ✅ Image optimization built-in
- ✅ Routing automático
- ✅ Fácil de mantener y refactorizar

### Estructura de Proyecto Propuesta

```
santapizza/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── menu/
│   │   ├── gallery/
│   │   └── logo/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Menu.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Reservations.tsx
│   │   │   ├── Location.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Image.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css (colores, tipografía)
│   │   └── components.css
│   ├── lib/
│   │   ├── constants.ts (horarios, contacto, etc.)
│   │   └── utils.ts
│   ├── app/ (Next.js 13+ App Router)
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── [sections]/
│   └── types/
│       └── index.ts
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

### Stack Tecnológico Recomendado

- **Framework**: Next.js 14+ (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: 
  - CSS Modules o Tailwind CSS (recomiendo Tailwind para facilidad)
  - CSS Variables para colores/tipografía
- **Optimización de Imágenes**: Next.js Image component
- **Animaciones**: Framer Motion (opcional, para transiciones suaves)
- **Formularios**: React Hook Form + Zod (si hay formularios)

---

## 🚀 Fase 4: Desarrollo

### Prioridades
1. Setup inicial del proyecto
2. Sistema de diseño (colores, tipografía, componentes base)
3. Layout principal (Header, Footer)
4. Secciones en orden de importancia
5. Optimización y testing

---

## 📦 Fase 5: Despliegue

### Opciones de Hosting (Todas compatibles con Next.js estático)
- **Vercel**: Integración nativa, gratis para proyectos personales
- **Netlify**: Muy fácil, buen free tier
- **Cloudflare Pages**: Rápido y gratis
- **GitHub Pages**: Gratis (requiere configuración adicional)
- **AWS S3 + CloudFront**: Escalable, más configuración

**Recomendación**: Vercel (más fácil) o Netlify (muy similar)

---

## 📝 Próximos Pasos

1. ✅ **Investigación completada** - Identidad visual y branding identificados
2. **Setup del proyecto Next.js** con TypeScript
3. **Crear sistema de diseño**:
   - Archivo de variables CSS con colores y tipografías
   - Componentes base (Button, Card, etc.)
4. **Desarrollo iterativo**:
   - Layout principal (Header, Footer)
   - Hero Section
   - Secciones en orden de prioridad
5. **Integración de contenido**:
   - Menú completo desde gour.media
   - Fotos de Instagram y Google Maps
   - Información de contacto y ubicaciones
6. **Optimización y testing**:
   - SEO
   - Performance
   - Mobile responsiveness
   - Accesibilidad

---

## 🎯 Objetivos del Sitio

- ✅ Transmitir la experiencia premium y el "viaje" gastronómico
- ✅ Mostrar la vista al mar y ambiente relajado costero
- ✅ Reflejar la filosofía: tradición italiana + vida sana + arte + cultura
- ✅ Facilitar reservas/contacto (múltiples ubicaciones)
- ✅ Presentar el menú completo de forma elegante
- ✅ Optimizado para móviles (muy importante - muchos usuarios verán desde móvil)
- ✅ Carga rápida (imágenes optimizadas)
- ✅ SEO optimizado (restaurante italiano, vista al mar, Santo Domingo, Las Condes)
- ✅ Integración con redes sociales (Instagram)

---

## 📊 Información del Menú (Desde gour.media)

### Estructura del Menú Digital
- **Desayunos**: Opciones de desayuno
- **Comida**: 
  - Pizzas (foco principal)
  - Pastas
  - Risottos
  - Antipastos
  - Postres artesanales
- **Barra**: Bebidas, cócteles
- **Vinos**: Selección de vinos

### Notas Importantes
- El menú es "bastante amplio" según el usuario
- El foco es la pizza, pero hay variedad
- Presentación premium requerida

---

## 🔗 Enlaces de Referencia

- **Instagram**: https://www.instagram.com/santapizzacl/?hl=es
- **Menú Digital**: https://gour.media/santa-pizza/
- **Carta Completa**: https://gour.media/santa-pizza/comida/
- **Google Maps**: https://share.google/bCnlHQdftAoUJSr81 (reviews y fotos)

