<template>
  <div class="c-UserProfile">
    
    <!-- プロフィール -->
    <div class="w-profile">
      <div class="w-section1">
        <img :src="`http://localhost:3000/uploads/${user.profile.icon}`" />

        <div class="w-name">
          <span>@ {{ user.profile.user_name }}</span>

          <!--  -->
          <template v-if="user.name === user.profile.user_name">
            <ElButton size="mini">
              プロフィールを編集
            </ElButton>
          </template>

          <!--  -->
          <template v-else>
            <ElButton size="mini">
              フォローする
            </ElButton>
          </template>
        </div>
      </div>

      <div class="w-intro">
        <div class="w-section2">
          <h3>自己紹介文</h3>

          <div class="w-greeting">
            {{ user.profile.intro }}
          </div>

          <div class="w-follow">
            <RouterLink 
              :to="`${user.profile.user_name}/follow`"
            >
              {{ user.profile.follow }} フォロー
            </RouterLink>

            <RouterLink
              :to="`${user.profile.user_name}/follower`"
            >
              {{ user.profile.follower }} フォロワー
            </RouterLink>
          </div>

        </div>
      </div>

    </div>


  </div>
</template>

<script lang="ts">
export default {
  name: 'UserProfileComponent',
  props: ['user'],
};
</script>


<style lang="scss" scoped>
@import "./UserProfile";
</style>
