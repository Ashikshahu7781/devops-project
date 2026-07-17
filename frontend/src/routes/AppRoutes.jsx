import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import DashboardLayout from "../components/dashboard/DashboardLayout";

import ProtectedRoute from "../components/auth/ProtectedRoute";

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
import Account from "../pages/Account/Account";

function AppRoutes() {
  return (
    <Routes>

      {/* Public Website */}

      <Route element={<Layout />}>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/tournaments/:id"
          element={<TournamentDetails />}
        />

      </Route>

      {/* Authentication */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Protected Dashboard */}

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >

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

        <Route
          path="/account"
          element={<Account />}
        />

      </Route>

    </Routes>
  );
}

export default AppRoutes;