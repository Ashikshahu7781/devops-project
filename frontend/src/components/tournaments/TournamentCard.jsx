import { Calendar, Users, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import StatusBadge from "../ui/StatusBadge";

function TournamentCard({
  tournament,
  onEdit,
  onDelete,
}) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl border border-stone-200 p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        <div className="min-w-0 flex-1">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 break-words">
            {tournament.name}
          </h2>

          <p className="mt-2 text-[#556B2F] font-medium text-sm sm:text-base">
            {tournament.sport}
          </p>

          {tournament.description && (
            <p className="mt-2 text-gray-600 text-sm sm:text-base break-words">
              {tournament.description}
            </p>
          )}
        </div>

        <div className="self-start sm:self-auto">
          <StatusBadge status={tournament.status} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 text-slate-600">
        <div className="flex items-center gap-2 break-words">
          <Users size={18} className="shrink-0" />
          <span>{tournament.max_teams} Teams</span>
        </div>

        <div className="flex items-center gap-2 break-words">
          <Calendar size={18} className="shrink-0" />
          <span>{tournament.start_date}</span>
        </div>

        <div className="flex items-center gap-2 break-words">
          <MapPin size={18} className="shrink-0" />
          <span>{tournament.venue}</span>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Button
          className="w-full sm:w-auto"
          onClick={() =>
            navigate(`/tournaments/${tournament.id}`)
          }
        >
          View
        </Button>

        <Button
          className="w-full sm:w-auto"
          variant="secondary"
          onClick={() => onEdit(tournament)}
        >
          Edit
        </Button>

        <Button
          className="w-full sm:w-auto"
          variant="ghost"
          onClick={() => onDelete(tournament.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default TournamentCard;