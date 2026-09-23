import type { BlogPost } from "../types";

export const viTraSauLaGi: BlogPost = {
  slug: "vi-tra-sau-la-gi",
  title: "Ví trả sau là gì?",
  description:
    "Ví trả sau là hạn mức chi tiêu trước, trả sau trên ví điện tử. Giải thích khác gì số dư ví, khác gì thẻ tín dụng, và dùng được những việc nào.",
  dateISO: "2026-09-24",
  category: "huong-dan",
  tags: ["ví trả sau là gì", "ví trả sau", "PayLater"],
  keywords: [
    "ví trả sau là gì",
    "ví trả sau",
    "PayLater là gì",
    "hạn mức trả sau",
    "ví trả sau khác số dư",
    "MoMo Kredivo ZaloPay trả sau",
  ],
  relatedSlugs: [
    "momo-vi-tra-sau-la-gi",
    "kredivo-la-gi",
    "zalopay-tra-sau-la-gi",
  ],
  faqs: [
    {
      question: "Ví trả sau có phải tiền thật trong ví không?",
      answer:
        "Không. Đó là hạn mức được cấp để thanh toán trước, bạn trả lại sau theo kỳ. Không phải số dư đã nạp hay tiền lương chuyển vào ví.",
    },
    {
      question: "Ví trả sau khác thẻ tín dụng ở điểm nào?",
      answer:
        "Cùng ý tưởng chi tiêu trước, trả sau. Ví trả sau gắn trong app ví (MoMo, ZaloPay, ShopeePay Later, Kredivo…), hạn mức và nơi thanh toán thường hẹp hơn thẻ ngân hàng. Biểu phí, kỳ sao kê do từng nhà cung cấp quy định.",
    },
    {
      question: "Những ví nào hay có tính năng trả sau?",
      answer:
        "Phổ biến gồm MoMo, ZaloPay, Kredivo, TNEX, VNPay, Cake, Muadee, Viettel Money, ShopeePay Later, TikTok Pay Later, Home PayLater, FE Credit Paylater. Tên trên app có thể là Trả sau, PayLater hoặc hạn mức.",
    },
    {
      question: "Dùng ví trả sau có mất phí không?",
      answer:
        "Có thể có phí dịch vụ, phí chậm trả hoặc lãi nếu quá hạn. Từng ví khác nhau. Xem bài ví trả sau có mất phí không và điều khoản ngay trong app.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Ví trả sau (còn gọi là PayLater, hạn mức trả sau) là hạn mức để bạn thanh toán trước, rồi trả lại nhà cung cấp theo kỳ. Số tiền hiện ra trên app không phải tiền bạn đã nạp — đó là hạn mức tín dụng tiêu dùng gắn với ví điện tử.",
    },
    { kind: "h2", text: "Ví trả sau khác số dư ví như thế nào?" },
    {
      kind: "table",
      caption: "So sánh nhanh số dư ví và ví trả sau",
      headers: ["", "Số dư ví / tiền đã nạp", "Ví trả sau"],
      rows: [
        ["Nguồn tiền", "Tiền của bạn", "Hạn mức nhà cung cấp cấp"],
        ["Dùng để", "Chuyển khoản, rút, thanh toán (tùy ví)", "Thanh toán các mục được phép"],
        ["Khi hết hạn mức", "Nạp thêm", "Phải trả nợ / chờ kỳ mới"],
        ["Có phải trả lại không", "Không", "Có, đúng hạn"],
      ],
    },
    { kind: "h2", text: "Ví trả sau dùng để làm gì?" },
    {
      kind: "ul",
      items: [
        "Thanh toán hóa đơn, nạp điện thoại, mua sắm trong app",
        "Quét QR hoặc trả tại cửa hàng đối tác (nếu ví cho phép)",
        "Mua hàng trên sàn gắn với ví (ShopeePay Later, TikTok Pay Later…)",
      ],
    },
    {
      kind: "p",
      text: "Hầu hết ví không cho dùng hạn mức trả sau để rút ATM, chuyển khoản ra ngân hàng hay trả nợ khoản vay khác. Chi tiết xem các bài có rút tiền được không và có chuyển khoản được không.",
    },
    { kind: "h2", text: "Ai thường được cấp hạn mức?" },
    {
      kind: "p",
      text: "Thường cần tài khoản ví đã xác thực, lịch sử giao dịch ổn định, đôi khi thêm giấy tờ hoặc liên kết ngân hàng. Hạn mức ban đầu có thể thấp, rồi tăng hoặc giảm theo cách bạn thanh toán.",
    },
    {
      kind: "p",
      text: "Để hiểu vòng đời một giao dịch, đọc bài ví trả sau hoạt động như thế nào. Để biết hạn mức được tính ra sao, đọc bài hạn mức ví trả sau là gì.",
    },
  ],
};
