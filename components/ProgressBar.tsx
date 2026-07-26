type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: Props) {
  const percentage = (current / total) * 100;

  return (
    <div className="mb-8">
      <p className="mb-2 text-sm text-slate-500">
        الخطوة {current} من {total}
      </p>

      <div className="h-2 rounded-full bg-slate-200">
        <div
          className="h-2 rounded-full bg-green-600 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}