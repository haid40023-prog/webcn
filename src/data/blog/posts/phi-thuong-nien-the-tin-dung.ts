import type { BlogPost } from "../types";

export const phiThuongNienTheTinDung: BlogPost = {
  slug: "phi-thuong-nien-the-tin-dung",
  title: "Phí thường niên thẻ tín dụng là gì? Khi nào bị trừ",
  description:
    "Phí thường niên là phí duy trì thẻ theo năm, khác lãi và phí rút tiền mặt. Giải thích miễn năm đầu, hoàn phí khi chi tiêu đủ, và chỗ xem trên sao kê.",
  dateISO: "2026-08-10",
  category: "the-tin-dung",
  tags: ["phí thường niên", "phí thường niên thẻ tín dụng", "annual fee"],
  keywords: [
    "phí thường niên thẻ tín dụng",
    "phí thường niên là gì",
    "miễn phí thường niên thẻ tín dụng",
    "phí thường niên TPBank BIDV HDBank",
    "hoàn phí thường niên",
    "phí duy trì thẻ tín dụng",
  ],
  calculatorType: "the-tin-dung",
  relatedSlugs: [
    "lai-suat-the-tin-dung",
    "the-tin-dung-la-gi",
    "ngay-sao-ke-the-tin-dung-la-gi",
  ],
  faqs: [
    {
      question: "Phí thường niên khác lãi suất?",
      answer:
        "Có. Phí thường niên là phí giữ thẻ theo năm (hoặc lần đầu phát hành, tùy biểu). Lãi tính trên dư nợ khi bạn trả thiếu hoặc rút tiền mặt.",
    },
    {
      question: "Năm đầu miễn phí rồi năm sau sao?",
      answer:
        "Nhiều thẻ miễn năm đầu, năm 2 trở đi thu theo biểu. Một số hoàn phí nếu chi tiêu đạt mốc. Đọc điều kiện trên trang thẻ / sao kê.",
    },
    {
      question: "Không dùng thẻ có vẫn bị trừ phí thường niên không?",
      answer:
        "Thường vẫn trừ nếu thẻ còn mở. Không quẹt không có nghĩa miễn phí duy trì. Có thể khóa / đóng thẻ theo quy trình ngân hàng nếu không muốn giữ.",
    },
    {
      question: "Phí hỗ trợ trên web có gồm phí thường niên không?",
      answer:
        "Không. Khoảng 2% – 4% (TPBank, BIDV, Cake…) là phí dịch vụ hỗ trợ hạn mức tham khảo, không phải phí thường niên ngân hàng.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Phí thường niên thẻ tín dụng là khoản ngân hàng thu để duy trì thẻ trong năm (annual fee). Nó xuất hiện trên sao kê thành một dòng, không phải lãi từng ngày.",
    },
    { kind: "h2", text: "Hay gặp những dạng nào?" },
    {
      kind: "ul",
      items: [
        "Miễn năm đầu, thu từ năm thứ hai",
        "Thu cố định mỗi năm, có thể hoàn nếu đạt doanh số",
        "Thẻ hạng cao: phí cao hơn, kèm phòng chờ / hoàn tiền — vẫn phải đọc điều kiện",
      ],
    },
    { kind: "h2", text: "Xem số thật ở đâu?" },
    {
      kind: "p",
      text: "Biểu phí trên website / app ngân hàng phát hành, và dòng trên sao kê kỳ bị trừ. TPBank, BIDV, HDBank, Cake, HDSaiGon mỗi thẻ một biểu — không lấy số thẻ này áp thẻ kia.",
    },
    { kind: "h2", text: "Đừng nhầm ba loại phí" },
    {
      kind: "table",
      caption: "Phí thường niên không phải lãi, không phải phí hỗ trợ",
      headers: ["Loại", "Ai thu"],
      rows: [
        ["Phí thường niên", "Ngân hàng phát hành thẻ"],
        ["Lãi / phí chậm / phí rút ATM", "Ngân hàng, theo giao dịch và dư nợ"],
        ["Phí hỗ trợ hạn mức (tham khảo trên web)", "Đơn vị bạn liên hệ, nếu có dùng dịch vụ"],
      ],
    },
    {
      kind: "p",
      text: "Lãi khi trả thiếu: bài lãi suất thẻ tín dụng. Rút ATM: rút tiền mặt từ thẻ tín dụng là gì.",
    },
  ],
};
