import type { BlogPost } from "../types";

export const viTraSauHoatDongNhuTheNao: BlogPost = {
  slug: "vi-tra-sau-hoat-dong-nhu-the-nao",
  title: "Ví trả sau hoạt động như thế nào?",
  description:
    "Ví trả sau chạy theo vòng: được cấp hạn mức, thanh toán trong hạn mức, nhận sao kê, rồi trả đúng hạn. Giải thích từng bước và điều gì xảy ra nếu trễ.",
  dateISO: "2026-09-18",
  category: "huong-dan",
  tags: ["ví trả sau", "cách hoạt động", "kỳ thanh toán"],
  relatedSlugs: [
    "vi-tra-sau-la-gi",
    "cach-thanh-toan-vi-tra-sau",
    "khong-thanh-toan-vi-tra-sau-thi-sao",
  ],
  faqs: [
    {
      question: "Hạn mức bị trừ khi nào?",
      answer:
        "Khi giao dịch thanh toán bằng nguồn ví trả sau được duyệt. Số còn lại = hạn mức được cấp trừ các khoản chưa trả (và đôi khi trừ thêm phần đang chờ xử lý).",
    },
    {
      question: "Kỳ sao kê là gì?",
      answer:
        "Khoảng thời gian ví ghi nhận chi tiêu, rồi chốt thành số phải trả và ngày đến hạn. Ngày chốt và ngày đến hạn nằm trong app, khác nhau ở mỗi ví.",
    },
    {
      question: "Trả đúng hạn thì sao?",
      answer:
        "Hạn mức thường được hoàn lại phần đã trả. Nhiều ví không tính lãi nếu bạn trả đủ, đúng hạn — vẫn nên đọc biểu phí vì một số ví có phí dịch vụ theo tháng.",
    },
    {
      question: "Trả thiếu hoặc trễ thì sao?",
      answer:
        "Có thể phát sinh phí chậm trả, lãi, bị giảm hạn mức hoặc khóa tính năng. Xem bài không thanh toán ví trả sau thì sao.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Ví trả sau không “sinh ra tiền mặt”. Nó chạy như một vòng tín dụng ngắn: được cấp hạn mức → bạn chi tiêu trong hạn mức → ví chốt sao kê → bạn trả lại. Hiểu vòng này giúp tránh nhầm với số dư ví.",
    },
    { kind: "h2", text: "Bốn bước hoạt động" },
    {
      kind: "ol",
      items: [
        "Mở tính năng và được duyệt hạn mức (sau xác thực, đôi khi thêm kiểm tra lịch sử).",
        "Chọn nguồn thanh toán là ví trả sau khi mua hàng hoặc trả hóa đơn được phép.",
        "Cuối kỳ, app hiện số phải trả và ngày đến hạn.",
        "Bạn thanh toán bằng tiền trong ví, tài khoản liên kết hoặc cách ví hỗ trợ.",
      ],
    },
    { kind: "h2", text: "Hạn mức thay đổi trong tháng" },
    {
      kind: "p",
      text: "Mỗi lần thanh toán thành công, hạn mức còn lại giảm. Khi bạn trả nợ, phần tương ứng thường được mở lại. Một số ví trừ thêm khoản đang chờ, nên số “còn dùng được” có thể thấp hơn bạn nhớ.",
    },
    { kind: "h2", text: "Ví có tự trừ tiền khi đến hạn không?" },
    {
      kind: "p",
      text: "Nhiều ví cho phép tự trừ từ thẻ hoặc tài khoản đã liên kết. Nếu không bật tự trừ, bạn phải vào app và trả tay. Không thấy thông báo không có nghĩa là hết nợ — vào mục Ví trả sau / PayLater để kiểm tra ngày đến hạn.",
    },
    {
      kind: "table",
      caption: "Hai trạng thái thường gặp sau khi chi tiêu",
      headers: ["Trạng thái", "Ý nghĩa"],
      rows: [
        ["Chờ sao kê / chưa đến hạn", "Đã dùng hạn mức, chưa bắt buộc trả ngay"],
        ["Đến hạn / quá hạn", "Cần thanh toán; chậm có thể bị phí và hạn chế"],
      ],
    },
    {
      kind: "p",
      text: "Cách trả từng bước nằm ở bài cách thanh toán ví trả sau. Khái niệm hạn mức được giải thích riêng ở bài hạn mức ví trả sau là gì.",
    },
  ],
};
