import {usersApi} from '@/api';

function setUserInfomation({commit}, values) {
  commit('setUserInfomation', values);
}

async function getUserAritlce({commit}, name) {
  const data = await usersApi.getUserItem(name);

  commit('getUserAritlce', data);
}

async function deleteUser({commit}) {
  const newState = {
    id: null,
    icon: null,
    name: null,
    profile: Object.create(null),
    items: [],
    favorites: [],
  };
  commit('deleteUser', newState);
}

export const actions = {
  setUserInfomation,
  getUserAritlce,
  deleteUser,
};
