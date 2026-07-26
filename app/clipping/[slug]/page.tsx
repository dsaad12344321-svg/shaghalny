import Link from "next/link";
import { notFound } from "next/navigation";
import { clippingLessons } from "@/data/clipping";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LessonPage({ params }: Props) {
  const { slug } = await params;

  const lessonIndex = clippingLessons.findIndex(
    (lesson) => lesson.slug === slug
  );

  if (lessonIndex === -1) {
    notFound();
  }

  const lesson = clippingLessons[lessonIndex];

  const previousLesson =
    lessonIndex > 0 ? clippingLessons[lessonIndex - 1] : null;

  const nextLesson =
    lessonIndex < clippingLessons.length - 1
      ? clippingLessons[lessonIndex + 1]
      : null;

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">

      <div className="mb-8">
        <p className="text-sm text-slate-500">
          الخطوة {lessonIndex + 1} من {clippingLessons.length}
        </p>

        <div className="mt-2 h-2 rounded-full bg-slate-200">
          <div
            className="h-2 rounded-full bg-green-600"
            style={{
              width: `${((lessonIndex + 1) / clippingLessons.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <h1 className="text-4xl font-bold">
        {lesson.title}
      </h1>

      <p className="mt-3 mb-10 text-slate-600">
        {lesson.description}
      </p>

      <div className="space-y-12">
        {lesson.steps.map((step, index) => (
          <section key={index}>

            <img
              src={step.image}
              alt={step.text}
              className="w-full rounded-xl border"
            />

            <p className="mt-4 text-lg leading-8">
              {step.text}
            </p>

          </section>
        ))}
      </div>

      <div className="mt-12 rounded-xl border p-6">
        <h2 className="mb-4 text-xl font-semibold">
          قائمة التحقق
        </h2>

        <label className="mb-3 flex items-center gap-3">
          <input type="checkbox" />
          قرأت الشرح بالكامل
        </label>

        <label className="mb-3 flex items-center gap-3">
          <input type="checkbox" />
          نفذت جميع الخطوات
        </label>

        <label className="flex items-center gap-3">
          <input type="checkbox" />
          أصبحت جاهزًا للانتقال للدرس التالي
        </label>
      </div>

      <div className="mt-10 flex justify-between">

        {previousLesson ? (
          <Link
            href={`/clipping/${previousLesson.slug}`}
            className="rounded-lg border px-5 py-3"
          >
            ← السابق
          </Link>
        ) : (
          <div />
        )}

        {nextLesson ? (
          <Link
            href={`/clipping/${nextLesson.slug}`}
            className="rounded-lg bg-green-600 px-5 py-3 text-white"
          >
            التالي →
          </Link>
        ) : (
          <Link
            href="/clipping"
            className="rounded-lg bg-blue-600 px-5 py-3 text-white"
          >
            إنهاء المسار 🎉
          </Link>
        )}

      </div>

    </main>
  );
}