import type { BlogPost } from "../types";

export const huongDanTinhPhiThamKhao: BlogPost = {
  slug: "huong-dan-tinh-phi-tham-khao",
  title: "Cách tính mức phí tham khảo (rút ví trả sau & thẻ tín dụng)",
  description:
    "Hướng dẫn cách hệ thống tính mức phí dự kiến và số tiền nhận được theo khoảng tham khảo.",
  dateISO: "2026-03-21",
  category: "huong-dan",
  tags: ["tính phí", "ví trả sau", "thẻ tín dụng"],
  relatedSlugs: ["the-tin-dung-la-gi", "vi-tra-sau-la-gi", "rut-tien-mat-tu-the-tin-dung-la-gi"],
  faqs: [
    {
      question: "Phí tham khảo khác phí thực tế như thế nào?",
      answer:
        "Phí trên công cụ là khoảng dự kiến theo từng đơn vị. Mức chốt phụ thuộc thời điểm, hạn mức và loại ví hoặc thẻ. Liên hệ Zalo hoặc gọi điện để nhận báo phí chính xác.",
    },
    {
      question: "Số tiền nhận về được tính ra sao?",
      answer:
        "Phí thấp = số tiền × phần trăm thấp nhất. Phí cao = số tiền × phần trăm cao nhất. Số tiền nhận thấp = số tiền − phí cao. Số tiền nhận cao = số tiền − phí thấp.",
    },
    {
      question: "Công cụ dùng được cho cả ví trả sau và thẻ tín dụng?",
      answer:
        "Có. Chọn loại dịch vụ, chọn đơn vị đang hỗ trợ, nhập số tiền rồi nhấn tính. Kết quả là khoảng phí và số tiền nhận về theo mức tham khảo.",
    },
    {
      question: "Xem xong khoảng phí thì làm gì tiếp?",
      answer:
        "Gửi tên ví hoặc ngân hàng và số tiền qua Zalo để đối chiếu theo thời điểm. Có thể nhận hỗ trợ tại cơ sở Hà Nội hoặc online toàn quốc.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Khi bạn nhập số tiền, công cụ sẽ tính ra mức phí dự kiến và số tiền nhận được theo khoảng tham khảo của từng đơn vị.",
    },
    { kind: "h2", text: "Công thức tính khoảng phí" },
    {
      kind: "ul",
      items: [
        "Phí thấp nhất = số tiền × feeMin (%)",
        "Phí cao nhất = số tiền × feeMax (%)",
        "Số tiền nhận thấp nhất = số tiền − phí cao nhất",
        "Số tiền nhận cao nhất = số tiền − phí thấp nhất",
      ],
    },
    { kind: "h2", text: "Ví dụ với 10.000.000 đ, phí 4% – 8%" },
    {
      kind: "table",
      caption: "Khoảng phí tham khảo khi rút 10 triệu đồng",
      headers: ["Hạng mục", "Mức thấp", "Mức cao"],
      rows: [
        ["Phí dự kiến", "400.000 đ", "800.000 đ"],
        ["Số tiền nhận về", "9.200.000 đ", "9.600.000 đ"],
      ],
    },
    {
      kind: "p",
      text: "Phí hiển thị là mức tham khảo. Vui lòng liên hệ để được báo mức chính xác theo thời điểm.",
    },
  ],
};
