import Vue from 'vue';
import Component from 'vue-class-component';
import {State, Action} from 'vuex-class';
import moment from 'moment';

@Component({
  filters: {
    dateFormat(v) {
      return moment(v).format('YYYY年MM月DD日') + 'に更新';
    },
  },
})
class Enhancer extends Vue {
  @State('articles') articles;
  @State('users') users;
  @Action('articles/getDetailArticle') getDetailArticle;
  public isArticle = true;
  public isLoading = false;


  updateIsLoading(v: boolean) {
    this.isLoading = false;
  }

  async created() {
    const {name, id} = this.$route.params;
    try {
      await this.getDetailArticle({name, id});
    } catch (error) {
      this.isArticle = false;
    }
  }
}

export default Enhancer;

