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
      <div className="overflow-x-auto">
        <table className="min-w-[720px] w-full">
          <thead className="bg-[#556B2F] text-white">
            <tr>
              <th className="p-3 sm:p-4">#</th>
              <th className="p-3 sm:p-4 text-left whitespace-nowrap">Team</th>
              <th className="p-3 sm:p-4">P</th>
              <th className="p-3 sm:p-4">W</th>
              <th className="p-3 sm:p-4">D</th>
              <th className="p-3 sm:p-4">L</th>
              <th className="p-3 sm:p-4">GF</th>
              <th className="p-3 sm:p-4">GA</th>
              <th className="p-3 sm:p-4">GD</th>
              <th className="p-3 sm:p-4">PTS</th>
            </tr>
          </thead>

          <tbody>
            {(standings || []).length === 0 ? (
              <tr>
                <td
                  colSpan={10}
                  className="p-6 sm:p-8 text-center text-gray-500"
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
                  <td className="p-3 sm:p-4 text-center">
                    {index + 1}
                  </td>

                  <td className="p-3 sm:p-4 font-semibold whitespace-nowrap">
                    {team.team}
                  </td>

                  <td className="p-3 sm:p-4 text-center">
                    {team.played}
                  </td>

                  <td className="p-3 sm:p-4 text-center">
                    {team.won}
                  </td>

                  <td className="p-3 sm:p-4 text-center">
                    {team.draw}
                  </td>

                  <td className="p-3 sm:p-4 text-center">
                    {team.lost}
                  </td>

                  <td className="p-3 sm:p-4 text-center">
                    {team.gf}
                  </td>

                  <td className="p-3 sm:p-4 text-center">
                    {team.ga}
                  </td>

                  <td className="p-3 sm:p-4 text-center">
                    {team.gd}
                  </td>

                  <td className="p-3 sm:p-4 text-center font-bold">
                    {team.points}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StandingsTab;