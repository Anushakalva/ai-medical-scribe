import { Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import History from "./pages/History";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navigation */}
      <nav className="bg-indigo-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center gap-6 px-6 py-4">

          <Link
            to="/"
            className="font-semibold hover:text-indigo-200"
          >
            🩺 Dashboard
          </Link>

          <Link
            to="/history"
            className="font-semibold hover:text-indigo-200"
          >
            📋 Consultation History
          </Link>

        </div>
      </nav>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
      </Routes>

    </div>
  );
}

export default App;