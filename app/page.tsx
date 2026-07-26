import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">

      <section className="mb-12 text-center">

        <h1 className="text-5xl font-bold">
          شغلنى
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          تعلم العمل على الإنترنت خطوة بخطوة من خلال مسارات تعليمية بسيطة.
        </p>

      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <Link
          href="/clipping"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg"
        >
          <div className="text-5xl">
            🎬
          </div>

          <h2 className="mt-4 text-2xl font-bold">
            TikTok Clipping
          </h2>

          <p className="mt-3 text-gray-600">
            تعلم إنشاء قناة TikTok، تحقيق الشروط، ربط الأرباح، واستخدام TikTok Studio.
          </p>

          <span className="mt-6 inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
            متاح الآن
          </span>
        </Link>

        <div className="rounded-2xl border bg-gray-100 p-6 opacity-70">
          <div className="text-5xl">
            ▶️
          </div>

          <h2 className="mt-4 text-2xl font-bold">
            YouTube Clipping
          </h2>

          <p className="mt-3 text-gray-600">
            قريبًا...
          </p>
        </div>

        <div className="rounded-2xl border bg-gray-100 p-6 opacity-70">
          <div className="text-5xl">
            📘
          </div>

          <h2 className="mt-4 text-2xl font-bold">
            Facebook Clipping
          </h2>

          <p className="mt-3 text-gray-600">
            قريبًا...
          </p>
        </div>

      </section>

    </main>
  );
}