import type { BlogPost } from "../types";

export const khongThanhToanViTraSauThiSao: BlogPost = {
  slug: "khong-thanh-toan-vi-tra-sau-thi-sao",
  title: "Không thanh toán ví trả sau thì sao?",
  description:
    "Bỏ thanh toán ví trả sau có thể bị phí, lãi, khóa hạn mức, bị nhắc nợ. Giải thích các bước thường xảy ra và việc nên làm ngay khi khó trả.",
  dateISO: "2026-09-13",
  category: "huong-dan",
  tags: ["quá hạn", "không thanh toán", "ví trả sau"],
  relatedSlugs: [
    "cach-thanh-toan-vi-tra-sau",
    "vi-tra-sau-co-anh-huong-cic-khong",
    "vi-tra-sau-co-mat-phi-khong",
  ],
  faqs: [
    {
      question: "Quá hạn một ngày đã bị khóa ví chưa?",
      answer:
        "Tùy ví. Có nơi tính phí ngay, có nơi cho vài ngày ân hạn rồi mới hạn chế. Không nên dựa vào “mới trễ một hôm”. Vào app xem trạng thái kỳ hiện tại.",
    },
    {
      question: "Không trả thì nợ có tự hết không?",
      answer:
        "Không. Nợ gốc vẫn còn, thường cộng thêm phí và lãi. Bỏ mặc càng lâu, hạn mức và các tính năng liên quan càng dễ bị khóa.",
    },
    {
      question: "Bị gọi điện nhắc nợ có bình thường không?",
      answer:
        "Nhiều nhà cung cấp nhắc qua app, SMS, rồi điện thoại. Đó là quy trình thu hồi, không phải tin nhắn lừa nếu số và nội dung khớp app. Không chuyển tiền cho số lạ tự xưng “giảm nợ hộ”.",
    },
    {
      question: "Đang khó trả thì làm gì trước?",
      answer:
        "Mở sao kê, trả được phần nào trả phần đó nếu ví cho trả một phần, rồi chat hỗ trợ chính thức để hỏi gia hạn hoặc lịch trả. Xem bài cách thanh toán ví trả sau.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Không thanh toán ví trả sau không làm khoản nợ biến mất. Hầu hết ví sẽ cộng phí hoặc lãi, hạn chế hạn mức, rồi nhắc nợ. Mức độ nặng nhẹ tùy số ngày quá hạn và chính sách từng app.",
    },
    { kind: "h2", text: "Những việc thường xảy ra theo thời gian" },
    {
      kind: "ol",
      items: [
        "Ngày đến hạn: app và SMS nhắc số phải trả.",
        "Mới quá hạn: phí chậm trả / lãi bắt đầu tính; hạn mức có thể bị đóng tạm.",
        "Quá hạn kéo dài: bị khóa tính năng trả sau, bị gọi nhắc, hạn chế một số dịch vụ khác trong cùng hệ sinh thái.",
        "Kéo dài hơn nữa: có thể chuyển sang xử lý nợ theo hợp đồng — lúc này nên đọc lại điều khoản, không im lặng.",
      ],
    },
    { kind: "h2", text: "Ảnh hưởng không chỉ là “bị khóa app”" },
    {
      kind: "ul",
      items: [
        "Số phải trả tăng vì phí và lãi",
        "Hạn mức mới khó được cấp lại",
        "Một số sản phẩm có thể liên quan hồ sơ tín dụng — xem bài ảnh hưởng CIC",
      ],
    },
    { kind: "h2", text: "Việc nên làm ngay" },
    {
      kind: "ol",
      items: [
        "Vào đúng app, mở kỳ sao kê, chụp lại số tiền và ngày quá hạn cho mình theo dõi",
        "Trả càng sớm càng giảm phí phát sinh thêm",
        "Chỉ nộp qua cổng thanh toán trong app hoặc hướng dẫn của chat chính thức",
        "Không đưa OTP cho ai hứa “xóa nợ”, “cập nhật CIC hộ”",
      ],
    },
    {
      kind: "p",
      text: "Nếu app báo không thanh toán được, xem bài vì sao ví trả sau không sử dụng được — đôi khi lỗi cổng thanh toán khác với việc bị khóa vì nợ. Ưu tiên trả nợ ví trước khi nghĩ đến giao dịch hạn mức mới.",
    },
  ],
};
