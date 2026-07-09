import api from "./axios";

export const getStandings = (tournamentId) =>
  api.get(`/standings/${tournamentId}`);