<template>
  <div class="p-Search">

    <div class="container">
      <div class="main">
        <template v-if="articles.search.length === 0">
          <div class="not-page">
            <h3>記事が存在しません</h3>
          </div>
        </template>
        <template v-else>
          <div
            v-for="(item, i) in articles.search"
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
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import enhancer from './enhancer';
import {ItemCard} from '@/components';

export default {
  name: 'Search',
  mixins: [enhancer],
  components: {ItemCard},
};
</script>

<style lang="scss" scoped>
@import './Search';
</style>
