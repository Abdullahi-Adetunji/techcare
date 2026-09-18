import { useState } from "react";

const TAB_NAMES = ["Overview", "Appointments", "Lab Results"] as const;
type TabName = (typeof TAB_NAMES)[number];

export function Tabs({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabName>("Overview");

  return (
    <div className="flex min-h-0 flex-col gap-5 lg:h-full lg:overflow-hidden">
      <div
        role="tablist"
        aria-label="Patient record sections"
        className="flex shrink-0 gap-6 border-b border-slate-200"
      >
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

      <div className="flex min-h-0 flex-col lg:flex-1">
        {activeTab === "Overview" ? (
          <div className="flex min-h-0 flex-1 flex-col gap-5">{children}</div>
        ) : (
          <p className="rounded-2xl bg-white p-8 text-center text-sm text-slate-400 shadow-sm">
            {activeTab} coming soon.
          </p>
        )}
      </div>
    </div>
  );
}
