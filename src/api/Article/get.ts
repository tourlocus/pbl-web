import axios from 'axios';

const endpoint = process.env.VUE_APP_ENDPOINT;
const resource = 'articles';

// 編集画面
export async function getArticle(cred, id) {
  try {
    const response = await axios({
      url: `${endpoint}/${resource}/${id}`,
      method: 'GET',
      headers: {
        'client': cred.client,
        'uid': cred.uid,
        'access-token': cred.accessToken,
      },
    });

    if (response.status === 200) {
      const {data} = response;

      return data;
    }

  } catch (error) {
    throw error;
  }
}


// 詳細画面
export async function getDetailArticle(name, id, current) {
  try {
    const response = await axios({
      url: `${endpoint}/${resource}/${name}/${id}/${current}`,
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

// トップページ
export async function getIndexArticles() {
  try {
    const response = await axios({
      url: `${endpoint}/${resource}`,
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

// 検索
export async function getSearchArticles(word) {
  try {
    const response = await axios({
      url: `${endpoint}/${resource}/search/${word}`,
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

// 季節ごと
export async function getSeasonArticles(i, j, k) {
  try {
    const response = await axios({
      url: `${endpoint}/${resource}/season`,
      method: 'GET',
      params: {i, j, k},
    });

    if (response.status === 200) {
      const {data} = response;

      return data;
    }

  } catch (error) {
    throw error;
  }
}
