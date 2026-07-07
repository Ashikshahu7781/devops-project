import {
  Calendar,
  MapPin,
  Trophy,
  Users,
} from "lucide-react";

function TournamentHeader({ tournament }) {

  if (!tournament) return null;

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-8">

      <div className="flex items-start justify-between">

        <div>

          <h1 className="text-4xl font-bold text-slate-900">
            {tournament.name}
          </h1>

          <p className="mt-2 text-xl text-[#556B2F] font-medium">
            {tournament.sport}
          </p>

          {tournament.description && (
            <p className="mt-4 text-slate-600 max-w-3xl">
              {tournament.description}
            </p>
          )}

        </div>

        <div className="px-4 py-2 rounded-full bg-[#556B2F] text-white">
          {tournament.status}
        </div>

      </div>

      <div className="grid md:grid-cols-4 gap-6 mt-10">

        <div className="flex items-center gap-2">

          <MapPin size={18} />

          <span>{tournament.venue}</span>

        </div>

        <div className="flex items-center gap-2">

          <Calendar size={18} />

          <span>{tournament.start_date}</span>

        </div>

        <div className="flex items-center gap-2">

          <Calendar size={18} />

          <span>{tournament.end_date}</span>

        </div>

        <div className="flex items-center gap-2">

          <Users size={18} />

          <span>{tournament.max_teams} Teams</span>

        </div>

      </div>

    </div>
  );
}

export default TournamentHeader;