import type { BlogPost } from "../types";

export const ngaySaoKeTheTinDungLaGi: BlogPost = {
  slug: "ngay-sao-ke-the-tin-dung-la-gi",
  title: "Ngày sao kê thẻ tín dụng là gì?",
  description:
    "Ngày sao kê là ngày ngân hàng chốt các giao dịch trong kỳ và ra số phải trả. Khác ngày thanh toán. Hướng dẫn xem ngày sao kê trên app.",
  dateISO: "2026-08-14",
  category: "the-tin-dung",
  tags: ["ngày sao kê", "sao kê thẻ tín dụng", "statement date"],
  keywords: [
    "ngày sao kê thẻ tín dụng là gì",
    "ngày sao kê thẻ tín dụng",
    "sao kê thẻ tín dụng",
    "xem ngày sao kê",
    "ngày sao kê khác ngày thanh toán",
    "chu kỳ sao kê",
  ],
  calculatorType: "the-tin-dung",
  relatedSlugs: [
    "ngay-thanh-toan-the-tin-dung-la-gi",
    "the-tin-dung-hoat-dong-nhu-the-nao",
    "thanh-toan-toi-thieu-the-tin-dung-la-gi",
  ],
  faqs: [
    {
      question: "Ngày sao kê có phải hạn chót phải trả không?",
      answer:
        "Không. Sao kê chỉ chốt số. Hạn trả là ngày thanh toán — thường sau ngày sao kê. Trả nhầm đúng ngày sao kê rồi thôi theo dõi ngày thanh toán vẫn có thể chậm.",
    },
    {
      question: "Xem ngày sao kê ở đâu?",
      answer:
        "App ngân hàng, mục thẻ tín dụng / sao kê / lịch thanh toán. Có ngân hàng ghi cố định mỗi tháng (ví dụ ngày 8), có nơi in trên bản sao kê PDF.",
    },
    {
      question: "Giao dịch sau ngày sao kê tính vào kỳ nào?",
      answer:
        "Thường vào kỳ sau. Vì vậy số trên sao kê có thể thấp hơn “đã dùng” trên app nếu vừa mới quẹt.",
    },
    {
      question: "Đổi được ngày sao kê không?",
      answer:
        "Một số ngân hàng cho đăng ký đổi, không phải thẻ nào cũng được. Hỏi trên app hoặc tổng đài chính thức.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Ngày sao kê thẻ tín dụng là ngày ngân hàng chốt danh sách giao dịch của kỳ và lập bảng: đã chi, phí, số phải trả đủ, số tối thiểu. Đây không phải hạn cuối nộp tiền.",
    },
    { kind: "h2", text: "Sao kê gồm những gì?" },
    {
      kind: "ul",
      items: [
        "Các giao dịch đã vào kỳ (mua hàng, rút tiền, hoàn tiền…)",
        "Phí thường niên, phí dịch vụ (nếu phát sinh trong kỳ)",
        "Lãi (nếu kỳ trước trả thiếu hoặc có rút tiền mặt)",
        "Số thanh toán đầy đủ và số thanh toán tối thiểu",
        "Ngày thanh toán của kỳ đó",
      ],
    },
    { kind: "h2", text: "Ngày sao kê và ngày thanh toán" },
    {
      kind: "table",
      caption: "Hai mốc không trùng",
      headers: ["Mốc", "Việc ngân hàng / bạn làm"],
      rows: [
        ["Ngày sao kê", "Chốt số, gửi bảng kê"],
        ["Ngày thanh toán", "Hạn cuối trả để tránh chậm / mất miễn lãi"],
      ],
    },
    {
      kind: "p",
      text: "Ví dụ minh họa: sao kê ngày 10, thanh toán ngày 25. Giao dịch ngày 12 thường vào sao kê tháng sau. Lấy đúng ngày trên app thẻ của bạn, đừng lấy ví dụ này làm lịch thật.",
    },
    {
      kind: "p",
      text: "Tiếp: ngày thanh toán thẻ tín dụng là gì. Vòng đầy đủ: thẻ tín dụng hoạt động như thế nào.",
    },
  ],
};
