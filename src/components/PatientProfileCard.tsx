import type { Patient } from "../types/patient";

function formatDob(dob: string) {
  const date = new Date(dob);
  if (Number.isNaN(date.getTime())) return dob;
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function PatientProfileCard({ patient }: { patient: Patient }) {
  const genderIcon = patient.gender.toLowerCase() === "male" ? "/icons/male.svg" : "/icons/female.svg";

  const details = [
    { icon: "/icons/birth.svg", label: "Date Of Birth", value: formatDob(patient.date_of_birth) },
    { icon: genderIcon, label: "Gender", value: patient.gender },
    { icon: "/icons/phone.svg", label: "Contact Info.", value: patient.phone_number },
    { icon: "/icons/phone.svg", label: "Emergency Contacts", value: patient.emergency_contact },
    { icon: "/icons/insurance.svg", label: "Insurance Provider", value: patient.insurance_type },
  ];

  return (
    <section className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm lg:shrink-0">
      <img
        src={patient.profile_picture}
        alt={patient.name}
        className="h-32 w-32 rounded-full object-cover"
      />
      <h2 className="mt-4 text-xl font-bold text-slate-900">{patient.name}</h2>

      <dl className="mt-6 flex w-full flex-col gap-5 text-left">
        {details.map(({ icon, label, value }) => (
          <div key={label} className="flex items-start gap-3">
            <img src={icon} alt="" className="h-9 w-9 shrink-0" />
            <div>
              <dt className="text-xs text-slate-400">{label}</dt>
              <dd className="text-sm font-semibold text-slate-800">{value}</dd>
            </div>
          </div>
        ))}
      </dl>

      <button className="mt-6 w-full rounded-full bg-teal-400 py-3 text-sm font-bold text-white hover:bg-teal-500">
        Show All Information
      </button>
    </section>
  );
}
