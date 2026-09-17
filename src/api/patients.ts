import type { Patient } from "../types/patient";

const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";

// Credentials for Coalition Technologies' public FED skills-test sandbox
// (test data only, no real PHI — shared with every applicant via the API docs).
const API_USERNAME = "coalition";
const API_PASSWORD = "skills-test";

export async function fetchPatients(): Promise<Patient[]> {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Basic ${btoa(`${API_USERNAME}:${API_PASSWORD}`)}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to load patient data (status ${response.status})`);
  }

  return response.json();
}
