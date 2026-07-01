export default function ChatThread() {
  return (
    <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Today's conversation
      </h2>

      {/* AI Message */}

      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white">
          🧠
        </div>

        <div className="max-w-[80%] rounded-3xl rounded-tl-md bg-slate-100 p-5">
          <p className="leading-8 text-slate-700">
            Good morning, Arjun! I reviewed your last session — you scored
            62% on Newton's Laws. The biggest gap is free body diagrams on
            inclined planes. I've adjusted today's mission to focus on that.
          </p>

          <p className="mt-4 text-sm text-slate-400">
            9:41 AM
          </p>
        </div>
      </div>

      {/* User Message */}

      <div className="mt-6 flex justify-end">
        <div className="max-w-[75%] rounded-3xl rounded-br-md bg-blue-600 p-5 text-white">
          That makes sense. I always get confused when there are two blocks
          connected by a string.
        </div>
      </div>
    </section>
  );
}