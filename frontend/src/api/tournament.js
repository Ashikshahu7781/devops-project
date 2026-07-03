import api from "./axios";

export const getTournaments = async () => {
  const response = await api.get("/tournaments");
  return response.data;
};

export const createTournament = async (tournamentData) => {
  const response = await api.post("/tournaments", tournamentData);
  return response.data;
};