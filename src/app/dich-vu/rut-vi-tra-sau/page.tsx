import Link from "next/link";
import { CallToActionStrip } from "@/components/CTA/CallToActionStrip";
import { site } from "@/data/site";

export const metadata = {
  title: `Rút ví trả sau - Mức phí hợp lý, công khai, rõ ràng (${site.name})`,
  description:
    "Dịch vụ hỗ trợ rút ví trả sau với mức phí hợp lý, công khai, rõ ràng. Liên hệ nhanh qua Zalo/điện thoại.",
};

export default function RutViTraSauPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl border bg-emerald-50 p-6 md:p-8">
          <h1 className="text-2xl font-bold md:text-3xl">Dịch vụ rút ví trả sau</h1>
          <p className="mt-3 max-w-2xl text-sm text-zinc-700">
            Nhập số tiền để xem mức phí dự kiến và số tiền nhận được theo từng đơn vị.
            Phí hiển thị là tham khảo, vui lòng liên hệ để được báo mức chính xác theo thời điểm.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/cong-cu/tinh-phi-tham-khao?type=vi-tra-sau"
              className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Tính phí tham khảo
            </Link>
            <a
              href={site.zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-zinc-900 transition hover:bg-black/[0.03]"
            >
              Liên hệ qua Zalo
            </a>
            <a
              href={`tel:${site.phone}`}
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-900 ring-1 ring-black/10 transition hover:bg-black/[0.03]"
            >
              Gọi {site.phone}
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-emerald-700">Mức phí hợp lý</div>
            <div className="mt-2 text-sm text-zinc-600">
              Hiển thị rõ mức phí tham khảo và số tiền nhận được để bạn dễ ước lượng.
            </div>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-emerald-700">Chọn đơn vị nhanh</div>
            <div className="mt-2 text-sm text-zinc-600">
              Công cụ tự lọc đơn vị theo loại dịch vụ và trạng thái hiển thị.
            </div>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-emerald-700">Báo giá theo thời điểm</div>
            <div className="mt-2 text-sm text-zinc-600">
              Mức phí hiển thị là tham khảo, luôn có xác nhận chính xác khi liên hệ.
            </div>
          </div>
        </div>
      </section>

      <CallToActionStrip />

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-xl font-bold">Cần hỗ trợ nhanh?</h2>
          <p className="mt-3 max-w-2xl text-sm text-zinc-600">
            Nếu bạn cần báo phí nhanh theo nhu cầu thực tế, vui lòng nhắn Zalo hoặc gọi điện để được hỗ trợ.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={site.zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Nhắn Zalo
            </a>
            <a
              href="/lien-he"
              className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-zinc-900 transition hover:bg-black/[0.03]"
            >
              Liên hệ ngay
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


