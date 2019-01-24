import Vue from 'vue';
import Component from 'vue-class-component';
import {Action, State} from 'vuex-class';
import {kind, target} from '@/utils';
import {presentApi} from '@/api';

@Component({})
class Enhancer extends Vue {
  @Action('presents/getCreatePresent') getCreatePresent;
  @State('auth') auth;
  @State('users') users;
  @State('presents') presents;

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
  public isLoading = false;


  get kindList(): any[] {
    return kind;
  }
  get targetList(): any[] {
    return target;
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

  updateIsLoading(v) {
    this.isLoading = v;
  }

  handleSubmit() {
    this.$validator.validateAll().then(async result => {
      if (result) {
        try {
          this.updateIsLoading(true);
          await presentApi.postPresent(this.auth, this.form);
          this.nextConfirm();
        } catch (error) {
          this.$message('お土産の作成に失敗しました');
          this.updateIsLoading(false);
        }
      }
    });
  }

  resetForm() {
    this.form = {
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
    this.showImage = '';
  }

nextConfirm() {
  const {name} = this.$route.params;
  this.$confirm('続いてお土産を追加しますか?', 'お土産の追加', {
      confirmButtonText: '続ける',
      cancelButtonText: '終了する',
      type: 'info',
    })
      // 続ける場合
      .then(() => {
        this.resetForm();
        this.updateIsLoading(false);
        this.errors.items = [];
      })
      // やめる場合
      .catch(() => {
        this.$router.push(`/${name}`);
      });
  }

async created() {
    try {
      await this.getCreatePresent(this.auth);
    } catch (error) {
      throw error;
    }
  }
}


export default Enhancer;
