import type { DiagnosticListItem } from "../types/patient";

const statusStyles: Record<string, string> = {
  "under observation": "bg-amber-50 text-amber-600",
  cured: "bg-emerald-50 text-emerald-600",
  inactive: "bg-slate-100 text-slate-500",
  untreated: "bg-rose-50 text-rose-600",
};

export function DiagnosticList({ items }: { items: DiagnosticListItem[] }) {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm lg:flex lg:min-h-0 lg:flex-1 lg:flex-col">
      <h3 className="mb-4 text-lg font-bold text-slate-900 lg:shrink-0">Diagnostic List</h3>
      <div className="overflow-x-auto lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:overscroll-contain">
        <table className="w-full min-w-[480px] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50 text-sm text-slate-500">
              <th className="rounded-l-lg bg-slate-50 px-4 py-3 font-semibold lg:sticky lg:top-0">
                Problem/Diagnosis
              </th>
              <th className="bg-slate-50 px-4 py-3 font-semibold lg:sticky lg:top-0">
                Description
              </th>
              <th className="rounded-r-lg bg-slate-50 px-4 py-3 font-semibold lg:sticky lg:top-0">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.name} className="border-b border-slate-50 text-sm">
                <td className="px-4 py-4 font-semibold text-slate-900">{item.name}</td>
                <td className="px-4 py-4 text-slate-500">{item.description}</td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                      statusStyles[item.status.toLowerCase()] ?? "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
