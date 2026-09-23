import type { BlogPost } from "../types";

export const hanMucKredivo: BlogPost = {
  slug: "han-muc-kredivo",
  title: "Hạn mức Kredivo là gì? Cách xem hạn mức trên app",
  description:
    "Hạn mức Kredivo là trần mua trả sau / trả góp được duyệt. Hướng dẫn phân biệt hạn mức tổng, còn lại, và lý do Kredivo tăng hoặc giảm hạn mức.",
  dateISO: "2026-08-30",
  category: "huong-dan",
  tags: ["hạn mức Kredivo", "xem hạn mức Kredivo", "Kredivo"],
  keywords: [
    "hạn mức Kredivo",
    "cách xem hạn mức Kredivo",
    "Kredivo hạn mức còn lại",
    "tăng hạn mức Kredivo",
    "Kredivo bị giảm hạn mức",
    "hạn mức Kredivo là gì",
  ],
  calculatorType: "vi-tra-sau",
  relatedSlugs: ["kredivo-la-gi", "rut-han-muc-kredivo", "han-muc-vi-tra-sau-la-gi"],
  faqs: [
    {
      question: "Hạn mức Kredivo xem ở đâu?",
      answer:
        "Mở app Kredivo, vào trang chủ hoặc mục hạn mức / tài khoản. App hiện số được cấp và số còn dùng được. Tên menu có thể đổi theo bản cập nhật.",
    },
    {
      question: "Vì sao hạn mức Kredivo thấp hơn bạn bè?",
      answer:
        "Kredivo xét từng hồ sơ. Lịch sử trả, thông tin xác thực, hành vi dùng khác nhau thì trần khác nhau. Không so một con số chung.",
    },
    {
      question: "Yêu cầu tăng hạn mức Kredivo được không?",
      answer:
        "Nhiều kỳ app có nút yêu cầu tăng. Kết quả do hệ thống duyệt. Trả đúng hạn và dùng đúng điểm đối tác thường là điều kiện cần, không phải đủ.",
    },
    {
      question: "Hết hạn mức Kredivo thì sao?",
      answer:
        "Không mở thêm đơn trả sau / trả góp đến khi có lại phần khả dụng (thường sau khi trả kỳ). Không đồng nghĩa có nút rút tiền mặt.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Hạn mức Kredivo là số tối đa Kredivo cho phép bạn phát sinh giao dịch trả sau hoặc trả góp. Tìm “hạn mức Kredivo” hay “cách xem hạn mức Kredivo” thì cần nhìn đúng hai số: được cấp và còn lại.",
    },
    { kind: "h2", text: "Được cấp và còn lại" },
    {
      kind: "ul",
      items: [
        "Được cấp: trần hồ sơ đang có",
        "Còn lại: trần trừ các khoản chưa tất toán (và đơn đang chờ)",
        "Đã dùng: phần đang phải trả theo kỳ",
      ],
    },
    { kind: "h2", text: "Hạn mức Kredivo tăng hoặc giảm khi nào?" },
    {
      kind: "p",
      text: "Tăng sau một thời gian trả đúng hạn, dùng đều tại đối tác. Giảm khi chậm trả, bị đánh giá lại, hoặc bạn tự khóa / ít dùng. Đơn trả góp nhiều kỳ cũng “giữ” một phần hạn mức đến khi trả xong.",
    },
    { kind: "h2", text: "Còn hạn mức nhưng thanh toán bị từ chối" },
    {
      kind: "p",
      text: "Điểm bán hoặc sàn đó có thể không nằm trong mạng Kredivo, hoặc giá trị đơn vượt phần còn lại. Thử đúng app Kredivo, đúng đối tác, rồi xem thông báo lỗi.",
    },
    {
      kind: "p",
      text: "Kredivo là gì giải thích sản phẩm. Rút hạn mức Kredivo nói về việc không rút trong app và khoảng phí 4% – 6% nếu nhờ hỗ trợ.",
    },
  ],
};
