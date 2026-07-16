import { useState } from "react";

import PatientForm from "../components/patient/PatientForm";
import RecordControls from "../components/recording/RecordControls";
import DoctorForm from "../components/doctor/DoctorForm";
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
      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-indigo-700">
            🩺 AI Medical Scribe
          </h1>

          <p className="text-gray-600 mt-2">
            Record doctor-patient conversations and automatically generate
            AI-powered SOAP notes.
          </p>
        </div>

        {/* Patient Details */}

    <PatientForm
  patient={patient}
  setPatient={setPatient}
/>

<DoctorForm
  doctor={doctor}
  setDoctor={setDoctor}
/>
        {/* Recording */}

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">
            🎤 Recording
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
          <h2 className="text-2xl font-semibold mb-6">
            📝 Transcript
          </h2>

          <div className="bg-slate-50 border rounded-xl p-5 min-h-[180px]">
            {transcript ? (
              <p className="leading-8 text-gray-700 whitespace-pre-wrap">
                {transcript}
              </p>
            ) : (
              <p className="text-gray-400 italic">
                Your transcript will appear here after recording...
              </p>
            )}
          </div>
        </div>

        {/* SOAP Note */}

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">
            📄 SOAP Note
          </h2>

          <div className="bg-slate-50 border rounded-xl p-5 min-h-[280px]">
            {soapNote ? (
              <pre className="whitespace-pre-wrap text-gray-700 leading-7 font-sans">
                {soapNote}
              </pre>
            ) : (
              <p className="text-gray-400 italic">
                Your AI-generated SOAP note will appear here...
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}