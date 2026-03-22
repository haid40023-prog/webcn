import Link from "next/link";
import { site } from "@/data/site";
import { CallToActionStrip } from "@/components/CTA/CallToActionStrip";

export const metadata = {
  title: `Liên hệ - ${site.name}`,
  description:
    "Liên hệ nhanh qua Zalo/điện thoại để nhận báo phí chính xác theo thời điểm. Tư vấn rõ ràng, hỗ trợ chọn đơn vị phù hợp.",
};

export default function LienHePage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="rounded-3xl border bg-emerald-50 p-6 md:p-8">
          <h1 className="text-2xl font-bold md:text-3xl">Liên hệ ngay để nhận báo phí chính xác</h1>
          <p className="mt-3 max-w-2xl text-sm text-zinc-700">
            Phí hiển thị là mức tham khảo. Để được báo mức chính xác theo thời điểm và phù hợp nhu cầu của bạn,
            hãy liên hệ qua Zalo hoặc gọi điện.
          </p>
          <div className="mt-3 text-sm text-zinc-700">
            <div className="font-semibold">{site.supportScope}</div>
            <div className="mt-1 text-zinc-600">
              {site.branches.map((branch) => (
                <div key={branch}>{branch}</div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-emerald-700">Zalo</div>
              <div className="mt-2 text-sm text-zinc-600">
                Nhắn tin để được tư vấn nhanh và báo giá theo thời điểm.
              </div>
              <a
                href={site.zaloLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Chat Zalo
              </a>
              <div className="mt-3 text-xs text-zinc-500">
                Link nhóm làm việc:{" "}
                <a className="text-emerald-700 hover:underline" href={site.zaloGroupLink} target="_blank" rel="noopener noreferrer">
                  {site.zaloGroupLink}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-emerald-700">Điện thoại</div>
              <div className="mt-2 text-sm text-zinc-600">
                Gọi ngay để được hỗ trợ khi cần gấp.
              </div>
              <a
                href={`tel:${site.phone}`}
                className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-900 ring-1 ring-black/10 transition hover:bg-black/[0.03]"
              >
                Gọi {site.phone}
              </a>
              <div className="mt-3 text-xs text-zinc-500">
                Nếu bạn đã xem khoảng phí ở công cụ, hãy gửi số tiền để mình đối chiếu nhanh.
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border bg-emerald-50 p-5">
            <h2 className="text-lg font-bold">Nhận báo phí nhanh</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Nhắn Zalo hoặc gọi điện để được báo mức chính xác theo thời điểm và nhu cầu của bạn.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={site.zaloLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Nhắn Zalo
              </a>
              <a
                href={`tel:${site.phone}`}
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-900 ring-1 ring-black/10 transition hover:bg-black/[0.03]"
              >
                Gọi {site.phone}
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/cong-cu/tinh-phi-tham-khao"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-900 ring-1 ring-black/10 transition hover:bg-black/[0.03]"
            >
              Tính phí tham khảo
            </Link>
            <Link
              href="/blog"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200 transition hover:bg-emerald-50"
            >
              Xem bài viết hỗ trợ SEO
            </Link>
          </div>
        </div>
      </section>

      <CallToActionStrip />
    </div>
  );
}


