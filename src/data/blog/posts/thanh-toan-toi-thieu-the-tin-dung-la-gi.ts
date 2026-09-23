import type { BlogPost } from "../types";

export const thanhToanToiThieuTheTinDungLaGi: BlogPost = {
  slug: "thanh-toan-toi-thieu-the-tin-dung-la-gi",
  title: "Thanh toán tối thiểu thẻ tín dụng là gì?",
  description:
    "Thanh toán tối thiểu là số nhỏ nhất phải trả trong kỳ để thẻ không bị coi là bỏ mặc. Phần còn lại thường chịu lãi. Không phải “trả vậy là xong nợ”.",
  dateISO: "2026-08-12",
  category: "the-tin-dung",
  tags: ["thanh toán tối thiểu", "minimum payment", "trả góp thẻ"],
  keywords: [
    "thanh toán tối thiểu thẻ tín dụng là gì",
    "thanh toán tối thiểu thẻ tín dụng",
    "minimum payment",
    "trả tối thiểu thẻ tín dụng",
    "trả tối thiểu có bị lãi không",
    "số thanh toán tối thiểu",
  ],
  calculatorType: "the-tin-dung",
  relatedSlugs: [
    "lai-suat-the-tin-dung",
    "ngay-thanh-toan-the-tin-dung-la-gi",
    "khong-thanh-toan-the-tin-dung-dung-han-co-sao-khong",
  ],
  faqs: [
    {
      question: "Trả đúng số tối thiểu có bị phạt chậm không?",
      answer:
        "Thường không bị phạt như không trả gì, nếu vào đúng hạn. Phần dư nợ còn lại vẫn có thể tính lãi. Đọc dòng lãi trên sao kê kỳ sau.",
    },
    {
      question: "Số tối thiểu tính thế nào?",
      answer:
        "Mỗi ngân hàng một công thức: một phần trăm dư nợ, cộng lãi/phí, có sàn số tiền tối thiểu. Lấy đúng số in trên sao kê, đừng tự ước.",
    },
    {
      question: "Trả tối thiểu nhiều tháng có sao không?",
      answer:
        "Nợ gốc giảm chậm, lãi cộng dồn, hạn mức bị chiếm lâu. CIC có thể vẫn ghi nhận dư nợ. Nên trả trên tối thiểu khi có thể.",
    },
    {
      question: "Trả tối thiểu có mất miễn lãi không?",
      answer:
        "Thường có. Miễn lãi mua hàng thường chỉ khi trả đủ số sao kê đúng hạn. Trả tối thiểu = chấp nhận dư nợ chuyển kỳ và lãi theo biểu.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Thanh toán tối thiểu thẻ tín dụng là số nhỏ nhất ngân hàng yêu cầu trong kỳ để tài khoản thẻ không rơi vào trạng thái chậm / không thanh toán. Nhiều người hiểu nhầm “trả tối thiểu = không mất gì thêm”.",
    },
    { kind: "h2", text: "Ba mức trên sao kê" },
    {
      kind: "table",
      caption: "Chọn mức trả khác nhau thì sao",
      headers: ["Mức trả", "Thường xảy ra"],
      rows: [
        ["Đủ số sao kê", "Thường giữ miễn lãi mua hàng (theo điều khoản)"],
        ["Trên tối thiểu, dưới đủ", "Không bị phạt chậm; phần còn lại chịu lãi"],
        ["Đúng tối thiểu", "Thẻ “còn hoạt động”; lãi trên dư nợ còn lại"],
        ["Dưới tối thiểu / không trả", "Phí chậm, lãi, hạn chế thẻ, ảnh hưởng tín dụng"],
      ],
    },
    { kind: "h2", text: "Vì sao ngân hàng in số tối thiểu?" },
    {
      kind: "p",
      text: "Để khách khó khăn vẫn giữ thẻ không bị khóa ngay. Đây không phải khuyến nghị số nên trả. Trả đúng tối thiểu kéo dài nghĩa vụ và chi phí lãi.",
    },
    { kind: "h2", text: "Nên làm gì?" },
    {
      kind: "ol",
      items: [
        "Ưu tiên trả đủ sao kê nếu đang dùng thẻ để chi tiêu hàng tháng.",
        "Nếu tháng đó khó: trả cao hơn tối thiểu càng tốt.",
        "Không mở thêm rút tiền mặt khi đang chỉ trả tối thiểu — lãi nhóm này thường nặng.",
      ],
    },
    {
      kind: "p",
      text: "Lãi tính ra sao: bài lãi suất thẻ tín dụng. Bỏ không trả: không thanh toán đúng hạn có sao không.",
    },
  ],
};
