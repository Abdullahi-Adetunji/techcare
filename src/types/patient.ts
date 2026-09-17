export interface Metric {
  value: number;
  levels: string;
}

export interface BloodPressure {
  systolic: Metric;
  diastolic: Metric;
}

export interface DiagnosisEntry {
  month: string;
  year: number;
  blood_pressure: BloodPressure;
  heart_rate: Metric;
  respiratory_rate: Metric;
  temperature: Metric;
}

export interface DiagnosticListItem {
  name: string;
  description: string;
  status: string;
}

export interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisEntry[];
  diagnostic_list: DiagnosticListItem[];
  lab_results: string[];
}
