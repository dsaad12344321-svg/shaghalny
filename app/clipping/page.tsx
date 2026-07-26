import Link from "next/link";
import { clippingLessons } from "@/data/clipping";

export default function ClippingPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">

      <h1 className="mb-2 text-4xl font-bold">
        TikTok Clipping
      </h1>

      <p className="mb-8 text-gray-600">
        اتبع الخطوات التالية بالترتيب حتى تصبح جاهزًا للعمل.
      </p>

      <div className="space-y-4">

        {clippingLessons.map((lesson, index) => (
          <Link
            key={lesson.slug}
            href={`/clipping/${lesson.slug}`}
            className="block rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  الخطوة {index + 1}
                </p>

                <h2 className="mt-1 text-xl font-semibold">
                  {lesson.title}
                </h2>

                <p className="mt-2 text-gray-600">
                  {lesson.description}
                </p>
              </div>

              <span className="text-2xl">
                →
              </span>

            </div>
          </Link>
        ))}

      </div>

    </main>
  );
}