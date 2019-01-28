import {articleApi, favoriteApi} from '@/api';

async function getArticle({commit}, {cred, id}) {
  try {
    const data = await articleApi.getArticle(cred, id);
    commit('getArticle', data);
  } catch (error) {
    throw error;
  }
}

async function getDetailArticle({commit}, {name, id, current}) {
  try {
    const data = await articleApi.getDetailArticle(name, id, current);
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

async function postFavorites({commit}, {cred, id}) {
  try {
    await favoriteApi.postFavorites(cred, id);

    commit('postFavorites');
  } catch (error) {
    throw error;
  }
}

async function deleteFavorites({commit}, {cred, id}) {
  try {
    await favoriteApi.deleteFavorites(cred, id);

    commit('deleteFavorites');
  } catch (error) {
    throw error;
  }
}

async function getSeasonArticles({commit}, {i, j, k}) {
  try {
    const data = await articleApi.getSeasonArticles(i, j, k);

    commit('getSeasonArticles', data);
  } catch (error) {
    throw error;
  }
}

export const actions = {
  getArticle,
  getDetailArticle,
  getIndexArticle,
  getSearchArticle,
  postFavorites,
  deleteFavorites,
  getSeasonArticles,
};

