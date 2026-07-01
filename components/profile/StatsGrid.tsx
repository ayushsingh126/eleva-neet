const stats = [
  {
    icon: "📚",
    value: "342",
    label: "Questions",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: "⏱️",
    value: "48h",
    label: "Study Hours",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: "🔥",
    value: "15",
    label: "Day Streak",
    color: "from-orange-400 to-red-500",
  },
  {
    icon: "🎯",
    value: "84%",
    label: "Accuracy",
    color: "from-green-500 to-emerald-600",
  },
];

export default function StatsGrid() {
  return (
    <section>
      <h2 className="mb-5 text-2xl font-bold text-slate-900">
        Study Statistics
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div
              className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} text-2xl`}
            >
              {stat.icon}
            </div>

            <h3 className="text-3xl font-bold text-slate-900">
              {stat.value}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}