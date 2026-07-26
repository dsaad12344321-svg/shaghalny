import { notFound } from "next/navigation";
import { clippingLessons } from "@/data/clipping";

import ProgressBar from "@/components/ProgressBar";
import TutorialStep from "@/components/TutorialStep";
import Checklist from "@/components/Checklist";
import NavigationButtons from "@/components/NavigationButtons";

// ...

<ProgressBar
  current={lessonIndex + 1}
  total={clippingLessons.length}
/>

<h1>{lesson.title}</h1>

<p>{lesson.description}</p>

{lesson.steps.map((step, index) => (
  <TutorialStep
    key={index}
    image={step.image}
    text={step.text}
  />
))}

<Checklist />

<NavigationButtons
  previousLesson={previousLesson}
  nextLesson={nextLesson}
/>