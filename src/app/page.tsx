import Link from "next/link";
import Image from "next/image";
import { CallToActionStrip } from "@/components/CTA/CallToActionStrip";
import { site } from "@/data/site";
import { blogPosts } from "@/data/blogPosts";

export const metadata = {
  title: `Rút ví trả sau & thẻ tín dụng - ${site.name}`,
  description:
    "Dịch vụ hỗ trợ rút ví trả sau và hỗ trợ thẻ tín dụng. Mức phí hợp lý, công khai, rõ ràng. Liên hệ nhanh qua Zalo/điện thoại.",
};

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-emerald-50/60 to-white">
      <section className="w-full border-b bg-zinc-100">
        <Image
          src="/cover-hai-duy.jpg"
          alt="Ảnh bìa Hệ Thống Hải Duy Ví Trả Sau Hà Nội"
          width={1920}
          height={720}
          className="h-auto max-h-[520px] w-full object-cover"
          priority
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm md:p-8">
          <h1 className="text-balance text-center font-sans text-3xl font-extrabold tracking-tight text-emerald-700 md:text-5xl md:leading-tight">
            Dịch vụ rút tiền ví trả sau uy tín
          </h1>

          <div className="mt-6 rounded-2xl border-l-4 border-emerald-500 bg-zinc-50 p-4 text-center text-lg italic leading-relaxed text-zinc-700 md:p-6">
            Bạn đang có nhu cầu rút ví trả sau Momo, ZaloPay, Viettel Money, TNEX, SPayLater, Cake - Viettel
            Money, Cake - VNPAY, Kredio, Muadee, Fuldin, FE Credit hoặc rút số dư trả sau từ các ngân hàng?
            Hãy để chúng tôi hỗ trợ bạn nhanh chóng, minh bạch và bảo mật. Dịch vụ rút tiền ví trả sau là giải
            pháp tiện lợi giúp bạn chuyển đổi hạn mức tín dụng từ các ví điện tử thành tiền mặt nhanh chóng và
            an toàn. Với mức phí cạnh tranh, quy trình đơn giản chỉ trong vài bước và hỗ trợ 24/7, chúng tôi
            mang đến trải nghiệm rút tiền nhanh gọn, minh bạch và đáng tin cậy.
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-100 bg-white p-6 text-center shadow-sm">
              <div className="text-3xl">⚡</div>
              <div className="mt-3 text-2xl font-bold text-zinc-900">Nhanh chóng</div>
              <div className="mt-2 text-zinc-600">Thủ tục gọn, hỗ trợ nhanh trong ngày</div>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white p-6 text-center shadow-sm">
              <div className="text-3xl">🔒</div>
              <div className="mt-3 text-2xl font-bold text-zinc-900">Bảo mật</div>
              <div className="mt-2 text-zinc-600">Cam kết bảo mật thông tin khách hàng</div>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white p-6 text-center shadow-sm">
              <div className="text-3xl">🏆</div>
              <div className="mt-3 text-2xl font-bold text-zinc-900">Uy tín</div>
              <div className="mt-2 text-zinc-600">Hỗ trợ rõ ràng, kiểm tra thông tin minh bạch</div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {[
              "Hỗ trợ toàn bộ hạn mức theo nhu cầu thực tế",
              "Thủ tục đơn giản, tư vấn nhanh, rõ ràng",
              "Hỗ trợ trực tiếp tại Hà Nội và online toàn quốc",
              "Cam kết bảo mật thông tin tuyệt đối",
              "Hỗ trợ 24/7 qua Zalo",
              "Hỗ trợ nhiều ví và ngân hàng phổ biến",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border bg-white p-4 shadow-sm">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-sm text-white">
                  ✓
                </span>
                <span className="text-zinc-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-emerald-500 p-6 text-center text-white">
            <h2 className="text-3xl font-bold">Liên hệ ngay để được tư vấn miễn phí!</h2>
            <p className="mt-2 text-emerald-100">
              Anh chị em cần tư vấn bất kỳ giải pháp nào về ví trả sau hoặc thẻ tín dụng, vui lòng liên hệ qua
              Zalo để được hỗ trợ nhanh.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={site.zaloLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 min-w-[190px] items-center justify-center rounded-full border border-zinc-200 bg-white px-6 text-sm font-semibold !text-zinc-900 shadow-sm transition hover:bg-emerald-50"
                style={{ color: "#111827" }}
              >
                <span style={{ color: "#111827" }}>Liên hệ Zalo</span>
              </a>
              <a
                href={site.zaloGroupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 min-w-[190px] items-center justify-center rounded-full border border-zinc-200 bg-white px-6 text-sm font-semibold !text-zinc-900 shadow-sm transition hover:bg-emerald-50"
                style={{ color: "#111827" }}
              >
                <span style={{ color: "#111827" }}>Nhóm check uy tín</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <h2 className="text-2xl font-bold">Các dịch vụ chính</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Link
            href="/dich-vu/rut-vi-tra-sau"
            className="group rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="text-sm font-semibold text-emerald-700">Dịch vụ rút ví trả sau</div>
            <div className="mt-2 text-xl font-bold">Hỗ trợ rút ví trả sau theo nhu cầu</div>
            <div className="mt-3 text-sm text-zinc-600">
              Tính phí tham khảo nhanh chóng, công khai và dễ chọn đơn vị phù hợp.
            </div>
            <div className="mt-4 text-sm font-semibold text-emerald-700 group-hover:underline">Xem chi tiết →</div>
          </Link>
          <Link
            href="/dich-vu/ho-tro-the-tin-dung"
            className="group rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="text-sm font-semibold text-emerald-700">Dịch vụ thẻ tín dụng</div>
            <div className="mt-2 text-xl font-bold">Hỗ trợ thẻ tín dụng, tối ưu theo phí</div>
            <div className="mt-3 text-sm text-zinc-600">
              Xem mức phí tham khảo và số tiền nhận được một cách rõ ràng.
            </div>
            <div className="mt-4 text-sm font-semibold text-emerald-700 group-hover:underline">Xem chi tiết →</div>
          </Link>
        </div>
      </section>

      {/* CTA ở giữa trang để thúc đẩy hành động */}
      <CallToActionStrip />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold">Gợi ý nhanh để bắt đầu</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <Link
            href="/cong-cu/tinh-phi-tham-khao"
            className="rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="text-sm font-semibold text-emerald-700">Tính phí tham khảo</div>
            <div className="mt-2 text-sm text-zinc-600">Nhập số tiền để xem khoảng phí và số tiền nhận được.</div>
          </Link>
          <a
            href={site.zaloLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="text-sm font-semibold text-emerald-700">Nhắn Zalo</div>
            <div className="mt-2 text-sm text-zinc-600">Trao đổi nhanh để được báo mức chính xác theo thời điểm.</div>
          </a>
          <a
            href={`tel:${site.phone}`}
            className="rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="text-sm font-semibold text-emerald-700">Gọi điện</div>
            <div className="mt-2 text-sm text-zinc-600">Ưu tiên nếu bạn cần hỗ trợ gấp.</div>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Tin tức mới</h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600">
          Cập nhật bài viết mới để bạn tham khảo thông tin dịch vụ và cách tính phí dễ hiểu.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <article key={post.slug} className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold leading-snug">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-zinc-600">{post.description}</p>
              <div className="mt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-emerald-700 hover:underline"
                >
                  Xem bài viết →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

