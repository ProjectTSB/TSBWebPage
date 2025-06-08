/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev, isServer }) => {
    // Cloudflare Pagesでのファイルサイズ制限を回避するため、キャッシュを無効化
    if (!dev) {
      config.cache = false;
    }
    return config;
  },
}

export default nextConfig
