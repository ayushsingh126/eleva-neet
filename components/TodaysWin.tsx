type TodaysWinProps = {
  title: string;
  description: string;
  benefits: string[];
};

export default function TodaysWin({
  title,
  description,
  benefits,
}: TodaysWinProps) {
  return (
    <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-xl">
          ✅
        </div>

        <h2 className="text-xl font-bold text-slate-900">
          {title}
        </h2>
      </div>

      {/* Description */}
      <p className="mb-6 text-base leading-7 text-slate-700">
        {description}
      </p>

      {/* Benefits */}
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <div className="h-3 w-3 rounded-full bg-green-500"></div>

            <p className="text-sm text-slate-600">
              {benefit}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}