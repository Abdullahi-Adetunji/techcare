import { Header } from "./components/Header";
import { PatientsList } from "./components/PatientsList";
import { PatientProfileCard } from "./components/PatientProfileCard";
import { Tabs } from "./components/Tabs";
import { DiagnosisHistory } from "./components/DiagnosisHistory";
import { DiagnosticList } from "./components/DiagnosticList";
import { LabResults } from "./components/LabResults";
import { usePatients } from "./hooks/usePatients";

const FEATURED_PATIENT = "Jessica Taylor";

function App() {
  const state = usePatients();

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#f6f7f9]">
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
            <main className="grid min-h-0 flex-1 grid-cols-1 gap-5 overflow-y-auto p-5 lg:grid-cols-[280px_1fr_280px] lg:overflow-hidden">
              <PatientsList patients={state.patients} selectedName={patient.name} />

              <Tabs>
                <DiagnosisHistory history={patient.diagnosis_history} />
                <DiagnosticList items={patient.diagnostic_list} />
              </Tabs>

              <div className="flex min-h-0 flex-col gap-5 lg:h-full lg:overflow-hidden">
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
