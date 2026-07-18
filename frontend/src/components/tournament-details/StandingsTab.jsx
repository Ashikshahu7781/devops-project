import { useEffect, useState } from "react";

import { getStandings } from "../../api/standing";
import { useToast } from "../../context/ToastContext";

function StandingsTab({ tournamentId }) {
  const [standings, setStandings] = useState([]);

  const toast = useToast();

  useEffect(() => {
    if (tournamentId) {
      fetchStandings();
    }
  }, [tournamentId]);

  const fetchStandings = async () => {
    try {
      const data = await getStandings(tournamentId);

      setStandings(data.data || []);
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
        "Failed to load tournament standings."
      );

      setStandings([]);
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
          {(standings || []).length === 0 ? (
            <tr>
              <td
                colSpan={10}
                className="p-8 text-center text-gray-500"
              >
                No standings available.
              </td>
            </tr>
          ) : (
            (standings || []).map((team, index) => (
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

                <td className="text-center">
                  {team.gd}
                </td>

                <td className="text-center font-bold">
                  {team.points}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StandingsTab;