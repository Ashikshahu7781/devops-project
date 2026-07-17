function StandingTable({ standings }) {
  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">

      <table className="w-full">

        <thead className="bg-[#556B2F] text-white">

          <tr>

            <th className="p-4">#</th>

            <th className="text-left">Team</th>

            <th>P</th>

            <th>W</th>

            <th>D</th>

            <th>L</th>

            <th>GF</th>

            <th>GA</th>

            <th>GD</th>

            <th>PTS</th>

          </tr>

        </thead>

        <tbody>

          {standings.map((team, index) => (

            <tr
              key={team.team_id}
              className="border-b hover:bg-stone-50 transition"
            >

              <td className="p-4 text-center font-semibold">
                {index + 1}
              </td>

              <td className="font-semibold">
                {team.team}
              </td>

              <td className="text-center">
                {team.played}
              </td>

              <td className="text-center">
                {team.won}
              </td>

              <td className="text-center">
                {team.draw}
              </td>

              <td className="text-center">
                {team.lost}
              </td>

              <td className="text-center">
                {team.gf}
              </td>

              <td className="text-center">
                {team.ga}
              </td>

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
  );
}

export default StandingTable;