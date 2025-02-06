import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Add Sanity's CDN domain
  },
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
