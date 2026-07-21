import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Public Routes */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Protected Dashboard */}

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Protected History */}

      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        }
      />

      {/* Redirect */}

      <Route
        path="*"
        element={<Navigate to="/" />}
      />

    </Routes>
  );
}

export default App;