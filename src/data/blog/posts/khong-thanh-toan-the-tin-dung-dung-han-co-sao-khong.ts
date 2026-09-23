import type { BlogPost } from "../types";

export const khongThanhToanTheTinDungDungHanCoSaoKhong: BlogPost = {
  slug: "khong-thanh-toan-the-tin-dung-dung-han-co-sao-khong",
  title: "Không thanh toán thẻ tín dụng đúng hạn có sao không?",
  description:
    "Chậm trả thẻ tín dụng có thể bị phí, lãi, khóa thẻ và ảnh hưởng CIC. Giải thích các mức (trễ vài ngày, trả dưới tối thiểu, bỏ mặc) và việc nên làm ngay.",
  dateISO: "2026-08-11",
  category: "the-tin-dung",
  tags: ["chậm trả thẻ tín dụng", "quá hạn thẻ", "CIC thẻ tín dụng"],
  keywords: [
    "không thanh toán thẻ tín dụng đúng hạn",
    "chậm trả thẻ tín dụng",
    "quá hạn thẻ tín dụng",
    "trễ hạn thẻ tín dụng có sao không",
    "nợ thẻ tín dụng không trả",
    "thẻ tín dụng ảnh hưởng CIC",
  ],
  calculatorType: "the-tin-dung",
  relatedSlugs: [
    "ngay-thanh-toan-the-tin-dung-la-gi",
    "thanh-toan-toi-thieu-the-tin-dung-la-gi",
    "vi-tra-sau-co-anh-huong-cic-khong",
  ],
  faqs: [
    {
      question: "Trễ một ngày đã bị lên CIC chưa?",
      answer:
        "Tùy ngân hàng và số ngày chậm. Phí / lãi có thể tính sớm. Thông tin tín dụng thường ghi nhận khi chậm kéo dài hoặc vượt ngưỡng báo cáo. Đừng chủ quan vì “mới một ngày”.",
    },
    {
      question: "Không trả gì cả thì thẻ sao?",
      answer:
        "Phí chậm, lãi cộng, hạn mức bị khóa, bị nhắc nợ, có thể chuyển xử lý theo hợp đồng. Nợ không tự hết.",
    },
    {
      question: "Đang khó trả thì làm gì trước?",
      answer:
        "Mở sao kê, trả được tối thiểu hoặc hơn ngay trong app ngân hàng. Gọi tổng đài chính thức hỏi lịch / tái cấu trúc nếu khoản lớn. Không chuyển tiền cho số lạ “xóa nợ hộ”.",
    },
    {
      question: "Chậm thẻ có ảnh hưởng vay nhà, vay xe sau này?",
      answer:
        "Có thể, nếu được ghi nhận trên CIC hoặc cùng hệ thống ngân hàng. Lịch sử thẻ là một trong các tín hiệu xét duyệt.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Không thanh toán thẻ tín dụng đúng hạn thì có sao: có. Mức nặng nhẹ tùy bạn trả trễ bao nhiêu, có đạt tối thiểu hay không, và chính sách từng ngân hàng.",
    },
    { kind: "h2", text: "Ba mức thường gặp" },
    {
      kind: "ol",
      items: [
        "Trả đủ nhưng sau ngày thanh toán: dễ mất miễn lãi, bị phí/lãi chậm.",
        "Trả dưới tối thiểu hoặc không trả: phạt chậm + lãi + hạn chế thẻ.",
        "Bỏ mặc nhiều kỳ: nhắc nợ, khóa thẻ, hồ sơ tín dụng xấu hơn.",
      ],
    },
    { kind: "h2", text: "Ngoài tiền phạt còn gì?" },
    {
      kind: "ul",
      items: [
        "Hạn mức bị đóng, thẻ phụ bị khóa theo",
        "Phí phát sinh kỳ sau làm số phải trả tăng",
        "Có thể ảnh hưởng CIC — xem thêm bài ví trả sau / tín dụng và CIC",
      ],
    },
    { kind: "h2", text: "Việc nên làm trong 24 giờ" },
    {
      kind: "ol",
      items: [
        "Vào đúng app ngân hàng phát hành thẻ, xem số tối thiểu và số đủ.",
        "Chuyển ngay số bạn xoay được, ưu tiên tối thiểu trở lên.",
        "Tắt chi tiêu mới, kể cả rút ATM.",
        "Chỉ nộp qua cổng ngân hàng; giữ mã giao dịch.",
      ],
    },
    {
      kind: "p",
      text: "Hạn trả: ngày thanh toán là gì. Số nhỏ nhất: thanh toán tối thiểu. Lãi cộng thêm: lãi suất thẻ tín dụng.",
    },
  ],
};
