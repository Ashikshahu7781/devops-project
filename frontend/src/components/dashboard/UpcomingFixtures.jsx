import { CalendarDays } from "lucide-react";

function UpcomingFixtures() {
  const fixtures = [
    {
      id: 1,
      teamA: "Eagles FC",
      teamB: "Tigers FC",
      date: "Tomorrow",
      time: "6:00 PM",
    },
    {
      id: 2,
      teamA: "CSK",
      teamB: "MI",
      date: "Saturday",
      time: "7:30 PM",
    },
    {
      id: 3,
      teamA: "Falcons",
      teamB: "Warriors",
      date: "Sunday",
      time: "4:00 PM",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6">

      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Upcoming Fixtures
      </h2>

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
                {fixture.teamA} vs {fixture.teamB}
              </h3>

              <p className="text-sm text-slate-500">
                {fixture.date} • {fixture.time}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default UpcomingFixtures;