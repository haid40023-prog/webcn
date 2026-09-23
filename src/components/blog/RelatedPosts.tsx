import type { BlogPost } from "@/data/blog";
import { BlogPostCard } from "@/components/blog/BlogPostCard";

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-10" aria-labelledby="related-posts-heading">
      <h2 id="related-posts-heading" className="text-xl font-bold md:text-2xl">
        Bài viết liên quan
      </h2>
      <p className="mt-2 text-sm text-zinc-600">
        Đọc thêm để đối chiếu mức phí tham khảo và chọn đúng loại dịch vụ.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} heading="h3" />
        ))}
      </div>
    </section>
  );
}
