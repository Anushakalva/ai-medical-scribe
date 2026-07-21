import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await loginUser({
        email,
        password,
      });

      if (result.success) {
        // Save JWT Token
        localStorage.setItem("token", result.token);

        // Save Logged-in User
        localStorage.setItem(
          "user",
          JSON.stringify(result.user)
        );

        alert("✅ Login Successful!");

        navigate("/");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-2">
          🩺 AI Medical Scribe
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to continue
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              className="w-full border rounded-lg px-4 py-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              className="w-full border rounded-lg px-4 py-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}