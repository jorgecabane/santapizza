# Guía de Integración de Imágenes

Esta guía explica cómo integrar las imágenes de Instagram y Google Maps en el sitio web de Santa Pizza.

## 📸 Imágenes de Instagram

### Opción 1: Descargar y usar localmente (Recomendado)

1. **Descargar imágenes desde Instagram:**
   - Visita https://www.instagram.com/santapizzacl/
   - Descarga las imágenes que quieras usar
   - Guarda las mejores fotos en `public/images/gallery/`

2. **Organizar por categoría:**
   ```
   public/images/gallery/
   ├── ambiente/        # Fotos del restaurante
   ├── comida/          # Fotos de platos
   ├── vista-mar/       # Fotos con vista al mar
   └── eventos/         # Eventos especiales
   ```

3. **Actualizar `components/sections/Gallery.tsx`:**
   ```typescript
   const galleryImages = [
     { 
       id: '1', 
       url: '/images/gallery/ambiente/restaurante-1.jpg', 
       alt: 'Ambiente del restaurante', 
       category: 'ambiente' 
     },
     // ... más imágenes
   ];
   ```

### Opción 2: Usar Instagram API (Avanzado)

Si quieres mostrar imágenes dinámicamente desde Instagram, necesitarías:
- Instagram Basic Display API
- O usar un servicio como `instagram-basic-display-api`

**Nota**: Instagram API requiere autenticación y puede ser complejo para un sitio estático.

### Opción 3: Embed de Instagram (Simple)

Puedes usar embeds de Instagram directamente en la página:

```tsx
<blockquote 
  className="instagram-media" 
  data-instgrm-permalink="https://www.instagram.com/p/..."
  data-instgrm-version="14"
>
</blockquote>
<script async src="//www.instagram.com/embed.js"></script>
```

## 🗺️ Imágenes de Google Maps

### Opción 1: Screenshots de Google Maps (Recomendado)

1. **Tomar screenshots:**
   - Abre Google Maps
   - Busca "Santa Pizza Santo Domingo" y "Santa Pizza Las Condes"
   - Toma screenshots de las vistas satelitales o de Street View
   - Guarda en `public/images/locations/`

2. **Usar en `components/sections/Locations.tsx`:**
   ```tsx
   <Image
     src="/images/locations/santo-domingo.jpg"
     alt="Ubicación Santo Domingo"
     width={800}
     height={400}
   />
   ```

### Opción 2: Google Maps Embed (Interactivo)

Usa iframes de Google Maps directamente:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

Para obtener el embed URL:
1. Abre Google Maps
2. Busca la ubicación
3. Click en "Compartir" → "Insertar un mapa"
4. Copia el código iframe

### Opción 3: Google Maps Static API

Puedes usar la API de Google Maps Static para generar imágenes:

```
https://maps.googleapis.com/maps/api/staticmap?center=LAT,LNG&zoom=15&size=800x400&markers=color:red|LAT,LNG&key=YOUR_API_KEY
```

**Nota**: Requiere API key de Google Maps.

## 🖼️ Imágenes del Hero

Para el Hero section, necesitas una imagen impactante con vista al mar:

1. **Buscar en Google Maps:**
   - Revisa las fotos subidas por usuarios en Google Maps
   - Descarga las mejores vistas al mar
   - O usa fotos del perfil de Instagram

2. **Guardar en:**
   ```
   public/images/hero/
   ├── hero-santo-domingo.jpg
   └── hero-las-condes.jpg
   ```

3. **Actualizar `components/sections/Hero.tsx`:**
   ```tsx
   <Image
     src="/images/hero/hero-santo-domingo.jpg"
     alt="Santa Pizza - Vista al mar"
     fill
     className="object-cover"
     priority
   />
   ```

## 📋 Checklist de Imágenes

- [ ] Descargar imágenes de Instagram (mínimo 6-10)
- [ ] Organizar por categoría (ambiente, comida, vista-mar)
- [ ] Optimizar imágenes (comprimir, redimensionar)
- [ ] Descargar/tomar screenshots de Google Maps
- [ ] Obtener imagen hero principal (vista al mar)
- [ ] Actualizar componentes con rutas reales
- [ ] Verificar que todas las imágenes cargan correctamente

## 🛠️ Herramientas Útiles

- **Image Optimization**: 
  - Online: https://squoosh.app/
  - CLI: `sharp` o `imagemin`
  
- **Descargar de Instagram**:
  - Extensiones de navegador
  - O herramientas como `instagram-scraper`

- **Google Maps Screenshots**:
  - Usar herramientas de captura de pantalla
  - O Google Maps Static API

## 💡 Recomendaciones

1. **Optimización**: Comprime todas las imágenes antes de subirlas
2. **Formatos**: Usa WebP cuando sea posible (Next.js lo convierte automáticamente)
3. **Tamaños**: 
   - Hero: 1920x1080px mínimo
   - Gallery: 800x800px (cuadradas)
   - Locations: 1200x600px
4. **Nombres**: Usa nombres descriptivos (ej: `pizza-margherita.jpg`)
5. **Alt text**: Siempre incluye texto alternativo descriptivo

## 🔄 Actualización Continua

Para mantener las imágenes actualizadas:
- Revisa Instagram periódicamente
- Descarga nuevas fotos destacadas
- Actualiza la galería cada mes/trimestre
- Mantén las mejores fotos, elimina las menos relevantes

