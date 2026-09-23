import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { getSiteUrl } from "@/lib/siteUrl";
import { getLatestPosts } from "@/lib/blog";
import { CallToActionStrip } from "@/components/CTA/CallToActionStrip";
import { BlogPostCard } from "@/components/blog/BlogPostCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Bài viết về rút ví trả sau, thẻ tín dụng và cách tính phí tham khảo. Cập nhật thường xuyên để bạn nắm thông tin rõ ràng.",
  openGraph: {
    title: `Blog | ${site.name}`,
    description:
      "Bài viết về rút ví trả sau, thẻ tín dụng và cách tính phí tham khảo tại Hà Nội và online toàn quốc.",
    url: `${getSiteUrl()}/blog`,
    type: "website",
  },
};

export default function BlogListPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="mb-6">
          <div className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-semibold text-emerald-700">
            Blog / bài viết
          </div>
          <h1 className="mt-4 text-2xl font-bold md:text-3xl">Bài viết hỗ trợ thông tin dịch vụ</h1>
          <p className="mt-3 max-w-2xl text-sm text-zinc-600">
            Cập nhật kiến thức về ví trả sau, mức phí tham khảo và lưu ý khi cần hỗ trợ — nội dung được viết rõ ràng để bạn tra cứu nhanh.
          </p>
        </div>

        <div className="mb-6 rounded-3xl border bg-emerald-50 p-5">
          <h2 className="text-lg font-bold">Cần báo phí nhanh?</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Nếu bạn đã đọc bài, bạn có thể dùng công cụ để ước lượng và nhắn Zalo để mình đối chiếu theo thời điểm.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/cong-cu/tinh-phi-tham-khao"
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
              Nhắn Zalo
            </a>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {getLatestPosts().map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-6 rounded-3xl border bg-white p-6">
          <h2 className="text-lg font-bold">Xem thêm để tối ưu lựa chọn</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Đăng thường xuyên giúp bạn hiểu rõ cách tính phí tham khảo và chọn đơn vị phù hợp hơn.
          </p>
        </div>
      </section>

      <CallToActionStrip />
    </div>
  );
}


