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
    <div className="bg-white rounded-3xl border border-stone-200 p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        <div className="min-w-0 flex-1">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 break-words">
            {team.name}
          </h2>

          <p className="mt-2 text-[#556B2F] font-medium text-sm sm:text-base">
            Team
          </p>
        </div>

        <div className="self-start rounded-full bg-[#556B2F] px-3 py-1 text-sm text-white whitespace-nowrap">
          #{team.id}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600">
        <div className="flex items-center gap-2 break-words">
          <User size={18} className="shrink-0" />
          <span>Coach : {team.coach}</span>
        </div>

        <div className="flex items-center gap-2 break-words">
          <Users size={18} className="shrink-0" />
          <span>Captain : {team.captain}</span>
        </div>

        <div className="flex items-center gap-2 break-all">
          <Mail size={18} className="shrink-0" />
          <span>{team.contact_email}</span>
        </div>

        <div className="flex items-center gap-2 break-words">
          <Phone size={18} className="shrink-0" />
          <span>{team.contact_phone}</span>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Button className="w-full sm:w-auto">
          View
        </Button>

        <Button
          className="w-full sm:w-auto"
          variant="secondary"
          onClick={() => onEdit(team)}
        >
          Edit
        </Button>

        <Button
          className="w-full sm:w-auto"
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