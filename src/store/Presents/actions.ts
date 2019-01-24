import {presentApi} from '@/api';

async function getCreatePresent({commit}, cred) {
  try {
    const data = await presentApi.getCreatePresent(cred);

    commit('getCreatePresent', data);
  } catch (error) {
    throw error;
  }
}

async function getEditPresent({commit}, {cred, id}) {
  try {
    const data = await presentApi.getEditPresent(cred, id);

    commit('getEditPresent', data);
  } catch (error) {
    throw error;
  }
}

export const actions = {
  getCreatePresent,
  getEditPresent,
};
