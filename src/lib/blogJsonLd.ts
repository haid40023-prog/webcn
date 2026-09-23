import { getBlogCategoryLabel } from "@/data/blog";
import type { BlogPost } from "@/data/blog";
import { getPostKeywords, getPostUpdatedISO } from "@/lib/blog";
import { site } from "@/data/site";

export function buildBlogPostJsonLd(post: BlogPost, siteUrl: string) {
  const pageUrl = `${siteUrl}/blog/${post.slug}`;
  const published = `${post.dateISO}T00:00:00+07:00`;
  const modified = `${getPostUpdatedISO(post)}T00:00:00+07:00`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: published,
      dateModified: modified,
      articleSection: getBlogCategoryLabel(post.category),
      keywords: getPostKeywords(post).join(", ") || undefined,
      author: { "@type": "Organization", name: site.name },
      publisher: { "@type": "Organization", name: site.name },
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      image: `${siteUrl}/logo-hai-duy.png`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
      ],
    },
  ];

  if (post.faqs && post.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
