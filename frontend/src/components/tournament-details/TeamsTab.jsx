import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import {
  getTeams,
  createTeam,
  updateTeam,
  deleteTeam,
} from "../../api/team";

import Button from "../ui/Button";
import TeamList from "../teams/TeamList";

import CreateTeamModal from "../teams/CreateTeamModal";
import EditTeamModal from "../teams/EditTeamModal";

import { useToast } from "../../context/ToastContext";

function TeamsTab({ tournamentId }) {
  const [teams, setTeams] = useState([]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [selectedTeam, setSelectedTeam] = useState(null);

  const toast = useToast();

  const fetchTeams = async () => {
    try {
      const data = await getTeams(tournamentId);

      setTeams(data.data || []);
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to load teams."
      );

      setTeams([]);
    }
  };

  useEffect(() => {
    if (tournamentId) {
      fetchTeams();
    }
  }, [tournamentId]);

  const handleCreate = async (team) => {
    try {
      await createTeam({
        ...team,
        tournament_id: Number(tournamentId),
      });

      await fetchTeams();

      setShowCreateModal(false);

      toast.success("Team created successfully!");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to create team."
      );
    }
  };

  const handleEditClick = (team) => {
    setSelectedTeam(team);
    setShowEditModal(true);
  };

  const handleUpdate = async (team) => {
    try {
      await updateTeam(selectedTeam.id, {
        ...team,
        tournament_id: Number(tournamentId),
      });

      await fetchTeams();

      setShowEditModal(false);
      setSelectedTeam(null);

      toast.success("Team updated successfully!");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to update team."
      );
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Delete this team?"
    );

    if (!confirmed) return;

    try {
      await deleteTeam(id);

      await fetchTeams();

      toast.success("Team deleted successfully!");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to delete team."
      );
    }
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Teams
        </h2>

        <Button
          onClick={() => setShowCreateModal(true)}
        >
          <Plus size={18} />
          Create Team
        </Button>
      </div>

      <TeamList
        teams={teams}
        onEdit={handleEditClick}
        onDelete={handleDelete}
      />

      <CreateTeamModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreate={handleCreate}
        hideTournament={true}
      />

      <EditTeamModal
        isOpen={showEditModal}
        team={selectedTeam}
        onClose={() => {
          setShowEditModal(false);
          setSelectedTeam(null);
        }}
        onUpdate={handleUpdate}
        hideTournament={true}
      />
    </div>
  );
}

export default TeamsTab;