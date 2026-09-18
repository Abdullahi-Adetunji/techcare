import { Header } from "./components/Header";
import { PatientsList } from "./components/PatientsList";
import { PatientProfileCard } from "./components/PatientProfileCard";
import { DiagnosisHistory } from "./components/DiagnosisHistory";
import { DiagnosticList } from "./components/DiagnosticList";
import { LabResults } from "./components/LabResults";
import { usePatients } from "./hooks/usePatients";

const FEATURED_PATIENT = "Jessica Taylor";

function App() {
  const state = usePatients();

  return (
    <div className="flex flex-col bg-[#f6f7f9] lg:h-screen lg:overflow-hidden">
      <Header />

      {state.status === "loading" && (
        <p className="p-10 text-center text-slate-500" role="status">
          Loading patient data…
        </p>
      )}

      {state.status === "error" && (
        <p className="p-10 text-center text-rose-500" role="alert">
          Couldn't load patient data: {state.message}
        </p>
      )}

      {state.status === "success" &&
        (() => {
          const patient = state.patients.find((p) => p.name === FEATURED_PATIENT);

          if (!patient) {
            return (
              <p className="p-10 text-center text-rose-500" role="alert">
                Couldn't find a record for {FEATURED_PATIENT}.
              </p>
            );
          }

          return (
            <main className="grid grid-cols-1 gap-5 p-5 lg:min-h-0 lg:flex-1 lg:grid-cols-[280px_1fr_280px] lg:overflow-hidden">
              <PatientsList patients={state.patients} selectedName={patient.name} />

              <div className="flex flex-col gap-5 lg:h-full lg:min-h-0 lg:overflow-hidden">
                <DiagnosisHistory history={patient.diagnosis_history} />
                <DiagnosticList items={patient.diagnostic_list} />
              </div>

              <div className="flex flex-col gap-5 lg:h-full lg:min-h-0 lg:overflow-hidden">
                <PatientProfileCard patient={patient} />
                <LabResults results={patient.lab_results} />
              </div>
            </main>
          );
        })()}
    </div>
  );
}

export default App;
