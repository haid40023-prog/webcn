import type { BlogCategoryId } from "./types";

export const blogCategoryLabels: Record<BlogCategoryId, string> = {
  "vi-tra-sau": "Rút ví trả sau",
  "the-tin-dung": "Thẻ tín dụng",
  "huong-dan": "Hướng dẫn",
  "ha-noi": "Hà Nội",
};

export function getBlogCategoryLabel(category: BlogCategoryId): string {
  return blogCategoryLabels[category];
}
