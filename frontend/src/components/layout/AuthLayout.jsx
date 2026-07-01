import { heroBanner } from "../../assets/images";

function AuthLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background */}

      <img
        src={heroBanner}
        alt="SportsTracker"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/70" />

      {/* Center */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">

        {children}

      </div>

    </div>
  );
}

export default AuthLayout;