import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { getPostUpdatedISO } from "@/lib/blog";
import { getSiteUrl } from "@/lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] =
    [
      { path: "/", priority: 1, changeFrequency: "weekly" },
      { path: "/dich-vu/rut-vi-tra-sau", priority: 0.85, changeFrequency: "weekly" },
      { path: "/dich-vu/ho-tro-the-tin-dung", priority: 0.85, changeFrequency: "weekly" },
      { path: "/cong-cu/tinh-phi-tham-khao", priority: 0.85, changeFrequency: "weekly" },
      { path: "/blog", priority: 0.85, changeFrequency: "weekly" },
      { path: "/lien-he", priority: 0.7, changeFrequency: "monthly" },
    ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(getPostUpdatedISO(p)),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticEntries, ...blogEntries];
}

