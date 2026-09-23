import type { BlogPost } from "../types";

export const kredivoLaGi: BlogPost = {
  slug: "kredivo-la-gi",
  title: "Kredivo là gì? Hạn mức Kredivo khác ví trả sau MoMo chỗ nào",
  description:
    "Kredivo là hạn mức trả góp / trả sau do công ty tài chính cấp, dùng tại điểm đối tác. Khác MoMo trả sau ở chỗ mở app, nơi thanh toán và cách trả nợ.",
  dateISO: "2026-09-26",
  category: "huong-dan",
  tags: ["Kredivo là gì", "hạn mức Kredivo", "Kredivo"],
  keywords: [
    "Kredivo là gì",
    "hạn mức Kredivo",
    "ví Kredivo",
    "Kredivo trả góp",
    "Kredivo khác MoMo",
    "rút hạn mức Kredivo",
    "ứng dụng Kredivo",
  ],
  calculatorType: "vi-tra-sau",
  relatedSlugs: ["han-muc-kredivo", "rut-han-muc-kredivo", "vi-tra-sau-la-gi"],
  faqs: [
    {
      question: "Kredivo có phải ví MoMo không?",
      answer:
        "Không. Kredivo là ứng dụng / hạn mức riêng, thường do công ty tài chính cấp. Có thể thanh toán tại một số điểm hoặc sàn đối tác, không phải mục bên trong MoMo.",
    },
    {
      question: "Kredivo dùng để làm gì?",
      answer:
        "Mua hàng trả góp hoặc trả sau tại đối tác Kredivo chấp nhận: sàn, cửa hàng, thanh toán online được liệt kê trong app. Không phải tiền mặt trong túi.",
    },
    {
      question: "Kredivo có rút tiền được không?",
      answer:
        "Trong app thường không có rút hạn mức về ngân hàng như rút ATM. Xem bài rút hạn mức Kredivo nếu bạn đang tìm hỗ trợ bên ngoài.",
    },
    {
      question: "Phí hỗ trợ Kredivo khoảng bao nhiêu?",
      answer:
        "Khoảng tham khảo trên web hiện 4% – 6%. Mức chốt khi liên hệ. Tính thử trên công cụ, chọn Kredivo.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Kredivo là hạn mức mua trước, trả sau hoặc trả góp, quản lý trên app Kredivo. Người Việt hay gọi “ví Kredivo” hoặc “hạn mức Kredivo”, dù bản chất gần sản phẩm tài chính tiêu dùng hơn là số dư ví điện tử.",
    },
    { kind: "h2", text: "Kredivo khác ví trả sau MoMo" },
    {
      kind: "table",
      caption: "So sánh nhanh",
      headers: ["", "Ví trả sau MoMo", "Kredivo"],
      rows: [
        ["App", "Trong MoMo", "App Kredivo (và điểm đối tác)"],
        ["Nơi dùng", "Hệ sinh thái MoMo, QR được phép", "Đối tác / sàn Kredivo liệt kê"],
        ["Phí hỗ trợ tham khảo trên web", "4,5% – 8%", "4% – 6%"],
      ],
    },
    { kind: "h2", text: "Cách Kredivo chạy" },
    {
      kind: "ol",
      items: [
        "Đăng ký, xác thực, được cấp hạn mức.",
        "Thanh toán tại điểm Kredivo hỗ trợ, chọn số kỳ nếu là trả góp.",
        "Trả đúng hạn trên app Kredivo bằng tài khoản / cách Kredivo cho phép.",
      ],
    },
    {
      kind: "p",
      text: "Chậm trả có thể bị phí, khóa hạn mức, và sản phẩm tài chính thường gần với hồ sơ tín dụng hơn PayLater gắn ví. Đọc điều khoản Kredivo, xem bài ảnh hưởng CIC.",
    },
    {
      kind: "p",
      text: "Tiếp theo: hạn mức Kredivo và rút hạn mức Kredivo. Khái niệm chung: ví trả sau là gì.",
    },
  ],
};
