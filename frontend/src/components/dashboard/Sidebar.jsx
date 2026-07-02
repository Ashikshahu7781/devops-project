import {
  LayoutDashboard,
  Trophy,
  Users,
  Calendar,
  BarChart3,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";

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
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <aside className="w-72 bg-[#1F2937] text-white flex flex-col">

      <div className="p-8 border-b border-gray-700">

        <h1 className="text-3xl font-bold">
          SportsTracker
        </h1>

      </div>

      <nav className="flex-1 p-6 space-y-2">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? "bg-[#556B2F]"
                    : "hover:bg-gray-700"
                }`
              }
            >
              <Icon size={20} />

              {item.title}

            </NavLink>
          );
        })}

      </nav>

    </aside>
  );
}

export default Sidebar;