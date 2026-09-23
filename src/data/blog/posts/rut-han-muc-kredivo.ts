import type { BlogPost } from "../types";

export const rutHanMucKredivo: BlogPost = {
  slug: "rut-han-muc-kredivo",
  title: "Rút hạn mức Kredivo được không? Phí tham khảo",
  description:
    "Kredivo không rút hạn mức về ngân hàng trong app. Giải thích vì sao, khác gì thanh toán đối tác, và khoảng phí 4%–6% nếu nhờ hỗ trợ bên ngoài.",
  dateISO: "2026-08-29",
  category: "vi-tra-sau",
  tags: ["rút Kredivo", "rút hạn mức Kredivo", "phí Kredivo"],
  keywords: [
    "rút hạn mức Kredivo",
    "rút Kredivo",
    "Kredivo có rút được không",
    "phí rút Kredivo",
    "rút Kredivo Hà Nội",
    "hỗ trợ rút Kredivo",
  ],
  calculatorType: "vi-tra-sau",
  relatedSlugs: ["kredivo-la-gi", "han-muc-kredivo", "vi-tra-sau-co-rut-tien-duoc-khong"],
  faqs: [
    {
      question: "App Kredivo có nút rút về ngân hàng không?",
      answer:
        "Thông thường không. Hạn mức để mua tại đối tác / trả góp, không phải số dư rút ATM.",
    },
    {
      question: "Phí hỗ trợ rút Kredivo khoảng bao nhiêu?",
      answer:
        "Khoảng tham khảo 4% – 6%. Ví dụ 10 triệu thì phí dự kiến khoảng 400.000 – 600.000 đ. Chốt lúc liên hệ.",
    },
    {
      question: "Rút Kredivo ở Hà Nội được không?",
      answer:
        "Có thể nhận tại 296 Minh Khai hoặc 213 Giáp Nhất, hoặc online. Nhắn Zalo loại hạn mức Kredivo và số tiền trước.",
    },
    {
      question: "Có nên đưa mật khẩu Kredivo không?",
      answer:
        "Không. Không gửi OTP. Hỏi rõ số nhận về và cách nhận trước khi làm.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "“Rút hạn mức Kredivo” là từ khóa nhiều người gõ khi cần tiền mặt, trong khi app chỉ cho thanh toán tại đối tác. Trong Kredivo, hạn mức không rút về ngân hàng như tài khoản thanh toán.",
    },
    { kind: "h2", text: "Trong app được làm gì, không được làm gì" },
    {
      kind: "ul",
      items: [
        "Được: mua tại điểm / sàn Kredivo hỗ trợ, trả góp theo kỳ",
        "Không: rút ATM, chuyển hạn mức thành tiền trong tài khoản tùy ý",
      ],
    },
    { kind: "h2", text: "Khoảng phí tham khảo nếu nhờ hỗ trợ" },
    {
      kind: "table",
      caption: "Kredivo — phí 4% – 6% (tham khảo)",
      headers: ["Số tiền", "Phí dự kiến", "Nhận về (tham khảo)"],
      rows: [
        ["5.000.000 đ", "200.000 – 300.000 đ", "4.700.000 – 4.800.000 đ"],
        ["10.000.000 đ", "400.000 – 600.000 đ", "9.400.000 – 9.600.000 đ"],
      ],
    },
    {
      kind: "p",
      text: "Dùng công cụ tính phí, chọn Ví trả sau → Kredivo. Liên hệ Zalo 0964857947 để chốt theo thời điểm. Có thể gặp tại Hà Nội hoặc làm online.",
    },
    {
      kind: "p",
      text: "Hiểu sản phẩm: Kredivo là gì. Hiểu số trên app: hạn mức Kredivo.",
    },
  ],
};
