import { useState } from "react";

import { CalendarDays } from "lucide-react";

import Button from "../ui/Button";

import { updateFixtureScore } from "../../api/fixture";

import useToast from "../../hooks/useToast";

function FixtureCard({
  fixture,
  refresh,
}) {
  const toast = useToast();

  const [homeScore, setHomeScore] = useState(
    fixture.home_score
  );

  const [awayScore, setAwayScore] = useState(
    fixture.away_score
  );

  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    try {
      setLoading(true);

      await updateFixtureScore(
        fixture.id,
        {
          home_score: Number(homeScore),
          away_score: Number(awayScore),
        }
      );

      toast.success(
        "Score updated successfully."
      );

      refresh();
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
        "Failed to update score."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-5 sm:p-6">
      <div className="flex items-start gap-3 sm:gap-4">
        <CalendarDays
          size={24}
          className="text-[#556B2F] shrink-0 mt-1"
        />

        <div className="min-w-0 flex-1">
          <h3 className="text-lg sm:text-xl font-bold break-words">
            {fixture.home_team.name}

            <span className="mx-2 sm:mx-3 text-slate-400">
              vs
            </span>

            {fixture.away_team.name}
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Status :
            <span className="ml-1 font-medium capitalize">
              {fixture.status}
            </span>
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <div>
          <label className="block text-sm font-medium mb-2 break-words">
            {fixture.home_team.name}
          </label>

          <input
            type="number"
            min="0"
            value={homeScore}
            onChange={(e) =>
              setHomeScore(e.target.value)
            }
            className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-[#556B2F] focus:ring-2 focus:ring-[#556B2F]/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 break-words">
            {fixture.away_team.name}
          </label>

          <input
            type="number"
            min="0"
            value={awayScore}
            onChange={(e) =>
              setAwayScore(e.target.value)
            }
            className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-[#556B2F] focus:ring-2 focus:ring-[#556B2F]/20"
          />
        </div>

        <div className="flex items-end">
          <Button
            className="w-full"
            onClick={handleUpdate}
            disabled={loading}
          >
            {loading
              ? "Updating..."
              : "Update Score"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FixtureCard;