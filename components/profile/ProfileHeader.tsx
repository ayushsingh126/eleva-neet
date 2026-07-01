export default function ProfileHeader() {
  return (
    <div className="flex items-start justify-between">
      <div>
        <p className="uppercase tracking-wider text-slate-500 text-sm">
          Good Evening
        </p>

        <h1 className="text-5xl font-bold text-slate-900 mt-1">
          Profile
        </h1>
      </div>

      <button className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-xl flex items-center justify-center text-3xl">
        ⚙️
      </button>
    </div>
  );
}