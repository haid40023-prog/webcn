import type { BlogPost } from "../types";

export const hanMucZalopayTraSau: BlogPost = {
  slug: "han-muc-zalopay-tra-sau",
  title: "Hạn mức ZaloPay trả sau: cách xem hạn mức còn lại",
  description:
    "Hạn mức ZaloPay trả sau là trần thanh toán, không phải số dư ví. Cách xem hạn mức được cấp, còn lại và xử lý khi hết hạn mức ZaloPay.",
  dateISO: "2026-08-28",
  category: "huong-dan",
  tags: ["hạn mức ZaloPay", "ZaloPay trả sau", "hạn mức còn lại"],
  keywords: [
    "hạn mức ZaloPay trả sau",
    "hạn mức ZaloPay",
    "xem hạn mức ZaloPay trả sau",
    "ZaloPay hết hạn mức",
    "tăng hạn mức ZaloPay",
    "ví trả sau ZaloPay hạn mức",
  ],
  calculatorType: "vi-tra-sau",
  relatedSlugs: ["zalopay-tra-sau-la-gi", "rut-vi-tra-sau-zalopay", "han-muc-vi-tra-sau-la-gi"],
  faqs: [
    {
      question: "Xem hạn mức ZaloPay trả sau ở đâu?",
      answer:
        "Mở ZaloPay, vào Trả sau / PayLater / Hạn mức. Xem số được cấp và còn lại. Nếu không thấy mục, tài khoản có thể chưa được bật tính năng.",
    },
    {
      question: "Hết hạn mức ZaloPay thì làm gì?",
      answer:
        "Không thanh toán thêm bằng nguồn trả sau đến khi trả kỳ cũ và phần khả dụng mở lại. Có thể dùng số dư ZaloPay nếu còn tiền nạp.",
    },
    {
      question: "Làm sao tăng hạn mức ZaloPay?",
      answer:
        "Không có công thức công khai. Trả đúng hạn, dùng ổn định, hoàn tất xác thực nếu ví yêu cầu. Nút tăng hạn mức (nếu có) do hệ thống duyệt.",
    },
    {
      question: "Còn hạn mức mà QR không ăn?",
      answer:
        "Cửa hàng nhận ZaloPay chưa chắc nhận nguồn trả sau. Đổi nguồn sang số dư hoặc hỏi lại thông báo lỗi trên app.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Hạn mức ZaloPay trả sau là trần chi tiêu bằng nguồn PayLater trong ZaloPay. Tìm “hạn mức ZaloPay” dễ nhầm với hạn mức chuyển tiền của số dư — hai mục khác nhau.",
    },
    { kind: "h2", text: "Các số cần nhìn" },
    {
      kind: "ul",
      items: [
        "Hạn mức được cấp: trần PayLater",
        "Còn lại: còn thanh toán trả sau được",
        "Phải trả: kỳ đang mở hoặc đến hạn",
      ],
    },
    { kind: "h2", text: "Số còn lại giảm dù chưa mua thêm" },
    {
      kind: "p",
      text: "Có thể có giao dịch chờ, sao kê vừa chốt, hoặc ví tạm giữ một phần. Mở lịch sử Trả sau trước khi báo “bị trừ nhầm”.",
    },
    {
      kind: "p",
      text: "Sản phẩm: ZaloPay trả sau là gì. Rút hạn mức: rút ví trả sau ZaloPay (phí tham khảo 5% – 9%).",
    },
  ],
};
