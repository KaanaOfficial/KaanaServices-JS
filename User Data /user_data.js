import axios from 'axios';

async function getUserProfile(access_token) {
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };
  const response = await axios.get('https://auth.kaana.io/api/v1/', { headers });
  return response.data;
}


