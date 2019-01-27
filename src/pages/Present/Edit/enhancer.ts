import Vue from 'vue';
import Component from 'vue-class-component';
import {State, Action} from 'vuex-class';
import {kind, target} from '@/utils';
import {presentApi} from '@/api';


@Component({})
class Enhancer extends Vue {
  @State('auth') auth;
  @State('users') users;
  @State('presents') presents;
  @Action('presents/getEditPresent') getEditPresent;

  public form = {
    articleId: '',
    name: '',
    file: '',
    kind: '',
    otherKind: '',
    target: '',
    otherTarget: '',
    price: '',
    content: '',
  };
  public showImage = '';
  public isArticle = true;
  public isLoading = false;

  get kindList(): any[] {
    return kind;
  }
  get targetList(): any[] {
    return target;
  }

  updateIsLoading(v) {
    this.isLoading = v;
  }

  // ファイルセレクト
  handleFileSelect(e) {
    const files = e.target.files[0];
    this.readFile(files);
  }

  // ファイルの読み込み
  readFile(file) {
    this.form.file = file;
    const reader = new FileReader();
    reader.onload = e => {
      // @ts-ignore
      this.showImage = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  handleSubmit() {
    const {id} = this.$route.params;
    this.$validator.validateAll().then(async result => {
      if (result) {
        try {
          this.updateIsLoading(true);
          await presentApi.putPresent(this.auth, this.form, id);
          this.$router.push(`/${this.users.name}`);
        } catch (error) {
          this.$message('お土産の更新に失敗しました');
          this.updateIsLoading(false);
        }
      }
    });
  }


  async created() {
    const {id} = this.$route.params;
    try {
      await this.getEditPresent({cred: this.auth, id});
      const {present} = this.presents;
      this.showImage = present.file;
      Object.assign(this.form, present);
    } catch (error) {
      this.isArticle = false;
      throw error;
    }
  }
}

export default Enhancer;
