import { ArrowUpIcon, ArrowDownIcon } from "./icons";

interface VitalCardProps {
  icon: string;
  cardBg: string;
  label: string;
  value: string;
  levels: string;
}

export function VitalCard({ icon, cardBg, label, value, levels }: VitalCardProps) {
  const isNormal = levels.toLowerCase() === "normal";
  const isHigher = levels.toLowerCase().includes("higher");

  return (
    <div className={`flex flex-col gap-4 rounded-2xl p-5 sm:flex-1 ${cardBg}`}>
      <img src={icon} alt="" className="h-14 w-14" />
      <div>
        <p className="text-sm font-semibold text-slate-500">{label}</p>
        <p className="mt-1 text-2xl font-bold text-slate-900">{value}</p>
      </div>
      {!isNormal ? (
        <p className="flex items-center gap-1.5 text-sm font-semibold text-slate-600">
          {isHigher ? (
            <ArrowUpIcon className="h-2.5 w-2.5" />
          ) : (
            <ArrowDownIcon className="h-2.5 w-2.5" />
          )}
          {levels}
        </p>
      ) : (
        <p className="text-sm font-semibold text-slate-400">{levels}</p>
      )}
    </div>
  );
}
