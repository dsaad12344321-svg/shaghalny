export default function Checklist() {

  const items = [
    "قرأت الشرح",
    "شاهدت جميع الصور",
    "نفذت الخطوات",
  ];

  return (
    <div className="mt-10 rounded-xl border p-6">

      <h2 className="mb-4 text-xl font-bold">
        قائمة التحقق
      </h2>

      <div className="space-y-3">

        {items.map((item) => (
          <label
            key={item}
            className="flex items-center gap-3"
          >
            <input type="checkbox" />

            {item}
          </label>
        ))}

      </div>

    </div>
  );
}