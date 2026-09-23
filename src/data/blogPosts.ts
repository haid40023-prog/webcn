/**
 * Điểm import cũ. Nguồn dữ liệu nằm ở `src/data/blog`.
 * Thêm bài mới: tạo file trong `src/data/blog/posts/` rồi đăng ký ở `posts/index.ts`.
 */
export type { BlogPost } from "@/data/blog";
export { blogPosts } from "@/data/blog";
export { getPostBySlug } from "@/lib/blog";
