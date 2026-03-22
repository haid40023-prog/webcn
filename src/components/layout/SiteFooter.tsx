import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";

const navLinks = [
  { href: "/dich-vu/rut-vi-tra-sau", label: "Rút ví trả sau" },
  { href: "/dich-vu/ho-tro-the-tin-dung", label: "Thẻ tín dụng" },
  { href: "/cong-cu/tinh-phi-tham-khao", label: "Tính phí tham khảo" },
  { href: "/blog", label: "Blog" },
  { href: "/lien-he", label: "Liên hệ" },
] as const;

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z"
      />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-emerald-800/25 bg-zinc-800 text-zinc-400">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 pb-10 pt-12 md:pb-12 md:pt-14">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex max-w-full items-start gap-3 rounded-lg outline-offset-4 transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500/80"
            >
              <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-zinc-900/80 p-0.5 shadow-inner">
                <Image
                  src="/logo-hai-duy.png"
                  alt=""
                  width={44}
                  height={44}
                  className="h-full w-full scale-110 object-contain"
                />
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-base font-semibold leading-snug text-zinc-100">{site.name}</span>
                <span className="mt-1.5 block text-sm leading-relaxed text-zinc-400">{site.supportScope}</span>
              </span>
            </Link>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={site.zaloLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-emerald-900/30 transition hover:bg-emerald-500"
              >
                Chat Zalo
              </a>
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-white/25 hover:bg-white/10"
              >
                {site.phone}
              </a>
              <a
                href={site.zaloGroupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-emerald-500/40 hover:text-emerald-300"
              >
                Nhóm check uy tín
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Danh mục</h2>
            <nav className="mt-4 flex flex-col gap-1" aria-label="Liên kết chân trang">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="group inline-flex rounded-md py-1.5 text-sm text-zinc-300 transition hover:text-emerald-400"
                >
                  <span className="border-b border-transparent pb-px transition group-hover:border-emerald-400/60">
                    {label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Locations + notice */}
          <div className="space-y-8 lg:col-span-4">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Cơ sở</h2>
              <ul className="mt-4 space-y-3">
                {site.branches.map((branch) => (
                  <li key={branch} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                    <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500/80" />
                    <span>{branch}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-zinc-900/40 p-4 backdrop-blur-sm">
              <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Lưu ý</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Phí hiển thị là mức tham khảo. Vui lòng liên hệ để được báo mức chính xác theo thời điểm.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-500">
            © {year} {site.name}
          </p>
          <p className="text-xs text-zinc-500">{site.address}</p>
        </div>
      </div>
    </footer>
  );
}
