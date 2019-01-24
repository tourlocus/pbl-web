import axios from 'axios';
import { getConvertUserItem } from './converter';

const endpoint = process.env.VUE_APP_ENDPOINT;
const resource = 'users';


export async function getUserItem(name) {
  try {
    const response = await axios({
      url: `${endpoint}/${resource}/${name}`,
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
