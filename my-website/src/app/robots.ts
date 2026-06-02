import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://samarandall.com/sitemap.xml",
    host: "https://samarandall.com",
  };
}
