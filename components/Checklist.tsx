export default function Checklist() {
  return (
    <section className="mt-12 rounded-xl border p-6">

      <h2 className="mb-4 text-xl font-semibold">
        قائمة التحقق
      </h2>

      <label className="mb-3 flex items-center gap-3">
        <input type="checkbox" />
        قرأت الشرح بالكامل
      </label>

      <label className="mb-3 flex items-center gap-3">
        <input type="checkbox" />
        نفذت جميع الخطوات
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        أصبحت جاهزًا للانتقال للدرس التالي
      </label>

    </section>
  );
}