import { Calendar, Users, MapPin } from "lucide-react";

import Button from "../ui/Button";
import StatusBadge from "../ui/StatusBadge";

function TournamentCard({
  tournament,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300">

      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            {tournament.name}
          </h2>

          <p className="mt-2 text-[#556B2F] font-medium">
            {tournament.sport}
          </p>

          {tournament.description && (
            <p className="mt-2 text-gray-600">
              {tournament.description}
            </p>
          )}
        </div>

        <StatusBadge status={tournament.status} />

      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-6 text-slate-600">

        <div className="flex items-center gap-2">
          <Users size={18} />
          {tournament.max_teams} Teams
        </div>

        <div className="flex items-center gap-2">
          <Calendar size={18} />
          {tournament.start_date}
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={18} />
          {tournament.venue}
        </div>

      </div>

      <div className="flex gap-3 mt-8">

        <Button>
          View
        </Button>

        <Button
          variant="secondary"
          onClick={() => onEdit(tournament)}
        >
          Edit
        </Button>

        <Button
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