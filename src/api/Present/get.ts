import axios from 'axios';

const endpoint = process.env.VUE_APP_ENDPOINT;
const resource = 'presents';

// get
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
      url: `${endpoint}/${resource}/${id}`,
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

// 詳細
export async function getDetailPresent(name, id) {
  try {
    const response = await axios({
      url: `${endpoint}/${resource}/${name}/${id}`,
      method: 'GET',
    });

    if (response.status === 200) {
      const {data} = response;

      return data;
    }
  } catch (error) {
    throw error;
  }
}
