import { useEffect, useState } from "react";
import { fetchPatients } from "../api/patients";
import type { Patient } from "../types/patient";

type PatientsState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; patients: Patient[] };

export function usePatients() {
  const [state, setState] = useState<PatientsState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;

    fetchPatients()
      .then((patients) => {
        if (!cancelled) setState({ status: "success", patients });
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          const message = error instanceof Error ? error.message : "Something went wrong.";
          setState({ status: "error", message });
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
