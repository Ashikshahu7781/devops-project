import {
  Trophy,
  Users,
  CalendarDays,
  Medal,
} from "lucide-react";

import DashboardStatCard from "../../components/ui/DashboardStatCard";

const stats = [
  {
    title: "Tournaments",
    value: 12,
    icon: Trophy,
  },
  {
    title: "Teams",
    value: 148,
    icon: Users,
  },
  {
    title: "Matches",
    value: 326,
    icon: CalendarDays,
  },
  {
    title: "Champions",
    value: 24,
    icon: Medal,
  },
];

function StatsCards() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item) => (
        <DashboardStatCard
          key={item.title}
          title={item.title}
          value={item.value}
          icon={item.icon}
        />
      ))}
    </div>
  );
}

export default StatsCards;