import type { BlogPost } from "../types";

export const viTraSauCoTheSuDungODau: BlogPost = {
  slug: "vi-tra-sau-co-the-su-dung-o-dau",
  title: "Ví trả sau có thể sử dụng ở đâu?",
  description:
    "Ví trả sau dùng được tại điểm thanh toán nhà cung cấp cho phép: hóa đơn trong app, QR đối tác, đơn hàng sàn. Không dùng mọi nơi như tiền mặt.",
  dateISO: "2026-09-08",
  category: "huong-dan",
  tags: ["ví trả sau dùng ở đâu", "thanh toán", "QR"],
  relatedSlugs: [
    "vi-tra-sau-la-gi",
    "vi-tra-sau-co-chuyen-khoan-duoc-khong",
    "cac-vi-tra-sau-moi-nhat",
  ],
  faqs: [
    {
      question: "Quét QR mọi cửa hàng có Ví MoMo / ZaloPay là dùng trả sau được chứ?",
      answer:
        "Không chắc. Cửa hàng nhận ví chưa chắc nhận nguồn trả sau. App sẽ báo nếu điểm đó không hỗ trợ. Thử chọn nguồn “Trả sau” trước khi xác nhận.",
    },
    {
      question: "Đóng tiền điện, nước, internet được không?",
      answer:
        "Nhiều ví cho trả hóa đơn bằng nguồn trả sau ngay trong app. Vẫn tùy nhà cung cấp hóa đơn và chính sách ví lúc đó — xem danh sách dịch vụ trong mục Thanh toán.",
    },
    {
      question: "Mua trên Shopee, TikTok có lấy hạn mức trả sau không?",
      answer:
        "Nếu bạn dùng ShopeePay Later hoặc TikTok Pay Later và đơn cho phép, lúc thanh toán sẽ có lựa chọn đó. Đơn không hỗ trợ hoặc hết hạn mức thì phải đổi nguồn khác.",
    },
    {
      question: "Dùng ở nước ngoài được không?",
      answer:
        "Hầu hết hạn mức trả sau gắn thanh toán trong nước và hệ sinh thái ví Việt Nam. Không coi như thẻ tín dụng quốc tế.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Ví trả sau không dùng được mọi nơi như tiền mặt hay thẻ. Nơi chấp nhận là các điểm nhà cung cấp mở trong app: hóa đơn, QR đối tác, đơn hàng sàn. Ngoài danh sách đó, giao dịch sẽ bị từ chối dù vẫn còn hạn mức.",
    },
    { kind: "h2", text: "Các nhóm nơi thường dùng được" },
    {
      kind: "ul",
      items: [
        "Thanh toán trong app: điện, nước, internet, nạp điện thoại, vé, bảo hiểm ví cho phép",
        "Cửa hàng / QR thuộc mạng chấp nhận nguồn trả sau của đúng ví đó",
        "Sàn gắn ví: ShopeePay Later trên Shopee, TikTok Pay Later trên TikTok Shop…",
        "Một số thanh toán online hiện logo ví và cho chọn PayLater",
      ],
    },
    { kind: "h2", text: "Nơi thường không dùng được" },
    {
      kind: "ul",
      items: [
        "Chuyển khoản cho người khác hoặc về ngân hàng của mình",
        "Rút tiền mặt ATM",
        "Trả dư nợ thẻ tín dụng, trả khoản vay khác",
        "Điểm chỉ nhận tiền mặt hoặc chỉ nhận thẻ ngân hàng",
      ],
    },
    { kind: "h2", text: "Cách kiểm tra trước khi mua" },
    {
      kind: "ol",
      items: [
        "Tại màn hình thanh toán, xem có nguồn “Ví trả sau / PayLater” không.",
        "Nếu không thấy: điểm đó không hỗ trợ, hoặc tính năng đang bị tắt / khóa.",
        "Còn hạn mức mà vẫn lỗi: xem bài vì sao không sử dụng được.",
      ],
    },
    {
      kind: "table",
      caption: "Ví dụ theo loại ví (mang tính minh họa)",
      headers: ["Loại ví", "Nơi hay dùng"],
      rows: [
        ["MoMo, ZaloPay, Viettel Money", "Hóa đơn và QR trong hệ sinh thái ví"],
        ["ShopeePay Later, TikTok Pay Later", "Đơn trên đúng sàn đó"],
        ["Kredivo, Muadee, Home PayLater", "Điểm / đối tác ghi nhận nguồn đó"],
      ],
    },
    {
      kind: "p",
      text: "Danh sách ví đang được nhắc trên site nằm ở bài các ví trả sau phổ biến. Khái niệm sản phẩm: bài ví trả sau là gì. Chuyển khoản không thuộc nhóm “dùng được” — xem bài có chuyển khoản được không.",
    },
  ],
};
