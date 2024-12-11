import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compilerOptions: {
    skipLibCheck: true,
    typeRoots: ["./node_modules/@types", "./types"],
  },
  images: {
    remotePatterns: [
      {
        hostname: "via.placeholder.com",
      },
    ],
  },
};

export default nextConfig;
