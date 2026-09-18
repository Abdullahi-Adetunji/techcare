import type { ComponentType } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "./icons";

interface VitalCardProps {
  icon: ComponentType<{ className?: string }>;
  iconBg: string;
  cardBg: string;
  label: string;
  value: string;
  levels: string;
}

export function VitalCard({ icon: Icon, iconBg, cardBg, label, value, levels }: VitalCardProps) {
  const isNormal = levels.toLowerCase() === "normal";
  const isHigher = levels.toLowerCase().includes("higher");

  return (
    <div className={`flex flex-col gap-4 rounded-2xl p-5 sm:flex-1 ${cardBg}`}>
      <span className={`flex h-14 w-14 items-center justify-center rounded-full ${iconBg}`}>
        <Icon className="h-7 w-7" />
      </span>
      <div>
        <p className="text-sm font-semibold text-slate-500">{label}</p>
        <p className="mt-1 text-2xl font-bold text-slate-900">{value}</p>
      </div>
      {!isNormal ? (
        <p className="flex items-center gap-1 text-sm font-semibold text-slate-600">
          {isHigher ? (
            <ChevronUpIcon className="h-4 w-4" />
          ) : (
            <ChevronDownIcon className="h-4 w-4" />
          )}
          {levels}
        </p>
      ) : (
        <p className="text-sm font-semibold text-slate-400">{levels}</p>
      )}
    </div>
  );
}
