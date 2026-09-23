import type { BlogPost } from "../types";

export const hanMucTheTinDungLaGi: BlogPost = {
  slug: "han-muc-the-tin-dung-la-gi",
  title: "Hạn mức thẻ tín dụng là gì?",
  description:
    "Hạn mức thẻ tín dụng là trần ngân hàng cho phép chi tiêu và rút. Phân biệt hạn mức tổng, còn lại, hạn mức rút tiền mặt và vì sao bị giảm.",
  dateISO: "2026-08-15",
  category: "the-tin-dung",
  tags: ["hạn mức thẻ tín dụng", "hạn mức còn lại", "tăng hạn mức thẻ"],
  keywords: [
    "hạn mức thẻ tín dụng là gì",
    "hạn mức thẻ tín dụng",
    "cách xem hạn mức thẻ tín dụng",
    "hạn mức còn lại thẻ tín dụng",
    "tăng hạn mức thẻ tín dụng",
    "hạn mức rút tiền mặt thẻ tín dụng",
  ],
  calculatorType: "the-tin-dung",
  relatedSlugs: [
    "the-tin-dung-la-gi",
    "rut-tien-mat-tu-the-tin-dung-la-gi",
    "han-muc-vi-tra-sau-la-gi",
  ],
  faqs: [
    {
      question: "Hạn mức 30 triệu nghĩa là tài khoản có 30 triệu?",
      answer:
        "Không. Đó là trần được phép nợ trên thẻ. Tài khoản thanh toán là số dư khác.",
    },
    {
      question: "Xem hạn mức thẻ tín dụng ở đâu?",
      answer:
        "App ngân hàng, Internet Banking, hoặc tổng đài / SMS theo cú pháp ngân hàng. Thường thấy hạn mức tổng, đã dùng, còn lại.",
    },
    {
      question: "Hạn mức rút tiền mặt khác hạn mức chi tiêu?",
      answer:
        "Nhiều thẻ tách: hạn mức mua hàng cao hơn hạn mức rút ATM. Rút hết hạn mức mua hàng không có nghĩa rút ATM vẫn còn, và ngược lại.",
    },
    {
      question: "Làm sao tăng hạn mức thẻ?",
      answer:
        "Gửi yêu cầu trên app hoặc chi nhánh. Ngân hàng xét lịch sử trả, thu nhập, quan hệ tín dụng. Không có cách đảm bảo.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Hạn mức thẻ tín dụng là số tối đa ngân hàng cho phép bạn nợ trên thẻ tại một thời điểm. Tìm “hạn mức thẻ tín dụng là gì” thường để phân biệt trần này với tiền đang có.",
    },
    { kind: "h2", text: "Các số trên app" },
    {
      kind: "table",
      caption: "Hạn mức thẻ tín dụng",
      headers: ["Số", "Nghĩa"],
      rows: [
        ["Hạn mức được cấp", "Trần tổng"],
        ["Đã sử dụng", "Giao dịch chưa trả + giữ chỗ"],
        ["Còn lại / khả dụng", "Còn quẹt hoặc rút được (tùy nhóm)"],
        ["Hạn mức rút tiền mặt", "Trần riêng cho ATM / ứng tiền, nếu ngân hàng tách"],
      ],
    },
    { kind: "h2", text: "Hạn mức tăng hoặc giảm" },
    {
      kind: "ul",
      items: [
        "Tăng: trả đúng hạn nhiều kỳ, cập nhật thu nhập, ngân hàng chủ động nâng",
        "Giảm hoặc khóa: chậm trả, CIC xấu, giao dịch bất thường, bạn tự khóa thẻ",
        "Tạm hết: đã dùng gần trần — trả sao kê xong thường mở lại phần tương ứng",
      ],
    },
    { kind: "h2", text: "Còn hạn mức mà giao dịch bị từ chối" },
    {
      kind: "p",
      text: "Có thể chạm hạn mức rút tiền mặt, merchant bị chặn, thẻ hết hạn / khóa, hoặc ngân hàng giữ một phần giao dịch chờ. Xem lịch sử và thông báo trên app trước khi gọi nhầm “hết hạn mức”.",
    },
    {
      kind: "p",
      text: "Vòng đời thẻ: bài hoạt động như thế nào. Rút ATM: rút tiền mặt từ thẻ tín dụng là gì. So với PayLater: hạn mức ví trả sau là gì.",
    },
  ],
};
