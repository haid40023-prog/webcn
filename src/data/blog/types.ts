export const BLOG_CATEGORY_IDS = [
  "vi-tra-sau",
  "the-tin-dung",
  "huong-dan",
  "ha-noi",
] as const;

export type BlogCategoryId = (typeof BLOG_CATEGORY_IDS)[number];

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogBlock =
  | { kind: "h2"; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "table"; caption?: string; headers: string[]; rows: string[][] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** Ngày đăng (YYYY-MM-DD) — sitemap, Open Graph, sắp xếp. */
  dateISO: string;
  /** Ngày sửa nội dung. Nếu bỏ trống thì dùng dateISO. */
  updatedISO?: string;
  category: BlogCategoryId;
  /** Nhãn ngắn hiện trên thẻ bài và Open Graph. */
  tags?: string[];
  /** Từ khóa SEO đầy đủ (meta keywords + JSON-LD). Nếu trống thì dùng tags. */
  keywords?: string[];
  /**
   * Slug bài nên đề xuất trước.
   * Thiếu hoặc không đủ thì hệ thống tự lấy bài cùng chuyên mục, rồi bài mới nhất.
   */
  relatedSlugs?: string[];
  faqs?: BlogFaq[];
  /** Prefill loại dịch vụ trên công cụ tính phí. */
  calculatorType?: "vi-tra-sau" | "the-tin-dung";
  blocks: BlogBlock[];
};
