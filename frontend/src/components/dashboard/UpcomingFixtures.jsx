import { CalendarDays } from "lucide-react";

function UpcomingFixtures({ dashboard }) {

  const fixtures = dashboard.upcoming_fixtures || [];

  return (

    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6">

      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Upcoming Fixtures
      </h2>

      {fixtures.length === 0 ? (

        <div className="py-10 text-center text-slate-500">

          No upcoming fixtures.

        </div>

      ) : (

        <div className="space-y-5">

          {fixtures.map((fixture) => (

            <div
              key={fixture.id}
              className="flex items-center gap-4 border-b border-stone-100 pb-4 last:border-none last:pb-0"
            >

              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

                <CalendarDays
                  size={22}
                  className="text-blue-700"
                />

              </div>

              <div>

                <h3 className="font-semibold text-slate-900">
                  {fixture.home_team} vs {fixture.away_team}
                </h3>

                <p className="text-sm text-slate-500">
                  {fixture.match_date || "Date not scheduled"}
                </p>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}

export default UpcomingFixtures;