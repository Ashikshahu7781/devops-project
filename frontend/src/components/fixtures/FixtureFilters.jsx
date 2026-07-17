import Button from "../ui/Button";
import Select from "../ui/Select";

function FixtureFilters({
  tournaments,
  selectedTournament,
  onTournamentChange,
  onGenerate,
}) {
  const options = tournaments.map((tournament) => ({
    value: tournament.id,
    label: tournament.name,
  }));

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6">

      <div className="grid md:grid-cols-4 gap-4 items-end">

        <div className="md:col-span-3">

          <Select
            id="tournament"
            label="Tournament"
            value={selectedTournament}
            onChange={onTournamentChange}
            options={options}
          />

        </div>

        <Button
          className="w-full"
          onClick={onGenerate}
        >
          Generate Fixtures
        </Button>

      </div>

    </div>
  );
}

export default FixtureFilters;