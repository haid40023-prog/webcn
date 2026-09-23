import type { BlogPost } from "../types";

export const viSaoViTraSauKhongSuDungDuoc: BlogPost = {
  slug: "vi-sao-vi-tra-sau-khong-su-dung-duoc",
  title: "Vì sao ví trả sau không sử dụng được?",
  description:
    "Ví trả sau bị từ chối thường do hết hạn mức, quá hạn, điểm thanh toán không hỗ trợ, hoặc lỗi app. Checklist tự kiểm tra trước khi liên hệ hỗ trợ.",
  dateISO: "2026-09-10",
  category: "huong-dan",
  tags: ["ví trả sau lỗi", "không dùng được", "PayLater"],
  relatedSlugs: [
    "vi-tra-sau-bi-khoa-phai-lam-sao",
    "han-muc-vi-tra-sau-la-gi",
    "khong-thanh-toan-vi-tra-sau-thi-sao",
  ],
  faqs: [
    {
      question: "Còn hạn mức mà vẫn không thanh toán được?",
      answer:
        "Có thể điểm đó không chấp nhận nguồn trả sau, giao dịch vượt hạn mức còn lại, hoặc app đang bảo trì. Thử lại đúng nguồn, đúng merchant, rồi xem thông báo lỗi chi tiết.",
    },
    {
      question: "Lỗi “không đủ điều kiện” nghĩa là gì?",
      answer:
        "Thường là nguồn trả sau không áp dụng cho loại giao dịch đó (chuyển khoản, rút, một số hóa đơn), hoặc tài khoản đang bị hạn chế vì kỳ cũ chưa trả.",
    },
    {
      question: "Chỉ cần xóa app cài lại là xong?",
      answer:
        "Đôi khi hết lỗi mạng hoặc bản cũ. Nếu nguyên nhân là nợ quá hạn hoặc bị khóa chính sách, cài lại app không mở lại hạn mức. Phải xử lý đúng nguyên nhân trong mục PayLater.",
    },
    {
      question: "Khác gì với ví bị khóa?",
      answer:
        "Không dùng được một giao dịch vẫn có thể do merchant hoặc hết hạn mức. Bị khóa là tài khoản / tính năng bị đóng có chủ đích. Xem bài ví trả sau bị khóa phải làm sao.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "“Ví trả sau không sử dụng được” gồm nhiều tình huống khác nhau. Đừng chỉ gỡ app. Đi lần lượt các nguyên nhân phổ biến dưới đây trước khi chat hỗ trợ.",
    },
    { kind: "h2", text: "Checklist nhanh" },
    {
      kind: "ol",
      items: [
        "Còn hạn mức khả dụng không, hay chỉ còn hạn mức tổng nhưng phần còn lại = 0.",
        "Kỳ trước đã quá hạn chưa — nhiều ví chặn chi tiêu mới đến khi trả xong.",
        "Giao dịch có thuộc loại được phép không (QR cửa hàng, hóa đơn, đơn sàn…). Chuyển khoản và rút thường bị chặn.",
        "Đã chọn đúng nguồn “Trả sau” hay app tự nhảy sang nguồn khác.",
        "Thử mạng khác, cập nhật app, đăng xuất rồi đăng nhập lại.",
      ],
    },
    { kind: "h2", text: "Nhóm nguyên nhân hay gặp" },
    {
      kind: "table",
      caption: "Triệu chứng và hướng xử lý",
      headers: ["Triệu chứng", "Hướng xử lý trước"],
      rows: [
        ["Báo hết hạn mức / không đủ", "Xem hạn mức còn lại; trả nợ kỳ cũ"],
        ["Báo không hỗ trợ phương thức", "Đổi nguồn tiền hoặc điểm thanh toán"],
        ["Lỗi mạng / timeout", "Đổi wifi/4G, cập nhật app"],
        ["Tính năng biến mất, báo bị khóa", "Đọc bài bị khóa; liên hệ hỗ trợ chính thức"],
      ],
    },
    { kind: "h2", text: "Khi nào cần hỗ trợ chính thức?" },
    {
      kind: "p",
      text: "Khi đã trả nợ, còn hạn mức, đúng loại giao dịch mà vẫn lỗi nhiều lần, kèm mã lỗi. Chat trong app, gửi ảnh màn hình và mã giao dịch. Không đưa mật khẩu cho nhóm “mở hộ hạn mức”.",
    },
    {
      kind: "p",
      text: "Hiểu hạn mức: bài hạn mức ví trả sau là gì. Nếu nghi bị khóa vì chính sách hoặc quá hạn: bài ví trả sau bị khóa phải làm sao.",
    },
  ],
};
