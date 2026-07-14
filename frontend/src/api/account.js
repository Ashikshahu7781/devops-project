import api from "./axios";

// Get logged-in user's profile
export const getProfile = async () => {
  const response = await api.get("/account/profile");
  return response.data;
};

// Update profile
export const updateProfile = async (data) => {
  const response = await api.put(
    "/account/profile",
    data
  );

  return response.data;
};

// Change password
export const changePassword = async (data) => {
  const response = await api.put(
    "/account/password",
    data
  );

  return response.data;
};