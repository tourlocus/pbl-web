function login(state, values) {
  Object.assign(state, {
    isAuth: true,
    client: values.client,
    uid: values.uid,
    accessToken: values['access-token'],
  });
}

function logout(state, values) {
  Object.assign(state, {
    isAuth: false,
    client: null,
    uid: null,
    accessToken: null,
  });
}

export const mutations = {
  login,
  logout,
};

