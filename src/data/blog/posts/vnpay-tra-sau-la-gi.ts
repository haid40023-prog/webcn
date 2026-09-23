import type { BlogPost } from "../types";

export const vnpayTraSauLaGi: BlogPost = {
  slug: "vnpay-tra-sau-la-gi",
  title: "VNPAY trả sau là gì? Hạn mức ví VNPAY",
  description:
    "VNPAY trả sau là hạn mức thanh toán trước trên hệ sinh thái VNPAY. Khác số dư ví VNPAY, dùng tại điểm / hóa đơn VNPAY cho phép.",
  dateISO: "2026-08-20",
  category: "huong-dan",
  tags: ["VNPAY trả sau", "ví VNPAY", "hạn mức VNPAY"],
  keywords: [
    "VNPAY trả sau",
    "ví trả sau VNPAY",
    "hạn mức VNPAY",
    "VNPay PayLater",
    "rút VNPAY trả sau",
    "ví VNPay",
  ],
  calculatorType: "vi-tra-sau",
  relatedSlugs: ["zalopay-tra-sau-la-gi", "momo-vi-tra-sau-la-gi", "cac-vi-tra-sau-moi-nhat"],
  faqs: [
    {
      question: "VNPAY trả sau khác thanh toán VNPAY thường?",
      answer:
        "Quét VNPAY bằng số dư hoặc ngân hàng liên kết khác với trả bằng hạn mức trả sau. Chỉ khi app cho chọn nguồn trả sau thì mới đụng hạn mức.",
    },
    {
      question: "Phí hỗ trợ VNPAY khoảng bao nhiêu?",
      answer:
        "Tham khảo 4% – 7%. Công cụ: chọn VNPay.",
    },
    {
      question: "Rút hạn mức VNPAY trong app được không?",
      answer:
        "Thường không. Hạn mức để thanh toán điểm được phép, không rút ATM.",
    },
    {
      question: "VNPAY và MoMo, ZaloPay khác gì?",
      answer:
        "Cùng nhóm ví / cổng thanh toán Việt, khác app và điểm chấp nhận. So phí hỗ trợ trên bảng các ví trả sau phổ biến.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "VNPAY trả sau (ví trả sau VNPAY, hạn mức VNPAY) là hạn mức PayLater trong hệ sinh thái VNPAY. Nhiều cửa hàng nhận “thanh toán VNPAY” nhưng chưa chắc nhận đúng nguồn trả sau.",
    },
    { kind: "h2", text: "Cách kiểm tra" },
    {
      kind: "ol",
      items: [
        "Trong app / siêu ứng dụng gắn VNPAY, tìm mục Trả sau hoặc hạn mức.",
        "Lúc trả hóa đơn hoặc QR, xem có dòng nguồn trả sau không.",
        "Đọc số còn lại trước khi chốt đơn lớn.",
      ],
    },
    { kind: "h2", text: "Phí tham khảo" },
    {
      kind: "p",
      text: "Hỗ trợ chuyển đổi hạn mức: 4% – 7%. Phí chậm trả do VNPAY thu nằm trên sao kê app.",
    },
    {
      kind: "p",
      text: "So với MoMo và ZaloPay: đọc hai bài “là gì” tương ứng. Zalo 0964857947 khi cần đối chiếu.",
    },
  ],
};
