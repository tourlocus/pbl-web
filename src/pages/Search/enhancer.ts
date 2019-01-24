import Vue from 'vue';
import Component from 'vue-class-component';
import {Prop} from 'vue-property-decorator';
import { State } from 'vuex-class';

@Component({})
class Enhancer extends Vue {
  @Prop() query;
  @State('articles') articles;

  public isArticle = true;
}

export default Enhancer;
