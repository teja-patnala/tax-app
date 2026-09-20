import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

/**
 * robots.txt. Allows crawling of public pages; disallows the auth and (future)
 * portal areas which have no SEO value.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
