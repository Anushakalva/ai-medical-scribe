export default function Header() {
  const today = new Date().toLocaleDateString();

  return (
    <div className="bg-gradient-to-r from-indigo-700 to-blue-600 rounded-2xl shadow-xl p-8 text-white mb-8">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-4xl font-bold">
            🏥 AI Medical Scribe
          </h1>

          <p className="mt-2 text-indigo-100">
            Intelligent Clinical Documentation System
          </p>
        </div>

        <div className="text-right">
          <h3 className="text-lg font-semibold">
            Welcome, Doctor 👨‍⚕️
          </h3>

          <p>{today}</p>
        </div>

      </div>

    </div>
  );
}