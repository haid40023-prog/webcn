import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold leading-5">
          <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-zinc-300 bg-white p-0.5 shadow-sm">
            <Image
              src="/logo-hai-duy.png"
              alt="Logo Hải Duy"
              width={40}
              height={40}
              className="h-full w-full scale-110 object-contain"
            />
          </span>
          <span className="hidden lg:inline">{site.name}</span>
          <span className="lg:hidden">Hải Duy</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/dich-vu/rut-vi-tra-sau" className="text-sm hover:text-emerald-700">
            Dịch vụ rút ví trả sau
          </Link>
          <Link href="/dich-vu/ho-tro-the-tin-dung" className="text-sm hover:text-emerald-700">
            Dịch vụ thẻ tín dụng
          </Link>
          <Link href="/cong-cu/tinh-phi-tham-khao" className="text-sm hover:text-emerald-700">
            Tính phí tham khảo
          </Link>
          <Link href="/blog" className="text-sm hover:text-emerald-700">
            Blog
          </Link>
          <Link href="/lien-he" className="text-sm hover:text-emerald-700">
            Liên hệ
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.zaloLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Zalo
          </a>
          <a
            href={`tel:${site.phone}`}
            className="rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-black/[0.03]"
          >
            Gọi {site.phone}
          </a>
        </div>

        <details className="md:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-black/10 px-3 py-2 text-sm font-semibold">
            Menu
          </summary>
          <div className="absolute right-4 mt-2 w-[min(320px,90vw)] overflow-hidden rounded-2xl border bg-white shadow-lg">
            <div className="flex flex-col p-3">
              <Link href="/dich-vu/rut-vi-tra-sau" className="py-2 text-sm hover:text-emerald-700">
                Dịch vụ rút ví trả sau
              </Link>
              <Link
                href="/dich-vu/ho-tro-the-tin-dung"
                className="py-2 text-sm hover:text-emerald-700"
              >
                Dịch vụ thẻ tín dụng
              </Link>
              <Link href="/cong-cu/tinh-phi-tham-khao" className="py-2 text-sm hover:text-emerald-700">
                Tính phí tham khảo
              </Link>
              <Link href="/blog" className="py-2 text-sm hover:text-emerald-700">
                Blog
              </Link>
              <Link href="/lien-he" className="py-2 text-sm hover:text-emerald-700">
                Liên hệ
              </Link>

              <div className="mt-3 flex gap-3">
                <a
                  href={site.zaloLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-full bg-emerald-600 px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Zalo
                </a>
                <a
                  href={`tel:${site.phone}`}
                  className="flex-1 rounded-full border border-black/10 px-3 py-2 text-center text-sm font-semibold text-zinc-900 transition hover:bg-black/[0.03]"
                >
                  Gọi
                </a>
              </div>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}


