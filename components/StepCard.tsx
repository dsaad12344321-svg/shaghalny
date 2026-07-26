import Link from "next/link";

type Props = {
  index: number;
  title: string;
  href: string;
};

export default function StepCard({
  index,
  title,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between rounded-xl border bg-white p-5 hover:bg-gray-50"
    >
      <span>
        {index}. {title}
      </span>

      <span>➡️</span>
    </Link>
  );
}