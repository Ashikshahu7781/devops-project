import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("access_token");

  const linkStyle =
    "text-slate-700 hover:text-[#556B2F] transition font-medium";

  const handleLogout = () => {

    localStorage.removeItem("access_token");
    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <nav className="bg-white shadow-sm border-b border-stone-200">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <NavLink
          to="/"
          className="text-2xl font-bold text-[#556B2F]"
        >
          SportsTracker
        </NavLink>

        <div className="flex items-center gap-8">

          <NavLink
            className={linkStyle}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={linkStyle}
            to="/about"
          >
            About
          </NavLink>

          {token ? (

            <>

              <NavLink
                className={linkStyle}
                to="/dashboard"
              >
                Dashboard
              </NavLink>

              <NavLink
                className={linkStyle}
                to="/tournaments"
              >
                Tournaments
              </NavLink>

              <NavLink
                className={linkStyle}
                to="/teams"
              >
                Teams
              </NavLink>

              <NavLink
                className={linkStyle}
                to="/fixtures"
              >
                Fixtures
              </NavLink>

              <NavLink
                className={linkStyle}
                to="/standings"
              >
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

      </div>

    </nav>

  );

}

export default Navbar;