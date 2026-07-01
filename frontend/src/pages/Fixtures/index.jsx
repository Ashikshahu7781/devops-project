import { CalendarDays } from "lucide-react";

function Fixtures() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold">
        Fixtures
      </h1>

      <p className="mt-3 text-slate-600">
        View and generate match schedules.
      </p>

      <div className="mt-16 bg-white rounded-3xl shadow p-16 text-center">

        <CalendarDays
          size={70}
          className="mx-auto text-[#556B2F]"
        />

        <h2 className="mt-6 text-3xl font-bold">
          No Fixtures Available
        </h2>

        <p className="mt-4 text-slate-600">
          Generate fixtures after creating a tournament.
        </p>

      </div>

    </div>
  );
}

export default Fixtures;