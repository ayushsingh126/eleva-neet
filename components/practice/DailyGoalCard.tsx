export default function DailyGoalCard() {
  return (
    <section className="mb-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">
          🎯 Today's Goal: 30 Questions
        </h2>

        <span className="text-lg font-bold text-blue-600">
          21/30
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
      </div>

      <div className="mt-3 flex items-center justify-between text-sm">
        <p className="text-slate-600">
          <span className="font-semibold text-slate-900">9 more</span> to hit today's goal
        </p>

        <span className="font-semibold text-blue-600">
          70%
        </span>
      </div>
    </section>
  );
}