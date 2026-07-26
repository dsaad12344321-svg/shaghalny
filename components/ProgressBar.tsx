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
    <div className="mb-8">

      <div className="mb-2 flex justify-between text-sm">
        <span>
          الخطوة {current}
        </span>

        <span>
          {total}
        </span>
      </div>

      <div className="h-3 rounded-full bg-gray-200">

        <div
          className="h-3 rounded-full bg-green-600"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
}