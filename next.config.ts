import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-eead1fb0ce5247448b49f264eb44c314.r2.dev",
      },
    ],
  },
};

export default nextConfig;
