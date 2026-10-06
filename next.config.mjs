/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Это обязательно, так как на статическом хостинге нет сервера для сжатия картинок
  },
};

export default nextConfig;
