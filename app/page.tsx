import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="mx-auto max-w-6xl px-6 py-16">

        <h1 className="text-5xl font-bold">
          شغلنى
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          تعلم العمل على الإنترنت خطوة بخطوة.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <Link
            href="/clipping"
            className="rounded-xl bg-white p-6 shadow transition hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold">
              🎬 TikTok Clipping
            </h2>

            <p className="mt-3 text-gray-600">
              تعلم إنشاء قناة وتحقيق الأرباح خطوة بخطوة.
            </p>
          </Link>

        </div>

      </section>
    </main>
  );
}