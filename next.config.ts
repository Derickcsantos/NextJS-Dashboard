/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {},
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // ⚠️ remove "output: 'export'" — deixa o Next usar o modo SSR normal
};

export default nextConfig;
