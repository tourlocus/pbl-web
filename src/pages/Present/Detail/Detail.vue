<template>
  <div class="p-PresentDetail;">

    <div class="container">
      <div class="main">

        <template v-if="isArticle">
          <!-- 記事 -->
          <div class="w-articleTitle">
            <div>
              <span>関連記事名</span>
              <RouterLink :to="`/${currentName}/${presents.present.articleId}`">
                『 {{ presents.articleIdList.label }} 』
              </RouterLink>
            </div>

            <!-- 編集 -->
            <template v-if="users.name === currentName">
              <div class="">
                <ElDropdown trigger="click">
                  <span>
                    <i class="fas fa-ellipsis-v" />
                  </span>
                  <ElDropdownMenu slot="dropdown">
                    <ElDropdownItem>
                      <RouterLink :to="`/presents/${users.name}/edit/${presents.present.id}`">
                        編集
                      </RouterLink>
                    </ElDropdownItem>
                  </ElDropdownMenu>
                </ElDropdown>
              </div>
            </template>
          </div>

          <!-- 商品名 -->
          <div class="w-itemName">
            <template v-if="presents.present.name">
              <p>商品名</p>
              <h3>{{ presents.present.name }}</h3>
            </template>
          </div>

          <!-- イメージ -->
          <div class="w-itemImage">
            <template v-if="presents.present.file">
              <p>商品イメージ</p>
              <img :src="`${presents.present.file}`" />
            </template>
          </div>

          <!-- 色々 -->
          <div class="w-item">
            <table>
              <tr class="w-target">
                <td>渡す人</td>
                <template v-if="presents.present.otherTarget">
                  <td>{{ presents.present.otherTarget }} </td>
                </template>
                <template v-else>
                  <td>{{ presents.present.target }}</td>
                </template>
              </tr>
              <tr class="w-price">
                <td>金額</td>
                <td> {{ presents.present.price}} 円</td>
              </tr>
            </table>
          </div>

          <!-- 感想 -->
          <div class="w-content">
            <p>感想</p>
            <ElInput
              type="textarea"
              :value="presents.present.content"
              readonly
              autosize
            />
          </div>

        </template>

        <template v-else>
          <div class="page-not">
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
  name: 'PresentDetail',
  mixins: [enhancer],
};
</script>

<style lang="scss" scoped>
@import "./Detail";
</style>
