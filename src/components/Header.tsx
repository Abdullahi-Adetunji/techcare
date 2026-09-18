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
    <header className="grid shrink-0 grid-cols-[auto_1fr_auto] items-center gap-4 bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
          <path d="M16 16 16 2 30 16Z" fill="#01D8C4" />
          <path d="M16 16 30 16 16 30Z" fill="#0B1E33" />
          <path d="M16 16 16 30 2 16Z" fill="#01D8C4" />
          <path d="M16 16 2 16 16 2Z" fill="#0B1E33" />
        </svg>
        <span className="text-lg font-bold whitespace-nowrap text-slate-900">
          Tech<span className="text-teal-500">.</span>Care
        </span>
      </div>

      <nav aria-label="Primary" className="flex flex-wrap items-center justify-center gap-1">
        {navItems.map(({ label, icon: Icon, active }) => (
          <a
            key={label}
            href="#"
            aria-current={active ? "page" : undefined}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors ${
              active
                ? "bg-teal-400 text-white"
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
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
        <div className="hidden leading-tight sm:block">
          <p className="text-sm font-bold whitespace-nowrap text-slate-900">Dr. Jose Simmons</p>
          <p className="text-xs whitespace-nowrap text-slate-400">General Practitioner</p>
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
