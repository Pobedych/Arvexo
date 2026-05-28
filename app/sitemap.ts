import type { MetadataRoute } from "next";
import { absoluteUrl, languageAlternates, LAST_MODIFIED, localizedPath, sitemapRoutes } from "@/lib/seo";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: absoluteUrl(localizedPath(route.path, locale)),
      lastModified: LAST_MODIFIED,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: languageAlternates(route.path)
      }
    }))
  );
}
