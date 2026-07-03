import api from "./axios";

export const getTournaments = async () => {
  const response = await api.get("/tournaments");
  return response.data;
};

export const createTournament = async (tournamentData) => {
  const response = await api.post("/tournaments", tournamentData);
  return response.data;
};

export const updateTournament = async (id, tournamentData) => {
  const response = await api.put(
    `/tournaments/${id}`,
    tournamentData
  );

  return response.data;
};

export const deleteTournament = async (id) => {
  const response = await api.delete(`/tournaments/${id}`);
  return response.data;
};