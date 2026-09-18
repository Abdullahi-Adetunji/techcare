import type { DiagnosisEntry } from "../types/patient";
import { BloodPressureChart } from "./BloodPressureChart";
import { VitalCard } from "./VitalCard";

export function DiagnosisHistory({ history }: { history: DiagnosisEntry[] }) {
  const latest = history[0];

  return (
    <section
      aria-label="Diagnosis History"
      className="rounded-2xl bg-white p-5 shadow-sm lg:shrink-0"
    >
      <h2 className="mb-4 text-lg font-bold text-slate-900">Diagnosis History</h2>

      <BloodPressureChart history={history} />

      <div className="mt-5 flex flex-col gap-5 sm:flex-row">
        <VitalCard
          icon="/icons/respiratory-rate.svg"
          cardBg="bg-sky-50"
          label="Respiratory Rate"
          value={`${latest.respiratory_rate.value} bpm`}
          levels={latest.respiratory_rate.levels}
        />
        <VitalCard
          icon="/icons/temperature.svg"
          cardBg="bg-rose-50"
          label="Temperature"
          value={`${latest.temperature.value}°F`}
          levels={latest.temperature.levels}
        />
        <VitalCard
          icon="/icons/heart-bpm.svg"
          cardBg="bg-pink-50"
          label="Heart Rate"
          value={`${latest.heart_rate.value} bpm`}
          levels={latest.heart_rate.levels}
        />
      </div>
    </section>
  );
}
