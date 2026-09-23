import type { BlogPost } from "../types";

export const hanMucViTraSauLaGi: BlogPost = {
  slug: "han-muc-vi-tra-sau-la-gi",
  title: "Hạn mức ví trả sau là gì?",
  description:
    "Hạn mức ví trả sau là số tối đa bạn được chi tiêu trước khi trả. Giải thích hạn mức tổng, hạn mức còn lại, vì sao tăng hoặc giảm.",
  dateISO: "2026-09-11",
  category: "huong-dan",
  tags: ["hạn mức ví trả sau", "hạn mức", "PayLater"],
  relatedSlugs: [
    "vi-tra-sau-la-gi",
    "vi-tra-sau-hoat-dong-nhu-the-nao",
    "vi-sao-vi-tra-sau-khong-su-dung-duoc",
  ],
  faqs: [
    {
      question: "Hạn mức tổng và hạn mức còn lại khác nhau chỗ nào?",
      answer:
        "Hạn mức tổng là trần nhà cung cấp đang cấp. Hạn mức còn lại = trần trừ các khoản chưa trả (và đôi khi trừ giao dịch đang chờ). Chi tiêu chỉ được trong phần còn lại.",
    },
    {
      question: "Vì sao hạn mức tự giảm dù tôi không dùng?",
      answer:
        "Có thể ví đang trừ khoản chờ xử lý, vừa chốt sao kê, hoặc đánh giá lại sau kỳ chậm trả. Mở lịch sử và mục hạn mức trong app trước khi kết luận bị trừ nhầm.",
    },
    {
      question: "Làm sao để được tăng hạn mức?",
      answer:
        "Không có cách đảm bảo. Thường cần trả đúng hạn, dùng đều trong phạm vi được phép, cập nhật thông tin xác thực. Bấm “yêu cầu tăng” nếu ví có nút — kết quả do hệ thống duyệt.",
    },
    {
      question: "Hết hạn mức thì có rút hoặc chuyển được không?",
      answer:
        "Hết hạn mức nghĩa là không chi tiêu trả sau thêm được. Rút và chuyển khoản vốn thường đã không dùng hạn mức này. Xem các bài rút tiền và chuyển khoản.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Hạn mức ví trả sau là số tiền tối đa nhà cung cấp cho phép bạn thanh toán trước, rồi trả lại. Nó không phải số dư. Khi app hiện “hạn mức 10.000.000 đ”, nghĩa là trần chi tiêu — không phải bạn đang có 10 triệu trong ví.",
    },
    { kind: "h2", text: "Các con số thường thấy trên app" },
    {
      kind: "table",
      caption: "Ba con số dễ nhầm",
      headers: ["Tên trên app (gần đúng)", "Nghĩa"],
      rows: [
        ["Hạn mức / Hạn mức được cấp", "Trần tối đa kỳ này"],
        ["Còn lại / Khả dụng", "Còn dùng được lúc này"],
        ["Đã dùng / Phải trả", "Phần đã chi, chờ hoặc đến hạn"],
      ],
    },
    { kind: "h2", text: "Hạn mức được lấy từ đâu?" },
    {
      kind: "p",
      text: "Mỗi ví có mô hình riêng: lịch sử thanh toán, mức độ xác thực, đôi khi thu nhập khai báo hoặc liên kết ngân hàng. Hai người cùng dùng MoMo hay Kredivo có thể nhận hạn mức khác nhau. Không có bảng công khai “đủ điều kiện là được 20 triệu”.",
    },
    { kind: "h2", text: "Khi nào hạn mức tăng hoặc giảm?" },
    {
      kind: "ul",
      items: [
        "Tăng: trả đúng hạn nhiều kỳ, dùng ổn định, bổ sung giấy tờ nếu ví yêu cầu",
        "Giảm hoặc đóng: chậm trả, bị đánh giá lại, hoặc bạn tự khóa tính năng",
        "Tạm hết: đã dùng hết phần còn lại — trả nợ xong thường mở lại phần tương ứng",
      ],
    },
    {
      kind: "p",
      text: "Nếu hạn mức còn mà thanh toán vẫn bị từ chối, nguyên nhân có thể là merchant không hỗ trợ nguồn trả sau, app lỗi, hoặc tài khoản bị hạn chế. Xem bài vì sao ví trả sau không sử dụng được.",
    },
  ],
};
