import api from "./axios";

export const getTournamentStatistics = (tournamentId) =>
  api.get(`/statistics/${tournamentId}`);