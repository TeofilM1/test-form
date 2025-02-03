import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'src/pages',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
