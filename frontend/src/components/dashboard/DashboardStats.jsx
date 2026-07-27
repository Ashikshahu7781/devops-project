import { useEffect, useState } from "react";

import {
  Trophy,
  Users,
  Calendar,
  Medal,
} from "lucide-react";

import { getDashboard } from "../../api/dashboard";

function DashboardStats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await getDashboard();
      const data = response;

      setStats([
        {
          title: "Tournaments",
          value: data.total_tournaments,
          icon: Trophy,
          color: "bg-green-100 text-green-700",
        },
        {
          title: "Teams",
          value: data.total_teams,
          icon: Users,
          color: "bg-blue-100 text-blue-700",
        },
        {
          title: "Fixtures",
          value: data.total_fixtures,
          icon: Calendar,
          color: "bg-orange-100 text-orange-700",
        },
        {
          title: "Completed",
          value: data.completed_matches,
          icon: Medal,
          color: "bg-purple-100 text-purple-700",
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-stone-200"
          >
            <div className="flex items-center justify-between">
              <div className="min-w-0">
                <p className="text-sm sm:text-base text-slate-500">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-3xl sm:text-4xl font-bold break-words">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl ${stat.color}`}
              >
                <Icon
                  size={24}
                  className="sm:w-7 sm:h-7"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DashboardStats;