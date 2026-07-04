import {
  Users,
  User,
  Mail,
  Phone,
} from "lucide-react";

import Button from "../ui/Button";

function TeamCard({
  team,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300">

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            {team.name}
          </h2>

          <p className="mt-2 text-[#556B2F] font-medium">
            Team
          </p>

        </div>

        <div className="bg-[#556B2F] text-white px-3 py-1 rounded-full text-sm">
          #{team.id}
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-6 text-slate-600">

        <div className="flex items-center gap-2">
          <User size={18} />
          Coach : {team.coach}
        </div>

        <div className="flex items-center gap-2">
          <Users size={18} />
          Captain : {team.captain}
        </div>

        <div className="flex items-center gap-2">
          <Mail size={18} />
          {team.contact_email}
        </div>

        <div className="flex items-center gap-2">
          <Phone size={18} />
          {team.contact_phone}
        </div>

      </div>

      <div className="flex gap-3 mt-8">

        <Button>
          View
        </Button>

        <Button
          variant="secondary"
          onClick={() => onEdit(team)}
        >
          Edit
        </Button>

        <Button
          variant="ghost"
          onClick={() => onDelete(team.id)}
        >
          Delete
        </Button>

      </div>

    </div>
  );
}

export default TeamCard;