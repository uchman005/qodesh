import type { MetadataRoute } from "next";
import { site } from "./_lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.tradeName,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#faf6f3",
    theme_color: "#3d0f1f",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
