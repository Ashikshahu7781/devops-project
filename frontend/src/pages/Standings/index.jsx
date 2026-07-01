import { BarChart3 } from "lucide-react";

function Standings() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold">
        Standings
      </h1>

      <p className="mt-3 text-slate-600">
        Track rankings, points and statistics.
      </p>

      <div className="mt-16 bg-white rounded-3xl shadow p-16 text-center">

        <BarChart3
          size={70}
          className="mx-auto text-[#556B2F]"
        />

        <h2 className="mt-6 text-3xl font-bold">
          No Standings Yet
        </h2>

        <p className="mt-4 text-slate-600">
          Standings will appear once matches are completed.
        </p>

      </div>

    </div>
  );
}

export default Standings;