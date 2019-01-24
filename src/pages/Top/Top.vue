<template>
  <div class="p-Top">

    <div class="container">
      <div class="main">
        <template v-if="!isLoading">
          <ElTabs type="card">
            <!-- 新着順 -->
            <ElTabPane label="新着順">
              <template v-if="articles.items.length === 0">
                <div class="not-item">
                  <h3>記事が存在しません</h3>
                </div>
              </template>

              <template v-else>
                <div
                  v-for="(item, i) in articles.items"
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

            <!-- 人気順 -->
            <ElTabPane label="人気順">
              <template v-if="articles.popular.length === 0">
                <div class="not-item">
                  <h3>記事が存在しません</h3>
                </div>
              </template>
              <template v-else>
                <div
                  v-for="(item, i) in articles.popular"
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
import enhancer from './enhancer';
import {ItemCard} from '@/components';

export default {
  name: 'Top',
  components: {ItemCard},
  mixins: [enhancer],
};
</script>


<style lang="scss" scoped>
@import './Top';
</style>
