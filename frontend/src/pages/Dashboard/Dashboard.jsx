import { useEffect, useState } from "react";

import Container from "../../components/ui/Container";

import DashboardStats from "../../components/dashboard/DashboardStats";
import RecentTournaments from "../../components/dashboard/RecentTournaments";
import UpcomingFixtures from "../../components/dashboard/UpcomingFixtures";
import RecentActivity from "../../components/dashboard/RecentActivity";

import { getDashboard } from "../../api/dashboard";

const emptyDashboard = {
  total_tournaments: 0,
  active_tournaments: 0,
  completed_tournaments: 0,
  upcoming_tournaments: 0,
  total_teams: 0,
  total_fixtures: 0,
  completed_matches: 0,
  total_goals: 0,
  latest_tournaments: [],
  upcoming_fixtures: [],
  recent_activity: [],
};

function Dashboard() {

  const [dashboard, setDashboard] = useState(emptyDashboard);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {

    try {

      const response = await getDashboard();

      setDashboard(response.data);

    } catch (error) {

      console.error(error);

      setDashboard(emptyDashboard);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return (

      <Container className="py-10">

        <h2 className="text-center text-xl">
          Loading Dashboard...
        </h2>

      </Container>

    );

  }

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

      <DashboardStats dashboard={dashboard} />

      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        <RecentTournaments dashboard={dashboard} />

        <UpcomingFixtures dashboard={dashboard} />

      </div>

      <div className="mt-10">

        <RecentActivity dashboard={dashboard} />

      </div>

    </Container>

  );

}

export default Dashboard;
