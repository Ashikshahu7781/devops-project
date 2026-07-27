import FixtureCard from "./FixtureCard";

function FixtureList({
  fixtures,
  refresh,
}) {
  const groupedFixtures = fixtures.reduce((acc, fixture) => {
    if (!acc[fixture.round]) {
      acc[fixture.round] = [];
    }

    acc[fixture.round].push(fixture);

    return acc;
  }, {});

  return (
    <div className="space-y-6 sm:space-y-8">
      {Object.keys(groupedFixtures).map((round) => (
        <div key={round}>
          <h2 className="mb-4 text-xl sm:text-2xl font-bold">
            Round {round}
          </h2>

          <div className="space-y-4">
            {groupedFixtures[round].map((fixture) => (
              <FixtureCard
                key={fixture.id}
                fixture={fixture}
                refresh={refresh}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FixtureList;