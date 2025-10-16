/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'storage.googleapis.com'
    ],
    unoptimized: true,
  },
  output: 'standalone', // Para Docker
  experimental: {
    outputFileTracingRoot: undefined,
  },
}

module.exports = nextConfig
