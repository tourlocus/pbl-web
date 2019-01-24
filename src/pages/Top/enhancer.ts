import Vue from 'vue';
import Component from 'vue-class-component';
import {Action, State} from 'vuex-class';

@Component({})
class Enhancer extends Vue {
  @State('articles') articles;
  @Action('articles/getIndexArticle') getIndexArticles;

  public isLoading = false;

  updateIsLoading(v) {
    this.isLoading = v;
  }

  async created() {
    try {
      this.updateIsLoading(true);
      await this.getIndexArticles();
      this.updateIsLoading(false);
    } catch (error) {
      this.updateIsLoading(false);
      throw error;
    }
  }
}

export default Enhancer;
