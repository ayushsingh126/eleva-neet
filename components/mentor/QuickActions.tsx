import QuickActionCard from "./QuickActionCard";

const actions = [
  {
    icon: "📘",
    title: "Teach Today's Topic",
    subtitle: "Newton's Laws",
    iconBg: "bg-blue-100",
  },
  {
    icon: "⚡",
    title: "Practice 10 MCQs",
    subtitle: "Mixed difficulty",
    iconBg: "bg-violet-100",
  },
  {
    icon: "❗",
    title: "Explain My Mistakes",
    subtitle: "From last quiz",
    iconBg: "bg-orange-100",
  },
  {
    icon: "🌙",
    title: "Plan My Evening",
    subtitle: "2h study block",
    iconBg: "bg-indigo-100",
  },
];

export default function QuickActions() {
  return (
    <section className="mt-8">
      <h2 className="mb-5 text-2xl font-bold text-slate-900">
        Ask me to...
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <QuickActionCard
            key={action.title}
            icon={action.icon}
            title={action.title}
            subtitle={action.subtitle}
            iconBg={action.iconBg}
          />
        ))}
      </div>
    </section>
  );
}