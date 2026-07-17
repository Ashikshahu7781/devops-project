import api from "./axios";

export const getFixtures = async (tournamentId) => {

  const response = await api.get("/fixtures", {
    params: {
      tournament_id: tournamentId,
    },
  });

  return response.data;
};

export const generateFixtures = async (tournamentId) => {

  const response = await api.post(
    `/fixtures/generate/${tournamentId}`
  );

  return response.data;
};

export const updateFixtureScore = async (
  fixtureId,
  data,
) => {

  const response = await api.put(
    `/fixtures/${fixtureId}/score`,
    data
  );

  return response.data;
};