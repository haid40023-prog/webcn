import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { site } from "@/data/site";
import { CallToActionStrip } from "@/components/CTA/CallToActionStrip";

function formatDate(iso: string) {
  const d = new Date(iso);
  // Tránh phụ thuộc locale máy chủ; chỉ hiển thị kiểu Việt Nam đơn giản.
  return d.toLocaleDateString("vi-VN", { year: "numeric", month: "2-digit", day: "2-digit" });
}

export const metadata = {
  title: `Blog - ${site.name}`,
  description:
    "Khu vực bài viết hỗ trợ SEO và giải thích cách tính phí tham khảo cho ví trả sau & thẻ tín dụng. Đăng bài thường xuyên để tối ưu tìm kiếm.",
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
          {blogPosts
            .slice()
            .sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1))
            .map((post) => (
              <article
                key={post.slug}
                className="group rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="text-xs font-semibold text-emerald-700">
                  {formatDate(post.dateISO)}
                </div>
                <h2 className="mt-2 text-lg font-bold leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-zinc-600">{post.description}</p>
                <div className="mt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-emerald-700 hover:underline"
                  >
                    Xem chi tiết →
                  </Link>
                </div>
              </article>
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


