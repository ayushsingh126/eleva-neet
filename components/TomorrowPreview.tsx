type TomorrowPreviewProps = {
  subject: string;
  chapter: string;
  duration: string;
};

export default function TomorrowPreview({
  subject,
  chapter,
  duration,
}: TomorrowPreviewProps) {
  return (
    <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-md">

      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-xl">
          ☀️
        </div>

        <h2 className="text-2xl font-bold text-slate-900">
          Tomorrow's Preview
        </h2>
      </div>

      {/* Subject */}
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        {subject}
      </p>

      {/* Chapter */}
      <h3 className="mt-1 text-3xl font-bold text-slate-900">
        {chapter}
      </h3>

      {/* Duration */}
      <div className="mt-3 flex items-center gap-2 text-slate-500">
        <span>🕒</span>

        <span className="text-base">
          Estimated time:
        </span>

        <span className="font-semibold text-slate-800">
          {duration}
        </span>
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-gray-200"></div>

      {/* Footer */}
      <p className="text-sm leading-6 text-slate-500">
        Tomorrow's plan will update based on today's progress.
      </p>

    </div>
  );
}