import Vue from 'vue';

// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VeeValidate from 'vee-validate';

export default function plugin() {
  Vue.use(ElementUI);
  Vue.use(VeeValidate);
}
