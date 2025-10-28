/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {}, // garantir que não ative nada experimental automaticamente
  output: 'standalone', // melhora compatibilidade com SSR na Vercel
  reactStrictMode: true,
};

export default nextConfig;
