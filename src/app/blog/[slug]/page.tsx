import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPostBySlug } from "@/data/blogPosts";
import { site } from "@/data/site";
import { CallToActionStrip } from "@/components/CTA/CallToActionStrip";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: `Bài viết - ${site.name}` };

  return {
    title: `${post.title} - ${site.name}`,
    description: post.description,
  };
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("vi-VN", { year: "numeric", month: "2-digit", day: "2-digit" });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <div className="mb-5">
          <Link href="/blog" className="text-sm font-semibold text-emerald-700 hover:underline">
            ← Quay lại Blog
          </Link>
        </div>

        <h1 className="text-2xl font-bold md:text-3xl">{post.title}</h1>
        <div className="mt-2 text-sm text-zinc-500">{formatDate(post.dateISO)}</div>
        <p className="mt-4 text-sm text-zinc-700">{post.description}</p>

        <div className="mt-6 rounded-3xl border bg-emerald-50 p-5">
          <h2 className="text-lg font-bold">Muốn xem khoảng phí theo số tiền của bạn?</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Dùng công cụ tính phí tham khảo, sau đó nhắn Zalo để nhận báo mức chính xác theo thời điểm.
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

        <article className="mt-6 space-y-5 leading-relaxed text-sm text-zinc-800">
          {post.blocks.map((b, idx) => {
            if (b.kind === "h2") {
              return (
                <h2 key={idx} className="mt-6 text-xl font-bold text-zinc-900">
                  {b.text}
                </h2>
              );
            }
            if (b.kind === "ul") {
              return (
                <ul key={idx} className="list-inside list-disc space-y-2">
                  {b.items.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={idx}>
                {b.text}
              </p>
            );
          })}
        </article>

        <div className="mt-8 rounded-3xl border bg-white p-6">
          <h2 className="text-lg font-bold">Bạn cần tư vấn thêm?</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Phí hiển thị là mức tham khảo. Vui lòng liên hệ để được báo mức chính xác theo thời điểm.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
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
              className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-zinc-900 transition hover:bg-black/[0.03]"
            >
              Gọi điện
            </a>
          </div>
        </div>
      </section>

      <CallToActionStrip />
    </div>
  );
}

