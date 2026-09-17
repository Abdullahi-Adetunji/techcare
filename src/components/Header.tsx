import {
  HomeIcon,
  PatientsIcon,
  ScheduleIcon,
  MessageIcon,
  TransactionsIcon,
  GearIcon,
  DotsVerticalIcon,
} from "./icons";

const navItems = [
  { label: "Overview", icon: HomeIcon },
  { label: "Patients", icon: PatientsIcon, active: true },
  { label: "Schedule", icon: ScheduleIcon },
  { label: "Message", icon: MessageIcon },
  { label: "Transactions", icon: TransactionsIcon },
];

export function Header() {
  return (
    <header className="flex shrink-0 flex-wrap items-center justify-between gap-4 bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
          <rect x="4" y="4" width="10" height="10" rx="2" fill="#01F0D0" />
          <rect x="16" y="4" width="10" height="10" rx="2" fill="#000000" />
          <rect x="4" y="16" width="10" height="10" rx="2" fill="#000000" />
          <rect x="16" y="16" width="10" height="10" rx="2" fill="#01F0D0" />
        </svg>
        <span className="text-lg font-bold text-slate-900">
          Tech<span className="text-teal-500">.</span>Care
        </span>
      </div>

      <nav aria-label="Primary" className="flex flex-wrap items-center gap-1">
        {navItems.map(({ label, icon: Icon, active }) => (
          <a
            key={label}
            href="#"
            aria-current={active ? "page" : undefined}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active
                ? "bg-teal-400 text-white"
                : "text-slate-500 hover:bg-slate-100"
            }`}
          >
            <Icon className="h-5 w-5" />
            {label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <img
          src="https://fedskillstest.ct.digital/3.png"
          alt=""
          className="h-11 w-11 rounded-full object-cover"
        />
        <div className="leading-tight">
          <p className="text-sm font-bold text-slate-900">Dr. Jose Simmons</p>
          <p className="text-xs text-slate-400">General Practitioner</p>
        </div>
        <button aria-label="Settings" className="text-slate-400 hover:text-slate-600">
          <GearIcon className="h-5 w-5" />
        </button>
        <button aria-label="More options" className="text-slate-400 hover:text-slate-600">
          <DotsVerticalIcon className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
