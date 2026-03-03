import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@searchsaga/sanity",
    "@searchsaga/types",
    "@searchsaga/ui",
  ],
};

export default nextConfig;
