export default function AIForecast() {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-6 text-white shadow-xl">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm uppercase tracking-widest text-blue-100">
            AI Forecast
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Your Future Looks Strong 🚀
          </h2>

        </div>

        <div className="text-5xl">
          🔮
        </div>

      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">

        <div>
          <p className="text-sm text-blue-100">
            Predicted Score
          </p>

          <h3 className="mt-1 text-4xl font-bold">
            652
          </h3>
        </div>

        <div>
          <p className="text-sm text-blue-100">
            Chance of 680+
          </p>

          <h3 className="mt-1 text-4xl font-bold">
            74%
          </h3>
        </div>

        <div>
          <p className="text-sm text-blue-100">
            Days Left
          </p>

          <h3 className="mt-1 text-4xl font-bold">
            286
          </h3>
        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur">

        <p className="font-semibold">
          AI Recommendation
        </p>

        <p className="mt-2 leading-7 text-blue-100">
          Increase Chemistry practice by
          <span className="font-bold text-white">
            {" "}20 minutes/day{" "}
          </span>
          to improve your predicted score by
          <span className="font-bold text-white">
            {" "}+18 marks.
          </span>
        </p>

      </div>

      <button className="mt-6 w-full rounded-2xl bg-white py-4 text-lg font-semibold text-blue-700 transition hover:scale-[1.02]">
        View Full Forecast
      </button>

    </section>
  );
}