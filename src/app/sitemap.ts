import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { blogPosts } from "@/data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const staticRoutes = [
    "/",
    "/dich-vu/rut-vi-tra-sau",
    "/dich-vu/ho-tro-the-tin-dung",
    "/cong-cu/tinh-phi-tham-khao",
    "/blog",
    "/lien-he",
  ];

  const blogRoutes = blogPosts.map((p) => `/blog/${p.slug}`);

  const routes = [...staticRoutes, ...blogRoutes].map((path) => ({
    url: `${url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.6,
  }));

  return routes;
}

