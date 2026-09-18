import { DownloadIcon } from "./icons";

export function LabResults({ results }: { results: string[] }) {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm lg:shrink-0">
      <h3 className="mb-3 text-lg font-bold text-slate-900">Lab Results</h3>
      <ul className="flex flex-col">
        {results.map((result, index) => (
          <li
            key={result}
            className={`flex items-center justify-between py-3 text-sm font-semibold text-slate-700 ${
              index !== 0 ? "border-t border-slate-50" : ""
            }`}
          >
            {result}
            <button aria-label={`Download ${result}`} className="text-slate-400 hover:text-slate-600">
              <DownloadIcon className="h-5 w-5" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
