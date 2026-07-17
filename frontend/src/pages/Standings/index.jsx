import { useEffect, useState } from "react";

import { BarChart3 } from "lucide-react";

import { getTournaments } from "../../api/tournament";
import { getStandings } from "../../api/standing";

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

    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="mb-10">

        <h1 className="text-4xl font-bold">
          Standings
        </h1>

        <p className="text-slate-600 mt-2">
          View tournament rankings.
        </p>

      </div>

      <StandingFilters

        tournaments={tournaments}

        selectedTournament={selectedTournament}

        onTournamentChange={(e)=>
          setSelectedTournament(e.target.value)
        }

      />

      <div className="mt-8">

        {loading ? (

          <p>Loading...</p>

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

    </div>

  );

}

export default Standings;