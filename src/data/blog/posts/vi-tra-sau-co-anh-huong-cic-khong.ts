import type { BlogPost } from "../types";

export const viTraSauCoAnhHuongCicKhong: BlogPost = {
  slug: "vi-tra-sau-co-anh-huong-cic-khong",
  title: "Ví trả sau có ảnh hưởng CIC không?",
  description:
    "Một số sản phẩm trả sau có thể liên quan hồ sơ tín dụng; không phải ví nào cũng báo cáo CIC như nhau. Giải thích CIC là gì và chậm trả có thể ảnh hưởng ra sao.",
  dateISO: "2026-09-14",
  category: "huong-dan",
  tags: ["CIC", "ví trả sau", "tín dụng"],
  relatedSlugs: [
    "khong-thanh-toan-vi-tra-sau-thi-sao",
    "cach-thanh-toan-vi-tra-sau",
    "vi-tra-sau-la-gi",
  ],
  faqs: [
    {
      question: "CIC là gì?",
      answer:
        "CIC là Trung tâm Thông tin tín dụng Quốc gia. Các tổ chức tín dụng có thể gửi thông tin vay, trả nợ để ngân hàng và công ty tài chính tham khảo khi xét hạn mức sau này.",
    },
    {
      question: "Mọi ví trả sau đều lên CIC chứ?",
      answer:
        "Không chắc. Tùy pháp nhân cấp hạn mức và điều khoản sản phẩm. Công ty tài chính (ví dụ một số sản phẩm Kredivo, FE Credit) thường gần với báo cáo tín dụng hơn ví chỉ gắn tính năng PayLater. Phải đọc điều khoản ví bạn đang dùng.",
    },
    {
      question: "Trả đúng hạn thì CIC có sao không?",
      answer:
        "Nếu sản phẩm có báo cáo, trả đúng hạn thường được ghi nhận tích cực hơn chậm trả. Nếu sản phẩm không báo cáo CIC, việc trả đúng hạn vẫn giúp bạn giữ hạn mức và tránh phí trên chính ví đó.",
    },
    {
      question: "Chậm trả có làm ngân hàng từ chối vay sau này?",
      answer:
        "Có thể, nếu khoản đó được chia sẻ vào hệ thống tín dụng hoặc nếu cùng hệ sinh thái tài chính. Không nên chủ quan vì “chỉ là ví”. Trả sớm và liên hệ kênh hỗ trợ chính thức của ví nếu đang khó trả.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "CIC (Trung tâm Thông tin tín dụng Quốc gia) lưu thông tin về quan hệ tín dụng. Câu “ví trả sau có ảnh hưởng CIC không” không có một câu đúng cho mọi app: phụ thuộc ví nào, pháp nhân nào cấp hạn mức, và điều khoản có cho phép chia sẻ dữ liệu hay không.",
    },
    { kind: "h2", text: "Khi nào có thể liên quan hồ sơ tín dụng?" },
    {
      kind: "ul",
      items: [
        "Sản phẩm do công ty tài chính / tổ chức tín dụng cấp, ghi rõ trong hợp đồng điện tử",
        "Điều khoản nói về cung cấp thông tin cho trung tâm thông tin tín dụng",
        "Khoản quá hạn kéo dài, bị chuyển sang xử lý nợ",
      ],
    },
    { kind: "h2", text: "Khi nào ảnh hưởng chủ yếu nằm trong chính ví?" },
    {
      kind: "p",
      text: "Một số tính năng PayLater chủ yếu khóa hạn mức, tính phí chậm trả, hạn chế dùng app — chưa chắc đã hiện trên báo cáo CIC như một khoản vay ngân hàng. Ngược lại, không thấy chữ “CIC” trong app không có nghĩa là chậm trả vô hại: bạn vẫn mất hạn mức, bị phí, và có thể bị từ chối sản phẩm khác của cùng hệ sinh thái.",
    },
    { kind: "h2", text: "Nên kiểm tra gì trong app?" },
    {
      kind: "ol",
      items: [
        "Hợp đồng / điều khoản sử dụng ví trả sau: mục chia sẻ dữ liệu, bên cấp hạn mức",
        "Sao kê: số ngày quá hạn, phí, lãi",
        "Nếu cần xác nhận, hỏi chat hỗ trợ chính thức của đúng ví đó — không hỏi nhóm lạ",
      ],
    },
    {
      kind: "p",
      text: "Cách giảm rủi ro rõ nhất là trả đúng hạn. Xem bài cách thanh toán ví trả sau và bài không thanh toán thì sao. Bài này không thay lời tư vấn pháp lý; nếu khoản lớn hoặc đã bị nhắc nợ kéo dài, đọc lại hợp đồng và liên hệ kênh chính thức.",
    },
  ],
};
