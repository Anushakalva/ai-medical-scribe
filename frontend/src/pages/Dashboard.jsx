import { useState } from "react";

import Header from "../components/dashboard/Header";
import StatsCards from "../components/dashboard/StatsCards";

import PatientForm from "../components/patient/PatientForm";
import DoctorForm from "../components/doctor/DoctorForm";
import RecordControls from "../components/recording/RecordControls";

export default function Dashboard() {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    patientId: "",
    phone: "",
  });

  const [doctor, setDoctor] = useState({
    name: "",
    department: "",
    hospital: "",
  });

  const [transcript, setTranscript] = useState("");
  const [soapNote, setSoapNote] = useState("");

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <Header />

        {/* Dashboard Statistics */}
        <StatsCards />

        {/* Patient & Doctor Forms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

          <PatientForm
            patient={patient}
            setPatient={setPatient}
          />

          <DoctorForm
            doctor={doctor}
            setDoctor={setDoctor}
          />

        </div>

        {/* Recording Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

          <h2 className="text-2xl font-bold text-indigo-700 mb-6">
            🎤 Record Consultation
          </h2>

          <RecordControls
            patient={patient}
            doctor={doctor}
            setTranscript={setTranscript}
            setSoapNote={setSoapNote}
          />

        </div>

        {/* Transcript */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

          <h2 className="text-2xl font-bold text-indigo-700 mb-6">
            📝 Consultation Transcript
          </h2>

          <div className="bg-slate-50 border border-gray-200 rounded-xl p-6 min-h-[220px]">

            {transcript ? (
              <p className="whitespace-pre-wrap text-gray-700 leading-8">
                {transcript}
              </p>
            ) : (
              <p className="text-gray-400 italic">
                Record a consultation to view the transcript here.
              </p>
            )}

          </div>

        </div>

        {/* SOAP Note */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-indigo-700 mb-6">
            📄 AI Generated SOAP Note
          </h2>

          <div className="bg-slate-50 border border-gray-200 rounded-xl p-6 min-h-[320px]">

            {soapNote ? (
              <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-8">
                {soapNote}
              </pre>
            ) : (
              <p className="text-gray-400 italic">
                Your AI-generated SOAP note will appear here after transcription.
              </p>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}