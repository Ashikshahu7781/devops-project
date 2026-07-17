import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../../api/auth";

import AuthLayout from "../../components/layout/AuthLayout";
import Input from "../../components/ui/Input";
import PasswordInput from "../../components/ui/PasswordInput";
import Checkbox from "../../components/ui/Checkbox";
import Button from "../../components/ui/Button";
import useToast from "../../hooks/useToast";
function Login() {
  const navigate = useNavigate();
  const toast = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem(
        "access_token",
        response.data.access_token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      toast.success(response.message || "Login successful.");
      
      toast.success("Welcome back!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 800);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Login failed."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div
        className="
          w-full
          rounded-3xl
          border
          border-stone-200
          bg-white
          shadow-xl
          p-8
          text-slate-900
          "
      >
        <h1 className="text-4xl font-extrabold text-center">
          Sports<span className="text-[#556B2F]">Tracker</span>
        </h1>

        <p className="mt-5 text-center text-slate-600">
          Welcome back! Sign in to manage your tournaments,
          teams, fixtures and standings.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <PasswordInput
            id="password"
            label="Password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="flex items-center justify-between">

            <Checkbox
              id="remember"
              label="Remember me"
            />

            <Link
              to="#"
              className="text-sm font-medium text-[#A5D64F] hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>

        </form>

        <p className="mt-8 text-center text-gray-300">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-[#A5D64F] hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </AuthLayout>
  );
}

export default Login;