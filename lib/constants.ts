export const RESTAURANT_INFO = {
  name: 'Santa Pizza',
  tagline: 'Una experiencia que mezcla tradición italiana, buena comida y el gusto por el arte.',
  founded: 2001,
  philosophy: 'Combinación de comida italiana mediterránea tradicional, vida sana, gusto por el arte y la cultura',
  description: 'Pizza, pasta, café, tragos, chimenea, terraza y playa',
} as const;

export const LOCATIONS = [
  {
    id: 'santo-domingo',
    name: 'Santa Pizza',
    address: 'P.º del Mar 200, Santo Domingo, Valparaíso',
    description: 'Vista al mar, chimenea, terraza y playa. Experiencia original desde 2001',
    googleMapsUrl: 'https://maps.google.com/?q=Santa+Pizza+Santo+Domingo',
    phone: '+56 9 8818 5585',
    email: 'hola@santapizza.cl', // Actualizar con email real
    coordinates: {
      lat: -33.665170313727934,
      lng: -71.63864122848058,
    },
  },
] as const;

export const CONTACT = {
  instagram: 'https://www.instagram.com/santapizzacl/',
  booking: 'https://gour.media/booking/santa-pizza/',
  phone: '+56 X XXXX XXXX', // Actualizar con número real
  email: 'contacto@santapizza.cl', // Actualizar con email real
  hours: {
    weekdays: '10:00 - 12:30',
    weekends: '13:00 - 21:30',
  },
} as const;

// Enlaces para obtener imágenes
export const IMAGE_SOURCES = {
  instagram: 'https://www.instagram.com/santapizzacl/',
  googleMaps: 'https://maps.google.com/?q=Santa+Pizza+Santo+Domingo',
} as const;

