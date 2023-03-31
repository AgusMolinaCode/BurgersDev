/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'res.cloudinary.com',
      's3-eu-central-1.amazonaws.com',
    ]
  }
}

module.exports = nextConfig

  


