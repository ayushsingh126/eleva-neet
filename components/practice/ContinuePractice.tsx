export default function ContinuePractice() {
  return (
    <section className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-5 flex items-center justify-between">

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Continue Practice
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            Laws of Motion
          </h2>
        </div>

        <div className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          12 / 20
        </div>

      </div>

      <div className="mb-5 h-3 rounded-full bg-slate-200">
        <div className="h-3 w-[60%] rounded-full bg-gradient-to-r from-blue-600 to-violet-600"></div>
      </div>

      <div className="mb-6 flex justify-between text-sm text-slate-500">
        <span>8 Questions Left</span>
        <span>≈ 9 mins</span>
      </div>

      <button className="w-full rounded-2xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700">
        ▶ Continue Practice
      </button>

    </section>
  );
}