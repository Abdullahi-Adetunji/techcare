import {
  HomeIcon,
  PatientsIcon,
  ScheduleIcon,
  MessageIcon,
  TransactionsIcon,
  GearIcon,
  DotsHorizontalIcon,
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
    <header className="mx-5 mt-5 grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-full bg-white px-4 py-3 shadow-sm lg:gap-4 lg:px-6 lg:py-4">
      <div className="flex items-center">
        <img src="/logo.svg" alt="Tech.Care" className="h-8 w-auto" />
      </div>

      <nav
        aria-label="Primary"
        className="flex min-w-0 items-center gap-1 overflow-x-auto lg:justify-center lg:overflow-visible"
      >
        {navItems.map(({ label, icon: Icon, active }) => (
          <a
            key={label}
            href="#"
            aria-current={active ? "page" : undefined}
            className={`flex shrink-0 items-center gap-2 rounded-full px-3.5 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors lg:px-5 ${
              active
                ? "bg-teal-400 text-white"
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
            }`}
          >
            <Icon className="h-5 w-5 shrink-0" />
            <span className="hidden sm:inline">{label}</span>
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2 lg:gap-4">
        <img src="/doctor.png" alt="" className="h-11 w-11 rounded-full object-cover" />
        <div className="hidden leading-tight sm:block">
          <p className="text-sm font-bold whitespace-nowrap text-slate-900">Dr. Jose Simmons</p>
          <p className="text-xs whitespace-nowrap text-slate-400">General Practitioner</p>
        </div>
        <button aria-label="Settings" className="text-slate-400 hover:text-slate-600">
          <GearIcon className="h-5 w-5" />
        </button>
        <button aria-label="More options" className="text-slate-400 hover:text-slate-600">
          <DotsHorizontalIcon className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
