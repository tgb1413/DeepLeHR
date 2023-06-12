/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.gocho-back.com',
        port: '',
        pathname: '/companies/**',
      },
    ],
  },
};

module.exports = nextConfig;
