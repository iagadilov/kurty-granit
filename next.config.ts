import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'kurty.kz' },
      { protocol: 'https', hostname: 'kurty.ru' },
    ],
  },
};

export default nextConfig;
