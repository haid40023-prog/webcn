import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getBlogCategoryLabel } from "@/data/blog";
import {
  formatBlogDate,
  getAllPostSlugs,
  getCalculatorHref,
  getPostBySlug,
  getPostKeywords,
  getPostUpdatedISO,
  getRelatedPosts,
} from "@/lib/blog";
import { buildBlogPostJsonLd } from "@/lib/blogJsonLd";
import { site } from "@/data/site";
import { getSiteUrl } from "@/lib/siteUrl";
import { CallToActionStrip } from "@/components/CTA/CallToActionStrip";
import { BlogArticleBlocks } from "@/components/blog/BlogArticleBlocks";
import { BlogFaq } from "@/components/blog/BlogFaq";
import { BlogTagList } from "@/components/blog/BlogTagList";
import { RelatedPosts } from "@/components/blog/RelatedPosts";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: `Bài viết - ${site.name}` };

  const base = getSiteUrl();
  const canonical = `${base}/blog/${post.slug}`;
  const published = `${post.dateISO}T00:00:00+07:00`;
  const modified = `${getPostUpdatedISO(post)}T00:00:00+07:00`;

  return {
    title: post.title,
    description: post.description,
    keywords: getPostKeywords(post),
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "vi_VN",
      url: canonical,
      siteName: site.name,
      title: post.title,
      description: post.description,
      publishedTime: published,
      modifiedTime: modified,
      section: getBlogCategoryLabel(post.category),
      tags: post.tags,
      images: [{ url: "/logo-hai-duy.png", width: 512, height: 512, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const relatedPosts = getRelatedPosts(post.slug);
  const calculatorHref = getCalculatorHref(post);
  const jsonLd = buildBlogPostJsonLd(post, getSiteUrl());

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav className="mb-5 text-sm text-zinc-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-emerald-700 hover:underline">
                Trang chủ
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/blog" className="hover:text-emerald-700 hover:underline">
                Blog
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="max-w-[220px] truncate text-zinc-700 sm:max-w-none">{post.title}</li>
          </ol>
        </nav>

        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-emerald-700">
            {getBlogCategoryLabel(post.category)}
          </span>
          <time className="text-zinc-500" dateTime={post.dateISO}>
            {formatBlogDate(post.dateISO)}
          </time>
        </div>

        <h1 className="mt-3 text-2xl font-bold md:text-3xl">{post.title}</h1>
        <p className="mt-4 text-sm text-zinc-700">{post.description}</p>
        {post.tags && post.tags.length > 0 ? (
          <div className="mt-4">
            <BlogTagList tags={post.tags} />
          </div>
        ) : null}

        <div className="mt-6 rounded-3xl border bg-emerald-50 p-5">
          <h2 className="text-lg font-bold">Muốn xem khoảng phí theo số tiền của bạn?</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Dùng công cụ tính phí tham khảo, sau đó nhắn Zalo để nhận báo mức chính xác theo thời điểm.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={calculatorHref}
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

        <article className="mt-6">
          <BlogArticleBlocks blocks={post.blocks} />
        </article>

        <BlogFaq faqs={post.faqs ?? []} />
        <RelatedPosts posts={relatedPosts} />

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
