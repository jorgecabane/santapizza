export interface Location {
  id: string;
  name: string;
  address: string;
  description: string;
  googleMapsUrl: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'pizza' | 'pasta' | 'risotto' | 'antipasto' | 'postre' | 'bebida' | 'vino';
  imageUrl?: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: 'ambiente' | 'comida' | 'vista-mar' | 'eventos';
}

