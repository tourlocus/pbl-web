import Vue from 'vue';
import Component from 'vue-class-component';
import {Watch} from 'vue-property-decorator';
import {Action} from 'vuex-class';

@Component({})
class Enhancer extends Vue {
  @Action('auth/postSignUp') postSignUp;

  form = { name: '', email: '', password: '', birthday: '', gender: ''};
  confirmPassword = '';

  @Watch('form.birthday')
  onValueChange(value) {
    if (value.length === 4 || value.length === 7) {
      this.form.birthday = value + '-';
    }
  }


  handleSubmit() {
    this.$validator.validateAll().then(async result => {
      if (result) {
        try {
          await this.postSignUp(this.form);
        } catch (error) {
          this.$message('アカウントの作成に失敗しました');
        }
      }
    });
  }

}

export default Enhancer;
