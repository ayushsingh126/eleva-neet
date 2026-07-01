const subjects = [
  {
    name: "Physics",
    short: "Ph",
    score: 82,
    improvement: "+6%",
    color: "bg-blue-600",
    badge: "bg-green-100 text-green-700",
    circle: "bg-blue-100 text-blue-700",
  },
  {
    name: "Chemistry",
    short: "Ch",
    score: 74,
    improvement: "+2%",
    color: "bg-violet-600",
    badge: "bg-green-100 text-green-700",
    circle: "bg-violet-100 text-violet-700",
  },
  {
    name: "Biology",
    short: "Bi",
    score: 91,
    improvement: "+1%",
    color: "bg-green-600",
    badge: "bg-green-100 text-green-700",
    circle: "bg-green-100 text-green-700",
  },
];

export default function SubjectPerformance() {
  return (
    <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Subject Performance
      </h2>

      <div className="space-y-5">
        {subjects.map((subject) => (
          <div
            key={subject.name}
            className="rounded-2xl border border-slate-100 p-5"
          >
            <div className="mb-4 flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full font-bold ${subject.circle}`}
                >
                  {subject.short}
                </div>

                <span className="text-xl font-semibold text-slate-900">
                  {subject.name}
                </span>

              </div>

              <div className="flex items-center gap-4">

                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${subject.badge}`}
                >
                  {subject.improvement}
                </span>

                <span className="text-2xl font-bold text-slate-900">
                  {subject.score}%
                </span>

              </div>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-200">
              <div
                className={`h-full rounded-full ${subject.color}`}
                style={{ width: `${subject.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}