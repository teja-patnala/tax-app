import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";
import { TAX_SERVICES } from "@/config/services";

/**
 * Sitemap. Enumerates all public marketing routes, including each service
 * detail page derived from TAX_SERVICES so it stays in sync automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = ["", "/about", "/services", "/pricing", "/faq", "/contact"];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = TAX_SERVICES.map((service) => ({
    url: `${SITE.url}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceEntries];
}
