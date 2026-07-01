import Button from "../../components/ui/Button";

function DashboardContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 mt-10">

      {/* Recent Tournaments */}

      <div className="bg-white rounded-3xl shadow p-6">

        <h2 className="text-2xl font-bold mb-6">
          Recent Tournaments
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between border-b pb-3">
            <span>Kerala Premier League</span>
            <span className="text-green-600 font-medium">
              Active
            </span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Inter College Cup</span>
            <span className="text-blue-600 font-medium">
              Upcoming
            </span>
          </div>

          <div className="flex justify-between">
            <span>Summer League</span>
            <span className="text-gray-600 font-medium">
              Completed
            </span>
          </div>

        </div>

      </div>

      {/* Quick Actions */}

      <div className="bg-white rounded-3xl shadow p-6">

        <h2 className="text-2xl font-bold mb-6">
          Quick Actions
        </h2>

        <div className="grid gap-4">

          <Button className="w-full">
            Create Tournament
          </Button>

          <Button
            variant="secondary"
            className="w-full"
          >
            Register Team
          </Button>

          <Button
            variant="secondary"
            className="w-full"
          >
            Generate Fixtures
          </Button>

          <Button
            variant="secondary"
            className="w-full"
          >
            View Standings
          </Button>

        </div>

      </div>

      {/* Activity */}

      <div className="bg-white rounded-3xl shadow p-6 lg:col-span-2">

        <h2 className="text-2xl font-bold mb-6">
          Recent Activity
        </h2>

        <div className="space-y-5">

          <div className="border-l-4 border-[#556B2F] pl-4">
            New tournament created.
          </div>

          <div className="border-l-4 border-[#556B2F] pl-4">
            Team Falcons registered.
          </div>

          <div className="border-l-4 border-[#556B2F] pl-4">
            Fixtures generated successfully.
          </div>

          <div className="border-l-4 border-[#556B2F] pl-4">
            Standings updated.
          </div>

        </div>

      </div>

    </div>
  );
}

export default DashboardContent;