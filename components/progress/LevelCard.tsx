export default function LevelCard() {
  return (
    <section className="mt-6 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 p-6 text-white shadow-xl">

      <div className="flex justify-between items-start">

        <div>
          <p className="text-xs uppercase tracking-wider opacity-80">
            Current Level
          </p>

          <div className="mt-2 flex items-end gap-3">
            <h2 className="text-5xl font-bold">12</h2>

            <span className="pb-2 text-xl opacity-90">
              Explorer
            </span>
          </div>
        </div>

        <div className="rounded-2xl bg-white/15 px-5 py-4 text-center backdrop-blur">
          <p className="text-4xl font-bold">2430</p>
          <p className="text-sm opacity-80">XP</p>
        </div>

      </div>

      <div className="mt-6">
        <div className="h-3 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-[82%] rounded-full bg-white" />
        </div>

        <p className="mt-2 text-sm opacity-90">
          570 XP until Level 13
        </p>
      </div>

      <div className="mt-8 grid grid-cols-3 border-t border-white/20 pt-6">

        <div className="text-center">
          <p className="text-3xl">🔥</p>
          <p className="mt-1 text-xl font-bold">15</p>
          <p className="text-sm opacity-80">Day Streak</p>
        </div>

        <div className="text-center">
          <p className="text-3xl">⭐</p>
          <p className="mt-1 text-xl font-bold">342</p>
          <p className="text-sm opacity-80">Questions</p>
        </div>

        <div className="text-center">
          <p className="text-3xl">⏱️</p>
          <p className="mt-1 text-xl font-bold">48h</p>
          <p className="text-sm opacity-80">Studied</p>
        </div>

      </div>

    </section>
  );
}