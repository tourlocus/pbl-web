import Vue from 'vue';
import Component from 'vue-class-component';
import {Action} from 'vuex-class';

@Component({})
class Enhancer extends Vue {
  @Action('auth/postSignIn') postSignIn;

  public form = {email: '', password: ''};
  public isLoading = false;

  handleSubmit() {
    this.$validator.validateAll().then(async result => {
      if (result) {
        try {
          this.updateIsLoading(true);
          await this.postSignIn(this.form);
        } catch (error) {
          this.$message('ログインに失敗しました');
          this.updateIsLoading(false);
        }
      }
    });
  }

  updateIsLoading(v: boolean) {
    this.isLoading = v;
  }
}

export default Enhancer;
