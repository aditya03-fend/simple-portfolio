import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Hapus console.log di production
  },
  // Optimasi Image (meskipun belum pakai, jaga-jaga)
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
