import axios from 'axios';

const endpoint = process.env.VUE_APP_ENDPOINT;
const resource = 'favorites';

export async function postFavorites(cred, id) {
  try {
    const response = await axios({
      url: `${endpoint}/${resource}/${id}`,
      method: 'POST',
      headers: {
        'client': cred.client,
        'uid': cred.uid,
        'access-token': cred.accessToken,
      },
    });

    if (response.status === 200) {
      const {data} = response;

      return data;
    }

  } catch (error) {
    throw error;
  }
}
