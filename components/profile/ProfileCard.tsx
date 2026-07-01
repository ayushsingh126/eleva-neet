export default function ProfileCard() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">

      <div className="flex flex-col items-center">

        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-5xl text-white shadow-lg">
          👤
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mt-5">
          Sayantu Changdar
        </h2>

        <p className="text-slate-500 mt-1">
          NEET 2027 Aspirant
        </p>

        <div className="flex gap-3 mt-5">

          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
            Level 12
          </span>

          <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm">
            Explorer
          </span>

        </div>

        <div className="mt-6 w-full bg-slate-100 rounded-2xl p-4 flex justify-between items-center">

          <div>
            <p className="text-sm text-slate-500">
              Total XP
            </p>

            <h3 className="text-3xl font-bold text-slate-900">
              2,430
            </h3>
          </div>

          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition">
            Edit Profile
          </button>

        </div>

      </div>

    </div>
  );
}