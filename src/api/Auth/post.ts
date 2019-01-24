import axios from 'axios';

const endpoint = process.env.VUE_APP_ENDPOINT;
const resource = 'auth';

// ログイン
export async function postSignIn(values) {
  try {
    const response = await axios({
      url: `${endpoint}/${resource}/sign_in`,
      method: 'POST',
      data: values,
    });

    if (response.status === 200) {
      const {data: {data}, headers} = response;

      return {data, headers};
    }

  } catch (error) {
    throw error;
  }
}

// 新規登録
export async function postSignUp(values) {
  try {
    const response = await axios({
      url: `${endpoint}/${resource}`,
      method: 'POST',
      data: values,
    });

    if (response.status === 200) {
      const {data: {data}, headers} = response;

      return {data, headers};
    }

  } catch (error) {
    throw error;
  }
}
