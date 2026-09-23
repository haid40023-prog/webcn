import type { BlogPost } from "../types";

export const rutShopeepayLater: BlogPost = {
  slug: "rut-shopeepay-later",
  title: "Rút ShopeePay Later (SPayLater) được không? Phí 5%–15%",
  description:
    "SPayLater không rút về ngân hàng trên Shopee. Giải thích vì sao khoảng phí hỗ trợ rộng 5%–15% và cần hỏi lại mức chốt theo từng đơn.",
  dateISO: "2026-08-25",
  category: "vi-tra-sau",
  tags: ["rút ShopeePay Later", "rút SPayLater", "phí Shopee trả sau"],
  keywords: [
    "rút ShopeePay Later",
    "rút SPayLater",
    "Shopee trả sau có rút được không",
    "phí rút SPayLater",
    "rút hạn mức Shopee",
  ],
  calculatorType: "vi-tra-sau",
  relatedSlugs: ["shopeepay-later-la-gi", "vi-tra-sau-co-rut-tien-duoc-khong", "cac-vi-tra-sau-moi-nhat"],
  faqs: [
    {
      question: "Shopee có nút rút SPayLater không?",
      answer:
        "Không. SPayLater để trả đơn, không rút ATM.",
    },
    {
      question: "Vì sao phí 5% đến 15%, rộng vậy?",
      answer:
        "Tùy loại đơn, thời điểm và điều kiện hạn mức. Vì vậy phải tính thử rồi hỏi Zalo — đừng lấy một % cố định.",
    },
    {
      question: "Ví dụ 10 triệu thì nhận về khoảng bao nhiêu?",
      answer:
        "Phí 5% – 15% → khoảng 500.000 – 1.500.000 đ; nhận về khoảng 8.500.000 – 9.500.000 đ. Chỉ là tham khảo.",
    },
    {
      question: "Làm online được không?",
      answer:
        "Được. Hoặc đến cơ sở Hà Nội. Ghi rõ SPayLater / ShopeePay Later và số tiền.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Rút ShopeePay Later hay rút SPayLater không phải tính năng trên Shopee. Hạn mức chỉ gắn đơn hàng được phép.",
    },
    { kind: "h2", text: "Vì sao khoảng phí rộng hơn MoMo, Kredivo" },
    {
      kind: "p",
      text: "SPayLater phụ thuộc đơn, ngành hàng và thời điểm. Web niêm yết 5% – 15% để bạn ước lượng, không phải giá cố định.",
    },
    {
      kind: "table",
      caption: "ShopeePay Later — 5% – 15% (tham khảo)",
      headers: ["Số tiền", "Phí dự kiến", "Nhận về (tham khảo)"],
      rows: [
        ["5.000.000 đ", "250.000 – 750.000 đ", "4.250.000 – 4.750.000 đ"],
        ["10.000.000 đ", "500.000 – 1.500.000 đ", "8.500.000 – 9.500.000 đ"],
      ],
    },
    {
      kind: "p",
      text: "Công cụ: chọn ShopeePay Later. Zalo 0964857947. Đọc ShopeePay Later là gì trước khi so với Kredivo hay MoMo.",
    },
  ],
};
