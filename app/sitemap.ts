import type { MetadataRoute } from "next";
import { services, site } from "./_lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    ...services.map((service) => ({
      path: `/services/${service.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    { path: "/projects", priority: 0.9, changeFrequency: "monthly" },
    ...services.map((service) => ({
      path: `/projects/${service.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
