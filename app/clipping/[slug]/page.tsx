import { notFound } from "next/navigation";
import Link from "next/link";
import { clippingLessons } from "@/data/clipping";
import TutorialStep from "@/components/TutorialStep";

type Props = {
  params: {
    slug: string;
  };
};

export default function LessonPage({ params }: Props) {
  const lessonIndex = clippingLessons.findIndex(
    (lesson) => lesson.slug === params.slug
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
    <main className="mx-auto max-w-4xl px-6 py-10">

      {/* عنوان الصفحة */}
      <h1 className="text-4xl font-bold">
        {lesson.title}
      </h1>

      {/* الوصف */}
      <p className="mt-3 text-gray-600">
        {lesson.description}
      </p>

      {/* الصور والشرح */}
      <div className="mt-10">
        {lesson.images.map((item, index) => (
          <TutorialStep
            key={index}
            image={item.image}
            text={item.text}
          />
        ))}
      </div>

      {/* أزرار التنقل */}
      <div className="mt-12 flex justify-between">

        {previousLesson ? (
          <Link
            href={`/clipping/${previousLesson.slug}`}
            className="rounded-lg bg-gray-200 px-5 py-3 hover:bg-gray-300"
          >
            ← السابق
          </Link>
        ) : (
          <div />
        )}

        {nextLesson ? (
          <Link
            href={`/clipping/${nextLesson.slug}`}
            className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
          >
            التالي →
          </Link>
        ) : (
          <Link
            href="/"
            className="rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700"
          >
            إنهاء المسار 🎉
          </Link>
        )}

      </div>

    </main>
  );
}