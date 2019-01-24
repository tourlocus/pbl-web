import Vue from 'vue';
import Component from 'vue-class-component';
import {usersApi} from '@/api';
import { State, Action } from 'vuex-class';

@Component({})
class Enhancer extends Vue {
  @State('users') users;
  @Action('users/getUserAritlce') getUserArticle;

  public isLoading = false;
  public isArticle = true;

  updateIsLoading(v) {
    this.isLoading = v;
  }

  async created() {
    const {name} = this.$route.params;

    try {
      this.updateIsLoading(true);
      await this.getUserArticle(name);
      this.updateIsLoading(false);
    } catch (error) {
      this.updateIsLoading(false);
      this.isArticle = false;
    }
  }
}

export default Enhancer;
