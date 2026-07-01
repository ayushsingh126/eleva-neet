export default function MentorHeader() {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Monday, 30 June
        </p>

        <h1 className="mt-1 text-4xl font-bold text-slate-900">
          Your Mentor
        </h1>
      </div>

      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-2xl text-white shadow-lg">
        🧠

        <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
      </div>
    </div>
  );
}