import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import DashboardLayout from "../components/dashboard/DashboardLayout";

import Home from "../pages/Home";
import About from "../pages/About";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import Dashboard from "../pages/Dashboard/Dashboard";

import Tournaments from "../pages/Tournaments";
import Teams from "../pages/Teams";
import Fixtures from "../pages/Fixtures";
import Standings from "../pages/Standings";
import TournamentDetails from "../pages/TournamentDetails";

// Uncomment this after creating the page
// import Settings from "../pages/Settings";

function AppRoutes() {
  return (
    <Routes>

      {/* ==========================
          Public Website Layout
      ========================== */}

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Public Tournament Details */}
        <Route
          path="tournaments/:id"
          element={<TournamentDetails />}
        />
      </Route>

      {/* ==========================
          Dashboard Layout
      ========================== */}

      <Route element={<DashboardLayout />}>

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/tournaments"
          element={<Tournaments />}
        />

        <Route
          path="/teams"
          element={<Teams />}
        />

        <Route
          path="/fixtures"
          element={<Fixtures />}
        />

        <Route
          path="/standings"
          element={<Standings />}
        />

        {/*
        <Route
          path="/settings"
          element={<Settings />}
        />
        */}

      </Route>

    </Routes>
  );
}

export default AppRoutes;