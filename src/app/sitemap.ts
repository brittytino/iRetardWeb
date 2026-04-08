import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://iretardgram.app",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://iretardgram.app/docs",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
