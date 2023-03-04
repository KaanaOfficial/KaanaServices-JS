import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userProfile: null,
    personalPreferences: {},
    accountDetails: {},
    activityHistory: [],
    recommendations: [],
  }),
  actions: {
    setUserProfile(userProfile) {
      this.userProfile = userProfile
    },
    setPersonalPreferences(preferences) {
      this.personalPreferences = preferences
    },
    setAccountDetails(details) {
      this.accountDetails = details
    },
    setActivityHistory(history) {
      this.activityHistory = history
    },
    setRecommendations(recommendations) {
      this.recommendations = recommendations
    },
  },
})
