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
  // ❌ IMPORTANTE: NÃO USE output: 'export'
  // ❌ output: 'standalone' também NÃO é necessário aqui
};

export default nextConfig;
