import type { BlogPost } from "../types";

export const ngayThanhToanTheTinDungLaGi: BlogPost = {
  slug: "ngay-thanh-toan-the-tin-dung-la-gi",
  title: "Ngày thanh toán thẻ tín dụng là gì?",
  description:
    "Ngày thanh toán là hạn cuối trả sao kê thẻ tín dụng. Trả đủ đúng hạn thường giữ miễn lãi mua hàng. Khác ngày sao kê và số tối thiểu.",
  dateISO: "2026-08-13",
  category: "the-tin-dung",
  tags: ["ngày thanh toán thẻ tín dụng", "due date", "trả thẻ đúng hạn"],
  keywords: [
    "ngày thanh toán thẻ tín dụng là gì",
    "ngày thanh toán thẻ tín dụng",
    "hạn thanh toán thẻ tín dụng",
    "due date thẻ tín dụng",
    "trả thẻ tín dụng đúng hạn",
    "ngày sao kê và ngày thanh toán",
  ],
  calculatorType: "the-tin-dung",
  relatedSlugs: [
    "ngay-sao-ke-the-tin-dung-la-gi",
    "khong-thanh-toan-the-tin-dung-dung-han-co-sao-khong",
    "lai-suat-the-tin-dung",
  ],
  faqs: [
    {
      question: "Trả sau ngày thanh toán một ngày có sao không?",
      answer:
        "Thường bị tính chậm: phí, lãi, mất miễn lãi kỳ đó. Có ngân hàng cho vài giờ ân hạn, không nên dựa vào. Xem bài không thanh toán đúng hạn.",
    },
    {
      question: "Trả trước ngày thanh toán được không?",
      answer:
        "Được. Trả sớm vẫn được ghi nhận. Nhiều người trả ngay khi có sao kê để khỏi quên.",
    },
    {
      question: "Tự động thanh toán trừ ngày nào?",
      answer:
        "Thường trừ đúng hoặc gần ngày thanh toán, theo đăng ký trên app. Tài khoản phải đủ số đã chọn (đủ sao kê hoặc tối thiểu).",
    },
    {
      question: "Ngày thanh toán có phải ngày sao kê không?",
      answer:
        "Không. Sao kê chốt số. Thanh toán là hạn trả. Xem bài ngày sao kê.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Ngày thanh toán thẻ tín dụng (due date, hạn thanh toán) là hạn cuối ngân hàng yêu cầu bạn trả số trên sao kê — trả đủ hoặc ít nhất số tối thiểu, tùy cách bạn chọn.",
    },
    { kind: "h2", text: "Trả đủ đúng hạn để làm gì?" },
    {
      kind: "ul",
      items: [
        "Giữ khả năng miễn lãi cho nhóm mua hàng (theo điều khoản thẻ)",
        "Tránh phí chậm trả",
        "Giữ lịch sử tốt khi xét hạn mức hoặc CIC",
      ],
    },
    { kind: "h2", text: "Trả bằng cách nào?" },
    {
      kind: "ol",
      items: [
        "Chuyển khoản / thanh toán thẻ trên app đúng số hợp đồng thẻ.",
        "Tự động trừ tài khoản đã liên kết.",
        "Tại quầy / kênh ngân hàng ghi nhận — giữ biên lai đến khi sao kê cập nhật.",
      ],
    },
    { kind: "h2", text: "Hai số trên sao kê" },
    {
      kind: "p",
      text: "Số thanh toán đầy đủ: để không chuyển dư nợ lãi sang kỳ sau (với nhóm được miễn lãi). Số tối thiểu: đủ để không bị phạt “không trả”, nhưng phần còn lại thường chịu lãi — bài thanh toán tối thiểu giải thích rõ.",
    },
    {
      kind: "p",
      text: "Quá hạn: không thanh toán thẻ tín dụng đúng hạn có sao không. Lãi: lãi suất thẻ tín dụng.",
    },
  ],
};
