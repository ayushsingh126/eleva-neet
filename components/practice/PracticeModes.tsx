const modes = [
  {
    icon: "📘",
    title: "Topic Practice",
    subtitle: "Deep-dive one topic",
  },
  {
    icon: "🎯",
    title: "NEET MCQs",
    subtitle: "Exam-style questions",
  },
  {
    icon: "🔄",
    title: "Previous Years",
    subtitle: "2010–2024 papers",
  },
  {
    icon: "⚡",
    title: "Rapid Fire",
    subtitle: "30 sec per question",
  },
];

export default function PracticeModes() {
  return (
    <section className="mb-6">
      <h2 className="mb-4 text-2xl font-bold text-slate-900">
        Choose Practice Mode
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {modes.map((mode) => (
          <button
            key={mode.title}
            className="rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
              {mode.icon}
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              {mode.title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {mode.subtitle}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}