import type { BlogPost } from "../types";

export const viTraSauCoChuyenKhoanDuocKhong: BlogPost = {
  slug: "vi-tra-sau-co-chuyen-khoan-duoc-khong",
  title: "Ví trả sau có chuyển khoản được không?",
  description:
    "Hạn mức ví trả sau thường không dùng để chuyển khoản cho người khác hay về ngân hàng. Phân biệt với chuyển từ số dư ví và những việc app hay chặn.",
  dateISO: "2026-09-16",
  category: "huong-dan",
  tags: ["ví trả sau", "chuyển khoản", "PayLater"],
  relatedSlugs: [
    "vi-tra-sau-co-rut-tien-duoc-khong",
    "vi-tra-sau-co-the-su-dung-o-dau",
    "vi-tra-sau-la-gi",
  ],
  faqs: [
    {
      question: "Chuyển tiền cho bạn bè bằng ví trả sau được không?",
      answer:
        "Hầu hết ví không cho lấy nguồn trả sau để chuyển P2P. Mục chuyển tiền thường chỉ lấy từ số dư ví hoặc tài khoản ngân hàng liên kết.",
    },
    {
      question: "Chuyển hạn mức về chính tài khoản ngân hàng của mình được không?",
      answer:
        "Thường không. Về bản chất đó gần với rút tiền mặt từ hạn mức, không nằm trong tính năng chuẩn.",
    },
    {
      question: "Quét QR trả hộ có tính là chuyển khoản không?",
      answer:
        "Một số ví cho thanh toán QR bằng nguồn trả sau tại merchant được phép — đó là thanh toán, không phải chuyển khoản tự do. Merchant hoặc loại giao dịch không hỗ trợ thì sẽ bị từ chối.",
    },
    {
      question: "Bị báo không đủ điều kiện khi bấm chuyển tiền thì sao?",
      answer:
        "Kiểm tra bạn có đang chọn nguồn Ví trả sau không. Đổi sang số dư hoặc ngân hàng liên kết. Nếu chỉ có hạn mức trả sau thì không dùng được cho chuyển khoản.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Ví trả sau thường không chuyển khoản được. Chuyển cho số điện thoại khác, chuyển về ngân hàng, hay “rút” hạn mức thành tiền trong tài khoản của mình đều nằm ngoài mục đích cấp hạn mức.",
    },
    { kind: "h2", text: "App thường cho và không cho" },
    {
      kind: "table",
      caption: "Nguồn tiền và việc chuyển / thanh toán",
      headers: ["Việc muốn làm", "Số dư ví", "Ví trả sau"],
      rows: [
        ["Chuyển cho người khác", "Thường được (có thể có phí)", "Thường không"],
        ["Chuyển về ngân hàng của mình", "Thường được", "Thường không"],
        ["Thanh toán hóa đơn / QR được phép", "Được", "Được nếu ví mở mục đó"],
        ["Trả nợ thẻ / khoản vay khác", "Tùy ví", "Thường không"],
      ],
    },
    { kind: "h2", text: "Vì sao bị chặn?" },
    {
      kind: "p",
      text: "Hạn mức được cấp để chi tiêu tại điểm chấp nhận, không phải để biến thành tiền chuyển tự do. Nhà cung cấp giới hạn loại giao dịch để kiểm soát rủi ro tín dụng.",
    },
    { kind: "h2", text: "Khi nào vẫn thanh toán được?" },
    {
      kind: "p",
      text: "Nếu app cho chọn nguồn “Trả sau” lúc trả điện, nước, mua thẻ, hoặc quét QR cửa hàng đối tác, đó là thanh toán — không phải chuyển khoản. Danh sách nơi dùng được nằm ở bài ví trả sau có thể sử dụng ở đâu.",
    },
    {
      kind: "p",
      text: "Muốn biến hạn mức thành tiền mặt là câu chuyện khác: xem bài ví trả sau có rút tiền được không. Không đưa mật khẩu hay OTP cho ai hứa “chuyển hộ”.",
    },
  ],
};
