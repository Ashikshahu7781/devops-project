import { useEffect, useState } from "react";
import { CalendarDays, Clock, Menu } from "lucide-react";

function Topbar({ sidebarOpen, setSidebarOpen }) {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentDate = dateTime.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const currentTime = dateTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <header className="h-auto min-h-20 bg-white border-b border-stone-200 px-4 md:px-8 py-4 flex items-center justify-between">

      {/* Left */}
      <div className="flex items-center gap-4">

        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <Menu size={26} />
        </button>

        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            Dashboard
          </h1>

          <p className="text-sm md:text-base text-slate-500">
            Welcome back to SportsTracker
          </p>
        </div>

      </div>

      {/* Right */}
      <div className="hidden md:flex items-center gap-8">

        <div className="flex items-center gap-2 text-slate-600">

          <CalendarDays
            size={20}
            className="text-[#556B2F]"
          />

          <span className="font-medium">
            {currentDate}
          </span>

        </div>

        <div className="flex items-center gap-2 text-slate-600">

          <Clock
            size={20}
            className="text-[#556B2F]"
          />

          <span className="font-semibold">
            {currentTime}
          </span>

        </div>

      </div>

    </header>
  );
}

export default Topbar;