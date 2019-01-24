import axios from 'axios';

const endpoint = process.env.VUE_APP_ENDPOINT;
const resource = 'presents';

export async function postPresent(cred, value) {
  const form = new FormData();
  form.append('id', value.articleId);
  form.append('name', value.name);
  form.append('files', value.file);
  form.append('kind', value.kind);
  form.append('otherKind', value.otherKind);
  form.append('target', value.target);
  form.append('otherTarget', value.otherTarget);
  form.append('price', value.price);
  form.append('content', value.content);

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
