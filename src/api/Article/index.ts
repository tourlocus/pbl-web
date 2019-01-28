import {postArticles} from './post';
import {
  getArticle,
  getDetailArticle,
  getIndexArticles,
  getSearchArticles,
  getSeasonArticles,
} from './get';
import {putArticle} from './put';

export const articleApi = {
  postArticles,
  getArticle,
  getIndexArticles,
  getDetailArticle,
  getSearchArticles,
  putArticle,
  getSeasonArticles,
};
