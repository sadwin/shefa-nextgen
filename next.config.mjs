/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Строчки basePath и assetPrefix полностью УДАЛЯЕМ
};

export default nextConfig;
