export default function AccuracyTrend() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Accuracy Trend
        </h2>

        <span className="text-blue-600 font-semibold">
          +34% over 12 weeks
        </span>
      </div>

      <div className="relative h-56 border-b border-gray-200">

        {/* Horizontal Grid */}
        <div className="absolute inset-0 flex flex-col justify-between pb-8">
          <div className="border-t border-gray-100"></div>
          <div className="border-t border-gray-100"></div>
          <div className="border-t border-gray-100"></div>
          <div className="border-t border-gray-100"></div>
        </div>

        {/* Trend Line */}
        <svg
          viewBox="0 0 320 140"
          className="absolute inset-0 w-full h-full"
        >
          <polyline
            fill="none"
            stroke="#4F6BFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="
            10,120
            50,100
            90,110
            130,80
            170,65
            210,55
            250,70
            290,40
            315,30
            "
          />

          <circle
            cx="315"
            cy="30"
            r="6"
            fill="#7C3AED"
          />
        </svg>

      </div>

      <div className="flex justify-between mt-4 text-sm text-gray-500">
        <span>Wk 1</span>
        <span>Wk 3</span>
        <span>Wk 5</span>
        <span>Wk 7</span>
        <span>Wk 9</span>
        <span>Wk 11</span>
        <span>Now</span>
      </div>
    </div>
  );
}