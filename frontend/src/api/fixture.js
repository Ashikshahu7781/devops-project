import api from "./axios";

export const getFixtures = (tournamentId) =>
  api.get("/fixtures", {
    params: {
      tournament_id: tournamentId,
    },
  });

export const generateFixtures = (tournamentId) =>
  api.post(`/fixtures/generate/${tournamentId}`);

export const updateFixtureScore = (fixtureId, data) =>
  api.put(`/fixtures/${fixtureId}/score`, data);