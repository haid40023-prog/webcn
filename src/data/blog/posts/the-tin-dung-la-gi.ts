import type { BlogPost } from "../types";

export const theTinDungLaGi: BlogPost = {
  slug: "the-tin-dung-la-gi",
  title: "Thẻ tín dụng là gì?",
  description:
    "Thẻ tín dụng là hạn mức ngân hàng cho phép chi tiêu trước, trả sau. Khác thẻ ghi nợ, khác ví trả sau, và không phải tiền đang có trong tài khoản.",
  dateISO: "2026-09-28",
  category: "the-tin-dung",
  tags: ["thẻ tín dụng là gì", "thẻ tín dụng", "credit card"],
  keywords: [
    "thẻ tín dụng là gì",
    "thẻ tín dụng",
    "credit card là gì",
    "thẻ tín dụng khác thẻ ghi nợ",
    "thẻ tín dụng khác ví trả sau",
    "hạn mức thẻ tín dụng",
    "thẻ tín dụng TPBank BIDV HDBank Cake",
  ],
  calculatorType: "the-tin-dung",
  relatedSlugs: [
    "the-tin-dung-hoat-dong-nhu-the-nao",
    "han-muc-the-tin-dung-la-gi",
    "vi-tra-sau-la-gi",
  ],
  faqs: [
    {
      question: "Thẻ tín dụng có phải tiền của mình không?",
      answer:
        "Không. Đó là hạn mức ngân hàng cấp. Mỗi lần quẹt là bạn đang nợ ngân hàng, rồi trả lại theo sao kê.",
    },
    {
      question: "Thẻ tín dụng khác thẻ ghi nợ (ATM) thế nào?",
      answer:
        "Thẻ ghi nợ trừ thẳng tiền đang có trong tài khoản. Thẻ tín dụng không trừ tài khoản ngay — trừ hạn mức, đến ngày thanh toán bạn mới trả.",
    },
    {
      question: "Thẻ tín dụng khác ví trả sau MoMo, Kredivo?",
      answer:
        "Cùng ý chi tiêu trước, trả sau. Thẻ gắn ngân hàng, dùng được nhiều điểm Visa/Mastercard/JCB. Ví trả sau gắn app và điểm ví cho phép. Phí, kỳ sao kê, rút tiền mặt là hai bộ quy tắc.",
    },
    {
      question: "Những ngân hàng nào hay được hỏi trên site này?",
      answer:
        "Công cụ đang có TPBank, Liobank, BIDV, HDBank, HDSaiGon, Cake và nhóm thẻ khác. Phí hỗ trợ trên web là khoảng tham khảo, khác biểu phí thường niên / lãi của ngân hàng.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Thẻ tín dụng (credit card) là hạn mức ngân hàng cho phép bạn thanh toán trước, trả sau theo kỳ sao kê. Số “hạn mức 50 triệu” không phải 50 triệu đang nằm trong tài khoản thanh toán.",
    },
    { kind: "h2", text: "Thẻ tín dụng khác thẻ ghi nợ và ví trả sau" },
    {
      kind: "table",
      caption: "Ba nguồn hay nhầm",
      headers: ["", "Thẻ ghi nợ / ATM", "Thẻ tín dụng", "Ví trả sau"],
      rows: [
        ["Nguồn tiền", "Số dư tài khoản", "Hạn mức ngân hàng", "Hạn mức ví / công ty tài chính"],
        ["Trả khi nào", "Trừ ngay", "Theo ngày thanh toán sao kê", "Theo kỳ app"],
        ["Rút tiền mặt", "Rút số dư", "Rút hạn mức — thường mất phí + lãi ngay", "Trong app thường không rút"],
      ],
    },
    { kind: "h2", text: "Thẻ tín dụng dùng để làm gì?" },
    {
      kind: "ul",
      items: [
        "Thanh toán cửa hàng, online, đặt phòng, vé — nơi chấp nhận Visa, Mastercard, JCB…",
        "Một số thẻ có hoàn tiền, trả góp tại đối tác",
        "Rút tiền mặt tại ATM: được nhưng đây là nhóm giao dịch đắt — xem bài rút tiền mặt từ thẻ tín dụng",
      ],
    },
    { kind: "h2", text: "Hai nhóm phí đừng cộng vào một" },
    {
      kind: "p",
      text: "Ngân hàng thu phí thường niên, lãi, phí rút ATM, phí chậm trả — xem biểu phí trên app/website ngân hàng. Nếu nhờ đơn vị hỗ trợ hạn mức thẻ, khoảng trên web (ví dụ TPBank, BIDV 2% – 4%) là phí dịch vụ tham khảo, không thay biểu phí ngân hàng.",
    },
    {
      kind: "p",
      text: "Đọc tiếp: thẻ tín dụng hoạt động như thế nào, hạn mức thẻ tín dụng là gì. So với PayLater: ví trả sau là gì.",
    },
  ],
};
