"use client";

import Link from "next/link";

type Lesson = {
  slug: string;
};

type Props = {
  previousLesson: Lesson | null;
  nextLesson: Lesson | null;
};

const SMART_LINK =
  "https://www.effectivecpmnetwork.com/qycwhpvjes?key=ad82bf2c65f3ac82e707ff9e2af438a4";

export default function NavigationButtons({
  previousLesson,
  nextLesson,
}: Props) {
  const openSmartLink = () => {
    window.open(SMART_LINK, "_blank", "noopener,noreferrer");
  };

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
          onClick={openSmartLink}
          className="rounded-lg bg-green-600 px-5 py-3 text-white"
        >
          التالي →
        </Link>
      ) : (
        <Link
          href="/clipping"
          onClick={openSmartLink}
          className="rounded-lg bg-blue-600 px-5 py-3 text-white"
        >
          إنهاء المسار 🎉
        </Link>
      )}
    </div>
  );
}