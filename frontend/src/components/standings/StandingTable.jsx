function StandingTable({ standings }) {
  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-[720px] w-full">
          <thead className="bg-[#556B2F] text-white">
            <tr>
              <th className="p-3 sm:p-4 text-center">#</th>

              <th className="px-4 py-3 sm:py-4 text-left whitespace-nowrap">
                Team
              </th>

              <th className="px-3 py-3 sm:py-4 text-center">P</th>
              <th className="px-3 py-3 sm:py-4 text-center">W</th>
              <th className="px-3 py-3 sm:py-4 text-center">D</th>
              <th className="px-3 py-3 sm:py-4 text-center">L</th>
              <th className="px-3 py-3 sm:py-4 text-center">GF</th>
              <th className="px-3 py-3 sm:py-4 text-center">GA</th>
              <th className="px-3 py-3 sm:py-4 text-center">GD</th>
              <th className="px-3 py-3 sm:py-4 text-center">PTS</th>
            </tr>
          </thead>

          <tbody>
            {standings.map((team, index) => (
              <tr
                key={team.team_id}
                className="border-b hover:bg-stone-50 transition"
              >
                <td className="p-3 sm:p-4 text-center font-semibold">
                  {index + 1}
                </td>

                <td className="px-4 py-3 sm:py-4 font-semibold whitespace-nowrap">
                  {team.team}
                </td>

                <td className="text-center">{team.played}</td>
                <td className="text-center">{team.won}</td>
                <td className="text-center">{team.draw}</td>
                <td className="text-center">{team.lost}</td>
                <td className="text-center">{team.gf}</td>
                <td className="text-center">{team.ga}</td>

                <td
                  className={`text-center font-semibold ${
                    team.gd > 0
                      ? "text-green-600"
                      : team.gd < 0
                      ? "text-red-600"
                      : ""
                  }`}
                >
                  {team.gd > 0 ? `+${team.gd}` : team.gd}
                </td>

                <td className="text-center font-bold text-[#556B2F]">
                  {team.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StandingTable;