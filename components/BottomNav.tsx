export default function BottomNav() {
  const tabs = [
    {
      icon: "🎯",
      label: "Mission",
      active: true,
    },
    {
      icon: "🧠",
      label: "Mentor",
      active: false,
    },
    {
      icon: "⚡",
      label: "Practice",
      active: false,
    },
    {
      icon: "📊",
      label: "Progress",
      active: false,
    },
    {
      icon: "👤",
      label: "Profile",
      active: false,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-md rounded-t-3xl border-t border-gray-200 bg-white px-4 py-3 shadow-lg">
      <div className="flex items-center justify-between">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className="flex flex-1 flex-col items-center justify-center gap-1"
          >
            <span
              className={`text-2xl ${
                tab.active ? "opacity-100" : "opacity-50"
              }`}
            >
              {tab.icon}
            </span>

            <span
              className={`text-xs font-medium ${
                tab.active ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {tab.label}
            </span>

            {tab.active && (
              <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
            )}
          </button>
        ))}
        
      </div>
    
    </nav>
    
  );
}