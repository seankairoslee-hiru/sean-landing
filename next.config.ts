import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/sean-landing",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
