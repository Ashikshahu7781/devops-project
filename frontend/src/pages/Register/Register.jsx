import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../../api/auth";

import AuthLayout from "../../components/layout/AuthLayout";
import Input from "../../components/ui/Input";
import PasswordInput from "../../components/ui/PasswordInput";
import Button from "../../components/ui/Button";
import useToast from "../../hooks/useToast";

function Register() {
  const navigate = useNavigate();
  const toast = useToast();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await registerUser({
        full_name: formData.full_name,
        email: formData.email,
        password: formData.password,
      });

     toast.success("Account created successfully.");

      setTimeout(() => {
        navigate("/login");
      }, 1200);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Registration failed."
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
          Create your account and start managing tournaments
          with confidence.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >
          <Input
            id="full_name"
            label="Full Name"
            placeholder="Enter your full name"
            value={formData.full_name}
            onChange={handleChange}
            required
          />

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
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <PasswordInput
            id="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <Button
            type="submit"
            className="w-full bg-[#6D8D2E] hover:bg-[#5C7728]"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Account"}
          </Button>
        </form>

        <p className="mt-8 text-center text-gray-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-[#A5D64F] hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Register;