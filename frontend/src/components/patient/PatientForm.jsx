export default function PatientForm({
  patient,
  setPatient,
}) {
  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-semibold mb-6">
        👤 Patient Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-medium">
            Patient Name
          </label>

          <input
            type="text"
            name="name"
            value={patient.name}
            onChange={handleChange}
            placeholder="Enter patient name"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Age
          </label>

          <input
            type="number"
            name="age"
            value={patient.age}
            onChange={handleChange}
            placeholder="Age"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Gender
          </label>

          <select
            name="gender"
            value={patient.gender}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Patient ID
          </label>

          <input
            type="text"
            name="patientId"
            value={patient.patientId}
            onChange={handleChange}
            placeholder="P1001"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 font-medium">
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            value={patient.phone}
            onChange={handleChange}
            placeholder="9876543210"
            className="w-full border rounded-lg p-3"
          />
        </div>

      </div>
    </div>
  );
}
