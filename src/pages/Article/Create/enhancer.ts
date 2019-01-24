import Vue from 'vue';
import Component from 'vue-class-component';
import {State} from 'vuex-class';
import {articleApi} from '@/api';

@Component({})
class Enhancer extends Vue {
  @State('auth') auth;
  @State('users') users;

  public form = {title: '', tags: [], files: [], content: '' };
  public tag = '';
  public images = [];
  public isLoading = false;

  updateIsLoading(v: boolean) {
    this.isLoading = v;
  }

  // ファイルセレクト
  handleFileSelect(e) {
    const files = e.target.files;

    if (files.length !== 0) {
      this.form.files.length = 0;
      this.images.length = 0;
    }

    // tslint:disable-next-line
    for (let i = 0; i < files.length; i++) {
      this.readFile(files[i]);
    }
  }

  // ファイルの読み込み
  readFile(file) {
    const vm = this;
    const reader = new FileReader();
    this.form.files.push(file);

    reader.onload = e => {
      // @ts-ignore
      vm.images.push(e.target.result);
    };

    reader.readAsDataURL(file);
  }

  handleSubmit() {
    this.$validator.validateAll().then(async result => {
      if (result) {
        try {
          this.updateIsLoading(true);
          await articleApi.postArticles(this.auth, this.form);
          this.$router.push(`/${this.users.name}`);
        } catch (error) {
          this.$message('記事の作成に失敗しました');
          this.updateIsLoading(false);
        }
      }
    });
  }
}

export default Enhancer;
