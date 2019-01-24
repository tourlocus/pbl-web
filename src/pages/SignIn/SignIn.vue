<template>
  <div class="p-SignIn">
    <div class="container">
      <div class="main">
        <!-- タイトル -->
        <div class="title">
          <h3>ログイン</h3>
        </div>

        <!-- フォーム -->
        <form class="form" @submit.prevent="handleSubmit">
          <!-- メールアドレス -->
          <div class="w-field">
            <label>メールアドレス</label>
            <ElInput
              v-model.trim="form.email"
              type="email"
              name="email"
              autocomplete="off"
              v-validate="'required'"
            />
            <div class="form_error" v-if="errors.has('email')">
              メールアドレスは必須です
            </div>
          </div>

          <!-- パスワード -->
          <div class="w-field">
            <label>パスワード</label>
            <ElInput
              v-model.trim="form.password"
              type="password"
              name="password"
              autocomplete="off"
              v-validate="'required|min:8'"
            />
            <div class="form_error" v-if="errors.has('password')">
              パスワードは必須です
            </div>
          </div>

          <!-- サブミット -->
          <div class="actionBtn">
            <ElInput 
              type="submit" 
              value="ログイン"
              v-loading="isLoading"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import enhancer from './enhancer';

export default {
  name: 'SignIn',
  mixins: [enhancer],
};
</script>

<style lang="scss" scoped>
@import './SignIn';
</style>
