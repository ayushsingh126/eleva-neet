type CurrentMissionCardProps = {
  title: string;
  subject: string;
  chapter: string;
  duration: string;
};

export default function CurrentMissionCard({
  title,
  subject,
  chapter,
  duration,
}: CurrentMissionCardProps) {
  const totalConcepts = 18;
  const completedConcepts = 0;
  const progress = (completedConcepts / totalConcepts) * 100;

  return (
    <div className="mt-6 rounded-3xl border border-gray-200 bg-white p-5 shadow-lg">
      {/* Top Row */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-600">
            CURRENT
          </span>

          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-500">
            Hard
          </span>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
          📘
        </div>
      </div>

      {/* Title */}
      <h2 className="mb-2 text-4xl font-bold text-slate-900">
        {title}
      </h2>

      {/* Subject */}
      <p className="mb-5 text-xl text-slate-500">
        {subject} • {chapter}
      </p>

      {/* Stats */}
      <div className="mb-5 flex flex-wrap gap-6 text-slate-500">
        <div className="flex items-center gap-2">
          <span>🕒</span>
          <span>{duration}</span>
        </div>

        <div className="flex items-center gap-2">
          <span>📚</span>
          <span>{totalConcepts} concepts</span>
        </div>

        <div className="flex items-center gap-2">
          <span>📈</span>
          <span>+8% from last</span>
        </div>
      </div>

      {/* ETA */}
      <p className="mb-5 text-lg text-slate-600">
        Estimated completion:
        <span className="font-semibold text-slate-900">
          {" "}
          4:45 PM
        </span>
      </p>

      {/* Progress Header */}
      <div className="mb-2 flex items-center justify-between">
        <span className="text-lg text-slate-500">
          Progress
        </span>

        <span className="text-lg text-slate-500">
          {completedConcepts} / {totalConcepts} done
        </span>
      </div>

      {/* Progress Bar */}
      <div className="h-2 rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Button */}
      <button className="mt-6 w-full rounded-2xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700">
        ⚡ Start Mission
      </button>
    </div>
  );
}