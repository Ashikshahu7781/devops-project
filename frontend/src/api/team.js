import api from "./axios";

export const getTeams = async (tournamentId = null) => {
  const url = tournamentId
    ? `/teams?tournament_id=${tournamentId}`
    : "/teams";

  const response = await api.get(url);
  return response.data;
};

export const createTeam = async (data) => {
  const response = await api.post("/teams", data);
  return response.data;
};

export const updateTeam = async (id, data) => {
  const response = await api.put(`/teams/${id}`, data);
  return response.data;
};

export const deleteTeam = async (id) => {
  const response = await api.delete(`/teams/${id}`);
  return response.data;
};