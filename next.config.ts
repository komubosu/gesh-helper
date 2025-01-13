import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/gesh-helper',
  assetPrefix: '/gesh-helper',
  trailingSlash: true,
  output: 'standalone',
};

export default nextConfig;
