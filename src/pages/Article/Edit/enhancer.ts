import Vue from 'vue';
import Component from 'vue-class-component';
import {State, Action} from 'vuex-class';
import {articleApi} from '@/api';

@Component({})
class Enhancer extends Vue {
  @State('auth') auth;
  @State('users') user;
  @State('articles') articles;
  @Action('articles/getArticle') getArticle;

  isArticle = true;
  public form = {titile: '', tags: [], files: [], content: ''};
  public tag = '';
  public images = [];
  public isLoading = false;

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

  updateIsLoading(v) {
    this.isLoading = v;
  }

  // サブミット
  handleSubmit() {
    this.$validator.validateAll().then(async result => {
      if (result) {
        try {
          this.updateIsLoading(true);
          await articleApi.putArticle(
            this.auth,
            this.$route.params.id,
            this.form,
          );
          this.$router.push(`/${this.user.name}`);
        } catch (error) {
          this.$message('記事の更新に失敗しました');
          this.updateIsLoading(false);
        }
      }
    });
  }

  // 読み込み
  async created() {
    const {name, id} = this.$route.params;
    if (name !== this.user.name) {
      this.isArticle = false;
    } else {
      try {
        await this.getArticle({cred: this.auth, id});
        const {title, tags, media, content} = this.articles;
        Object.assign(this.form, {
          title,
          tags,
          content,
        });
        this.images = media;
      } catch (error) {
        this.isArticle = false;
      }
    }
  }
}

export default Enhancer;
