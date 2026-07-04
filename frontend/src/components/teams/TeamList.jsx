import { Users } from "lucide-react";

import TeamCard from "./TeamCard";
import EmptyState from "../ui/EmptyState";

function TeamList({
  teams,
  onEdit,
  onDelete,
}) {

  if (teams.length === 0) {
    return (
      <EmptyState
        icon={Users}
        title="No Teams"
        description="Create your first team."
      />
    );
  }

  return (
    <div className="grid gap-6">

      {teams.map((team) => (

        <TeamCard
          key={team.id}
          team={team}
          onEdit={onEdit}
          onDelete={onDelete}
        />

      ))}

    </div>
  );
}

export default TeamList;