import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { DiagnosisEntry } from "../types/patient";
import { ChevronDownIcon, ArrowUpIcon, ArrowDownIcon } from "./icons";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);
ChartJS.defaults.font.family =
  "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";

const SYSTOLIC_COLOR = "#e0779c";
const DIASTOLIC_COLOR = "#8c82e0";

interface BloodPressureChartProps {
  history: DiagnosisEntry[];
}

export function BloodPressureChart({ history }: BloodPressureChartProps) {
  const lastSixMonths = history.slice(0, 6).slice().reverse();
  const latest = history[0];

  const labels = lastSixMonths.map((entry) => `${entry.month.slice(0, 3)}, ${entry.year}`);
  const systolicData = lastSixMonths.map((entry) => entry.blood_pressure.systolic.value);
  const diastolicData = lastSixMonths.map((entry) => entry.blood_pressure.diastolic.value);

  const data = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: SYSTOLIC_COLOR,
        backgroundColor: SYSTOLIC_COLOR,
        pointBackgroundColor: SYSTOLIC_COLOR,
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 6,
        borderWidth: 2.5,
        tension: 0.4,
        capBezierPoints: true,
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: DIASTOLIC_COLOR,
        backgroundColor: DIASTOLIC_COLOR,
        pointBackgroundColor: DIASTOLIC_COLOR,
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 6,
        borderWidth: 2.5,
        tension: 0.4,
        capBezierPoints: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1c2a3a",
        padding: 10,
        cornerRadius: 8,
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: { stepSize: 20, color: "#9291a5", padding: 8, font: { size: 12 } },
        grid: { color: "#ddd6f2", drawTicks: false },
        border: { display: false },
      },
      x: {
        ticks: { color: "#9291a5", font: { size: 12 } },
        grid: { display: false },
        border: { display: false },
      },
    },
  };

  return (
    <div className="rounded-2xl bg-[#f2edfc] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-bold text-slate-900">Blood Pressure</h3>
        <span className="flex items-center gap-1 text-sm font-semibold text-slate-500">
          Last 6 months
          <ChevronDownIcon className="h-4 w-4" />
        </span>
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <div className="h-64 w-full min-w-0 md:flex-1">
          <Line data={data} options={options} />
        </div>

        <div className="flex shrink-0 flex-col gap-10 md:w-44 md:pt-2">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-slate-500">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: SYSTOLIC_COLOR }}
              />
              Systolic
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900">
              {latest.blood_pressure.systolic.value}
            </p>
            <p className="flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap text-slate-500">
              {latest.blood_pressure.systolic.levels.toLowerCase().includes("higher") ? (
                <ArrowUpIcon className="h-2.5 w-2.5" />
              ) : (
                <ArrowDownIcon className="h-2.5 w-2.5" />
              )}
              {latest.blood_pressure.systolic.levels}
            </p>
          </div>

          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-slate-500">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: DIASTOLIC_COLOR }}
              />
              Diastolic
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900">
              {latest.blood_pressure.diastolic.value}
            </p>
            <p className="flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap text-slate-500">
              {latest.blood_pressure.diastolic.levels.toLowerCase().includes("higher") ? (
                <ArrowUpIcon className="h-2.5 w-2.5" />
              ) : (
                <ArrowDownIcon className="h-2.5 w-2.5" />
              )}
              {latest.blood_pressure.diastolic.levels}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
