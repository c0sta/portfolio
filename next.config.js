/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/uploads/**'
      },
      {
        protocol: 'https',
        hostname: 'portfolio-cms-production-5920.up.railway.app',
        port: '',
        pathname: '/uploads/**'
      }
    ]
  }
}

module.exports = nextConfig
