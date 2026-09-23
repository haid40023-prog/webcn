import Link from "next/link";
import { getBlogCategoryLabel } from "@/data/blog";
import type { BlogPost } from "@/data/blog";
import { formatBlogDate } from "@/lib/blog";
import { BlogTagList } from "@/components/blog/BlogTagList";

export function BlogPostCard({
  post,
  heading: Heading = "h2",
}: {
  post: BlogPost;
  heading?: "h2" | "h3";
}) {
  return (
    <article className="group rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-emerald-700">
          {getBlogCategoryLabel(post.category)}
        </span>
        <time className="text-zinc-500" dateTime={post.dateISO}>
          {formatBlogDate(post.dateISO)}
        </time>
      </div>
      <Heading className="mt-3 text-lg font-bold leading-snug">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </Heading>
      <p className="mt-2 text-sm text-zinc-600">{post.description}</p>
      {post.tags && post.tags.length > 0 ? (
        <div className="mt-3">
          <BlogTagList tags={post.tags} limit={3} />
        </div>
      ) : null}
      <div className="mt-4">
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-semibold text-emerald-700 hover:underline"
        >
          Xem bài viết →
        </Link>
      </div>
    </article>
  );
}
