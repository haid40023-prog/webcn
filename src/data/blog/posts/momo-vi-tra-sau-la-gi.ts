import type { BlogPost } from "../types";

export const momoViTraSauLaGi: BlogPost = {
  slug: "momo-vi-tra-sau-la-gi",
  title: "Ví trả sau MoMo là gì?",
  description:
    "Ví trả sau MoMo là hạn mức chi tiêu trước, trả sau trong app MoMo. Khác số dư ví, không rút ATM, dùng để thanh toán các mục MoMo cho phép.",
  dateISO: "2026-09-25",
  category: "huong-dan",
  tags: ["ví trả sau MoMo", "MoMo trả sau", "MoMo PayLater"],
  keywords: [
    "ví trả sau MoMo là gì",
    "ví trả sau momo",
    "MoMo trả sau",
    "MoMo PayLater",
    "hạn mức MoMo",
    "ví momo trả sau khác gì số dư",
    "momo trả sau dùng để làm gì",
  ],
  calculatorType: "vi-tra-sau",
  relatedSlugs: [
    "han-muc-vi-tra-sau-momo",
    "vi-tra-sau-momo-co-rut-duoc-khong",
    "vi-tra-sau-la-gi",
  ],
  faqs: [
    {
      question: "Ví trả sau MoMo có phải tiền đã nạp không?",
      answer:
        "Không. Đó là hạn mức MoMo cấp để thanh toán trước, bạn trả lại theo kỳ. Số dư ví (tiền nạp, nhận chuyển) là nguồn khác.",
    },
    {
      question: "Ví trả sau MoMo dùng được việc gì?",
      answer:
        "Thanh toán các mục MoMo cho phép: hóa đơn, mua sắm trong app, QR tại điểm chấp nhận nguồn trả sau. Không dùng để rút ATM hay chuyển khoản tự do.",
    },
    {
      question: "MoMo trả sau khác thẻ tín dụng thế nào?",
      answer:
        "Cùng kiểu chi tiêu trước, trả sau. MoMo gắn trong ví điện tử, nơi thanh toán và biểu phí theo chính sách MoMo, không phải thẻ ngân hàng quẹt quốc tế.",
    },
    {
      question: "Muốn biết hạn mức MoMo của mình thì vào đâu?",
      answer:
        "Trong app MoMo, mở mục Ví trả sau / Trả sau. Xem hạn mức được cấp, còn lại và số phải trả. Bài hạn mức ví trả sau MoMo giải thích từng số.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Ví trả sau MoMo (nhiều người gọi MoMo trả sau, MoMo PayLater) là hạn mức để thanh toán trước trong hệ sinh thái MoMo, rồi trả lại theo kỳ. Số hiện trên app không phải tiền lương hay tiền đã nạp.",
    },
    { kind: "h2", text: "Ví trả sau MoMo khác số dư MoMo" },
    {
      kind: "table",
      caption: "Hai nguồn tiền trong app MoMo",
      headers: ["", "Số dư MoMo", "Ví trả sau MoMo"],
      rows: [
        ["Nguồn", "Tiền bạn nạp / nhận", "Hạn mức MoMo cấp"],
        ["Rút về ngân hàng", "Thường được (có phí)", "Không có nút rút"],
        ["Chuyển cho người khác", "Thường được", "Thường không"],
        ["Thanh toán hóa đơn, QR được phép", "Được", "Được nếu MoMo mở mục đó"],
      ],
    },
    { kind: "h2", text: "Ai thường thấy mục MoMo trả sau?" },
    {
      kind: "p",
      text: "Tài khoản đã xác thực, dùng MoMo ổn định. Hạn mức ban đầu có thể thấp. MoMo xét từng người — không có mốc “đủ điều kiện là được 20 triệu” công khai.",
    },
    { kind: "h2", text: "Phí và rút hạn mức" },
    {
      kind: "p",
      text: "Dùng rồi trả đúng hạn có thể không phát sinh lãi, nhưng MoMo vẫn có thể thu phí dịch vụ theo chính sách từng thời điểm. Trong app không rút ví trả sau về ngân hàng. Nếu tìm đơn vị hỗ trợ bên ngoài, khoảng phí tham khảo hiện khoảng 4,5% – 8%.",
    },
    {
      kind: "p",
      text: "Đọc tiếp: hạn mức ví trả sau MoMo, ví trả sau MoMo có rút được không, và bài tổng ví trả sau là gì.",
    },
  ],
};
