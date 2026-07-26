import Link from "next/link";

type Props = {
  previous?: string;
  next?: string;
};

export default function NavigationButtons({
  previous,
  next,
}: Props) {
  return (
    <section className="mt-10 flex items-center justify-between">

      {previous ? (
        <Link
          href={previous}
          className="rounded-lg border px-5 py-3 transition hover:bg-gray-100"
        >
          ← السابق
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next}
          className="rounded-lg bg-green-600 px-5 py-3 text-white transition hover:bg-green-700"
        >
          التالي →
        </Link>
      ) : (
        <Link
          href="/clipping"
          className="rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          إنهاء المسار 🎉
        </Link>
      )}

    </section>
  );
}