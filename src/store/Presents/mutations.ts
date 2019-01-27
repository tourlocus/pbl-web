import {getConvertCreatePresent, getConverterEditPresent, getConvertDetailPresent} from './converter';

function getCreatePresent(state, payload) {
  const result = getConvertCreatePresent(payload);
  Object.assign(state, result);
}

function getEditPresent(state, payload) {
  const result = getConverterEditPresent(payload);
  Object.assign(state, result);
}

function getDetailPresent(state, payload) {
  const result = getConvertDetailPresent(payload);
  Object.assign(state, result);
}

export const mutations = {
  getCreatePresent,
  getEditPresent,
  getDetailPresent,
};
