/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {},
  // ⚠️ Desativar standalone impede symlinks e falhas no build da Vercel
  output: undefined,
};

export default nextConfig;
