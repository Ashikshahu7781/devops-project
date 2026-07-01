import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import Tournaments from "../pages/Tournaments";
import TournamentDetails from "../pages/TournamentDetails";
import Teams from "../pages/Teams";
import Fixtures from "../pages/Fixtures";
import Standings from "../pages/Standings";
import About from "../pages/About";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";

function AppRoutes() {
  return (
    <Routes>

      {/* Website */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tournaments" element={<Tournaments />} />
        <Route path="tournaments/:id" element={<TournamentDetails />} />
        <Route path="teams" element={<Teams />} />
        <Route path="fixtures" element={<Fixtures />} />
        <Route path="standings" element={<Standings />} />
        <Route path="about" element={<About />} />
      </Route>

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
  );
}

export default AppRoutes;