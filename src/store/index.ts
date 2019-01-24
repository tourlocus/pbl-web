import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

// modules
import auth from './Auth';
import users from './Users';
import articles from './Articles';
import presents from './Presents';

Vue.use(Vuex);

const vuexLocal = new VuexPersist({
  key: 'tourlocus-client',
});

const store = new Vuex.Store({
  modules: {auth, users, articles, presents},
  plugins: [vuexLocal.plugin],
});

export default store;
