<template>
  <div class="p-ArticleEdit" v-cloak>
    <div class="container">
      <div class="main">
        <!-- 記事がある場合 -->
        <template v-if="isArticle">
          <!-- フォーム -->
          <form @submit.prevent="handleSubmit">
            
            <!-- タグ -->
              <div class="w-field_tag">
                <label>
                  タグ
                  <span>(地域に関することを3つまで)</span>
                </label>
                <VueTagsInput
                  v-model.trim="tag"
                  :tags="form.tags"
                  :max-tags="3"
                  @tags-changed="newTags => form.tags = newTags"
                />
              </div>

              <!-- タイトル -->
              <div class="w-field">
                <label>タイトル</label>
                <ElInput
                  v-model.trim="form.title"
                  name="title"
                  maxlength="56"
                  v-validate="'required'"
                />
                <div class="form_error" v-if="errors.has('title')">
                  タイトルは必須です
                </div>
              </div>

              <!-- ファイル -->
              <div class="w-field_file">
                <label
                  for="file"
                  class="w_file"
                >
                  画像を選択
                  <input
                    id="file"
                    type="file"
                    name="file[]"
                    accept="image/*"
                    multiple
                    @change="handleFileSelect"
                  >
                </label>

                <!-- カルーセル -->
                <template v-if="images.length > 0">
                  <ElCarousel
                    class="w-carousel"
                    :interval="15000"
                    indicator-position="outside"
                  >
                    <ElCarouselItem
                      v-for="(image, i) in images"
                      :key="i"
                    >
                      <img :src="`${image}`">
            。        </ElCarouselItem>
                  </ElCarousel>
                </template>
              </div>

              <!-- 本文の入力 -->
              <div class="w-field_body">
                <label>本文</label>
                <ElInput
                  v-model="form.content"
                  name="content"
                  type="textarea"
                  v-validate="'required|max:3000'"
                />
                <div class="form_error" v-if="errors.has('content')">
                  本文は必須です
                </div>
              </div>

              <!-- サブミット -->
              <div class="w-actionBtn">
                <ElInput
                  type="submit"
                  value="投稿する"
                  v-loading="isLoading"
                />
              </div>



          </form>
        </template>

        <!-- 記事がない場合 -->
        <template v-else>
          <div class="not-page">
            <h1>404 Not Found</h1>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import enhancer from './enhancer';
import VueTagsInput from '@johmun/vue-tags-input';

export default {
  name: 'ArticleEdit',
  mixins: [enhancer],
  components: {VueTagsInput},
};
</script>

<style lang="scss" scoped>
@import "./Edit";
</style>
