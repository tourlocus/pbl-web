<template>
  <div class="c-ItemCard">
    <ElCard>
      <img
        class="card-image" 
        :src="`http://localhost:3000/uploads/${media}`" 
      />
      <!-- カードボディ -->
      <div class="card-body">

        <!-- ユーザー -->
        <RouterLink 
          :to="`/${name}`"
          class="w-user"
        >
          <img
            :src="`http://localhost:3000/uploads/${icon}`"
            class="icon-image"
          />
          <h3>{{ name }}</h3>
        </RouterLink>

        <!-- タイトル -->
        <div class="w-title">
          <h3> {{ title }}</h3>
        </div>

        <!-- カード情報 -->
        <div class="w-info">
          <ElInput
            type="textarea"
            :value="content.substr(0, 150)"
            autosize
            readonly
          />
        </div>

        <!--  -->
        <div class="card-link">
          <RouterLink :to="`${name}/${id}`">
            もっと見る
          </RouterLink>
        </div>

      </div>
    </ElCard>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ItemCardComponent',
  props: ['id', 'title', 'media', 'icon', 'name', 'content'],
};
</script>

<style lang="scss" scoped>
@import "./ItemCard";
</style>
