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
      const data = await getTournamentStatistics(
        tournament.id
      );

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
    <div className="mt-8 grid lg:grid-cols-2 gap-8">

      {/* Tournament Information */}

      <div className="bg-white rounded-3xl border border-stone-200 p-8">

        <h2 className="text-2xl font-bold mb-6">
          Tournament Information
        </h2>

        <div className="space-y-5">

          <div className="flex justify-between">
            <span className="text-gray-500">Sport</span>
            <span className="font-semibold">
              {tournament.sport}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Venue</span>
            <span className="font-semibold">
              {tournament.venue}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Status</span>
            <span className="font-semibold">
              {tournament.status}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Start Date</span>
            <span className="font-semibold">
              {tournament.start_date}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">End Date</span>
            <span className="font-semibold">
              {tournament.end_date}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              Maximum Teams
            </span>
            <span className="font-semibold">
              {tournament.max_teams}
            </span>
          </div>

        </div>

      </div>

      {/* Statistics */}

      <div className="bg-white rounded-3xl border border-stone-200 p-8">

        <h2 className="text-2xl font-bold mb-6">
          Tournament Statistics
        </h2>

        <div className="grid grid-cols-2 gap-6">

          <div className="rounded-2xl bg-green-50 p-6">

            <Users
              className="text-green-700"
              size={30}
            />

            <h3 className="mt-4 text-3xl font-bold">
              {statistics?.teams ?? 0}
            </h3>

            <p className="text-gray-500">
              Teams
            </p>

          </div>

          <div className="rounded-2xl bg-blue-50 p-6">

            <Calendar
              className="text-blue-700"
              size={30}
            />

            <h3 className="mt-4 text-3xl font-bold">
              {statistics?.completed_matches ?? 0}
              {" / "}
              {statistics?.total_matches ?? 0}
            </h3>

            <p className="text-gray-500">
              Matches Played
            </p>

          </div>

          <div className="rounded-2xl bg-yellow-50 p-6">

            <Trophy
              className="text-yellow-700"
              size={30}
            />

            <h3 className="mt-4 text-3xl font-bold">
              {statistics?.total_goals ?? 0}
            </h3>

            <p className="text-gray-500">
              Total Goals
            </p>

          </div>

          <div className="rounded-2xl bg-purple-50 p-6">

            <MapPin
              className="text-purple-700"
              size={30}
            />

            <h3 className="mt-4 text-xl font-bold">
              {statistics?.champion ??
                statistics?.current_leader ??
                "-"}
            </h3>

            <p className="text-gray-500">
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