import {
  Trophy,
  Users,
  Calendar,
  Medal,
} from "lucide-react";

function RecentActivity({ dashboard }) {

  const activities = dashboard.recent_activity || [];

  const getIcon = (type) => {

    switch (type) {

      case "tournament":
        return Trophy;

      case "team":
        return Users;

      case "fixture":
        return Calendar;

      case "completed":
        return Medal;

      default:
        return Trophy;

    }

  };

  const getColor = (type) => {

    switch (type) {

      case "tournament":
        return "bg-green-100 text-green-700";

      case "team":
        return "bg-blue-100 text-blue-700";

      case "fixture":
        return "bg-orange-100 text-orange-700";

      case "completed":
        return "bg-purple-100 text-purple-700";

      default:
        return "bg-gray-100 text-gray-700";

    }

  };

  return (

    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6">

      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Recent Activity
      </h2>

      {activities.length === 0 ? (

        <div className="py-10 text-center text-slate-500">

          No recent activity.

        </div>

      ) : (

        <div className="space-y-5">

          {activities.map((activity) => {

            const Icon = getIcon(activity.type);

            return (

              <div
                key={activity.id}
                className="flex items-start gap-4"
              >

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${getColor(activity.type)}`}
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

      )}

    </div>

  );

}

export default RecentActivity;