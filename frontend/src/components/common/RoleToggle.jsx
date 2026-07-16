import { useState } from "react";

export default function RoleToggle() {
  const [role, setRole] = useState("doctor");

  return (
    <div className="flex items-center gap-3">

      <button
        onClick={() => setRole("doctor")}
        className={`px-5 py-2 rounded-lg font-medium transition ${
          role === "doctor"
            ? "bg-indigo-600 text-white shadow-md"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        👨‍⚕️ Doctor
      </button>

      <button
        onClick={() => setRole("patient")}
        className={`px-5 py-2 rounded-lg font-medium transition ${
          role === "patient"
            ? "bg-indigo-600 text-white shadow-md"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        🧑 Patient
      </button>

    </div>
  );
}