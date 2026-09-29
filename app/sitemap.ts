import type { MetadataRoute } from "next";
import { seo } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: seo.url,
      lastModified: new Date("2026-09-29"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
