type WhyTodayMattersProps = {
  title: string;
  description: string;
};

export default function WhyTodayMatters({
  title,
  description,
}: WhyTodayMattersProps) {
  return (
    <div className="mt-8 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 p-6 text-white shadow-lg">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-2xl">
          🧠
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-100">
            Eleva INSIGHT
          </p>

          <h3 className="text-xl font-bold">
            {title}
          </h3>
        </div>
      </div>

      <p className="leading-7 text-violet-100">
        {description}
      </p>
    </div>
  );
}