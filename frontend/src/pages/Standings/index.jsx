import { useEffect, useState } from "react";

import { BarChart3 } from "lucide-react";

import { getTournaments } from "../../api/tournament";
import { getStandings } from "../../api/standing";

import Container from "../../components/ui/Container";
import EmptyState from "../../components/ui/EmptyState";

import StandingFilters from "../../components/standings/StandingFilters";
import StandingTable from "../../components/standings/StandingTable";

import useToast from "../../hooks/useToast";

function Standings() {
  const toast = useToast();

  const [tournaments, setTournaments] = useState([]);
  const [selectedTournament, setSelectedTournament] = useState("");

  const [standings, setStandings] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTournaments();
  }, []);

  useEffect(() => {
    if (selectedTournament) {
      fetchStandings(selectedTournament);
    } else {
      setStandings([]);
    }
  }, [selectedTournament]);

  const fetchTournaments = async () => {
    try {
      const response = await getTournaments();
      setTournaments(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load tournaments.");
    }
  };

  const fetchStandings = async (id) => {
    try {
      setLoading(true);

      const response = await getStandings(id);

      setStandings(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load standings.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-6 sm:py-10">
      <div className="mb-6 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold break-words">
          Standings
        </h1>

        <p className="mt-2 text-sm sm:text-base text-slate-600">
          View tournament rankings.
        </p>
      </div>

      <StandingFilters
        tournaments={tournaments}
        selectedTournament={selectedTournament}
        onTournamentChange={(e) =>
          setSelectedTournament(e.target.value)
        }
      />

      <div className="mt-6 sm:mt-8 min-w-0">
        {loading ? (
          <p className="text-center py-10">Loading...</p>
        ) : standings.length === 0 ? (
          <EmptyState
            icon={BarChart3}
            title="No Standings"
            description="Complete fixtures to view standings."
          />
        ) : (
          <StandingTable standings={standings} />
        )}
      </div>
    </Container>
  );
}

export default Standings;