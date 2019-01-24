import {usersApi} from '@/api';

function setUserInfomation({commit}, values) {
  commit('setUserInfomation', values);
}

async function getUserAritlce({commit}, name) {
  const data = await usersApi.getUserItem(name);

  commit('getUserAritlce', data);
}

export const actions = {
  setUserInfomation,
  getUserAritlce,
};
