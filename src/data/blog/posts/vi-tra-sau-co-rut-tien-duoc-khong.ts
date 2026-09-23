import type { BlogPost } from "../types";

export const viTraSauCoRutTienDuocKhong: BlogPost = {
  slug: "vi-tra-sau-co-rut-tien-duoc-khong",
  title: "Ví trả sau có rút tiền được không?",
  description:
    "Ví trả sau không rút tiền mặt trong ứng dụng như rút ATM. Giải thích vì sao, khác gì số dư ví, và cần lưu ý gì nếu tìm đơn vị hỗ trợ bên ngoài.",
  dateISO: "2026-09-17",
  category: "huong-dan",
  tags: ["rút ví trả sau", "rút tiền", "ví trả sau"],
  calculatorType: "vi-tra-sau",
  relatedSlugs: [
    "vi-tra-sau-co-chuyen-khoan-duoc-khong",
    "vi-tra-sau-momo-co-rut-duoc-khong",
    "vi-tra-sau-la-gi",
  ],
  faqs: [
    {
      question: "Trong app có nút rút ví trả sau về ngân hàng không?",
      answer:
        "Thông thường là không. Hạn mức trả sau dùng để thanh toán, không phải số dư để rút ATM hay chuyển về tài khoản như tiền đã nạp.",
    },
    {
      question: "Rút số dư ví và rút ví trả sau khác nhau chỗ nào?",
      answer:
        "Số dư ví là tiền bạn đã nạp hoặc nhận được, nhiều ví cho rút về ngân hàng (có thể mất phí). Ví trả sau là hạn mức nợ — rút không nằm trong tính năng chuẩn.",
    },
    {
      question: "MoMo có rút ví trả sau được không?",
      answer:
        "Trong app MoMo thì không rút thẳng. Xem bài riêng về ví trả sau MoMo có rút được không nếu bạn đang dùng đúng ví này.",
    },
    {
      question: "Nếu nhờ đơn vị ngoài hỗ trợ thì sao?",
      answer:
        "Đó không phải nút rút chính thức. Cần hỏi rõ phí và số tiền nhận về, không đưa mật khẩu hay OTP. Có thể xem khoảng phí tham khảo trên công cụ rồi liên hệ để chốt theo thời điểm.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Câu hỏi “ví trả sau có rút tiền được không” xuất hiện vì số tiền trên app trông giống số dư. Về thiết kế sản phẩm: hầu hết ví không cho rút hạn mức trả sau thành tiền mặt trong ứng dụng.",
    },
    { kind: "h2", text: "Vì sao không rút được trong app?" },
    {
      kind: "p",
      text: "Nhà cung cấp cấp hạn mức để bạn thanh toán hàng hóa, dịch vụ được phép — không phải để biến hạn mức thành tiền mặt. Vì vậy app thường không có mục “rút ví trả sau” bên cạnh mục rút số dư.",
    },
    {
      kind: "ul",
      items: [
        "Không rút ATM từ hạn mức trả sau",
        "Không chuyển hạn mức thành số dư ví rồi rút (trừ khi ví có tính năng riêng, rất hiếm và phải đọc điều khoản)",
        "Không dùng hạn mức này trả nợ thẻ hay khoản vay khác",
      ],
    },
    { kind: "h2", text: "Đừng nhầm với rút số dư ví" },
    {
      kind: "p",
      text: "Nếu bạn nạp sẵn tiền hoặc nhận chuyển khoản vào ví, đó là số dư — quy tắc rút khác hoàn toàn. Kiểm tra trong app bạn đang chọn nguồn “Số dư” hay “Ví trả sau / PayLater” trước khi kết luận là bị kẹt tiền.",
    },
    { kind: "h2", text: "Hỗ trợ bên ngoài khác gì nút rút chính thức?" },
    {
      kind: "p",
      text: "Một số đơn vị nhận hỗ trợ chuyển đổi hạn mức thành số tiền nhận về, có phí. Đây không phải chức năng của MoMo, ZaloPay hay Kredivo. Phí trên web (ví dụ MoMo khoảng 4,5% – 8%) chỉ là tham khảo; mức chốt khi liên hệ.",
    },
    {
      kind: "ol",
      items: [
        "Xác nhận đúng nguồn đang dùng là ví trả sau, không phải số dư",
        "Tính thử khoảng phí trên công cụ nếu bạn đang cân nhắc hỗ trợ",
        "Không chia sẻ mật khẩu, mã OTP; hỏi địa chỉ hoặc cách nhận tiền trước",
      ],
    },
    {
      kind: "p",
      text: "Chuyển khoản từ hạn mức cũng thường bị chặn — xem bài ví trả sau có chuyển khoản được không. Riêng MoMo có bài đi sâu hơn.",
    },
  ],
};
