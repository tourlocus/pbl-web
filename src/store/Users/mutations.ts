function setUserInfomation(state, values) {
  Object.assign(state, {
    name: values.name,
    icon: values.icon,
  });
}

function getUserAritlce(state, payload) {
  Object.assign(state, payload);
}

export const mutations = {
  setUserInfomation,
  getUserAritlce,
};

