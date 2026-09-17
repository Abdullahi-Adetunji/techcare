import { useState } from "react";

const TAB_NAMES = ["Overview", "Appointments", "Lab Results"] as const;
type TabName = (typeof TAB_NAMES)[number];

export function Tabs({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabName>("Overview");

  return (
    <div>
      <div role="tablist" aria-label="Patient record sections" className="mb-5 flex gap-6 border-b border-slate-200">
        {TAB_NAMES.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className={`-mb-px border-b-2 px-1 pb-3 text-sm font-semibold transition-colors ${
              activeTab === tab
                ? "border-teal-400 text-slate-900"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Overview" ? (
        children
      ) : (
        <p className="rounded-2xl bg-white p-8 text-center text-sm text-slate-400 shadow-sm">
          {activeTab} coming soon.
        </p>
      )}
    </div>
  );
}
