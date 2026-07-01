import DashboardHeader from "./DashboardHeader";
import StatsCards from "./StatsCards";
import DashboardContent from "./DashboardContent";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F8F7F4]">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <DashboardHeader />

        <StatsCards />

        <DashboardContent />

      </div>

    </div>
  );
}

export default Dashboard;