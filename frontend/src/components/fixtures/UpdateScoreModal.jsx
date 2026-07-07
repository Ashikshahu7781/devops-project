import { useEffect, useState } from "react";
import { X } from "lucide-react";

import Button from "../ui/Button";
import Input from "../ui/Input";
import Label from "../ui/Label";

function UpdateScoreModal({
  isOpen,
  fixture,
  onClose,
  onSave,
}) {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  useEffect(() => {
    if (fixture) {
      setHomeScore(fixture.home_score);
      setAwayScore(fixture.away_score);
    }
  }, [fixture]);

  if (!isOpen || !fixture) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    await onSave({
      home_score: Number(homeScore),
      away_score: Number(awayScore),
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">

      <div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-stone-200 px-8 py-6">

          <div>

            <h2 className="text-3xl font-bold text-slate-900">
              Update Match Score
            </h2>

            <p className="mt-2 text-slate-600">
              Enter the final score.
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-stone-100 transition"
          >
            <X size={24} />
          </button>

        </div>

        {/* Body */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-8"
        >

          <div>

            <Label>
              {fixture.home_team.name}
            </Label>

            <Input
              type="number"
              min="0"
              value={homeScore}
              onChange={(e) =>
                setHomeScore(e.target.value)
              }
            />

          </div>

          <div>

            <Label>
              {fixture.away_team.name}
            </Label>

            <Input
              type="number"
              min="0"
              value={awayScore}
              onChange={(e) =>
                setAwayScore(e.target.value)
              }
            />

          </div>

          <div className="flex justify-end gap-3 pt-4">

            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button type="submit">
              Save Score
            </Button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default UpdateScoreModal;