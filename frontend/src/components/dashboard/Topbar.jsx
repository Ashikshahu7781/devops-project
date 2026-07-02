import { Bell, Search, UserCircle } from "lucide-react";

function Topbar() {
  return (
    <header className="h-20 bg-white border-b border-stone-200 px-8 flex items-center justify-between">

      {/* Left */}

      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="text-slate-500">
          Welcome back to SportsTracker
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        {/* Search */}

        <div className="relative hidden md:block">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 rounded-xl border border-stone-300 py-2 pl-10 pr-4 outline-none focus:border-[#556B2F]"
          />

        </div>

        {/* Notification */}

        <button className="relative rounded-xl p-2 hover:bg-stone-100 transition">

          <Bell size={22} />

          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        {/* User */}

        <div className="flex items-center gap-3">

          <UserCircle
            size={40}
            className="text-[#556B2F]"
          />

          <div>

            <p className="font-semibold text-slate-900">
              Admin
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

export default Topbar;