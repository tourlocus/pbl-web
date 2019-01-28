<template>
  <div class="p-Season">

    <div class="container">
      <div class="main">
        <template>
        </template>

        <template>
          <ElTabs type="card" @tab-click="handleSeason">
            <ElTabPane label="春">
              <template v-if="articles.season.length === 0">
                <div class="not-page">
                  <h1>404 Not Found</h1>
                </div>
              </template>
              <template v-else>
                <div 
                  v-for="(item, i) in articles.season"
                  :key="i"
                >
                  <ItemCard
                    class="w-card"
                    :id="item.id"
                    :media="item.media"
                    :name="item.user_name"
                    :icon="item.user_icon"
                    :title="item.title"
                    :content="item.content"
                  />
                </div>
              </template> 
            </ElTabPane>
            <ElTabPane label="夏">
              <template v-if="articles.season.length === 0">
                <div class="not-page">
                  <h1>404 Not Found</h1>
                </div>
              </template>
              <template v-else>
                <div 
                  v-for="(item, i) in articles.season"
                  :key="i"
                >
                  <ItemCard
                    class="w-card"
                    :id="item.id"
                    :media="item.media"
                    :name="item.user_name"
                    :icon="item.user_icon"
                    :title="item.title"
                    :content="item.content"
                  />
                </div>
              </template> 
            </ElTabPane>
            <ElTabPane label="秋">
              <template v-if="articles.season.length === 0">
                <div class="not-page">
                  <h1>404 Not Found</h1>
                </div>
              </template>
              <template v-else>
                <div 
                  v-for="(item, i) in articles.season"
                  :key="i"
                >
                  <ItemCard
                    class="w-card"
                    :id="item.id"
                    :media="item.media"
                    :name="item.user_name"
                    :icon="item.user_icon"
                    :title="item.title"
                    :content="item.content"
                  />
                </div>
              </template> 
            </ElTabPane>
            <ElTabPane label="冬">
              <template v-if="articles.season.length === 0">
                <div class="not-page">
                  <h1>404 Not Found</h1>
                </div>
              </template>
              <template v-else>
                <div 
                  v-for="(item, i) in articles.season"
                  :key="i"
                >
                  <ItemCard
                    class="w-card"
                    :id="item.id"
                    :media="item.media"
                    :name="item.user_name"
                    :icon="item.user_icon"
                    :title="item.title"
                    :content="item.content"
                  />
                </div>
              </template> 
            </ElTabPane>

          </ElTabs>
        </template>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import {ItemCard} from '@/components';
import enhancer from './enhancer';

export default {
  name: 'Season',
  mixins: [enhancer],
  components: {ItemCard},
};
</script>

<style lang="scss" scoped>
@import "./Season";
</style>
