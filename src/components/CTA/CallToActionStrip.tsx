import { site } from "@/data/site";

export function CallToActionStrip(props: { variant?: "default" | "dark" }) {
  const variant = props.variant ?? "default";
  const callBtnClass =
    variant === "dark"
      ? "inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-transparent px-5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
      : "inline-flex h-11 items-center justify-center rounded-full border border-emerald-300 bg-white px-5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50";

  return (
    <section className={variant === "dark" ? "bg-zinc-900 text-white" : "bg-emerald-50"}>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="text-sm font-semibold text-emerald-700 md:text-emerald-700 dark:text-white">
              {site.heroTagline}
            </div>
            <h2 className="mt-2 text-2xl font-bold leading-tight">
              Nhận báo phí nhanh theo nhu cầu của bạn
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-600 dark:text-zinc-300">
              Phí hiển thị là mức tham khảo. Vui lòng liên hệ để được báo mức chính xác theo thời điểm.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-end md:w-auto">
            <a
              href={site.zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Liên hệ qua Zalo
            </a>
            <a
              href={`tel:${site.phone}`}
              className={callBtnClass}
            >
              Gọi ngay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


