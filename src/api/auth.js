import axios from "axios";

const API_URL = "https://kaana-auth-api.com";

export async function getUserProfile(userId, token) {
  const headers = { Authorization: `Bearer ${token}` };
  const url = `${API_URL}/users/${userId}`;
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error(`Error fetching user profile: ${error.message}`);
    throw error;
  }
}

export async function getPersonalPreferences(userId, token) {
  const headers = { Authorization: `Bearer ${token}` };
  const url = `${API_URL}/users/${userId}/preferences`;
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error(`Error fetching personal preferences: ${error.message}`);
    throw error;
  }
}

export async function getAccountDetails(userId, token) {
  const headers = { Authorization: `Bearer ${token}` };
  const url = `${API_URL}/users/${userId}/account`;
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error(`Error fetching account details: ${error.message}`);
    throw error;
  }
}

export async function getActivityHistory(userId, token) {
  const headers = { Authorization: `Bearer ${token}` };
  const url = `${API_URL}/users/${userId}/activity`;
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error(`Error fetching activity history: ${error.message}`);
    throw error;
  }
}

export async function getRecommendations(userId, token) {
  const headers = { Authorization: `Bearer ${token}` };
  const url = `${API_URL}/users/${userId}/recommendations`;
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error(`Error fetching recommendations: ${error.message}`);
    throw error;
  }
}
