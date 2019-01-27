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
  @State('auth') auth;
  @Action('articles/getDetailArticle') getDetailArticle;
  @Action('articles/postFavorites') postFavorites;
  @Action('articles/deleteFavorites') deleteFavorites;
  public isArticle = true;
  public isLoading = false;


  updateIsLoading(v: boolean) {
    this.isLoading = false;
  }

  toPresentDetail(path) {
    this.$router.push(path);
  }

  async postFavorite() {
    const {id} = this.$route.params;
    if (!this.auth.isAuth) {
      this.$router.push('/signin');
    } else {
      await this.postFavorites({cred: this.auth, id});
    }
  }

  async deleteFavorite() {
    const {id} = this.$route.params;
    await this.deleteFavorites({cred: this.auth, id})
  }

  async created() {
    const {name, id} = this.$route.params;
    try {
      await this.getDetailArticle({name, id, current: this.users.name});
    } catch (error) {
      this.isArticle = false;
    }
  }
}

export default Enhancer;

