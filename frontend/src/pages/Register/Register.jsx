import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/layout/AuthLayout";
import Input from "../../components/ui/Input";
import PasswordInput from "../../components/ui/PasswordInput";
import Button from "../../components/ui/Button";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with API call later
    navigate("/dashboard");
  };

  return (
    <AuthLayout>
      <div
        className="
          w-full
          max-w-md
          rounded-3xl
          border
          border-white/20
          bg-black/35
          backdrop-blur-xl
          shadow-2xl
          p-8
          text-white
        "
      >
        <h1 className="text-4xl font-extrabold text-center">
          Sports<span className="text-[#84A83A]">Tracker</span>
        </h1>

        <p className="mt-5 text-center text-white/90">
          Create your account and start managing tournaments
          like a professional.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >
          <Input
            dark
            id="name"
            label="Full Name"
            placeholder="Enter your full name"
            required
          />

          <Input
            dark
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <PasswordInput
            dark
            id="password"
            label="Password"
            placeholder="Create a password"
            required
          />

          <PasswordInput
            dark
            id="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm your password"
            required
          />

          <Button
            type="submit"
            className="w-full bg-[#6D8D2E] hover:bg-[#5C7728]"
          >
            Create Account
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