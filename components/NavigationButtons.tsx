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
    <div className="mt-10 flex justify-between">

      {previous ? (
        <Link
          href={previous}
          className="rounded-lg bg-gray-200 px-5 py-3"
        >
          ← السابق
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next}
          className="rounded-lg bg-blue-600 px-5 py-3 text-white"
        >
          التالي →
        </Link>
      ) : (
        <Link
          href="/"
          className="rounded-lg bg-green-600 px-5 py-3 text-white"
        >
          إنهاء
        </Link>
      )}

    </div>
  );
}