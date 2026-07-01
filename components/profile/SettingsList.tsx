const settings = [
  {
    icon: "🔔",
    title: "Notifications",
    subtitle: "Manage reminders & alerts",
  },
  {
    icon: "🎯",
    title: "Daily Reminder",
    subtitle: "Customize your study schedule",
  },
  {
    icon: "🧠",
    title: "AI Personality",
    subtitle: "Personalize your AI mentor",
  },
  {
    icon: "📅",
    title: "Study Schedule",
    subtitle: "View and edit your timetable",
  },
  {
    icon: "🌙",
    title: "Appearance",
    subtitle: "Coming Soon",
  },
];

export default function SettingsList() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Settings
      </h2>

      <div className="space-y-3">
        {settings.map((item) => (
          <button
            key={item.title}
            className="flex w-full items-center justify-between rounded-2xl border border-slate-100 p-4 transition hover:bg-slate-50"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
                {item.icon}
              </div>

              <div className="text-left">
                <h3 className="font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.subtitle}
                </p>
              </div>
            </div>

            <span className="text-xl text-slate-400">
              ›
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}