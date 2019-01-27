function setUserInfomation(state, values) {
  Object.assign(state, {
    id: values.id,
    name: values.name,
    icon: values.icon,
  });
}

function getUserAritlce(state, payload) {
  Object.assign(state, payload);
}

function deleteUser(state, payload) {
  Object.assign(state, payload);
}

export const mutations = {
  setUserInfomation,
  getUserAritlce,
  deleteUser,
};

