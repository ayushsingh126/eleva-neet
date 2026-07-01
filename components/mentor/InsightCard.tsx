type InsightCardProps = {
  subject: string;
  title: string;
 description: string;
 fact: string;
};

export default function InsightCard({
  subject,
  title,
  description,
  fact,
}: InsightCardProps) {
  return (
    <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-xl">
            ✨
          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            Insight of the Day
          </h2>
        </div>

        <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
          {subject}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-slate-600">
        {description}
      </p>

      <div className="mt-6 rounded-2xl bg-slate-100 p-4">
        <p className="text-sm font-semibold text-slate-600">
          📈 {fact}
        </p>
      </div>
    </div>
  );
}