import api from "./axios";

export const getStandings = async (tournamentId) => {

  const response = await api.get(
    `/standings/${tournamentId}`
  );

  return response.data;

};