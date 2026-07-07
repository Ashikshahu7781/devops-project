import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getTournamentById } from "../../api/tournament";

import Container from "../../components/ui/Container";

import TournamentHeader from "../../components/tournament-details/TournamentHeader";
import TournamentTabs from "../../components/tournament-details/TournamentTabs";

import OverviewTab from "../../components/tournament-details/OverviewTab";
import TeamsTab from "../../components/tournament-details/TeamsTab";
import FixturesTab from "../../components/tournament-details/FixturesTab";
import StandingsTab from "../../components/tournament-details/StandingsTab";

function TournamentDetails() {
  const { id } = useParams();

  const [tournament, setTournament] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    fetchTournament();
  }, [id]);

  const fetchTournament = async () => {
    try {
      const response = await getTournamentById(id);
      setTournament(response.data);
    } catch (error) {
      console.error("Failed to fetch tournament:", error);
    }
  };

  return (
    <Container className="py-12">

      <TournamentHeader tournament={tournament} />

      <TournamentTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "overview" && (
        <OverviewTab tournament={tournament} />
      )}

      {activeTab === "teams" && (
        <TeamsTab tournamentId={id} />
      )}

      {activeTab === "fixtures" && (
        <FixturesTab tournamentId={id} />
      )}

      {activeTab === "standings" && (
        <StandingsTab tournamentId={id} />
      )}

    </Container>
  );
}

export default TournamentDetails;