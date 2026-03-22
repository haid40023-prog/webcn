import Link from "next/link";
import { CallToActionStrip } from "@/components/CTA/CallToActionStrip";
import { site } from "@/data/site";

export const metadata = {
  title: `Hỗ trợ thẻ tín dụng - Mức phí hợp lý, công khai, rõ ràng (${site.name})`,
  description:
    "Dịch vụ hỗ trợ thẻ tín dụng với mức phí hợp lý, công khai, rõ ràng. Liên hệ nhanh qua Zalo/điện thoại.",
};

export default function HoTroTheTinDungPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl border bg-emerald-50 p-6 md:p-8">
          <h1 className="text-2xl font-bold md:text-3xl">Dịch vụ hỗ trợ thẻ tín dụng</h1>
          <p className="mt-3 max-w-2xl text-sm text-zinc-700">
            Công cụ tính phí tham khảo giúp bạn ước lượng nhanh phí dự kiến và số tiền nhận được.
            Phí hiển thị là tham khảo; vui lòng liên hệ để được báo mức chính xác theo thời điểm.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/cong-cu/tinh-phi-tham-khao?type=the-tin-dung"
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
            <div className="text-sm font-semibold text-emerald-700">Ước lượng theo khoảng</div>
            <div className="mt-2 text-sm text-zinc-600">
              Hiển thị minh bạch mức phí và số tiền nhận được theo mức tham khảo.
            </div>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-emerald-700">Chọn ngân hàng nhanh</div>
            <div className="mt-2 text-sm text-zinc-600">
              Lọc theo trạng thái hiển thị để bạn thao tác ít, hiệu quả hơn.
            </div>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-emerald-700">Báo giá theo thời điểm</div>
            <div className="mt-2 text-sm text-zinc-600">
              Mọi thông tin phí/điều kiện sẽ được xác nhận khi liên hệ.
            </div>
          </div>
        </div>
      </section>

      <CallToActionStrip />

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-xl font-bold">Nhận báo phí chính xác</h2>
          <p className="mt-3 max-w-2xl text-sm text-zinc-600">
            Nếu bạn muốn nhận báo phí chính xác theo thời điểm, vui lòng liên hệ để được hỗ trợ nhanh.
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


