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

    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6">

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">

          <CalendarDays
            size={24}
            className="text-[#556B2F]"
          />

          <div>

            <h3 className="text-xl font-bold">

              {fixture.home_team.name}

              <span className="mx-3 text-slate-400">
                vs
              </span>

              {fixture.away_team.name}

            </h3>

            <p className="text-sm text-slate-500 mt-1">

              Status :

              <span className="ml-1 font-medium capitalize">

                {fixture.status}

              </span>

            </p>

          </div>

        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div>

          <label className="block text-sm font-medium mb-2">

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

          <label className="block text-sm font-medium mb-2">

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