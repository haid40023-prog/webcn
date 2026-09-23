import type { BlogPost } from "../types";

export const cachThanhToanViTraSau: BlogPost = {
  slug: "cach-thanh-toan-vi-tra-sau",
  title: "Cách thanh toán ví trả sau",
  description:
    "Các bước trả nợ ví trả sau ngay trong app: tìm mục PayLater, chọn kỳ đến hạn, trả bằng số dư hoặc ngân hàng liên kết. Lưu ý ngày đến hạn và tự trừ.",
  dateISO: "2026-09-12",
  category: "huong-dan",
  tags: ["thanh toán ví trả sau", "trả nợ", "PayLater"],
  relatedSlugs: [
    "vi-tra-sau-hoat-dong-nhu-the-nao",
    "khong-thanh-toan-vi-tra-sau-thi-sao",
    "vi-tra-sau-co-mat-phi-khong",
  ],
  faqs: [
    {
      question: "Trả ví trả sau bằng chính hạn mức trả sau được không?",
      answer:
        "Không. Phải trả bằng tiền thật: số dư ví, thẻ hoặc tài khoản ngân hàng liên kết, hoặc cổng ví chỉ định. Không “lấy nợ trả nợ” trên cùng hạn mức.",
    },
    {
      question: "Có trả một phần được không?",
      answer:
        "Nhiều ví cho trả một phần hoặc trả trước hạn. Trả một phần có thể vẫn còn phí trên số dư. Xem nút trong kỳ sao kê — đừng giả định mọi ví giống nhau.",
    },
    {
      question: "Bật tự động trừ thì có an toàn không?",
      answer:
        "Tiện nếu tài khoản liên kết luôn đủ tiền đúng ngày. Nếu không chắc số dư, nên tắt tự trừ và trả tay để tránh bị trừ thất bại rồi bị phí chậm.",
    },
    {
      question: "Thanh toán không thành công thì làm gì?",
      answer:
        "Thử nguồn tiền khác, kiểm tra hạn mức chuyển khoản ngân hàng, đổi mạng rồi thử lại. Vẫn lỗi thì chat hỗ trợ chính thức của ví, gửi mã giao dịch. Xem thêm bài ví không sử dụng được.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Cách thanh toán ví trả sau nằm trong chính ứng dụng đã cấp hạn mức. Không cần bên thứ ba để “tất toán hộ”. Dưới đây là các bước chung; tên menu hơi khác giữa MoMo, ZaloPay, Kredivo, ShopeePay Later…",
    },
    { kind: "h2", text: "Các bước trả trong app" },
    {
      kind: "ol",
      items: [
        "Mở ví → vào Ví trả sau / PayLater / Khoản phải trả.",
        "Chọn kỳ đang đến hạn (hoặc quá hạn). Xem số gốc, phí, ngày đến hạn.",
        "Bấm Thanh toán / Trả nợ.",
        "Chọn nguồn: số dư ví, ngân hàng liên kết, hoặc thẻ được phép — không chọn lại nguồn trả sau.",
        "Xác nhận. Giữ biên lai / mã giao dịch đến khi hạn mức được cập nhật.",
      ],
    },
    { kind: "h2", text: "Nên trả lúc nào?" },
    {
      kind: "ul",
      items: [
        "Trả trước hoặc đúng ngày đến hạn để tránh phí chậm",
        "Nếu ví cho trả trước, có thể trả sớm khi vừa có tiền",
        "Đặt nhắc trên điện thoại trước hạn 1–2 ngày, đừng chỉ chờ push",
      ],
    },
    { kind: "h2", text: "Phân biệt ba nút dễ bấm nhầm" },
    {
      kind: "table",
      caption: "Thanh toán nợ khác thanh toán mua hàng",
      headers: ["Nút trên app", "Việc đang làm"],
      rows: [
        ["Thanh toán / Trả nợ ví trả sau", "Trả khoản đã dùng"],
        ["Thanh toán hóa đơn / QR", "Chi tiêu mới, có thể lại lấy hạn mức"],
        ["Chuyển tiền", "Không dùng để tất toán hạn mức"],
      ],
    },
    {
      kind: "p",
      text: "Sau khi trả thành công, hạn mức thường mở lại phần tương ứng trong vài phút đến một ngày. Nếu trừ tiền rồi mà kỳ vẫn hiện nợ, đợi sao kê cập nhật rồi hỏi hỗ trợ chính thức, đừng trả trùng.",
    },
    {
      kind: "p",
      text: "Đã quá hạn: đọc bài không thanh toán thì sao. Muốn hiểu phí phát sinh: bài ví trả sau có mất phí không.",
    },
  ],
};
