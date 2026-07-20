import { useEffect, useState, useCallback } from "react";
import {
  getConsultations,
  deleteConsultation,
} from "../services/api";

export default function History() {
  const [consultations, setConsultations] = useState([]);

  // Fetch all consultations
  const fetchConsultations = useCallback(async () => {
    try {
      const result = await getConsultations();

      if (result.success) {
        setConsultations(result.consultations);
      }
    } catch (error) {
      console.error("Error fetching consultations:", error);
    }
  }, []);

  // Load consultations on page load
  useEffect(() => {
    fetchConsultations();
  }, [fetchConsultations]);

  // Delete consultation
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this consultation?"
    );

    if (!confirmDelete) return;

    try {
      const result = await deleteConsultation(id);

      if (result.success) {
        alert("✅ Consultation deleted successfully!");

        // Remove deleted consultation from UI immediately
        setConsultations((prev) =>
          prev.filter((consultation) => consultation._id !== id)
        );

        // Optional: refresh from backend
        // await fetchConsultations();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert("❌ Failed to delete consultation.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h1 className="text-3xl font-bold text-indigo-700 mb-8">
            📋 Consultation History
          </h1>

          {consultations.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">
                No consultations found.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">

              <table className="w-full border-collapse">

                <thead>
                  <tr className="bg-indigo-100 border-b">
                    <th className="text-left px-5 py-4">Patient</th>
                    <th className="text-left px-5 py-4">Doctor</th>
                    <th className="text-left px-5 py-4">Department</th>
                    <th className="text-left px-5 py-4">Date</th>
                    <th className="text-center px-5 py-4">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {consultations.map((consultation) => (
                    <tr
                      key={consultation._id}
                      className="border-b hover:bg-slate-50 transition"
                    >
                      <td className="px-5 py-4">
                        {consultation.patient?.name}
                      </td>

                      <td className="px-5 py-4">
                        {consultation.doctor?.name}
                      </td>

                      <td className="px-5 py-4">
                        {consultation.doctor?.department}
                      </td>

                      <td className="px-5 py-4">
                        {new Date(
                          consultation.createdAt
                        ).toLocaleDateString()}
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex justify-center gap-2">

                          <button
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
                          >
                            👁 View
                          </button>

                          <button
                            onClick={() =>
                              handleDelete(consultation._id)
                            }
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                          >
                            🗑 Delete
                          </button>

                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}