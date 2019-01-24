import { getConvertArticle, getConvertDetailArticle } from './converter';

function getArticle(state, payload) {
  const result = getConvertArticle(payload);
  Object.assign(state, result);
}


function getDetailArticle(state, payload) {
  const result = getConvertDetailArticle(payload);
  Object.assign(state, result);
}

function getIndexArticles(state, payload) {
  Object.assign(state, payload);
}

function getSearchArticles(state, payload) {
  Object.assign(state, payload);
}

export const mutations = {
  getArticle,
  getDetailArticle,
  getIndexArticles,
  getSearchArticles,
};
