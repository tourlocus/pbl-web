<template>
  <div class="p-ArticleDetail" v-cloak>
    <div class="container">
      <template v-if="isArticle">

        <div class="main">

          <!-- 記事部分 -->
          <div class="w-main">
            <!-- ヘッダー -->
            <div class="w-header">
              <div class="w-header-section1">
                <!-- 更新日時 -->
                <p> {{ articles.article.updatedAt | dateFormat }} </p>

                <!-- 作成者が自分の場合 -->
                <template v-if="articles.article.userName === users.name">
                  <div class="w-edit-section">
                    <ElDropdown trigger="click">
                      <span>
                        <i class="fas fa-ellipsis-v" />
                      </span>
                      <ElDropdownMenu slot="dropdown">
                        <ElDropdownItem>
                          <RouterLink 
                            :to="`/${articles.article.userName}/edit/${articles.article.id}`"
                          >
                            編集
                          </RouterLink>
                        </ElDropdownItem>
                      </ElDropdownMenu>
                    </ElDropdown>
                  </div>
                </template>

                <!-- 作成者がしぶん以外の場合 -->
                <template v-else>
                  <!-- お気に入り状態 -->
                  <template v-if="articles.article.status">
                    <span class="favorite">
                      <i class="fas fa-heart" />
                    </span>
                  </template>

                  <!-- 非お気に入り -->
                  <template v-else>
                    <span class="dislike">
                      <i class="fas fa-heart" />
                    </span>
                  </template>
                </template>
              </div>

              <div class="w-header-section2">
                <RouterLink 
                  :to="`/${articles.article.userName}`" 
                  class="w-user_info"
                >
                  <img :src="`${articles.article.userIcon}`" />
                  <span> @ {{ articles.article.userName }} </span>
                </RouterLink>

                <div class="w-title">
                  <h3> {{ articles.article.title }}</h3>
                </div>
              </div>

              <div class="w-header-section3">
                <RouterLink
                  v-for="(tag, i) in articles.article.tags"
                  :key="i"
                  :to="`/tags/${tag}`"
                  class="w-tag"
                >
                  {{ tag }}
                </RouterLink>
              </div>

            </div>

            <!-- メディア -->
            <div class="w-media-section">
              <template v-if="articles.article.media.length > 0">
                <ElCarousel
                  :interval="15000"
                  indicator-position="outside"
                >
                  <ElCarouselItem
                    v-for="(image, i) in articles.article.media"
                    :key="i"
                  >
                    <img :src="`${image}`" />
                  </ElCarouselItem>
                </ElCarousel>
              </template>
            </div>

            <!-- 本文 -->
            <div class="w-content-section">
              <ElInput
                type="textarea"
                :value="articles.article.content"
                readonly
                autosize
              />
            </div>

          </div>

        </div>
      </template>

      <template v-else>
        <div class="not-page">
          <h1>404 Not Found</h1>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import enhancer from './enhancer';

export default {
  name: 'ArticleDetail',
  mixins: [enhancer],
};
</script>

<style lang="scss" scoped>
@import "./Detail";
</style>
