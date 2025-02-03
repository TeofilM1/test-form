import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'crc',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
