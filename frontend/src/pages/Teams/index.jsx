import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import {
  getTeams,
  createTeam,
  updateTeam,
  deleteTeam,
} from "../../api/team";

import { getTournaments } from "../../api/tournament";

import Container from "../../components/ui/Container";
import PageHeader from "../../components/ui/PageHeader";
import Button from "../../components/ui/Button";

import TeamFilters from "../../components/teams/TeamFilters";
import TeamList from "../../components/teams/TeamList";

import CreateTeamModal from "../../components/teams/CreateTeamModal";
import EditTeamModal from "../../components/teams/EditTeamModal";

function Teams() {

  const [teams, setTeams] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [selectedTournament, setSelectedTournament] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    loadTournaments();
  }, []);

  useEffect(() => {
    if (selectedTournament) {
      fetchTeams(selectedTournament);
    } else {
      setTeams([]);
    }
  }, [selectedTournament]);

  const loadTournaments = async () => {

    try {

      const response = await getTournaments();

      const list = response.data;

      setTournaments(list);

      if (list.length > 0) {
        setSelectedTournament(list[0].id);
      }

    } catch (error) {

      console.error(error);

    }

  };

  const fetchTeams = async (tournamentId) => {

    try {

      const response = await getTeams(tournamentId);

      setTeams(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  const handleCreate = async (team) => {

    await createTeam({
      ...team,
      tournament_id: selectedTournament,
    });

    await fetchTeams(selectedTournament);

    setShowCreateModal(false);

  };

  const handleEditClick = (team) => {

    setSelectedTeam(team);

    setShowEditModal(true);

  };

  const handleUpdate = async (team) => {

    await updateTeam(
      selectedTeam.id,
      {
        ...team,
        tournament_id: selectedTournament,
      }
    );

    await fetchTeams(selectedTournament);

    setShowEditModal(false);

    setSelectedTeam(null);

  };

  const handleDelete = async (id) => {

    const confirmed = window.confirm(
      "Delete this team?"
    );

    if (!confirmed) return;

    await deleteTeam(id);

    await fetchTeams(selectedTournament);

  };

  const filteredTeams = teams.filter((team) =>

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

  return (

    <Container className="py-16">

      <PageHeader
        title="Teams"
        description="Manage tournament teams."
        action={
          <Button
            onClick={() => setShowCreateModal(true)}
            disabled={!selectedTournament}
          >
            <Plus size={18} />
            Create Team
          </Button>
        }
      />

      <div className="mb-6">

        <label className="block mb-2 font-medium">
          Select Tournament
        </label>

        <select
          className="w-full rounded-xl border border-gray-300 p-3"
          value={selectedTournament}
          onChange={(e) =>
            setSelectedTournament(Number(e.target.value))
          }
        >

          {tournaments.map((tournament) => (

            <option
              key={tournament.id}
              value={tournament.id}
            >
              {tournament.name}
            </option>

          ))}

        </select>

      </div>

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