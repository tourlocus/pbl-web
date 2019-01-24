import axios from 'axios';

const endpoint = process.env.VUE_APP_ENDPOINT;
const resource = 'auth';

// ログアウト
export async function deleteSignOut(cred) {
  try {
    await axios({
      url: `${endpoint}/${resource}/sign_out`,
      method: 'DELETE',
      headers: {
        'client': cred.client,
        'uid': cred.uid,
        'access-token': cred.accessToken,
      },
    });
  } catch (error) {
    throw error;
  }
}
