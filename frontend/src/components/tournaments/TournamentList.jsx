import TournamentCard from "./TournamentCard";

const tournaments = [
  {
    id: 1,
    name: "Kerala Premier League",
    sport: "Football",
    teams: 16,
    date: "15 Aug 2026",
    location: "Kochi",
    status: "active",
  },
  {
    id: 2,
    name: "Inter College Cricket Cup",
    sport: "Cricket",
    teams: 32,
    date: "21 Sep 2026",
    location: "Trivandrum",
    status: "upcoming",
  },
];

function TournamentList() {
  return (
    <div className="grid gap-6">

      {tournaments.map((tournament) => (
        <TournamentCard
          key={tournament.id}
          tournament={tournament}
        />
      ))}

    </div>
  );
}

export default TournamentList;