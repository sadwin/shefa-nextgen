/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Добавляем эти две строчки (название твоего репозитория с косой чертой):
  basePath: '/shefa-nextgen',
  assetPrefix: '/shefa-nextgen/',
};

export default nextConfig;
