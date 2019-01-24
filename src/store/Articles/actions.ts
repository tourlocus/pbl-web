import {articleApi} from '@/api';

async function getArticle({commit}, {cred, id}) {
  try {
    const data = await articleApi.getArticle(cred, id);
    commit('getArticle', data);
  } catch (error) {
    throw error;
  }
}

async function getDetailArticle({commit}, {name, id}) {
  try {
    const data = await articleApi.getDetailArticle(name, id);
    commit('getDetailArticle', data);
  } catch (error) {
    throw error;
  }
}

async function getIndexArticle({commit}) {
  try {
    const data = await articleApi.getIndexArticles();
    commit('getIndexArticles', data);
  } catch (error) {
    throw error;
  }
}

async function getSearchArticle({commit}, word) {
  try {
    const data = await articleApi.getSearchArticles(word);
    commit('getSearchArticles', data);
  } catch (error) {
    throw error;
  }
}

export const actions = {
  getArticle,
  getDetailArticle,
  getIndexArticle,
  getSearchArticle,
};

