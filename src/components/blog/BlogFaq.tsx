import type { BlogFaq } from "@/data/blog";

export function BlogFaq({ faqs }: { faqs: BlogFaq[] }) {
  if (faqs.length === 0) return null;

  return (
    <section className="mt-10" aria-labelledby="blog-faq-heading">
      <h2 id="blog-faq-heading" className="text-xl font-bold md:text-2xl">
        Câu hỏi thường gặp
      </h2>
      <p className="mt-2 text-sm text-zinc-600">
        Những câu hỏi thường gặp quanh bài viết này. Phí hiển thị luôn là mức tham khảo.
      </p>
      <div className="mt-5 space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border bg-white p-4 open:bg-emerald-50/40"
          >
            <summary className="cursor-pointer list-none text-sm font-semibold text-zinc-900 [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-3">
                <span>{faq.question}</span>
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-200 text-emerald-700 group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
