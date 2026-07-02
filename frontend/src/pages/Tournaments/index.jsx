import { useState } from "react";
import { Plus } from "lucide-react";

import tournamentsData from "../../data/tournaments";

import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import PageHeader from "../../components/ui/PageHeader";

import TournamentFilters from "../../components/tournaments/TournamentFilters";
import TournamentList from "../../components/tournaments/TournamentList";
import CreateTournamentModal from "../../components/tournaments/CreateTournamentModal";
import EditTournamentModal from "../../components/tournaments/EditTournamentModal";
import DeleteTournamentModal from "../../components/tournaments/DeleteTournamentModal";


function Tournaments() {
  const [tournaments, setTournaments] = useState(tournamentsData);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [selectedTournament, setSelectedTournament] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [tournamentToDelete, setTournamentToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sportFilter, setSportFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  
  const handleCreateTournament = (newTournament) => {
    setTournaments((prevTournaments) => [
      ...prevTournaments,
      newTournament,
    ]);
  };

  const handleUpdateTournament = (updatedTournament) => {
  setTournaments((prev) =>
    prev.map((tournament) =>
      tournament.id === updatedTournament.id
        ? updatedTournament
        : tournament
    )
  );

  setShowEditModal(false);
  };

  const handleEditClick = (tournament) => {
    setSelectedTournament(tournament);
    setShowEditModal(true);
  };

  const handleDeleteClick = (tournament) => {
  setTournamentToDelete(tournament);
  setShowDeleteModal(true);
};

  const handleDeleteTournament = () => {
  setTournaments((prev) =>
    prev.filter(
      (tournament) =>
        tournament.id !== tournamentToDelete.id
    )
  );

  setShowDeleteModal(false);
  setTournamentToDelete(null);
};
  const filteredTournaments = tournaments.filter((tournament) => {
    const matchesSearch =
      tournament.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesSport =
      sportFilter === "all" ||
      tournament.sport.toLowerCase() === sportFilter;

    const matchesStatus =
      statusFilter === "all" ||
      tournament.status === statusFilter;

    return (
      matchesSearch &&
      matchesSport &&
      matchesStatus
    );
  });




  return (
    <Container className="py-16">

      <PageHeader
        title="Tournaments"
        description="Manage all tournaments from one place."
        action={
          <Button
            onClick={() => setShowCreateModal(true)}
          >
            <Plus size={18} />
            Create Tournament
          </Button>
        }
      />

      <TournamentFilters
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        sportFilter={sportFilter}
        onSportChange={(e) => setSportFilter(e.target.value)}
        statusFilter={statusFilter}
        onStatusChange={(e) => setStatusFilter(e.target.value)}
      />

      <TournamentList
        tournaments={filteredTournaments}
        onEdit={handleEditClick}
        onDelete={handleDeleteClick}
      />

      <CreateTournamentModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreate={handleCreateTournament}
      />

      <EditTournamentModal
        isOpen={showEditModal}
        tournament={selectedTournament}
        onClose={() => setShowEditModal(false)}
        onUpdate={handleUpdateTournament}
      />

      <DeleteTournamentModal
        isOpen={showDeleteModal}
        tournament={tournamentToDelete}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDeleteTournament}
      />

    </Container>
  );
}

export default Tournaments;