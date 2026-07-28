import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const token = localStorage.getItem("access_token");

  const linkStyle =
    "text-slate-700 hover:text-[#556B2F] transition font-medium";

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");

    setIsOpen(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="text-xl sm:text-2xl font-bold text-[#556B2F]"
          >
            SportsTracker
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink className={linkStyle} to="/">
              Home
            </NavLink>

            <NavLink className={linkStyle} to="/about">
              About
            </NavLink>

            {token ? (
              <>
                <NavLink className={linkStyle} to="/dashboard">
                  Dashboard
                </NavLink>

                <NavLink className={linkStyle} to="/tournaments">
                  Tournaments
                </NavLink>

                <NavLink className={linkStyle} to="/teams">
                  Teams
                </NavLink>

                <NavLink className={linkStyle} to="/fixtures">
                  Fixtures
                </NavLink>

                <NavLink className={linkStyle} to="/standings">
                  Standings
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="px-5 py-2 rounded-xl border border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="px-5 py-2 rounded-xl border border-[#556B2F] text-[#556B2F] font-semibold hover:bg-[#556B2F] hover:text-white transition"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  className="px-5 py-2 rounded-xl bg-[#556B2F] text-white font-semibold hover:bg-[#445624] transition"
                >
                  Register
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 border-t pt-4">
            <NavLink
              to="/"
              className={linkStyle}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={linkStyle}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>

            {token ? (
              <>
                <NavLink
                  to="/dashboard"
                  className={linkStyle}
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </NavLink>

                <NavLink
                  to="/tournaments"
                  className={linkStyle}
                  onClick={() => setIsOpen(false)}
                >
                  Tournaments
                </NavLink>

                <NavLink
                  to="/teams"
                  className={linkStyle}
                  onClick={() => setIsOpen(false)}
                >
                  Teams
                </NavLink>

                <NavLink
                  to="/fixtures"
                  className={linkStyle}
                  onClick={() => setIsOpen(false)}
                >
                  Fixtures
                </NavLink>

                <NavLink
                  to="/standings"
                  className={linkStyle}
                  onClick={() => setIsOpen(false)}
                >
                  Standings
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="w-full rounded-xl border border-red-500 px-5 py-2 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-center rounded-xl border border-[#556B2F] px-5 py-2 text-[#556B2F] font-semibold hover:bg-[#556B2F] hover:text-white transition"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="text-center rounded-xl bg-[#556B2F] px-5 py-2 text-white font-semibold hover:bg-[#445624] transition"
                >
                  Register
                </NavLink>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;