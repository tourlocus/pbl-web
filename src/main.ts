import Vue from 'vue';
import {App} from './pages';
import router from './router';
import store from './store';
import plugin from './plugins';
import {sync} from 'vuex-router-sync';

Vue.use(plugin);
sync(store, router);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
