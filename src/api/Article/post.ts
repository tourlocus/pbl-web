import axios from 'axios';

const endpoint = process.env.VUE_APP_ENDPOINT;
const resource = 'articles';

// 記事作成
export async function postArticles(cred, values) {
  const tagArray = [];

  // tslint:disable-next-line
  for (let i = 0; i < values.tags.length; i++) {
    const tag = values.tags[i].text;
    tagArray.push(tag);
  }

  // FormData
  const form = new FormData();
  form.append('title', values.title);
  form.append('content', values.content);

  // @ts-ignore
  form.append('tags', tagArray);

  // tslint:disable-next-line
  for (let i = 0; i < values.files.length; i++) {
    form.append('files[]', values.files[i]);
  }

  try {
    await axios({
      url: `${endpoint}/${resource}/create`,
      method: 'POST',
      headers: {
        'client': cred.client,
        'uid': cred.uid,
        'access-token': cred.accessToken,
      },
      data: form,
    });
  } catch (error) {
    throw error;
  }
}
