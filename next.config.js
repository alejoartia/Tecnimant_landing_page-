/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'storage.googleapis.com'
    ],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/tecnimant_page_assets/**',
      },
    ],
  },
}

module.exports = nextConfig
