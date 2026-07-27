import { notFound } from "next/navigation";
import { clippingLessons } from "@/data/clipping";

import ProgressBar from "@/components/ProgressBar";
import TutorialStep from "@/components/TutorialStep";
import Checklist from "@/components/Checklist";
import NavigationButtons from "@/components/NavigationButtons";

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
      <ProgressBar
        current={lessonIndex + 1}
        total={clippingLessons.length}
      />

      <h1 className="mt-6 text-4xl font-bold">
        {lesson.title}
      </h1>

      <p className="mt-3 mb-10 text-slate-600">
        {lesson.description}
      </p>

      <div className="space-y-12">
        {lesson.steps.map((step, index) => (
          <TutorialStep
            key={index}
            image={step.image}
            text={step.text}
          />
        ))}
      </div>

      <Checklist />

      <NavigationButtons
        previousLesson={previousLesson}
        nextLesson={nextLesson}
      />
    </main>
  );
}