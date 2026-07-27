import { CalendarDays } from "lucide-react";

function UpcomingFixtures({ dashboard }) {
  const fixtures = dashboard.upcoming_fixtures || [];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-5 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5 sm:mb-6">
        Upcoming Fixtures
      </h2>

      {fixtures.length === 0 ? (
        <div className="py-10 text-center text-slate-500">
          No upcoming fixtures.
        </div>
      ) : (
        <div className="space-y-4 sm:space-y-5">
          {fixtures.map((fixture) => (
            <div
              key={fixture.id}
              className="flex items-start gap-3 sm:gap-4 border-b border-stone-100 pb-4 last:border-none last:pb-0"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                <CalendarDays
                  size={22}
                  className="text-blue-700"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-slate-900 break-words">
                  {fixture.home_team}{" "}
                  <span className="text-slate-500">vs</span>{" "}
                  {fixture.away_team}
                </h3>

                <p className="mt-1 text-sm text-slate-500 break-words">
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