export default function ProgressHeader() {
  return (
    <header className="mb-6 flex items-center justify-between">
      <div>
        <p className="text-sm uppercase tracking-wide text-slate-500">
          Good Evening
        </p>

        <h1 className="mt-1 text-4xl font-bold text-slate-900">
          Progress
        </h1>
      </div>

      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-2xl text-white shadow-lg">
        🏆
      </div>
    </header>
  );
}