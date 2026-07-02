import { Trophy } from "lucide-react";

function RecentTournaments() {
  const tournaments = [
    {
      id: 1,
      name: "Kerala Premier League",
      sport: "Football",
      status: "Active",
    },
    {
      id: 2,
      name: "College Cricket Cup",
      sport: "Cricket",
      status: "Upcoming",
    },
    {
      id: 3,
      name: "Summer Volleyball Championship",
      sport: "Volleyball",
      status: "Completed",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6">

      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Recent Tournaments
      </h2>

      <div className="space-y-5">

        {tournaments.map((tournament) => (
          <div
            key={tournament.id}
            className="flex items-center justify-between border-b border-stone-100 pb-4 last:border-none last:pb-0"
          >

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <Trophy
                  size={22}
                  className="text-green-700"
                />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  {tournament.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {tournament.sport}
                </p>
              </div>

            </div>

            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold
                ${
                  tournament.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : tournament.status === "Upcoming"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-slate-200 text-slate-700"
                }`}
            >
              {tournament.status}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default RecentTournaments;