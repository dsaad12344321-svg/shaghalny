import Link from "next/link";

type Lesson = {
  slug: string;
};

type Props = {
  previousLesson: Lesson | null;
  nextLesson: Lesson | null;
};

export default function NavigationButtons({
  previousLesson,
  nextLesson,
}: Props) {
  return (
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
  );
}