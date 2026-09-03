import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF where the browser supports it, WebP otherwise; source
    // images are already WebP so this only adds the extra AVIF variant.
    formats: ["image/avif", "image/webp"],
  },
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
