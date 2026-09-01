import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/overview/About-Us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/overview/services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/overview/:path*",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
