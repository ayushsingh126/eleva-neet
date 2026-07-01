export default function DailyChallenge() {
  return (
    <section className="mb-6 rounded-3xl bg-gradient-to-r from-amber-400 to-orange-500 p-6 text-white shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-wider text-orange-100">
            Daily Challenge
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Beat 847 Students Today
          </h2>

          <p className="mt-3 text-orange-100">
            Complete today's challenge and earn bonus XP.
          </p>

        </div>

        <div className="text-5xl">
          🏆
        </div>

      </div>

      <button className="mt-6 w-full rounded-2xl bg-white py-4 text-lg font-bold text-orange-500 transition hover:scale-[1.02]">
        Play Challenge
      </button>

    </section>
  );
}