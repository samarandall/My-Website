import type { MetadataRoute } from "next";

const base = "https://samarandall.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/projects`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/experience`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
