const activities = [
  {
    subject: "Physics",
    topic: "Newton's Laws MCQ",
    score: "14/15",
    time: "2h ago",
    color: "bg-blue-50 text-blue-600",
    short: "Ph",
  },
  {
    subject: "Chemistry",
    topic: "Organic Reactions Revision",
    score: "Completed",
    time: "5h ago",
    color: "bg-purple-50 text-purple-600",
    short: "Ch",
  },
  {
    subject: "Biology",
    topic: "Cell Division Quiz",
    score: "18/20",
    time: "Yesterday",
    color: "bg-green-50 text-green-600",
    short: "Bi",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((item) => (
          <div
            key={item.topic}
            className="flex items-center justify-between rounded-2xl border border-gray-100 p-4"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${item.color}`}
              >
                {item.short}
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  {item.topic}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.subject}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold text-slate-900">
                {item.score}
              </p>

              <p className="text-sm text-gray-400">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}