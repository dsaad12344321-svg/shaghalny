type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({
  current,
  total,
}: Props) {
  const percentage = (current / total) * 100;

  return (
    <section className="mb-8">

      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium">
          الخطوة {current} من {total}
        </span>

        <span className="text-sm text-gray-500">
          {Math.round(percentage)}%
        </span>
      </div>

      <div className="h-3 w-full rounded-full bg-gray-200">
        <div
          className="h-3 rounded-full bg-green-600 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>

    </section>
  );
}