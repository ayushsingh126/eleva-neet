type MentorSummaryProps = {
  weeklyHours: string;
  focus: string;
};

export default function MentorSummary({
  weeklyHours,
  focus,
}: MentorSummaryProps) {
  return (
    <div className="mt-6 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 p-6 text-white shadow-lg">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-2xl">
          🧠
        </div>

        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <h2 className="text-xl font-bold">Eleva AI</h2>

            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
              Active now
            </span>
          </div>

          <p className="leading-8 text-blue-100">
            You've studied <span className="font-semibold text-white">{weeklyHours}</span> this week.
            Today's focus is <span className="font-semibold text-white">{focus}</span>.
            I'm ready to teach, drill, or explain whenever you are.
          </p>
        </div>
      </div>
    </div>
  );
}