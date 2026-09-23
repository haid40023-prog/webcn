import type { BlogPost } from "../types";

export const cakeTraSauLaGi: BlogPost = {
  slug: "cake-tra-sau-la-gi",
  title: "Cake trả sau là gì? Hạn mức Cake by VPBank",
  description:
    "Cake trả sau là hạn mức trên ngân hàng số Cake. Phân biệt hạn mức trả sau, số dư Cake và thẻ tín dụng Cake — ba nguồn khác nhau.",
  dateISO: "2026-08-21",
  category: "huong-dan",
  tags: ["Cake trả sau", "hạn mức Cake", "Cake by VPBank"],
  keywords: [
    "Cake trả sau",
    "ví trả sau Cake",
    "hạn mức Cake",
    "Cake by VPBank trả sau",
    "rút Cake trả sau",
    "Cake PayLater",
    "thẻ tín dụng Cake",
  ],
  calculatorType: "vi-tra-sau",
  relatedSlugs: ["the-tin-dung-la-gi", "viettel-money-tra-sau-la-gi", "cac-vi-tra-sau-moi-nhat"],
  faqs: [
    {
      question: "Cake trả sau và thẻ tín dụng Cake có phải một không?",
      answer:
        "Không. Trên web có hai dòng phí: Cake ví trả sau (5% – 7%) và Cake thẻ tín dụng (2% – 4%). Nhắn Zalo phải ghi đúng bạn đang dùng hạn mức nào.",
    },
    {
      question: "Cake trả sau khác số dư app Cake?",
      answer:
        "Số dư / tài khoản Cake là tiền của bạn. Trả sau là hạn mức nợ để thanh toán mục được phép.",
    },
    {
      question: "Rút hạn mức Cake trong app được không?",
      answer:
        "Hạn mức trả sau thường không rút như rút tài khoản. Hỗ trợ bên ngoài: khoảng 5% – 7% với dòng ví trả sau.",
    },
    {
      question: "Cake và Viettel Money có liên quan không?",
      answer:
        "Hai sản phẩm khác nhau. Một số người dùng cả hai; phí và app tách biệt.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Cake trả sau (Cake by VPBank, hạn mức Cake) là hạn mức chi tiêu trước trên ngân hàng số Cake. Từ khóa dễ lệch: nhầm với thẻ tín dụng Cake hoặc số dư tài khoản Cake.",
    },
    { kind: "h2", text: "Ba nguồn hay nhầm trên Cake" },
    {
      kind: "table",
      caption: "Chọn đúng nguồn khi liên hệ",
      headers: ["Nguồn", "Phí hỗ trợ tham khảo trên web"],
      rows: [
        ["Cake — ví / hạn mức trả sau", "5% – 7%"],
        ["Cake — thẻ tín dụng", "2% – 4%"],
        ["Số dư tài khoản Cake", "Không phải hạn mức trả sau"],
      ],
    },
    { kind: "h2", text: "Việc nên làm trên app" },
    {
      kind: "p",
      text: "Mở đúng mục hạn mức trả sau, xem còn lại và ngày đến hạn. Đừng gửi ảnh thẻ tín dụng nếu bạn đang nói về PayLater — hai hồ sơ khác nhau.",
    },
    {
      kind: "p",
      text: "Viettel Money trả sau là bài gần về ví viễn thông. Công cụ: chọn Cake đúng loại dịch vụ (ví hoặc thẻ).",
    },
  ],
};
