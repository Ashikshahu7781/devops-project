import Container from "../../components/ui/Container";
import DashboardStats from "../../components/dashboard/DashboardStats";
import RecentTournaments from "../../components/dashboard/RecentTournaments";
import UpcomingFixtures from "../../components/dashboard/UpcomingFixtures";
import RecentActivity from "../../components/dashboard/RecentActivity";

function Dashboard() {
  return (
    <Container className="py-10">

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-600">
          Welcome back! Here's an overview of your sports management system.
        </p>

      </div>

      <DashboardStats />

      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        <RecentTournaments />

        <UpcomingFixtures />

      </div>

      <div className="mt-10">

        <RecentActivity />

      </div>

    </Container>
  );
}

export default Dashboard;