import { blogPosts } from "@/data/blog";
import type { BlogCategoryId, BlogPost } from "@/data/blog";

const RELATED_LIMIT = 3;

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getPostUpdatedISO(post: BlogPost): string {
  return post.updatedISO ?? post.dateISO;
}

export function getPostKeywords(post: BlogPost): string[] {
  const merged = [...(post.keywords ?? []), ...(post.tags ?? [])];
  const unique: string[] = [];
  const seen = new Set<string>();
  for (const item of merged) {
    const value = item.trim();
    const key = value.toLowerCase();
    if (!value || seen.has(key)) continue;
    seen.add(key);
    unique.push(value);
  }
  return unique;
}

export function formatBlogDate(iso: string): string {
  const parsed = new Date(`${iso}T00:00:00+07:00`);
  if (Number.isNaN(parsed.getTime())) return iso;
  return parsed.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export function getLatestPosts(limit?: number): BlogPost[] {
  const sorted = [...blogPosts].sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}

export function getPostsByCategory(category: BlogCategoryId, limit?: number): BlogPost[] {
  const posts = getLatestPosts().filter((post) => post.category === category);
  return typeof limit === "number" ? posts.slice(0, limit) : posts;
}

export function getRelatedPosts(slug: string, limit = RELATED_LIMIT): BlogPost[] {
  const current = getPostBySlug(slug);
  const picked: BlogPost[] = [];
  const seen = new Set<string>([slug]);

  const push = (post: BlogPost | undefined) => {
    if (!post || seen.has(post.slug) || picked.length >= limit) return;
    seen.add(post.slug);
    picked.push(post);
  };

  if (current) {
    for (const relatedSlug of current.relatedSlugs ?? []) {
      push(getPostBySlug(relatedSlug));
    }

    if (picked.length < limit) {
      for (const post of getPostsByCategory(current.category)) {
        push(post);
      }
    }
  }

  if (picked.length < limit) {
    for (const post of getLatestPosts()) {
      push(post);
    }
  }

  return picked;
}

export function getCalculatorHref(post: BlogPost): string {
  if (!post.calculatorType) return "/cong-cu/tinh-phi-tham-khao";
  return `/cong-cu/tinh-phi-tham-khao?type=${post.calculatorType}`;
}
