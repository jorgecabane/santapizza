/** @type {import('next').NextConfig} */
const nextConfig = {
  // Para generar sitio completamente estático
  output: 'export',
  
  // Optimización de imágenes
  images: {
    unoptimized: true, // Necesario cuando usas output: 'export'
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.fbcdn.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'gour.media',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  
  // Variables de entorno públicas
  env: {
    INSTAGRAM_URL: 'https://www.instagram.com/santapizzacl/',
  },
}

module.exports = nextConfig

