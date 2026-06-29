import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle =
    "text-slate-700 hover:text-[#556B2F] transition font-medium";

  return (
    <nav className="bg-white shadow-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#556B2F]">
          SportsTracker
        </h1>

        <div className="flex gap-8">
          <NavLink className={linkStyle} to="/">
            Home
          </NavLink>

          <NavLink className={linkStyle} to="/tournaments">
            Tournaments
          </NavLink>

          <NavLink className={linkStyle} to="/fixtures">
            Fixtures
          </NavLink>

          <NavLink className={linkStyle} to="/teams">
            Teams
          </NavLink>

          <NavLink className={linkStyle} to="/standings">
            Standings
          </NavLink>

          <NavLink className={linkStyle} to="/about">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;