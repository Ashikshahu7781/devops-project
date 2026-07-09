import { useEffect, useState } from "react";

import { getStandings } from "../../api/standing";

function StandingsTab({ tournamentId }) {

  const [standings, setStandings] = useState([]);

  useEffect(() => {

    fetchStandings();

  }, [tournamentId]);

  const fetchStandings = async () => {

    try {

      const response = await getStandings(tournamentId);

      setStandings(response.data.data);

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden">

      <table className="w-full">

        <thead className="bg-[#556B2F] text-white">

          <tr>

            <th className="p-4">#</th>

            <th className="p-4 text-left">Team</th>

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
              className="border-b"
            >

              <td className="p-4 text-center">

                {index + 1}

              </td>

              <td className="font-semibold">

                {team.team}

              </td>

              <td className="text-center">{team.played}</td>

              <td className="text-center">{team.won}</td>

              <td className="text-center">{team.draw}</td>

              <td className="text-center">{team.lost}</td>

              <td className="text-center">{team.gf}</td>

              <td className="text-center">{team.ga}</td>

              <td className="text-center">{team.gd}</td>

              <td className="text-center font-bold">

                {team.points}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default StandingsTab;