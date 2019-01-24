<template>
  <div class="p-signup">
    <div class="container">
      <div class="main">
        <!-- タイトル -->
        <div class="title">
          <h3>アカウントの作成</h3>
        </div>

        <!-- フォーム -->
        <form
          class="form"
          @submit.prevent="handleSubmit"
        >
          <!-- ユーザー名 -->
          <div class="w-field">
            <label>ユーザー名</label>
            <ElInput
              v-model.trim="form.name"
              type="text"
              name="name"
              autocomplete="off"
              v-validate="'required|max:16'"
            />
            <div class="form_error" v-if="errors.has('name')">
              ユーザー名は必須です
            </div>
          </div>

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
          <div class="w-field_row">
            <div class="w-field-col">
              <label>パスワード</label>
              <ElInput
                ref="password"
                v-model.trim="form.password"
                type="password"
                name="password"
                autocomplete="off"
                v-validate="'required|alpha_dash|min:8'"
              />
              <div class="form_error" v-if="errors.has('password')">
                パスワードは必須です
              </div>
            </div>

            <!-- 確認用パスワード -->
            <div class="w-field-col">
              <label>確認用パスワード</label>
              <ElInput
                v-model.trim="confirmPassword"
                type="password"
                name="confirmPassword"
                autocomplete="off"
                v-validate="'required|confirmed:password'"
              />
              <div class="form_error" v-if="errors.has('confirmPassword')">
                確認用パスワードは必須です
              </div>
            </div>
          </div>

          <!-- 生年月日 -->
          <div class="w-field">
            <label>生年月日</label>
            <ElInput
              v-model.trim="form.birthday"
              type="text"
              name="birthday"
              autocomplete="off"
              maxlength="10"
              v-validate="'required|date_format:YYYY-MM-DD'"
            />
            <div class="form_error" v-if="errors.has('birthday')">
              生年月日は必須です
            </div>
          </div>

          <!-- 性別 -->
          <div class="w-field-gender">
            <label>性別</label>
            <div class="w-field_main">
              <ElRadio
                v-model="form.gender"
                v-validate="'required|included:0,1'"
                name="gender"
                label=0
              >
                男性
              </ElRadio>
              <ElRadio
                v-model="form.gender"
                label=1
              >
                女性
              </ElRadio>
            </div>
            <div class="form_error" v-if="errors.has('gender')">
              性別は必須です
            </div>
          </div>

          <!-- サブミット -->
          <div class="actionBtn">
            <ElInput
              type="submit"
              value="アカウント作成"
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
  name: 'SignUp',
  mixins: [enhancer],
};
</script>

<style lang="scss" scoped>
@import './SignUp';
</style>
