import axios from 'axios';

const endpoint = process.env.VUE_APP_ENDPOINT;
const resource = 'presents';

export async function getCreatePresent(cred) {
  try {
    const response = await axios({
      url: `${endpoint}/${resource}/new`,
      method: 'GET',
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

// 編集
export async function getEditPresent(cred, id) {
  try {
    const response = await axios({
      url: `${endpoint}/${resource}/edit/${id}`,
      method: 'GET',
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
