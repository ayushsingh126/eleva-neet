type UpcomingMissionCardProps = {
  title: string;
  subject: string;
  duration: string;
  difficulty: "Easy" | "Medium" | "Hard";
};

export default function UpcomingMissionCard({
  title,
  subject,
  duration,
  difficulty,
}: UpcomingMissionCardProps) {
  const difficultyStyles = {
    Easy: "bg-emerald-100 text-emerald-700",
    Medium: "bg-amber-100 text-amber-700",
    Hard: "bg-red-100 text-red-600",
  };

  const iconStyles = {
    Easy: "bg-emerald-50",
    Medium: "bg-amber-50",
    Hard: "bg-red-50",
  };

  const icon = {
    Easy: "🧬",
    Medium: "📖",
    Hard: "⚡",
  };

  return (
    <div className="flex items-center justify-between rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md">
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconStyles[difficulty]}`}
        >
          <span className="text-xl">{icon[difficulty]}</span>
        </div>

        {/* Text */}
        <div>
          <h3 className="line-clamp-1 text-lg font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-1 text-sm text-blue-600">
            {subject}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="text-right">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${difficultyStyles[difficulty]}`}
          >
            {difficulty}
          </span>

          <div className="mt-3 flex items-center justify-end gap-1 text-sm text-slate-500">
            <span>🕒</span>
            <span>{duration}</span>
          </div>
        </div>

        {/* Arrow */}
        <div className="text-2xl text-gray-300">
          ›
        </div>
      </div>
    </div>
  );
}