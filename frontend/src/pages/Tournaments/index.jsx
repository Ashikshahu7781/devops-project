import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import {
  getTournaments,
  createTournament,
} from "../../api/tournament";

import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import PageHeader from "../../components/ui/PageHeader";

import TournamentFilters from "../../components/tournaments/TournamentFilters";
import TournamentList from "../../components/tournaments/TournamentList";
import CreateTournamentModal from "../../components/tournaments/CreateTournamentModal";
import EditTournamentModal from "../../components/tournaments/EditTournamentModal";

function Tournaments() {
  const [tournaments, setTournaments] = useState([]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [selectedTournament, setSelectedTournament] = useState(null);

  // Fetch tournaments from backend
  const fetchTournaments = async () => {
    try {
      const response = await getTournaments();
      setTournaments(response.data);
    } catch (error) {
      console.error("Failed to fetch tournaments:", error);
    }
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  // Create Tournament
  const handleCreateTournament = async (newTournament) => {
    try {
      await createTournament(newTournament);

      await fetchTournaments();

      setShowCreateModal(false);
    } catch (error) {
      console.error(error);
      alert("Failed to create tournament");
    }
  };

  // Temporary local update until PUT API is created
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

  return (
    <Container className="py-16">

      <PageHeader
        title="Tournaments"
        description="Manage all tournaments from one place."
        action={
          <Button onClick={() => setShowCreateModal(true)}>
            <Plus size={18} />
            Create Tournament
          </Button>
        }
      />

      <TournamentFilters />

      <TournamentList
        tournaments={tournaments}
        onEdit={handleEditClick}
        onDelete={() => {}}
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

    </Container>
  );
}

export default Tournaments;