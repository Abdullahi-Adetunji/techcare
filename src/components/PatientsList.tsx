import type { Patient } from "../types/patient";
import { SearchIcon, DotsVerticalIcon } from "./icons";

interface PatientsListProps {
  patients: Patient[];
  selectedName: string;
}

export function PatientsList({ patients, selectedName }: PatientsListProps) {
  return (
    <section aria-label="Patients" className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900">Patients</h2>
        <SearchIcon className="h-5 w-5 text-slate-400" />
      </div>

      <ul className="flex flex-col gap-1 overflow-y-auto overscroll-contain lg:max-h-[calc(100vh-220px)]">
        {patients.map((patient) => {
          const isSelected = patient.name === selectedName;
          return (
            <li key={patient.name}>
              <div
                aria-current={isSelected ? "true" : undefined}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${
                  isSelected ? "bg-teal-50" : ""
                }`}
              >
                <img
                  src={patient.profile_picture}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-slate-900">
                    {patient.name}
                  </p>
                  <p className="text-xs text-slate-400">
                    {patient.gender}, {patient.age}
                  </p>
                </div>
                <button aria-label={`More options for ${patient.name}`} className="text-slate-400">
                  <DotsVerticalIcon className="h-5 w-5" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
