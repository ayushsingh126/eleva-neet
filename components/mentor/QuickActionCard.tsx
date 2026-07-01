type QuickActionCardProps = {
  icon: string;
  title: string;
  subtitle: string;
  iconBg: string;
};

export default function QuickActionCard({
  icon,
  title,
  subtitle,
  iconBg,
}: QuickActionCardProps) {
  return (
    <button className="rounded-3xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${iconBg}`}
      >
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {subtitle}
      </p>
    </button>
  );
}