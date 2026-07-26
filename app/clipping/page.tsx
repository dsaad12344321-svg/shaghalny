import { clippingLessons } from "@/data/clipping";
import Link from "next/link";

export default function ClippingPage() {
  return (
    <main>
      <h1>TikTok Clipping</h1>

      {clippingLessons.map((lesson) => (
        <Link key={lesson.slug} href={`/clipping/${lesson.slug}`}>
          {lesson.title}
        </Link>
      ))}
    </main>
  );
}