import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/layout/AuthLayout";
import Input from "../../components/ui/Input";
import PasswordInput from "../../components/ui/PasswordInput";
import Checkbox from "../../components/ui/Checkbox";
import Button from "../../components/ui/Button";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Replace this with API authentication later
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
            Organize tournaments, manage teams,
            generate fixtures and crown champions.
      </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >

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
            placeholder="Enter your password"
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
          >
            Login
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