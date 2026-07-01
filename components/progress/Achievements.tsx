const achievements = [
  {
    icon: "🔥",
    title: "7-Day Streak",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    icon: "⚡",
    title: "100 Questions",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    icon: "🧠",
    title: "Physics Master",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: "🎯",
    title: "Perfect Score",
    bg: "bg-green-50",
    border: "border-green-200",
  },
];

export default function Achievements() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Achievements
        </h2>

        <span className="text-blue-600 font-semibold">
          4 / 6 earned
        </span>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {achievements.map((item) => (
          <div key={item.title} className="text-center">
            <div
              className={`w-16 h-16 rounded-2xl border ${item.border} ${item.bg}
              flex items-center justify-center text-3xl mx-auto`}
            >
              {item.icon}
            </div>

            <p className="text-sm font-medium mt-3">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}