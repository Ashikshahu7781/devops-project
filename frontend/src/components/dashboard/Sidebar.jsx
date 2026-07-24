import {
  LayoutDashboard,
  Trophy,
  Users,
  Calendar,
  BarChart3,
  User,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Tournaments",
    icon: Trophy,
    path: "/tournaments",
  },
  {
    title: "Teams",
    icon: Users,
    path: "/teams",
  },
  {
    title: "Fixtures",
    icon: Calendar,
    path: "/fixtures",
  },
  {
    title: "Standings",
    icon: BarChart3,
    path: "/standings",
  },
  {
    title: "My Account",
    icon: User,
    path: "/account",
  },
];

function Sidebar({ closeSidebar }) {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");

    if (closeSidebar) {
      closeSidebar();
    }

    navigate("/login", { replace: true });
  };

  return (
    <aside className="w-72 h-screen bg-[#1F2937] text-white flex flex-col shadow-xl">

      {/* Logo */}
      <div className="p-8 border-b border-gray-700">
        <h1 className="text-3xl font-bold">
          Sports
          <span className="text-[#84A83A]">Tracker</span>
        </h1>
      </div>

      {/* Logged-in User */}
      <div className="px-6 py-5 border-b border-gray-700">
        <p className="text-sm text-gray-400">
          Logged in as
        </p>

        <h2 className="text-lg font-semibold mt-1 truncate">
          {user?.full_name || "User"}
        </h2>

        <p className="text-sm text-gray-400 truncate">
          {user?.email}
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              onClick={() => {
                if (closeSidebar) {
                  closeSidebar();
                }
              }}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-[#556B2F]"
                    : "hover:bg-gray-700"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-6 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all duration-200"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;