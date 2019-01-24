<template>
  <div class="p-User" v-cloak>

    <div class="container">
      <div class="main">
        <template v-if="isArticle">

          <template v-if="!isLoading">
            <UserProfile
              :user="users"
            />

            <!-- タブ -->
            <ElTabs
              type="card"
            >
              <!-- 自分の記事一覧 -->
              <ElTabPane label="Items" >
                <div
                  v-for="(item, i) in users.items"
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
              </ElTabPane>
              
              <!-- お気に入り記事一覧 -->
              <ElTabPane label="Favorites">
                <div
                  v-for="(item, i) in users.favorites"
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

              </ElTabPane>
            </ElTabs>

          </template>
        </template>

        <template v-else>
          <div class="not-page">
            <h1> 404 Not Found </h1>
          </div>
        </template>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {UserProfile, ItemCard} from '@/components';
import enhancer from './enhancer';

export default {
  name: 'User',
  components: {
    UserProfile,
    ItemCard,
  },
  mixins: [enhancer],
};
</script>

<style lang="scss" scoped>
@import "./User";
</style>
