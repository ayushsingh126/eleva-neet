export default function ChatInput() {
  return (
    <div className="sticky bottom-20 mt-6 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Ask your mentor anything..."
          className="flex-1 bg-transparent text-base outline-none placeholder:text-slate-400"
        />

        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-xl">
          🎤
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-xl text-white">
          ✈️
        </button>
      </div>
    </div>
  );
}