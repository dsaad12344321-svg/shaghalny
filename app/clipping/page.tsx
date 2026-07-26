import Link from "next/link";

const steps = [
  {
    title: "إنشاء قناة TikTok",
    href: "/clipping/create-account",
  },
  {
    title: "تحقيق شروط القناة",
    href: "/clipping/requirements",
  },
  {
    title: "ربط منصة الأرباح",
    href: "/clipping/monetization",
  },
  {
    title: "تحميل TikTok Studio",
    href: "/clipping/tiktok-studio",
  },
  {
    title: "تجهيز أول منشور",
    href: "/clipping/first-post",
  },
];

export default function ClippingPage() {
  return (
    <main className="mx-auto max-w-3xl py-12 px-6">

      <h1 className="text-4xl font-bold">
        TikTok Clipping
      </h1>

      <div className="mt-10 space-y-4">

        {steps.map((step, index) => (
          <Link
            key={step.href}
            href={step.href}
            className="flex items-center justify-between rounded-xl border bg-white p-5 hover:bg-gray-50"
          >
            <span>
              {index + 1}. {step.title}
            </span>

            <span>➡️</span>

          </Link>
        ))}

      </div>

    </main>
  );
}