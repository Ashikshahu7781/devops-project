import { Trophy } from "lucide-react";

function RecentTournaments({ dashboard }) {

  const tournaments = dashboard.latest_tournaments || [];

  return (

    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6">

      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Recent Tournaments
      </h2>

      {tournaments.length === 0 ? (

        <div className="py-10 text-center text-slate-500">

          No tournaments found.

        </div>

      ) : (

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
                  tournament.status === "active"
                    ? "bg-green-100 text-green-700"
                    : tournament.status === "upcoming"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-slate-200 text-slate-700"
                }`}
              >

                {tournament.status}

              </span>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}

export default RecentTournaments;