import { Calendar, Users, MapPin } from "lucide-react";
import Button from "../ui/Button";
import StatusBadge from "../ui/StatusBadge";

function TournamentCard({ tournament }) {
  return (
    <div className="bg-white rounded-3xl shadow-md border border-stone-200 p-6 hover:shadow-xl transition">

      <div className="flex justify-between items-start">

        <div>
          <h3 className="text-2xl font-bold text-slate-900">
            {tournament.name}
          </h3>

          <p className="mt-2 text-[#556B2F] font-medium">
            {tournament.sport}
          </p>
        </div>

        <StatusBadge status={tournament.status} />
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-4 text-slate-600">

        <div className="flex items-center gap-2">
          <Users size={18} />
          {tournament.teams} Teams
        </div>

        <div className="flex items-center gap-2">
          <Calendar size={18} />
          {tournament.date}
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={18} />
          {tournament.location}
        </div>

      </div>

      <div className="flex gap-3 mt-8">

        <Button>View</Button>

        <Button variant="secondary">
          Edit
        </Button>

        <Button variant="ghost">
          Delete
        </Button>

      </div>

    </div>
  );
}

export default TournamentCard;