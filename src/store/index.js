import { defineStore } from "pinia";
import * as authApi from "../api/auth";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    userProfile: null,
    personalPreferences: null,
    accountDetails: null,
    activityHistory: null,
    recommendations: null,
  }),
  actions: {
    async fetchUserProfile(userId, token) {
      this.userProfile = await authApi.getUserProfile(userId, token);
    },
    async fetchPersonalPreferences(userId, token) {
      this.personalPreferences = await authApi.getPersonalPreferences(
        userId,
        token
      );
    },
    async fetchAccountDetails(userId, token) {
      this.accountDetails = await authApi.getAccountDetails(userId, token);
    },
    async fetchActivityHistory(userId, token) {
      this.activityHistory = await authApi.getActivityHistory(userId, token);
    },
    async fetchRecommendations(userId, token) {
      this.recommendations = await authApi.getRecommendations(userId, token);
    },
  },
});
