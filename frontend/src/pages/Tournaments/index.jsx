import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import {
  getTournaments,
  createTournament,
  updateTournament,
  deleteTournament,
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

  // ===========================
  // Fetch Tournaments
  // ===========================

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

  // ===========================
  // Create Tournament
  // ===========================

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

  // ===========================
  // Edit Tournament
  // ===========================

  const handleEditClick = (tournament) => {
    setSelectedTournament(tournament);
    setShowEditModal(true);
  };

  const handleUpdateTournament = async (updatedTournament) => {
    try {
      await updateTournament(
        updatedTournament.id,
        updatedTournament
      );

      await fetchTournaments();

      setShowEditModal(false);

      setSelectedTournament(null);

    } catch (error) {
      console.error(error);
      alert("Failed to update tournament");
    }
  };

  // ===========================
  // Delete Tournament
  // ===========================

  const handleDeleteTournament = async (id) => {

    const confirmed = window.confirm(
      "Are you sure you want to delete this tournament?"
    );

    if (!confirmed) return;

    try {

      await deleteTournament(id);

      await fetchTournaments();

    } catch (error) {

      console.error(error);

      alert("Failed to delete tournament");

    }

  };

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

      <TournamentFilters />

      <TournamentList
        tournaments={tournaments}
        onEdit={handleEditClick}
        onDelete={handleDeleteTournament}
      />

      <CreateTournamentModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreate={handleCreateTournament}
      />

      <EditTournamentModal
        isOpen={showEditModal}
        tournament={selectedTournament}
        onClose={() => {
          setShowEditModal(false);
          setSelectedTournament(null);
        }}
        onUpdate={handleUpdateTournament}
      />

    </Container>
  );
}

export default Tournaments;