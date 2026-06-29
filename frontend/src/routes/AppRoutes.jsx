import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import Tournaments from "../pages/Tournaments";
import TournamentDetails from "../pages/TournamentDetails";
import Teams from "../pages/Teams";
import Fixtures from "../pages/Fixtures";
import Standings from "../pages/Standings";
import About from "../pages/About";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tournaments" element={<Tournaments />} />
        <Route path="tournaments/:id" element={<TournamentDetails />} />
        <Route path="teams" element={<Teams />} />
        <Route path="fixtures" element={<Fixtures />} />
        <Route path="standings" element={<Standings />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;