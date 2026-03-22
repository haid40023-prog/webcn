export type FeeServiceType = "vi-tra-sau" | "the-tin-dung";

export type FeeProvider = {
  type: FeeServiceType;
  name: string;
  feeMin: number; // phần trăm (%)
  feeMax: number; // phần trăm (%)
  active: boolean;
};

// Dữ liệu phí tách riêng để dễ cập nhật/chỉnh sửa sau này.
export const feeProviders: FeeProvider[] = [
  {
    type: "vi-tra-sau",
    name: "MoMo",
    feeMin: 4.5,
    feeMax: 8,
    active: true,
  },
  {
    type: "vi-tra-sau",
    name: "Tnex",
    feeMin: 4,
    feeMax: 6,
    active: true,
  },
  {
    type: "vi-tra-sau",
    name: "Kredivo",
    feeMin: 4,
    feeMax: 6,
    active: true,
  },
  {
    type: "vi-tra-sau",
    name: "VNPay",
    feeMin: 4,
    feeMax: 7,
    active: true,
  },
  {
    type: "vi-tra-sau",
    name: "ZaloPay",
    feeMin: 5,
    feeMax: 9,
    active: true,
  },
  {
    type: "vi-tra-sau",
    name: "Cake",
    feeMin: 5,
    feeMax: 7,
    active: true,
  },
  {
    type: "vi-tra-sau",
    name: "Muadee",
    feeMin: 4,
    feeMax: 6,
    active: true,
  },
  {
    type: "vi-tra-sau",
    name: "Viettel Money",
    feeMin: 5,
    feeMax: 7,
    active: true,
  },
  {
    type: "vi-tra-sau",
    name: "Fe Credit Paylater",
    feeMin: 5,
    feeMax: 8,
    active: true,
  },
  {
    type: "vi-tra-sau",
    name: "ShopeePay Later",
    feeMin: 5,
    feeMax: 15,
    active: true,
  },
  {
    type: "vi-tra-sau",
    name: "Tiktok Pay Later",
    feeMin: 10,
    feeMax: 20,
    active: true,
  },
  {
    type: "vi-tra-sau",
    name: "Home Paylater",
    feeMin: 3,
    feeMax: 7,
    active: true,
  },
  {
    type: "vi-tra-sau",
    name: "Các ví trả sau kháckhác",
    feeMin: 3,
    feeMax: 8,
    active: true,
  },
  {
    type: "vi-tra-sau",
    name: "ZaloPay",
    feeMin: 0,
    feeMax: 0,
    active: false, // tạm ẩn cho tới khi bạn bổ sung mức phí chính xác
  },
  {
    type: "the-tin-dung",
    name: "TPBank",
    feeMin: 2,
    feeMax: 4,
    active: true,
  },
  {
    type: "the-tin-dung",
    name: "Liobank",
    feeMin: 2,
    feeMax: 3.5,
    active: true,
  },
  {
    type: "the-tin-dung",
    name: "BIDV",
    feeMin: 2,
    feeMax: 4,
    active: true,
  },
  {
    type: "the-tin-dung",
    name: "HDbank",
    feeMin: 2,
    feeMax: 3.5,
    active: true,
  },
  {
    type: "the-tin-dung",
    name: "HDSaiGon",
    feeMin: 3,
    feeMax: 5,
    active: true,
  },
  {
    type: "the-tin-dung",
    name: "Cake",
    feeMin: 2,
    feeMax: 4,
    active: true,
  },
  {
    type: "the-tin-dung",
    name: "Các loại thẻ tín dụng khác",
    feeMin: 1.5,
    feeMax: 4,
    active: true,
  },
];

