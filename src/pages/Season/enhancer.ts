import Vue from 'vue';
import Component from 'vue-class-component';
import {Prop} from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

@Component({})
class Enhancer extends Vue {
  @Prop() query;
  @State('articles') articles;
  @Action('articles/getSeasonArticles') getSeasonArticles;

  public isArticle = true;

  async handleSeason(tab) {
    if (tab.label === '春') {
      await this.getSeasonArticles({i: '03', j: '04', k: '05'});
    } else if (tab.label === '夏') {
      await this.getSeasonArticles({i: '06', j: '07', k: '08'});
    } else if (tab.label === '秋') {
      await this.getSeasonArticles({i: '09', j: '10', k: '11'});
    } else if (tab.label === '冬') {
      await this.getSeasonArticles({i: '12', j: '01', k: '02'});
    }
  }

  async created() {
    try {
      await this.getSeasonArticles({i: '03', j: '04', k: '05'});
    } catch (error) {
      this.isArticle = false;
      throw error;
    }
  }
}

export default Enhancer;
