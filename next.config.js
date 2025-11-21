/** @type {import('next').NextConfig} */
const nextConfig = {
  // Para generar sitio completamente estático
  output: 'export',
  
  // Optimización de imágenes
  images: {
    unoptimized: true, // Necesario cuando usas output: 'export'
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
  
  // Optimizaciones de compilación
  swcMinify: true,
  compress: true,
  
  // Nota: Los headers de seguridad deben configurarse en el servidor web
  // (nginx, Apache, Vercel, Netlify, etc.) cuando se usa output: 'export'
}

module.exports = nextConfig

