export default function DoctorForm({
  doctor,
  setDoctor,
}) {
  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-semibold mb-6">
        👨‍⚕️ Doctor Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-medium">
            Doctor Name
          </label>

          <input
            type="text"
            name="name"
            value={doctor.name}
            onChange={handleChange}
            placeholder="Dr. John Smith"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Department
          </label>

          <select
            name="department"
            value={doctor.department}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="">Select Department</option>
            <option>General Medicine</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Orthopedics</option>
            <option>Pediatrics</option>
            <option>Dermatology</option>
            <option>ENT</option>
            <option>Gynecology</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 font-medium">
            Hospital
          </label>

          <input
            type="text"
            name="hospital"
            value={doctor.hospital}
            onChange={handleChange}
            placeholder="ABC Hospital"
            className="w-full border rounded-lg p-3"
          />
        </div>

      </div>
    </div>
  );
}