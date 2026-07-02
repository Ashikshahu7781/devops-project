import {
  Trophy,
  Users,
  Calendar,
  Medal,
} from "lucide-react";

function RecentActivity() {
  const activities = [
    {
      id: 1,
      icon: Trophy,
      title: "Tournament Created",
      description: "Kerala Premier League was created.",
      color: "bg-green-100 text-green-700",
      time: "2 min ago",
    },
    {
      id: 2,
      icon: Users,
      title: "New Team Registered",
      description: "Eagles FC joined the tournament.",
      color: "bg-blue-100 text-blue-700",
      time: "10 min ago",
    },
    {
      id: 3,
      icon: Calendar,
      title: "Fixture Scheduled",
      description: "CSK vs MI scheduled for Saturday.",
      color: "bg-orange-100 text-orange-700",
      time: "1 hour ago",
    },
    {
      id: 4,
      icon: Medal,
      title: "Tournament Completed",
      description: "Summer Championship has ended.",
      color: "bg-purple-100 text-purple-700",
      time: "Yesterday",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6">

      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="flex items-start gap-4"
            >

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${activity.color}`}
              >
                <Icon size={22} />
              </div>

              <div className="flex-1">

                <div className="flex justify-between">

                  <h3 className="font-semibold text-slate-900">
                    {activity.title}
                  </h3>

                  <span className="text-sm text-slate-500">
                    {activity.time}
                  </span>

                </div>

                <p className="mt-1 text-slate-600">
                  {activity.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default RecentActivity;