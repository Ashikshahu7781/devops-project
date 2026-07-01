import {
  Trophy,
  Users,
  CalendarDays,
  BarChart3,
} from "lucide-react";

function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold text-slate-900">
        About SportsTracker
      </h1>

      <p className="mt-6 text-lg text-slate-600 leading-8">
        SportsTracker is a modern tournament management platform designed to
        simplify organizing sports events. From registrations and fixtures to
        standings and match results, everything is managed through one
        intuitive platform.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-16">

        <div className="bg-white rounded-3xl shadow p-8 flex gap-4">
          <Trophy className="text-[#556B2F]" size={32} />
          <div>
            <h3 className="font-bold text-xl">Tournament Management</h3>
            <p className="mt-2 text-slate-600">
              Create and manage tournaments effortlessly.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow p-8 flex gap-4">
          <Users className="text-[#556B2F]" size={32} />
          <div>
            <h3 className="font-bold text-xl">Team Registration</h3>
            <p className="mt-2 text-slate-600">
              Register teams, players and coaches.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow p-8 flex gap-4">
          <CalendarDays className="text-[#556B2F]" size={32} />
          <div>
            <h3 className="font-bold text-xl">Fixtures</h3>
            <p className="mt-2 text-slate-600">
              Generate schedules and manage match timings.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow p-8 flex gap-4">
          <BarChart3 className="text-[#556B2F]" size={32} />
          <div>
            <h3 className="font-bold text-xl">Live Standings</h3>
            <p className="mt-2 text-slate-600">
              Monitor rankings and tournament progress in real time.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;