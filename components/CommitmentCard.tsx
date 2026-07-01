type CommitmentCardProps = {
  studyTime: string;
  momentum: number;
};

export default function CommitmentCard({
  studyTime,
  momentum,
}: CommitmentCardProps) {
  return (
    <div className="mb-6 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white shadow-xl">
      <p className="text-sm uppercase tracking-wider text-blue-100">
  TODAY'S COMMITMENT
</p>

      <div className="flex items-center justify-between">
        <div>
        <h2 className="m-0 text-6xl font-bold">
            {studyTime}
          </h2>

          <p className="mt-1 opacity-80">
  study
</p>
        </div>

        <div className="text-center">

        <h2 className="text-5xl font-bold leading-none">
  {momentum}
</h2>

<p className="m-0 text-xs opacity-80">
  MOMENTUM
</p>
        </div>
      </div>

      <div className="mt-5 h-2 rounded-full bg-white/20">

      <div
  className="h-full rounded-full bg-white"
  style={{ width: `${momentum}%` }}
/>
      </div>

      <p className="mt-3 text-sm opacity-80">
  You're on track for this week's goal.
</p>
    </div>
  );
}
