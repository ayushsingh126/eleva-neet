export default function GoalsCard() {
  return (
    <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold text-slate-900">
          🎯 My Goals
        </h2>

        <button className="text-blue-600 font-semibold">
          Edit
        </button>

      </div>

      <div className="space-y-5">

        <div className="flex justify-between">
          <span className="text-slate-500">Target Exam</span>
          <span className="font-semibold">NEET 2027</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">Target Score</span>
          <span className="font-semibold">680+</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">Daily Goal</span>
          <span className="font-semibold">3 Hours</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">Weekly Goal</span>
          <span className="font-semibold">21 Hours</span>
        </div>

      </div>

    </section>
  );
}