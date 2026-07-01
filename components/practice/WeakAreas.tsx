const weakAreas = [
  {
    topic: "Laws of Motion",
    progress: 38,
    status: "Needs work",
    color: "bg-blue-600",
    badge: "bg-red-100 text-red-600",
  },
  {
    topic: "Organic Reactions",
    progress: 44,
    status: "Needs work",
    color: "bg-violet-600",
    badge: "bg-red-100 text-red-600",
  },
  {
    topic: "Genetics & Heredity",
    progress: 51,
    status: "Developing",
    color: "bg-green-600",
    badge: "bg-amber-100 text-amber-600",
  },
  {
    topic: "Electrochemistry",
    progress: 57,
    status: "Developing",
    color: "bg-purple-600",
    badge: "bg-amber-100 text-amber-600",
  },
];

export default function WeakAreas() {
  return (
    <section className="mb-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">
          Weak Areas
        </h2>

        <span className="text-sm font-semibold text-blue-600">
          AI Identified
        </span>
      </div>

      <div className="space-y-4">
        {weakAreas.map((area) => (
          <div
            key={area.topic}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 font-bold text-blue-600">
                {area.progress}%
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">
                  {area.topic}
                </h3>

                <div className="mt-2 h-2 rounded-full bg-slate-200">
                  <div
                    className={`${area.color} h-2 rounded-full`}
                    style={{ width: `${area.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${area.badge}`}
                >
                  {area.status}
                </span>

                <button className="rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">
                  Improve
                </button>

              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}