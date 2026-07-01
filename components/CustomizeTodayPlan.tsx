export default function CustomizeTodayPlan() {
  return (
    <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-md">

      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-xl">
          ⚙️
        </div>

        <h2 className="text-2xl font-bold text-slate-900">
          Customize Today's Plan
        </h2>
      </div>

      <p className="mb-6 leading-7 text-slate-600">
        Your AI mentor built today's plan based on your weak areas.
        Adjust it anytime and Eleva will instantly regenerate today's
        missions.
      </p>

      <div className="flex flex-wrap gap-3">

        <button className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-gray-100 transition">
          ⏰ Less time today
        </button>

        <button className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-gray-100 transition">
          📚 Change subject
        </button>

        <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition">
          ⚡ Add practice
        </button>

        <button className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-gray-100 transition">
          ⋯ More options
        </button>

      </div>

    </div>
  );
}