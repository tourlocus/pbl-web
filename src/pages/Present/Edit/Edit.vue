<template>
  <div class="p-PresentEdit">
    
    <div class="container">
      <div class="main">

        <template v-if="isArticle">
          <!-- フォーム -->
          <form @submit.prevent="handleSubmit">
            <!-- セレクトボックス -->
            <div class="w-field-select">
              <label>記事を選んでください</label>
              <ElSelect
                v-model="form.articleId"
                name="id"
                v-validate="'required:true'"
                placeholder="お土産を追加したい記事を選んでください" >
                <ElOption
                  v-for="(item, i) in presents.articleIdList"
                  :key="i"
                  :label="item.label"
                  :value="item.value"
                />
              </ElSelect>
              <div class="form_error" v-if="errors.has('id')">
                記事の選択は必須です
              </div>
            </div>

            <!-- 商品名 -->
            <div class="w-field-name">
              <label>商品名 (任意)</label>
              <ElInput
                v-model="form.name"
                placeholder="ホゲクッキー"
                maxlength="48"
              />
            </div>

            <!-- イメージの追加 -->
            <div class="w-field-image">

              <div class="w-file">
                <label for="file" class="w-label">
                  画像を選択
                  <input
                    type="file"
                    id="file"
                    accept="image/*"
                    @change="handleFileSelect"
                  />
                </label>
              </div>

              <div class="w-image"
                v-if="showImage"
              >
                <img :src="showImage" />
              </div>
            </div>


            <!-- 種類 -->
            <div class="w-field-kind">
              <label>送る品物を選択してください</label>
              <ElSelect
                v-model="form.kind"
                v-validate="'required:true'"
                name="kind"
                placeholder="送る品物を選んでください"
              >
                <ElOption
                  v-for="(item, i) in kindList"
                  :key="i"
                  :label="item.label"
                  :value="item.value"
                />
              </ElSelect>
              <template v-if="form.kind === 'その他'">
                <ElInput
                  class="other"
                  v-model="form.otherKind"
                />
              </template>
              <div class="form_error" v-if="errors.has('kind')">
                送る品物は必須です
              </div>
            </div>

            <!-- 渡す相手 -->
            <div class="w-field-target">
              <label>渡す相手を選んでください</label>
              <ElSelect
                v-model="form.target"
                v-validate="'required:true'"
                name="target"
                placeholder="渡す相手を選んでください"
              >
                <ElOption
                  v-for="(item, i) in targetList"
                  :key="i"
                  :label="item.label"
                  :value="item.value"
                />
              </ElSelect>
              <template v-if="form.target === 'その他'">
                <ElInput
                  class="other"
                  v-model="form.otherTarget"
                />
              </template>
              <div class="form_error" v-if="errors.has('target')">
                渡す相手は必須です
              </div>
            </div>

            <!-- 金額 -->
            <div class="w-field-price">
              <label>金額 (円)</label>
              <ElInput
                v-model="form.price"
                name="price"
                placeholder="1000"
                v-validate="'required|numeric'"
              />
              <div class="form_error" v-if="errors.has('price')">
                金額は必須です
              </div>
            </div>

            <!-- 感想 -->
            <div class="w-field-content">
              <label>感想</label>
              <ElInput
                v-model="form.content"
                type="textarea"
                name="content"
                placeholder="感想を書いてください"
                v-validate="'required|max:300'"
              />
              <div class="form_error" v-if="errors.has('content')">
                感想は必須です
              </div>
            </div>

            <!-- サブミット -->
            <div class="w-actionBtn">
              <ElInput
                type="submit"
                value="更新する"
                v-loading="isLoading"
              />
            </div>


          </form>

        </template>

        <template v-else>
          <div class="not-page">
            <h3>404 Not Found</h3>
          </div>
        </template>

      </div>
    </div>

  </div>
</template>

<script lang="ts">
import enhancer from './enhancer';

export default {
  name: 'PresentEdit',
  mixins: [enhancer],
};
</script>

<style lang="scss" scoped>
@import "./Edit";
</style>
