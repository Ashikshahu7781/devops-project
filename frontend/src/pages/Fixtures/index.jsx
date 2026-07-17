import { useEffect, useState } from "react";

import {
  getTournaments,
} from "../../api/tournament";

import {
  getFixtures,
  generateFixtures,
} from "../../api/fixture";

import FixtureFilters from "../../components/fixtures/FixtureFilters";
import FixtureList from "../../components/fixtures/FixtureList";

import EmptyState from "../../components/ui/EmptyState";
import { CalendarDays } from "lucide-react";
import useToast from "../../hooks/useToast";

function Fixtures() {

  const toast = useToast();

  const [tournaments, setTournaments] = useState([]);

  const [selectedTournament, setSelectedTournament] = useState("");

  const [fixtures, setFixtures] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    fetchTournaments();

  }, []);

  useEffect(() => {

    if (selectedTournament) {

      fetchFixtures(selectedTournament);

    } else {

      setFixtures([]);

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

  const fetchFixtures = async (id) => {

    try {

      setLoading(true);

      const response = await getFixtures(id);

      setFixtures(response.data);

    } catch (error) {

      console.error(error);

      toast.error("Failed to load fixtures.");

    } finally {

      setLoading(false);

    }

  };

  const handleGenerate = async () => {

    if (!selectedTournament) {

      toast.error("Please select a tournament.");

      return;

    }

    try {

      await generateFixtures(selectedTournament);

      toast.success("Fixtures generated successfully.");

      fetchFixtures(selectedTournament);

    } catch (error) {

      console.error(error);

      toast.error(
        error.response?.data?.message ||
        "Failed to generate fixtures."
      );

    }

  };

  return (

    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="mb-10">

        <h1 className="text-4xl font-bold">
          Fixtures
        </h1>

        <p className="mt-2 text-slate-600">
          Generate and manage tournament fixtures.
        </p>

      </div>

      <FixtureFilters

        tournaments={tournaments}

        selectedTournament={selectedTournament}

        onTournamentChange={(e) =>
          setSelectedTournament(e.target.value)
        }

        onGenerate={handleGenerate}

      />

      {loading ? (

        <p className="mt-10">
          Loading fixtures...
        </p>

      ) : fixtures.length === 0 ? (

        <div className="mt-10">

          <EmptyState
            icon={CalendarDays}
            title="No Fixtures"
            description="Generate fixtures for the selected tournament."
          />

        </div>

      ) : (

        <div className="mt-10">

          <FixtureList
            fixtures={fixtures}
            refresh={() =>
              fetchFixtures(selectedTournament)
            }
          />

        </div>

      )}

    </div>

  );

}

export default Fixtures;