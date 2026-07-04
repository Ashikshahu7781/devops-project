import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import {
  getTeams,
  createTeam,
  updateTeam,
  deleteTeam,
} from "../../api/team";

import Container from "../../components/ui/Container";
import PageHeader from "../../components/ui/PageHeader";
import Button from "../../components/ui/Button";

import TeamFilters from "../../components/teams/TeamFilters";
import TeamList from "../../components/teams/TeamList";

import CreateTeamModal from "../../components/teams/CreateTeamModal";
import EditTeamModal from "../../components/teams/EditTeamModal";

function Teams() {

  const [teams, setTeams] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [selectedTeam, setSelectedTeam] = useState(null);

  const fetchTeams = async () => {
    try {

      const response = await getTeams();

      setTeams(response.data);

    } catch (error) {

      console.error(error);

    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const handleCreate = async (team) => {

    await createTeam(team);

    await fetchTeams();

    setShowCreateModal(false);

  };

  const handleEditClick = (team) => {

    setSelectedTeam(team);

    setShowEditModal(true);

  };

  const handleUpdate = async (team) => {

    await updateTeam(
      selectedTeam.id,
      team
    );

    await fetchTeams();

    setShowEditModal(false);

    setSelectedTeam(null);

  };

  const handleDelete = async (id) => {

    const confirmed = window.confirm(
      "Delete this team?"
    );

    if (!confirmed) return;

    await deleteTeam(id);

    await fetchTeams();

  };

  const filteredTeams = teams.filter((team) => {

    return (

      team.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      team.coach
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      team.captain
        .toLowerCase()
        .includes(searchTerm.toLowerCase())

    );

  });

  return (
    <Container className="py-16">

      <PageHeader
        title="Teams"
        description="Manage all teams."
        action={
          <Button
            onClick={() => setShowCreateModal(true)}
          >
            <Plus size={18} />
            Create Team
          </Button>
        }
      />

      <TeamFilters
        searchTerm={searchTerm}
        onSearchChange={(e) =>
          setSearchTerm(e.target.value)
        }
      />

      <TeamList
        teams={filteredTeams}
        onEdit={handleEditClick}
        onDelete={handleDelete}
      />

      <CreateTeamModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreate={handleCreate}
      />

      <EditTeamModal
        isOpen={showEditModal}
        team={selectedTeam}
        onClose={() => {
          setShowEditModal(false);
          setSelectedTeam(null);
        }}
        onUpdate={handleUpdate}
      />

    </Container>
  );
}

export default Teams;