import {authApi} from '@/api';
import router from '@/router';

// ログイン
async function postSignIn({dispatch, commit}, values) {
  const {data, headers} = await authApi.postSignIn(values);
  dispatch('users/setUserInfomation', data, {root: true});
  commit('login', headers);
  router.push(`/${data.name}`);
}

async function postSignUp({dispatch, commit}, values) {
  try {
    const {data, headers} = await authApi.postSignUp(values);
    dispatch('users/setUserInfomation', data, {root: true});
    commit('login', headers);
    router.push(`/${data.name}`);
  } catch (error) {
    throw error;
  }
}

async function deleteSignOut({dispatch, commit}, values) {
  await authApi.deleteSignOut(values);
  await dispatch('users/deleteUser', null, {root: true});
  commit('logout');
  router.push('/');
}

export const actions = {
  postSignIn,
  postSignUp,
  deleteSignOut,
};
