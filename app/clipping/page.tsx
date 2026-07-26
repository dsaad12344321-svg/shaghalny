import Link from "next/link";
import { clippingLessons } from "@/data/clipping";

export const metadata = {
  title: "TikTok Clipping",
};

export default function ClippingPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-10">
        <h1 className="text-4xl font-bold">
          TikTok Clipping
        </h1>

        <p className="mt-3 text-slate-600">
          اتبع الدروس التالية بالترتيب حتى تصبح جاهزًا للعمل.
        </p>
      </header>

      <section className="space-y-5">
        {clippingLessons.map((lesson, index) => (
          <Link
            key={lesson.slug}
            href={`/clipping/${lesson.slug}`}
            className="block rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500">
                  الخطوة {index + 1}
                </p>

                <h2 className="mt-1 text-2xl font-semibold">
                  {lesson.title}
                </h2>

                <p className="mt-2 text-slate-600">
                  {lesson.description}
                </p>
              </div>

              <div className="text-3xl">
                →
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}