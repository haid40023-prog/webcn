export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  dateISO: string; // YYYY-MM-DD
  blocks: Array<
    | { kind: "h2"; text: string }
    | { kind: "p"; text: string }
    | { kind: "ul"; items: string[] }
  >;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "huong-dan-tinh-phi-tham-khao",
    title: "Cách tính mức phí tham khảo (rút ví trả sau & thẻ tín dụng)",
    description:
      "Hướng dẫn cách hệ thống tính mức phí dự kiến và số tiền nhận được theo khoảng tham khảo.",
    dateISO: "2026-03-21",
    blocks: [
      {
        kind: "p",
        text: "Khi bạn nhập số tiền, công cụ sẽ tính ra mức phí dự kiến và số tiền nhận được theo khoảng tham khảo của từng đơn vị.",
      },
      { kind: "h2", text: "Công thức tính khoảng phí" },
      {
        kind: "ul",
        items: [
          "Phí thấp nhất = số tiền * feeMin (%)",
          "Phí cao nhất = số tiền * feeMax (%)",
          "Số tiền nhận thấp nhất = số tiền - phí cao nhất",
          "Số tiền nhận cao nhất = số tiền - phí thấp nhất",
        ],
      },
      {
        kind: "p",
        text: "Phí hiển thị là mức tham khảo. Vui lòng liên hệ để được báo mức chính xác theo thời điểm.",
      },
    ],
  },
  {
    slug: "rut-vi-tra-sau-can-luu-y",
    title: "Rút ví trả sau cần lưu ý gì trước khi thực hiện?",
    description:
      "Những điểm bạn nên kiểm tra để chọn đơn vị phù hợp, theo dõi mức phí và hạn chế rủi ro trong quá trình giao dịch.",
    dateISO: "2026-03-20",
    blocks: [
      {
        kind: "p",
        text: "Trước khi thực hiện, bạn nên kiểm tra mức phí tham khảo, điều kiện áp dụng và xác nhận thông tin cụ thể tại thời điểm giao dịch.",
      },
      { kind: "h2", text: "Gợi ý kiểm tra nhanh" },
      {
        kind: "ul",
        items: [
          "Chọn đúng loại dịch vụ (Ví trả sau / Thẻ tín dụng)",
          "Đối chiếu mức phí tham khảo với nhu cầu của bạn",
          "Trao đổi thêm để nhận báo giá chính xác theo thời điểm",
        ],
      },
      {
        kind: "p",
        text: "Nếu bạn cần hỗ trợ nhanh, hãy liên hệ qua Zalo hoặc gọi điện để được báo phí.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

