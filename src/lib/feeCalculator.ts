export type FeeRangeResult = {
  feeLow: number;
  feeHigh: number;
  receivedLow: number;
  receivedHigh: number;
  feeMinPercent: number;
  feeMaxPercent: number;
};

export function calculateFeeRange(params: {
  amountVnd: number;
  feeMinPercent: number;
  feeMaxPercent: number;
}): FeeRangeResult {
  const { amountVnd, feeMinPercent, feeMaxPercent } = params;

  const feeLow = (amountVnd * feeMinPercent) / 100;
  const feeHigh = (amountVnd * feeMaxPercent) / 100;

  const receivedLow = amountVnd - feeHigh;
  const receivedHigh = amountVnd - feeLow;

  // Làm tròn về VND để hiển thị gọn và nhất quán.
  return {
    feeLow: Math.round(feeLow),
    feeHigh: Math.round(feeHigh),
    receivedLow: Math.round(receivedLow),
    receivedHigh: Math.round(receivedHigh),
    feeMinPercent,
    feeMaxPercent,
  };
}

