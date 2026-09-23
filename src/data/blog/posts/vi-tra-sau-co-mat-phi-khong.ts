import type { BlogPost } from "../types";

export const viTraSauCoMatPhiKhong: BlogPost = {
  slug: "vi-tra-sau-co-mat-phi-khong",
  title: "Ví trả sau có mất phí không?",
  description:
    "Ví trả sau có thể miễn phí nếu trả đúng hạn, nhưng vẫn có phí dịch vụ, phí chậm trả hoặc lãi. Phân biệt phí của ví và phí nếu nhờ hỗ trợ bên ngoài.",
  dateISO: "2026-09-15",
  category: "huong-dan",
  tags: ["phí ví trả sau", "phí chậm trả", "PayLater"],
  calculatorType: "vi-tra-sau",
  relatedSlugs: [
    "cach-thanh-toan-vi-tra-sau",
    "khong-thanh-toan-vi-tra-sau-thi-sao",
    "huong-dan-tinh-phi-tham-khao",
  ],
  faqs: [
    {
      question: "Dùng ví trả sau rồi trả đúng hạn có mất phí không?",
      answer:
        "Nhiều ví không tính lãi nếu trả đủ, đúng hạn. Vẫn có thể có phí dịch vụ theo tháng hoặc sau một số lần dùng. Mở biểu phí trong app để chắc.",
    },
    {
      question: "Phí chậm trả khác lãi như thế nào?",
      answer:
        "Phí chậm trả thường là khoản cố định hoặc theo % khi quá ngày đến hạn. Lãi tính trên số dư còn lại theo ngày hoặc theo kỳ. Một ví có thể thu cả hai.",
    },
    {
      question: "Phí hỗ trợ rút hạn mức có phải phí của MoMo không?",
      answer:
        "Không. Phí trên công cụ tính phí (ví dụ MoMo 4,5% – 8%) là khoảng tham khảo của đơn vị hỗ trợ bên ngoài, không phải biểu phí chính thức trong app.",
    },
    {
      question: "Làm sao xem mình đang bị tính phí gì?",
      answer:
        "Vào mục Ví trả sau / PayLater / Lịch sử, mở sao kê kỳ hiện tại. Các dòng “phí dịch vụ”, “phí chậm trả”, “lãi” sẽ hiện riêng với tiền gốc.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Ví trả sau có thể không mất lãi nếu bạn trả đủ, đúng hạn — nhưng “không mất lãi” không có nghĩa là luôn miễn phí. Có ít nhất hai nhóm phí: phí của chính ví, và phí nếu bạn nhờ đơn vị ngoài hỗ trợ chuyển đổi hạn mức.",
    },
    { kind: "h2", text: "Phí do nhà cung cấp ví thu" },
    {
      kind: "ul",
      items: [
        "Phí dịch vụ theo tháng hoặc sau một số lần giao dịch (tùy chính sách từng ví)",
        "Phí / lãi chậm trả khi quá ngày đến hạn",
        "Phí quản lý hoặc phí nhắc nợ, nếu được ghi trong điều khoản",
      ],
    },
    {
      kind: "p",
      text: "Con số cụ thể đổi theo ví và theo thời điểm. MoMo, Kredivo, ShopeePay Later không dùng chung một biểu. Chỉ điều khoản và sao kê trong app mới là số phải trả.",
    },
    { kind: "h2", text: "Làm sao để ít bị phí nhất?" },
    {
      kind: "ol",
      items: [
        "Trả đủ trước hoặc đúng ngày đến hạn",
        "Bật nhắc nợ hoặc tự trừ từ tài khoản liên kết nếu bạn chắc tài khoản đủ tiền",
        "Không để phát sinh thêm giao dịch khi kỳ cũ chưa trả",
        "Đọc mục “biểu phí” trước khi bật tính năng, không chỉ đọc quảng cáo miễn phí",
      ],
    },
    { kind: "h2", text: "Phí khi nhờ hỗ trợ bên ngoài" },
    {
      kind: "p",
      text: "Nếu bạn tìm đơn vị hỗ trợ chuyển hạn mức thành tiền nhận về, đó là phí dịch vụ riêng. Trên web, từng ví có khoảng tham khảo (MoMo 4,5% – 8%, Kredivo 4% – 6%…). Dùng công cụ tính phí để ra số đồng, rồi hỏi lại lúc liên hệ.",
    },
    {
      kind: "table",
      caption: "Hai loại phí dễ nhầm",
      headers: ["Loại", "Ai thu", "Xem ở đâu"],
      rows: [
        ["Phí / lãi ví trả sau", "MoMo, Kredivo, ZaloPay…", "App, điều khoản, sao kê"],
        ["Phí hỗ trợ chuyển đổi hạn mức", "Đơn vị bạn liên hệ", "Bảng trên web + tin nhắn chốt"],
      ],
    },
    {
      kind: "p",
      text: "Cách trả nợ ví đúng chỗ nằm ở bài cách thanh toán ví trả sau. Nếu đã quá hạn, đọc bài không thanh toán thì sao trước khi cộng thêm giao dịch mới.",
    },
  ],
};
