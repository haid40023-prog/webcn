import type { BlogPost } from "../types";

export const rutViTraSauZalopay: BlogPost = {
  slug: "rut-vi-tra-sau-zalopay",
  title: "Rút ví trả sau ZaloPay được không? Phí 5%–9%",
  description:
    "Ví trả sau ZaloPay không rút về ngân hàng trong app. Giải thích khác rút số dư ZaloPay, khoảng phí hỗ trợ 5%–9% và cách liên hệ Hà Nội hoặc online.",
  dateISO: "2026-08-27",
  category: "vi-tra-sau",
  tags: ["rút ZaloPay", "rút ví trả sau ZaloPay", "phí ZaloPay"],
  keywords: [
    "rút ví trả sau ZaloPay",
    "rút ZaloPay trả sau",
    "ZaloPay có rút được không",
    "phí rút ZaloPay",
    "rút ZaloPay Hà Nội",
    "ví trả sau ZaloPay rút tiền",
  ],
  calculatorType: "vi-tra-sau",
  relatedSlugs: [
    "zalopay-tra-sau-la-gi",
    "han-muc-zalopay-tra-sau",
    "vi-tra-sau-co-rut-tien-duoc-khong",
  ],
  faqs: [
    {
      question: "Rút số dư ZaloPay khác rút trả sau thế nào?",
      answer:
        "Rút số dư là rút tiền đã nạp. Rút trả sau là chuyển hạn mức nợ — app không có nút này.",
    },
    {
      question: "Phí hỗ trợ ZaloPay khoảng bao nhiêu?",
      answer:
        "Tham khảo 5% – 9%. Với 10 triệu, phí dự kiến khoảng 500.000 – 900.000 đ. Chốt khi liên hệ.",
    },
    {
      question: "Nhận tại Hà Nội được không?",
      answer:
        "Được tại 296 Minh Khai hoặc 213 Giáp Nhất, hoặc online. Nhắn Zalo: ZaloPay trả sau + số tiền.",
    },
    {
      question: "Có đưa mật khẩu ZaloPay không?",
      answer:
        "Không. Không gửi OTP. Hỏi số nhận về trước.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Rút ví trả sau ZaloPay không có trong ứng dụng. Nhiều người nhầm với rút số dư ZaloPay về ngân hàng — hai nguồn, hai quy tắc.",
    },
    { kind: "h2", text: "Trong app ZaloPay" },
    {
      kind: "ul",
      items: [
        "Số dư: thường rút / chuyển được theo biểu phí ví",
        "Trả sau: thanh toán được phép, không rút ATM",
      ],
    },
    { kind: "h2", text: "Phí tham khảo nếu nhờ hỗ trợ" },
    {
      kind: "table",
      caption: "ZaloPay trả sau — 5% – 9%",
      headers: ["Số tiền", "Phí dự kiến", "Nhận về (tham khảo)"],
      rows: [
        ["5.000.000 đ", "250.000 – 450.000 đ", "4.550.000 – 4.750.000 đ"],
        ["10.000.000 đ", "500.000 – 900.000 đ", "9.100.000 – 9.500.000 đ"],
      ],
    },
    {
      kind: "p",
      text: "Công cụ tính phí: chọn ZaloPay. Zalo 0964857947. Đọc ZaloPay trả sau là gì và hạn mức ZaloPay trả sau trước khi nhắn tin.",
    },
  ],
};
