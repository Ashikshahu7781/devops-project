import { useEffect, useState } from "react";
import { Trophy } from "lucide-react";

import Button from "../ui/Button";
import UpdateScoreModal from "../fixtures/UpdateScoreModal";

import {
  getFixtures,
  generateFixtures,
  updateFixtureScore,
} from "../../api/fixture";

import { useToast } from "../../context/ToastContext";

function FixturesTab({ tournamentId }) {
  const [fixtures, setFixtures] = useState([]);
  const [selectedFixture, setSelectedFixture] = useState(null);
  const [showScoreModal, setShowScoreModal] = useState(false);

  const toast = useToast();

  const fetchFixtures = async () => {
    try {
      const data = await getFixtures(tournamentId);

      setFixtures(data.data || []);
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to load fixtures."
      );
    }
  };

  useEffect(() => {
    if (tournamentId) {
      fetchFixtures();
    }
  }, [tournamentId]);

  const handleGenerate = async () => {
    try {
      await generateFixtures(tournamentId);

      await fetchFixtures();

      toast.success("Fixtures generated successfully!");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Unable to generate fixtures."
      );
    }
  };

  const handleUpdateClick = (fixture) => {
    setSelectedFixture(fixture);
    setShowScoreModal(true);
  };

  const handleSaveScore = async (scores) => {
    try {
      await updateFixtureScore(selectedFixture.id, scores);

      setShowScoreModal(false);
      setSelectedFixture(null);

      await fetchFixtures();

      toast.success("Score updated successfully!");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to update score."
      );
    }
  };

  const groupedFixtures = (fixtures || []).reduce(
    (groups, fixture) => {
      if (!groups[fixture.round]) {
        groups[fixture.round] = [];
      }

      groups[fixture.round].push(fixture);

      return groups;
    },
    {}
  );

  if (fixtures.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-12 text-center">
        <Trophy
          size={60}
          className="mx-auto text-[#556B2F]"
        />

        <h2 className="mt-6 text-3xl font-bold text-slate-900">
          No Fixtures Generated
        </h2>

        <p className="mt-3 text-slate-500">
          Generate fixtures for this tournament.
        </p>

        <Button
          className="mt-8"
          onClick={handleGenerate}
        >
          Generate Fixtures
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-8">
        {Object.entries(groupedFixtures).map(
          ([round, matches]) => (
            <div
              key={round}
              className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden"
            >
              <div className="bg-[#556B2F] px-6 py-4">
                <h2 className="text-2xl font-bold text-white">
                  🏆 Round {round}
                </h2>
              </div>

              <div className="divide-y divide-stone-200">
                {matches.map((fixture) => (
                  <div
                    key={fixture.id}
                    className="flex items-center justify-between px-8 py-6 hover:bg-stone-50 transition"
                  >
                    <div className="flex-1 text-center">
                      <h3 className="text-xl font-semibold text-slate-900">
                        {fixture.home_team.name}
                      </h3>
                    </div>

                    <div className="mx-10 text-center">
                      <div className="text-3xl font-bold">
                        {fixture.home_score}

                        <span className="mx-3 text-gray-400">
                          -
                        </span>

                        {fixture.away_score}
                      </div>

                      <div className="mt-2">
                        <span
                          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                            fixture.status === "completed"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {fixture.status}
                        </span>
                      </div>

                      <button
                        className="mt-4 text-sm font-medium text-blue-600 hover:underline"
                        onClick={() =>
                          handleUpdateClick(fixture)
                        }
                      >
                        Update Score
                      </button>
                    </div>

                    <div className="flex-1 text-center">
                      <h3 className="text-xl font-semibold text-slate-900">
                        {fixture.away_team.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>

      <UpdateScoreModal
        isOpen={showScoreModal}
        fixture={selectedFixture}
        onClose={() => {
          setShowScoreModal(false);
          setSelectedFixture(null);
        }}
        onSave={handleSaveScore}
      />
    </>
  );
}

export default FixturesTab;