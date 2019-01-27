import Vue from 'vue';
import Component from 'vue-class-component';
import {State, Action} from 'vuex-class';

@Component({})
class Enhancer extends Vue {
  @State('auth') auth;
  @State('users') users;
  @State('presents') presents;
  @Action('presents/getDetailPresent') getDetailPresent;

  public isArticle = true;

  get currentName() {
    const {name} = this.$route.params;

    return name;
  }

  async created() {
    const {id, name} = this.$route.params;
    try {
      await this.getDetailPresent({name, id});
    } catch (error) {
      this.isArticle = false;
      throw error;
    }
  }
}

export default Enhancer;
