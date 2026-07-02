import {
  Trophy,
  Users,
  Calendar,
  Medal,
} from "lucide-react";

function DashboardStats() {
  const stats = [
    {
      title: "Tournaments",
      value: 12,
      icon: Trophy,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Teams",
      value: 48,
      icon: Users,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Fixtures",
      value: 126,
      icon: Calendar,
      color: "bg-orange-100 text-orange-700",
    },
    {
      title: "Completed",
      value: 8,
      icon: Medal,
      color: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200"
          >
            <div className="flex justify-between items-center">

              <div>
                <p className="text-slate-500">
                  {stat.title}
                </p>

                <h2 className="text-4xl font-bold mt-2">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`h-14 w-14 rounded-xl flex items-center justify-center ${stat.color}`}
              >
                <Icon size={28} />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DashboardStats;