import {
  Calendar,
  MapPin,
  Users,
} from "lucide-react";

function TournamentHeader({ tournament }) {
  if (!tournament) return null;

  return (
    <div className="rounded-3xl border border-stone-200 bg-white shadow-sm p-5 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 break-words">
            {tournament.name}
          </h1>

          <p className="mt-2 text-lg sm:text-xl font-medium text-[#556B2F]">
            {tournament.sport}
          </p>

          {tournament.description && (
            <p className="mt-4 max-w-3xl break-words text-slate-600">
              {tournament.description}
            </p>
          )}
        </div>

        <div className="w-fit shrink-0 rounded-full bg-[#556B2F] px-4 py-2 text-white">
          {tournament.status}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="flex items-center gap-2 min-w-0">
          <MapPin size={18} className="shrink-0" />
          <span className="break-words">{tournament.venue}</span>
        </div>

        <div className="flex items-center gap-2">
          <Calendar size={18} className="shrink-0" />
          <span>{tournament.start_date}</span>
        </div>

        <div className="flex items-center gap-2">
          <Calendar size={18} className="shrink-0" />
          <span>{tournament.end_date}</span>
        </div>

        <div className="flex items-center gap-2">
          <Users size={18} className="shrink-0" />
          <span>{tournament.max_teams} Teams</span>
        </div>
      </div>
    </div>
  );
}

export default TournamentHeader;