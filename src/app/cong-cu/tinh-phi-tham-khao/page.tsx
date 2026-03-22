import { FeeCalculator } from "@/components/FeeTool/FeeCalculator";
import { CallToActionStrip } from "@/components/CTA/CallToActionStrip";
import { site } from "@/data/site";
import type { FeeServiceType } from "@/data/feeProviders";

export const metadata = {
  title: `Bảng phí tham khảo - ${site.name}`,
  description:
    "Công cụ tính phí tham khảo cho ví trả sau và thẻ tín dụng. Nhập số tiền để xem mức phí dự kiến và số tiền nhận được một cách rõ ràng.",
};

function parseInitialType(typeParam: string | undefined): FeeServiceType | undefined {
  if (!typeParam) return undefined;
  if (typeParam === "vi-tra-sau" || typeParam === "the-tin-dung") return typeParam;
  return undefined;
}

export default async function TinhPhiThamKhaoPage({
  searchParams,
}: {
  searchParams?: Promise<{ type?: string }>;
}) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const initialType = parseInitialType(resolvedSearchParams.type);

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="mb-6">
          <div className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-semibold text-emerald-700">
            Công cụ tính phí tham khảo
          </div>
          <h1 className="mt-4 text-2xl font-bold md:text-3xl">Bảng phí tham khảo / Công cụ tính phí</h1>
          <p className="mt-3 max-w-2xl text-sm text-zinc-600">
            Chọn loại dịch vụ, chọn đơn vị tương ứng, nhập số tiền và nhấn tính để xem mức phí tham khảo rõ ràng.
          </p>
        </div>

        <div className="mb-6 rounded-3xl border bg-emerald-50 p-5">
          <h2 className="text-lg font-bold">Muốn báo giá chính xác theo thời điểm?</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Phí hiển thị là mức tham khảo. Bạn có thể nhắn Zalo hoặc gọi điện để được báo mức chính xác phù hợp nhu cầu.
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

        <FeeCalculator initialType={initialType} />
      </section>

      <CallToActionStrip />

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-3xl border bg-emerald-50 p-6 md:p-8">
          <h2 className="text-xl font-bold">Lưu ý</h2>
          <p className="mt-3 max-w-3xl text-sm text-zinc-700">
            Phí hiển thị là mức tham khảo. Vui lòng liên hệ để được báo mức chính xác theo thời điểm.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={site.zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Liên hệ qua Zalo
            </a>
            <a
              href={`tel:${site.phone}`}
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-900 ring-1 ring-black/10 transition hover:bg-black/[0.03]"
            >
              Gọi điện {site.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


