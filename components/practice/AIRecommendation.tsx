export default function AIRecommendation() {
  return (
    <section className="mb-6 rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 p-6 text-white shadow-xl">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl">
          ✨
        </div>

        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
            AI Recommendation
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Laws of Motion — MCQ Drill
          </h2>

          <p className="mt-3 text-base leading-7 text-blue-100">
            Based on your Mentor session today, you scored
            <span className="font-semibold text-white"> 38% </span>
            last time. This drill targets your exact gaps.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 divide-x divide-white/20 rounded-2xl bg-white/10">
        <div className="py-4 text-center">
          <p className="text-2xl font-bold">20</p>
          <p className="text-sm text-blue-100">min</p>
        </div>

        <div className="py-4 text-center">
          <p className="text-2xl font-bold">15</p>
          <p className="text-sm text-blue-100">Questions</p>
        </div>

        <div className="py-4 text-center">
          <p className="text-xl font-bold">High</p>
          <p className="text-sm text-blue-100">Impact</p>
        </div>
      </div>

      <button className="mt-6 flex w-full items-center justify-center rounded-2xl bg-white py-4 text-lg font-semibold text-blue-600 transition hover:scale-[1.02]">
        ▶ Start Recommended Practice
      </button>
    </section>
  );
}