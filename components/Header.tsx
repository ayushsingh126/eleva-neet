export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 24,
      }}
    >
      <div>
      <p className="text-sm font-medium tracking-widest uppercase text-slate-500">
  Monday, 30 June
</p>

<h1 className="mt-2 text-5xl font-bold text-slate-900">
  Today's Mission
</h1>
      </div>

      <button className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl transition hover:bg-blue-100">
  🎯
</button>
    </header>
  );
}