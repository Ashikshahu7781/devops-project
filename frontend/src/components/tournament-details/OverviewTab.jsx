import { useEffect, useState } from "react";
import {
  Calendar,
  MapPin,
  Trophy,
  Users,
} from "lucide-react";

import { getTournamentStatistics } from "../../api/statistics";
import { useToast } from "../../context/ToastContext";

function OverviewTab({ tournament }) {
  const [statistics, setStatistics] = useState(null);

  const toast = useToast();

  useEffect(() => {
    if (tournament) {
      fetchStatistics();
    }
  }, [tournament]);

  const fetchStatistics = async () => {
    try {
      const data = await getTournamentStatistics(tournament.id);

      setStatistics(data.data || null);
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to load tournament statistics."
      );
    }
  };

  if (!tournament) return null;

  return (
    <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
      {/* Tournament Information */}

      <div className="bg-white rounded-3xl border border-stone-200 p-5 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">
          Tournament Information
        </h2>

        <div className="space-y-5">
          <div className="flex justify-between gap-4">
            <span className="text-gray-500 shrink-0">
              Sport
            </span>

            <span className="font-semibold text-right break-words">
              {tournament.sport}
            </span>
          </div>

          <div className="flex justify-between gap-4">
            <span className="text-gray-500 shrink-0">
              Venue
            </span>

            <span className="font-semibold text-right break-words">
              {tournament.venue}
            </span>
          </div>

          <div className="flex justify-between gap-4">
            <span className="text-gray-500 shrink-0">
              Status
            </span>

            <span className="font-semibold text-right break-words">
              {tournament.status}
            </span>
          </div>

          <div className="flex justify-between gap-4">
            <span className="text-gray-500 shrink-0">
              Start Date
            </span>

            <span className="font-semibold text-right break-words">
              {tournament.start_date}
            </span>
          </div>

          <div className="flex justify-between gap-4">
            <span className="text-gray-500 shrink-0">
              End Date
            </span>

            <span className="font-semibold text-right break-words">
              {tournament.end_date}
            </span>
          </div>

          <div className="flex justify-between gap-4">
            <span className="text-gray-500 shrink-0">
              Maximum Teams
            </span>

            <span className="font-semibold text-right break-words">
              {tournament.max_teams}
            </span>
          </div>
        </div>
      </div>

      {/* Statistics */}

      <div className="bg-white rounded-3xl border border-stone-200 p-5 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">
          Tournament Statistics
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <div className="rounded-2xl bg-green-50 p-4 sm:p-6">
            <Users
              className="text-green-700"
              size={30}
            />

            <h3 className="mt-4 text-2xl sm:text-3xl font-bold">
              {statistics?.teams ?? 0}
            </h3>

            <p className="text-sm sm:text-base text-gray-500">
              Teams
            </p>
          </div>

          <div className="rounded-2xl bg-blue-50 p-4 sm:p-6">
            <Calendar
              className="text-blue-700"
              size={30}
            />

            <h3 className="mt-4 text-2xl sm:text-3xl font-bold break-words">
              {statistics?.completed_matches ?? 0}
              {" / "}
              {statistics?.total_matches ?? 0}
            </h3>

            <p className="text-sm sm:text-base text-gray-500">
              Matches Played
            </p>
          </div>

          <div className="rounded-2xl bg-yellow-50 p-4 sm:p-6">
            <Trophy
              className="text-yellow-700"
              size={30}
            />

            <h3 className="mt-4 text-2xl sm:text-3xl font-bold">
              {statistics?.total_goals ?? 0}
            </h3>

            <p className="text-sm sm:text-base text-gray-500">
              Total Goals
            </p>
          </div>

          <div className="rounded-2xl bg-purple-50 p-4 sm:p-6">
            <MapPin
              className="text-purple-700"
              size={30}
            />

            <h3 className="mt-4 text-lg sm:text-xl font-bold break-words">
              {statistics?.champion ??
                statistics?.current_leader ??
                "-"}
            </h3>

            <p className="text-sm sm:text-base text-gray-500">
              {statistics?.champion
                ? "Champion"
                : "Current Leader"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewTab;