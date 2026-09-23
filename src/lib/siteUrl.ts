/**
 * URL gốc của site (không có dấu / cuối).
 * Trên Vercel: đặt biến môi trường NEXT_PUBLIC_SITE_URL = https://tenmien.com
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");

  if (process.env.VERCEL_URL) {
    const host = process.env.VERCEL_URL.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  return "https://rutvitrasauhanoi.vn";
}
