import type { BlogPost } from "../types";

export const theTinDungHoatDongNhuTheNao: BlogPost = {
  slug: "the-tin-dung-hoat-dong-nhu-the-nao",
  title: "Thẻ tín dụng hoạt động như thế nào?",
  description:
    "Thẻ tín dụng chạy theo vòng: chi tiêu trong hạn mức, chốt sao kê, đến hạn thanh toán. Giải thích miễn lãi, trả đủ và chuyện xảy ra nếu chỉ trả tối thiểu.",
  dateISO: "2026-08-16",
  category: "the-tin-dung",
  tags: ["thẻ tín dụng hoạt động", "chu kỳ thẻ tín dụng", "miễn lãi"],
  keywords: [
    "thẻ tín dụng hoạt động như thế nào",
    "chu kỳ sao kê thẻ tín dụng",
    "thời gian miễn lãi thẻ tín dụng",
    "cách dùng thẻ tín dụng",
    "vòng đời giao dịch thẻ tín dụng",
  ],
  calculatorType: "the-tin-dung",
  relatedSlugs: [
    "the-tin-dung-la-gi",
    "ngay-sao-ke-the-tin-dung-la-gi",
    "ngay-thanh-toan-the-tin-dung-la-gi",
  ],
  faqs: [
    {
      question: "Quẹt thẻ xong tiền bị trừ tài khoản ngay không?",
      answer:
        "Không trừ tài khoản thanh toán như thẻ ghi nợ. Ngân hàng ghi nợ lên hạn mức thẻ. Bạn trả theo sao kê, trừ khi đã bật tự động trừ từ tài khoản liên kết.",
    },
    {
      question: "Miễn lãi thẻ tín dụng là gì?",
      answer:
        "Nếu trả đủ số sao kê đúng hạn, nhiều thẻ không tính lãi cho nhóm thanh toán mua hàng. Rút tiền mặt thường không được miễn lãi — lãi tính ngay.",
    },
    {
      question: "Chỉ trả tối thiểu thì sao?",
      answer:
        "Thẻ không bị phạt chậm như bỏ mặc, nhưng phần còn lại thường chịu lãi. Xem bài thanh toán tối thiểu thẻ tín dụng là gì.",
    },
    {
      question: "Ngày sao kê và ngày thanh toán có trùng không?",
      answer:
        "Thường không. Sao kê chốt số đã chi. Thanh toán là hạn cuối phải trả. Khoảng cách vài ngày đến vài tuần tùy ngân hàng.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Thẻ tín dụng hoạt động theo vòng, không phải “quẹt xong quên”. Hiểu bốn mốc: chi tiêu, ngày sao kê, ngày thanh toán, rồi hạn mức mở lại phần đã trả.",
    },
    { kind: "h2", text: "Bốn bước trong một kỳ" },
    {
      kind: "ol",
      items: [
        "Bạn thanh toán / rút trong hạn mức còn lại.",
        "Đến ngày sao kê, ngân hàng chốt danh sách giao dịch và số phải trả.",
        "Trước hoặc đúng ngày thanh toán, bạn trả đủ, trả một phần, hoặc trả tối thiểu.",
        "Phần đã trả thường được cộng lại hạn mức; phần chưa trả + lãi (nếu có) chuyển kỳ sau.",
      ],
    },
    { kind: "h2", text: "Mua hàng và rút tiền mặt không cùng luật lãi" },
    {
      kind: "table",
      caption: "Hai nhóm giao dịch",
      headers: ["Nhóm", "Thường gặp"],
      rows: [
        ["Thanh toán mua hàng", "Có thể hưởng miễn lãi nếu trả đủ, đúng hạn"],
        ["Rút tiền mặt / ứng tiền", "Phí rút + lãi thường tính ngay, không chờ sao kê"],
      ],
    },
    { kind: "h2", text: "Tự trừ từ tài khoản" },
    {
      kind: "p",
      text: "Nhiều ngân hàng cho đăng ký tự động thanh toán đủ hoặc tối thiểu. Chỉ bật “trả đủ” khi tài khoản luôn có tiền đúng ngày — thiếu tiền vẫn thành chậm trả.",
    },
    {
      kind: "p",
      text: "Chi tiết mốc: ngày sao kê, ngày thanh toán, thanh toán tối thiểu. Khái niệm thẻ: thẻ tín dụng là gì.",
    },
  ],
};
