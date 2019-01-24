import Vue from 'vue';
import Component from 'vue-class-component';
import {State} from 'vuex-class';

@Component({})
class Enhancer extends Vue {
  @State('auth') public auth: object;
  @State('users') public users: object;
}

export default Enhancer;
