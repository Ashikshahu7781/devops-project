import Select from "../ui/Select";

function StandingFilters({

  tournaments,

  selectedTournament,

  onTournamentChange,

}) {

  const options = tournaments.map((tournament) => ({

    value: tournament.id,

    label: tournament.name,

  }));

  return (

    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6">

      <Select

        id="tournament"

        label="Tournament"

        value={selectedTournament}

        onChange={onTournamentChange}

        options={options}

      />

    </div>

  );

}

export default StandingFilters;