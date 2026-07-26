const items = [
  "قرأت الشرح بالكامل",
  "نفذت جميع الخطوات",
  "تأكدت أن كل شيء يعمل",
];

export default function Checklist() {
  return (
    <section className="mt-10 rounded-xl border bg-white p-6 shadow-sm">

      <h2 className="mb-4 text-xl font-semibold">
        قائمة التحقق
      </h2>

      <div className="space-y-3">

        {items.map((item) => (
          <label
            key={item}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="checkbox"
              className="h-5 w-5"
            />

            <span>{item}</span>
          </label>
        ))}

      </div>

    </section>
  );
}