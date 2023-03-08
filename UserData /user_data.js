import axios from 'axios';
import { useUserStore } from './store'

const userStore = useUserStore()

async function getUserProfile(access_token) {
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };
  const response = await axios.get('https://auth.kaana.io/api/v1/user', { headers });
  userStore.setUserProfile(response.data)
  return response.data;
}

