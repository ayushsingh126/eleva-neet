export default function WeeklyStudyChart() {
  const days = [
    { day: "M", hours: 3.5, height: "h-20", active: false },
    { day: "T", hours: 4.2, height: "h-28", active: false },
    { day: "W", hours: 2.0, height: "h-14", active: false },
    { day: "T", hours: 3.8, height: "h-24", active: false },
    { day: "F", hours: 2.5, height: "h-16", active: false },
    { day: "S", hours: 1.5, height: "h-10", active: true },
    { day: "S", hours: 0, height: "h-1", active: false },
  ];

  return (
    <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">
          Weekly Study
        </h2>

        <span className="text-lg font-semibold text-blue-600">
          18.5 hrs this week
        </span>
      </div>

      <div className="flex items-end justify-between gap-4 h-44">
        {days.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-1"
          >
            <span className="mb-2 text-sm font-medium text-slate-500">
              {item.hours > 0 ? `${item.hours}h` : ""}
            </span>

            <div
              className={`w-full max-w-[48px] rounded-t-2xl bg-gradient-to-t ${
                item.active
                  ? "from-violet-600 to-blue-400"
                  : "from-blue-600 to-blue-300"
              } ${item.height}`}
            />

            <span
              className={`mt-3 text-sm font-medium ${
                item.active
                  ? "text-blue-600"
                  : "text-slate-500"
              }`}
            >
              {item.day}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}