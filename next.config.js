const { withContentlayer } = require('next-contentlayer');

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['bottlehaus.saleor.cloud', 'cdn.hashnode.com'],
  },
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}',
    },
  },
  compiler: {
    // removeConsole: true,
  },
};

module.exports = withContentlayer(nextConfig);
