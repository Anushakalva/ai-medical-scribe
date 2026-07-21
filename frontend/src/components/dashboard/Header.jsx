import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const today = new Date().toLocaleDateString();

  // Get logged-in user
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="bg-gradient-to-r from-indigo-700 to-blue-600 rounded-2xl shadow-xl p-8 text-white mb-8">

      <div className="flex justify-between items-center">

        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-bold">
            🏥 AI Medical Scribe
          </h1>

          <p className="mt-2 text-indigo-100">
            Intelligent Clinical Documentation System
          </p>
        </div>

        {/* Right Section */}
        <div className="text-right">

          <h3 className="text-lg font-semibold">
            Welcome, {user?.name || "Doctor"} 👨‍⚕️
          </h3>

          <p className="text-indigo-100">
            {today}
          </p>

          {/* Navigation Buttons */}
          <div className="flex gap-3 justify-end mt-4">

            <button
              onClick={() => navigate("/history")}
              className="bg-white text-indigo-700 px-5 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition shadow"
            >
              📋 History
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold transition shadow"
            >
              🚪 Logout
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}