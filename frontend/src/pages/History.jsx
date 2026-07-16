import { useEffect, useState } from "react";
import { getConsultations } from "../services/api";

export default function History() {
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const result = await getConsultations();

        if (result.success) {
          setConsultations(result.consultations);
        }
      } catch (error) {
        console.error("Error fetching consultations:", error);
      }
    };

    fetchConsultations();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-indigo-700 mb-8">
            📋 Consultation History
          </h1>

          {consultations.length === 0 ? (
            <p className="text-gray-500 text-center py-10">
              No consultations found.
            </p>
          ) : (
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b bg-gray-100">
                  <th className="text-left py-3 px-4">Patient</th>
                  <th className="text-left py-3 px-4">Doctor</th>
                  <th className="text-left py-3 px-4">Department</th>
                  <th className="text-left py-3 px-4">Date</th>
                </tr>
              </thead>

              <tbody>
                {consultations.map((consultation) => (
                  <tr
                    key={consultation._id}
                    className="border-b hover:bg-slate-50"
                  >
                    <td className="py-4 px-4">
                      {consultation.patient?.name}
                    </td>

                    <td className="py-4 px-4">
                      {consultation.doctor?.name}
                    </td>

                    <td className="py-4 px-4">
                      {consultation.doctor?.department}
                    </td>

                    <td className="py-4 px-4">
                      {new Date(
                        consultation.createdAt
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}