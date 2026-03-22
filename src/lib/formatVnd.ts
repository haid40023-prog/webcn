export function formatVnd(amount: number): string {
  const safe = Number.isFinite(amount) ? amount : 0;
  const rounded = Math.round(safe);
  return `${rounded.toLocaleString("vi-VN")} đ`;
}

