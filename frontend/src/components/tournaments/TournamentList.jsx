import { Trophy } from "lucide-react";

import TournamentCard from "./TournamentCard";
import EmptyState from "../ui/EmptyState";

function TournamentList({
  tournaments,
  onEdit,
  onDelete,
}) {
  if (tournaments.length === 0) {
    return (
      <EmptyState
        icon={Trophy}
        title="No Tournaments"
        description="Create your first tournament to get started."
      />
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {tournaments.map((tournament) => (
        <TournamentCard
          key={tournament.id}
          tournament={tournament}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TournamentList;