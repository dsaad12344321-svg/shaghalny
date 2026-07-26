import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">

      <section className="text-center">

        <h1 className="text-5xl font-bold tracking-tight">
          شغلنى
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          تعلم العمل على الإنترنت خطوة بخطوة من خلال مسارات تعليمية
          منظمة وسهلة التطبيق.
        </p>

      </section>

      <section className="mt-16">

        <h2 className="mb-6 text-2xl font-bold">
          المسارات التعليمية
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/clipping"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-5xl">🎬</div>

            <h3 className="mt-5 text-2xl font-bold">
              TikTok Clipping
            </h3>

            <p className="mt-3 text-slate-600">
              تعلم إنشاء قناة TikTok وربطها بمنصة الأرباح
              وتجهيز أول منشور.
            </p>

            <span className="mt-6 inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              متاح الآن
            </span>
          </Link>

          <div className="rounded-2xl border bg-slate-100 p-6 opacity-70">

            <div className="text-5xl">▶️</div>

            <h3 className="mt-5 text-2xl font-bold">
              YouTube Clipping
            </h3>

            <p className="mt-3 text-slate-600">
              قريبًا...
            </p>

          </div>

          <div className="rounded-2xl border bg-slate-100 p-6 opacity-70">

            <div className="text-5xl">📘</div>

            <h3 className="mt-5 text-2xl font-bold">
              Facebook Clipping
            </h3>

            <p className="mt-3 text-slate-600">
              قريبًا...
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}