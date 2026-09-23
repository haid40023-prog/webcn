import type { BlogPost } from "../types";

export const viTraSauBiKhoaPhaiLamSao: BlogPost = {
  slug: "vi-tra-sau-bi-khoa-phai-lam-sao",
  title: "Ví trả sau bị khóa phải làm sao?",
  description:
    "Ví trả sau bị khóa thường do quá hạn, vi phạm điều khoản hoặc hệ thống đánh giá rủi ro. Việc cần làm: đọc thông báo trong app và liên hệ hỗ trợ chính thức.",
  dateISO: "2026-09-09",
  category: "huong-dan",
  tags: ["ví trả sau bị khóa", "khóa hạn mức", "hỗ trợ"],
  relatedSlugs: [
    "vi-sao-vi-tra-sau-khong-su-dung-duoc",
    "khong-thanh-toan-vi-tra-sau-thi-sao",
    "cach-thanh-toan-vi-tra-sau",
  ],
  faqs: [
    {
      question: "Khóa ví trả sau có nghĩa là mất hết tiền trong ví?",
      answer:
        "Không nhất thiết. Nhiều khi chỉ khóa tính năng trả sau; số dư đã nạp vẫn dùng được theo quy định ví. Vào app xem thông báo để biết khóa phần nào.",
    },
    {
      question: "Trả hết nợ là mở khóa ngay?",
      answer:
        "Nếu khóa vì quá hạn, trả xong thường là điều kiện cần — nhưng có ví xét thêm vài giờ đến vài ngày, hoặc vẫn giữ hạn chế nếu phát hiện vi phạm khác. Chat hỗ trợ chính thức để hỏi trạng thái.",
    },
    {
      question: "Ai đó bảo “mở khóa hộ, gửi OTP” có làm được không?",
      answer:
        "Không nên. OTP và mật khẩu là chìa khóa tài khoản. Chỉ dùng kênh hỗ trợ trong app hoặc số tổng đài ghi trên website chính thức của ví.",
    },
    {
      question: "Bị khóa vì lỗi hệ thống thì sao?",
      answer:
        "Hiếm hơn khóa vì nợ hoặc chính sách, nhưng vẫn xảy ra. Gửi mã lỗi, thời điểm, ảnh màn hình cho hỗ trợ chính thức. Không cài app lạ để “vá”.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Khi ví trả sau bị khóa, việc đúng là đọc lý do trong app và liên hệ kênh hỗ trợ chính thức của đúng ví đó. Không có thao tác ẩn để tự mở. Các bước dưới đây giúp bạn xử lý theo đúng nguyên nhân, tránh mất thêm tài khoản vì đưa OTP cho người lạ.",
    },
    { kind: "h2", text: "Xác định đang bị khóa gì" },
    {
      kind: "ul",
      items: [
        "Chỉ khóa PayLater / ví trả sau, các chức năng khác vẫn dùng được",
        "Khóa một phần: không chi tiêu mới nhưng vẫn vào được mục trả nợ",
        "Khóa rộng hơn: đăng nhập hoặc chuyển tiền cũng bị hạn chế — cần hỗ trợ tổng của ví",
      ],
    },
    { kind: "h2", text: "Nguyên nhân phổ biến" },
    {
      kind: "ol",
      items: [
        "Kỳ sao kê quá hạn, chưa thanh toán",
        "Hệ thống gắn cờ giao dịch bất thường",
        "Vi phạm điều khoản sử dụng hạn mức",
        "Yêu cầu xác thực lại giấy tờ, chưa hoàn tất",
      ],
    },
    { kind: "h2", text: "Việc nên làm theo thứ tự" },
    {
      kind: "ol",
      items: [
        "Đọc banner / thông báo trong mục Ví trả sau — ghi lại mã lý do nếu có.",
        "Nếu còn nợ: thanh toán qua đúng cổng trong app (xem bài cách thanh toán).",
        "Mở chat hỗ trợ chính thức, gửi ảnh thông báo, không gửi mật khẩu.",
        "Chờ phản hồi; một số trường hợp mở lại sau khi hệ thống đối soát, không phải ngay lập tức.",
      ],
    },
    { kind: "h2", text: "Việc không nên làm" },
    {
      kind: "ul",
      items: [
        "Đưa mã OTP, mật khẩu, hoặc cài file APK “mở khóa” từ link lạ",
        "Mở thêm tài khoản ảo để lách — dễ bị khóa nặng hơn",
        "Bỏ mặc nợ vì nghĩ khóa là hết chuyện; nợ vẫn còn",
      ],
    },
    {
      kind: "p",
      text: "Nếu chỉ một giao dịch bị từ chối mà mục trả sau vẫn mở, có thể chưa bị khóa — xem bài vì sao không sử dụng được. Nếu khóa vì chưa trả, đọc thêm bài không thanh toán thì sao.",
    },
  ],
};
