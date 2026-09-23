import type { BlogPost } from "../types";

export const cacViTraSauMoiNhat: BlogPost = {
  slug: "cac-vi-tra-sau-moi-nhat",
  title: "Các ví trả sau phổ biến hiện nay và khoảng phí tham khảo",
  description:
    "Danh sách ví trả sau đang được hỗ trợ: MoMo, Kredivo, ZaloPay, TNEX, ShopeePay Later, TikTok Pay Later… kèm khoảng phí tham khảo để đối chiếu.",
  dateISO: "2026-09-19",
  category: "vi-tra-sau",
  tags: ["ví trả sau", "danh sách ví", "phí tham khảo"],
  keywords: [
    "các ví trả sau mới nhất",
    "danh sách ví trả sau",
    "phí rút ví trả sau",
    "MoMo Kredivo ZaloPay ShopeePay Later",
    "bảng phí ví trả sau",
  ],
  calculatorType: "vi-tra-sau",
  relatedSlugs: [
    "momo-vi-tra-sau-la-gi",
    "kredivo-la-gi",
    "zalopay-tra-sau-la-gi",
  ],
  faqs: [
    {
      question: "Hiện đang hỗ trợ những ví trả sau nào?",
      answer:
        "MoMo, TNEX, Kredivo, VNPay, ZaloPay, Cake, Muadee, Viettel Money, FE Credit Paylater, ShopeePay Later, TikTok Pay Later, Home PayLater và một số ví khác. Danh sách trên công cụ tính phí là nguồn cập nhật.",
    },
    {
      question: "Ví nào phí tham khảo thấp hơn?",
      answer:
        "Home PayLater khoảng 3% – 7%. Kredivo, TNEX, Muadee khoảng 4% – 6%. MoMo khoảng 4,5% – 8%. TikTok Pay Later thường cao hơn, khoảng 10% – 20%. Đây là khoảng tham khảo, không phải giá chốt.",
    },
    {
      question: "ShopeePay Later và TikTok Pay Later khác gì các ví kia?",
      answer:
        "Khoảng phí rộng hơn hoặc cao hơn. ShopeePay Later 5% – 15%, TikTok Pay Later 10% – 20%. Nên tính thử trên công cụ rồi hỏi lại lúc liên hệ.",
    },
    {
      question: "Không thấy ví của mình trong bảng thì sao?",
      answer:
        "Chọn mục các ví khác trên công cụ (khoảng 3% – 8%) hoặc nhắn Zalo tên ví và số tiền. Một số ví chỉ hỗ trợ được tùy thời điểm.",
    },
  ],
  blocks: [
    {
      kind: "p",
      text: "Người tìm “các ví trả sau mới nhất” thường muốn biết ví nào đang có hạn mức phổ biến và phí hỗ trợ chênh nhau ra sao. Dưới đây là các ví đang mở trên công cụ của Hệ Thống Hải Duy, kèm khoảng phí tham khảo. Tên gọi trên app có thể hơi khác (PayLater, trả sau, hạn mức), nhưng cách ước lượng phí là giống nhau.",
    },
    { kind: "h2", text: "Bảng ví và khoảng phí tham khảo" },
    {
      kind: "table",
      caption: "Ví trả sau đang hỗ trợ — phí có thể đổi theo thời điểm",
      headers: ["Ví / hạn mức", "Phí thấp", "Phí cao"],
      rows: [
        ["MoMo", "4,5%", "8%"],
        ["TNEX", "4%", "6%"],
        ["Kredivo", "4%", "6%"],
        ["VNPay", "4%", "7%"],
        ["ZaloPay", "5%", "9%"],
        ["Cake", "5%", "7%"],
        ["Muadee", "4%", "6%"],
        ["Viettel Money", "5%", "7%"],
        ["FE Credit Paylater", "5%", "8%"],
        ["ShopeePay Later", "5%", "15%"],
        ["TikTok Pay Later", "10%", "20%"],
        ["Home PayLater", "3%", "7%"],
        ["Các ví trả sau khác", "3%", "8%"],
      ],
    },
    {
      kind: "p",
      text: "Muốn ra số tiền nhận về, nhập số tiền trên công cụ tính phí. Công thức: phí thấp = số tiền × % thấp; phí cao = số tiền × % cao; tiền nhận thấp = số tiền − phí cao.",
    },
    { kind: "h2", text: "Nhóm ví hay được hỏi" },
    {
      kind: "ul",
      items: [
        "MoMo: nhiều người dùng, khoảng 4,5% – 8%. Trong app không rút thẳng về ngân hàng.",
        "Kredivo, TNEX, Muadee: khoảng 4% – 6%, thường được so với MoMo khi cần chọn ví rẻ hơn.",
        "ZaloPay, Cake, Viettel Money, VNPay: phổ biến, phí khoảng 4% – 9% tùy ví.",
        "ShopeePay Later, TikTok Pay Later: khoảng rộng hoặc cao hơn — nên tính trước cho khỏi bất ngờ.",
      ],
    },
    { kind: "h2", text: "Cách chọn ví khi bạn đang có nhiều hạn mức" },
    {
      kind: "ol",
      items: [
        "Ưu tiên ví có hạn mức đủ số bạn cần, đừng cộng nhiều ví nếu chưa hỏi trước",
        "Xem khoảng phí trên bảng, tính thử cùng một số tiền để so tiền nhận về",
        "Hỏi Zalo ví nào làm được ngay tại thời điểm bạn cần",
        "Nếu ở Hà Nội, nói rõ muốn đến Minh Khai, Giáp Nhất hay làm online",
      ],
    },
    {
      kind: "p",
      text: "Danh sách sẽ được chỉnh khi có ví mới hoặc đổi phí. Lấy bảng trên công cụ và tin nhắn xác nhận làm chuẩn, không lưu ảnh bảng cũ. Liên hệ Zalo 0964857947 khi bạn đã chọn được ví.",
    },
  ],
};
