/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['bottlehaus.saleor.cloud', 'cdn.hashnode.com']
  },
  compiler: {
    // removeConsole: true,

  },

  experimental: {
    modularizeImports: {
      '@mui/material': {
        transform: '@mui/material/{{member}}',
      },
    },
  },
};

module.exports = nextConfig;
