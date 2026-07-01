import { Bell } from "lucide-react";

function DashboardHeader() {
  return (
    <header className="flex items-center justify-between mb-10">

      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-slate-600">
          Manage tournaments, teams and fixtures from one place.
        </p>
      </div>

      <div className="flex items-center gap-6">

        <button className="relative p-3 rounded-full bg-white shadow hover:bg-slate-100 transition">
          <Bell size={20} />

          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-[#556B2F] flex items-center justify-center text-white font-bold">
            A
          </div>

          <div>
            <p className="font-semibold">
              Ashik
            </p>

            <p className="text-sm text-slate-500">
              Administrator
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default DashboardHeader;