import { notFound } from "next/navigation";

import { clippingLessons } from "@/data/clipping";

import ProgressBar from "@/components/ProgressBar";
import TutorialStep from "@/components/TutorialStep";
import Checklist from "@/components/Checklist";
import NavigationButtons from "@/components/NavigationButtons";

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

  const previous =
    lessonIndex > 0
      ? `/clipping/${clippingLessons[lessonIndex - 1].slug}`
      : undefined;

  const next =
    lessonIndex < clippingLessons.length - 1
      ? `/clipping/${clippingLessons[lessonIndex + 1].slug}`
      : undefined;

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">

      <ProgressBar
        current={lessonIndex + 1}
        total={clippingLessons.length}
      />

      <h1 className="text-4xl font-bold">
        {lesson.title}
      </h1>

      <p className="mt-3 mb-10 text-gray-600">
        {lesson.description}
      </p>

      {lesson.steps.map((step, index) => (
        <TutorialStep
          key={index}
          image={step.image}
          text={step.text}
        />
      ))}

      <Checklist />

      <NavigationButtons
        previous={previous}
        next={next}
      />

    </main>
  );
}