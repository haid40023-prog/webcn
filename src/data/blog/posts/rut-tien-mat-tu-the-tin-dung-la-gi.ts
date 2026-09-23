import type { BlogPost } from "../types";

export const rutTienMatTuTheTinDungLaGi: BlogPost = {
  slug: "rut-tien-mat-tu-the-tin-dung-la-gi",
  title: "Rút tiền mặt từ thẻ tín dụng là gì?",
  description:
    "Rút tiền mặt thẻ tín dụng là ứng hạn mức tại ATM hoặc quầy. Ngân hàng thu phí rút và thường tính lãi ngay. Khác phí hỗ trợ hạn mức trên web.",
  dateISO: "2026-08-08",
  category: "the-tin-dung",
  tags: ["rút tiền mặt thẻ tín dụng", "rút thẻ tín dụng", "cash advance"],
  keywords: [
    "rút tiền mặt từ thẻ tín dụng là gì",
    "rút tiền mặt thẻ tín dụng",
    "rút thẻ tín dụng ATM",
    "phí rút thẻ tín dụng",
    "rút thẻ tín dụng TPBank BIDV",
    "hỗ trợ thẻ tín dụng Hà Nội",
    "cash advance",
  ],
  calculatorType: "the-tin-dung",
  relatedSlugs: [
    "lai-suat-the-tin-dung",
    "han-muc-the-tin-dung-la-gi",
    "the-tin-dung-la-gi",
  ],
  faqs: [
    {
      question: "Rút thẻ tín dụng tại ATM có được không?",
      answer:
        "Nhiều thẻ cho rút, nếu còn hạn mức rút tiền mặt và thẻ không bị khóa. Đây là giao dịch ứng tiền (cash advance), không phải rút số dư tài khoản.",
    },
    {
      question: "Ngân hàng tính phí rút như thế nào?",
      answer:
        "Thường theo % số rút, có mức tối thiểu, cộng lãi từ ngày rút. Ví dụ hay thấy trên biểu công khai: khoảng vài phần trăm / lần, tối thiểu vài chục đến hơn trăm nghìn — lấy đúng biểu thẻ bạn đang cầm.",
    },
    {
      question: "Phí 2%–4% trên web có phải phí ATM ngân hàng không?",
      answer:
        "Không. Đó là khoảng phí dịch vụ hỗ trợ hạn mức (TPBank, BIDV, HDBank, Cake…). Phí rút ATM do ngân hàng thu riêng.",
    },
    {
      question: "Rút thẻ có hưởng miễn lãi không?",
      answer:
        "Thường không. Lãi ứng tiền mặt hay tính ngay, dù ngày thanh toán sao kê vẫn còn xa.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Rút tiền mặt từ thẻ tín dụng là lấy tiền mặt từ hạn mức thẻ — tại ATM, quầy, hoặc sản phẩm “ứng tiền” của ngân hàng. Bạn đang nợ ngân hàng số vừa rút, không phải lấy tiền lương đã nằm sẵn.",
    },
    { kind: "h2", text: "Khác rút thẻ ghi nợ" },
    {
      kind: "table",
      caption: "Hai lần “rút ATM”",
      headers: ["", "Thẻ ghi nợ", "Thẻ tín dụng"],
      rows: [
        ["Nguồn", "Số dư tài khoản", "Hạn mức thẻ"],
        ["Phí", "Thường thấp / theo biểu ATM", "Phí rút hạn mức + lãi sớm"],
        ["Miễn lãi sao kê", "Không phát sinh nợ thẻ", "Thường không áp dụng cho tiền mặt"],
      ],
    },
    { kind: "h2", text: "Trước khi bấm rút trên ATM" },
    {
      kind: "ol",
      items: [
        "Xem còn hạn mức rút tiền mặt (thường thấp hơn hạn mức mua hàng).",
        "Đọc phí % và phí tối thiểu trên app / biểu phí.",
        "Nhớ lãi tính sớm — cộng vào kế hoạch trả sao kê.",
      ],
    },
    { kind: "h2", text: "Hỗ trợ hạn mức thẻ (tham khảo trên site)" },
    {
      kind: "p",
      text: "Nếu bạn tìm đơn vị hỗ trợ ngoài ATM, khoảng đang niêm yết: TPBank 2% – 4%, Liobank 2% – 3,5%, BIDV 2% – 4%, HDBank 2% – 3,5%, HDSaiGon 3% – 5%, Cake 2% – 4%. Dùng công cụ, chọn Thẻ tín dụng, rồi nhắn Zalo để chốt theo thời điểm.",
    },
    {
      kind: "p",
      text: "Hạn mức: hạn mức thẻ tín dụng là gì. Lãi: lãi suất thẻ tín dụng. Khái niệm thẻ: thẻ tín dụng là gì.",
    },
  ],
};
