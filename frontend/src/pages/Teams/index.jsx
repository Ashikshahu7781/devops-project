import { Users, Plus } from "lucide-react";
import Button from "../../components/ui/Button";

function Teams() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-5xl font-bold">
            Teams
          </h1>

          <p className="mt-3 text-slate-600">
            Register and manage participating teams.
          </p>
        </div>

        <Button>
          <Plus size={18} />
          Add Team
        </Button>

      </div>

      <div className="mt-16 bg-white rounded-3xl shadow p-16 text-center">

        <Users
          size={70}
          className="mx-auto text-[#556B2F]"
        />

        <h2 className="mt-6 text-3xl font-bold">
          No Teams Registered
        </h2>

        <p className="mt-4 text-slate-600">
          Start by registering your first team.
        </p>

      </div>

    </div>
  );
}

export default Teams;