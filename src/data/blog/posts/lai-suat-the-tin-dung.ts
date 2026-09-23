import type { BlogPost } from "../types";

export const laiSuatTheTinDung: BlogPost = {
  slug: "lai-suat-the-tin-dung",
  title: "Lãi suất thẻ tín dụng là gì? Khi nào bị tính lãi",
  description:
    "Lãi suất thẻ tín dụng là % ngân hàng tính trên dư nợ. Thường miễn lãi mua hàng nếu trả đủ đúng hạn; rút tiền mặt và trả thiếu thì lãi phát sinh.",
  dateISO: "2026-08-09",
  category: "the-tin-dung",
  tags: ["lãi suất thẻ tín dụng", "lãi thẻ tín dụng", "miễn lãi"],
  keywords: [
    "lãi suất thẻ tín dụng",
    "lãi suất thẻ tín dụng là gì",
    "thẻ tín dụng tính lãi như thế nào",
    "miễn lãi thẻ tín dụng",
    "lãi rút tiền mặt thẻ tín dụng",
    "lãi suất thẻ tín dụng BIDV TPBank",
  ],
  calculatorType: "the-tin-dung",
  relatedSlugs: [
    "thanh-toan-toi-thieu-the-tin-dung-la-gi",
    "rut-tien-mat-tu-the-tin-dung-la-gi",
    "phi-thuong-nien-the-tin-dung",
  ],
  faqs: [
    {
      question: "Trả đủ sao kê đúng hạn có bị lãi không?",
      answer:
        "Với nhóm thanh toán mua hàng, nhiều thẻ không tính lãi. Rút tiền mặt / ứng tiền thường vẫn có lãi kể từ ngày rút, dù bạn trả đủ sao kê.",
    },
    {
      question: "Lãi tính trên số nào?",
      answer:
        "Thường trên dư nợ còn lại (và quy tắc từng loại giao dịch). Công thức chi tiết nằm trong biểu lãi ngân hàng — từng ngày hoặc theo kỳ, tùy thẻ.",
    },
    {
      question: "Trả tối thiểu thì lãi ra sao?",
      answer:
        "Phần chưa trả chuyển kỳ sau và chịu lãi theo biểu. Đó là lý do trả tối thiểu nhiều tháng tốn hơn trả đủ.",
    },
    {
      question: "Lãi ngân hàng khác phí hỗ trợ trên web?",
      answer:
        "Có. Lãi là của ngân hàng. Phí 2% – 4% trên công cụ là khoảng dịch vụ hỗ trợ hạn mức, không thay lãi suất thẻ.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Lãi suất thẻ tín dụng là tỷ lệ ngân hàng dùng để tính tiền lãi trên dư nợ. “Có miễn lãi” không có nghĩa mọi giao dịch đều miễn — phụ thuộc bạn trả đủ hay không, và đó là mua hàng hay rút tiền mặt.",
    },
    { kind: "h2", text: "Khi nào thường chưa bị lãi?" },
    {
      kind: "p",
      text: "Chi tiêu mua hàng, trả đủ số sao kê đúng ngày thanh toán, đúng điều khoản miễn lãi của thẻ. Đây là cách dùng thẻ rẻ nhất.",
    },
    { kind: "h2", text: "Khi nào lãi hay phát sinh?" },
    {
      kind: "ul",
      items: [
        "Trả thiếu / chỉ trả tối thiểu: dư nợ còn lại chịu lãi",
        "Chậm quá ngày thanh toán: lãi + có thể phí chậm",
        "Rút tiền mặt, ứng tiền, một số chuyển tiền từ hạn mức: lãi tính sớm, kèm phí rút",
      ],
    },
    { kind: "h2", text: "Xem số % thật ở đâu?" },
    {
      kind: "p",
      text: "Biểu lãi / biểu phí trên website ngân hàng và sao kê. TPBank, BIDV, HDBank, Cake không dùng chung một mức. Số trên quảng cáo “0% trả góp” chỉ áp dụng chương trình đối tác, không phải mọi dư nợ.",
    },
    {
      kind: "p",
      text: "Rút ATM: bài rút tiền mặt từ thẻ tín dụng. Phí giữ thẻ: phí thường niên. Trả thiếu có chủ đích: thanh toán tối thiểu là gì.",
    },
  ],
};
