<template>
  <div id="header">
    <!-- Header Main -->
    <div class="header_main">
      <Logo />

      <!-- ログイン後 -->
      <template v-if="auth.isAuth">
        <!-- PC Only -->
        <div class="pc-only a_nav">
          <div class="a_nav_main">
            <!-- 検索 -->
            <ElInput
              placeholder="Search" 
              prefix-icon="el-icon-search" 
              v-model="word"
              @keyup.native.enter="handleSearch"
            />

            <div class="w-route_group">
              <RouterLink :to="`/${user.name}/create`">
                <i class="fas fa-edit" /> 
                記事を書く
              </RouterLink>
              <RouterLink :to="`/presents/${user.name}/create`"> 
                <i class="fas fa-gift" /> 
                お土産
              </RouterLink>
            </div>

            <!-- ドロップダウン -->
            <el-dropdown trigger="click">
              <template v-if="user.icon">
                <img :src="`http://localhost:3000/uploads/${user.icon}`" />
                <i class="el-icon-arrow-down el-icon--right arrow-main" />
              </template>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <RouterLink :to="`/${user.name}`">マイページ</RouterLink>
                </el-dropdown-item>
                <el-dropdown-item>
                  <a @click="logout">ログアウト</a>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>

        <!-- Mobile -->
        <div class="tablet-only a_nav">
          <div class="a_nav_main">
            <div class="b-search">
              <!-- 検索 -->
              <ElInput 
                placeholder="Search" 
                prefix-icon="el-icon-search"
                v-model="word"
                @keyup.native.enter="handleSearch"
              />
            </div>
            <!-- ドロップダウン -->
            <el-dropdown trigger="click">
              <template v-if="user.icon">
                <img :src="`http://localhost:3000/uploads/${user.icon}`" />
                <i class="el-icon-arrow-down el-icon--right arrow-main" />
              </template>
              <el-dropdown-menu slot="dropdown">
                <ElDropdownItem>
                  <RouterLink :to="`/${user.name}`">マイページ</RouterLink>
                </ElDropdownItem>
                <ElDropdownItem>
                  <a @click="logout">
                    ログアウト
                  </a>
                </ElDropdownItem>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </template>

      <!-- ログイン前 -->
      <template v-else>
        <!-- PC Only -->
        <div class="pc-only b_nav">
          <div class="b_nav_main">
            <!-- 検索 -->
            <ElInput 
              placeholder="Search" 
              prefix-icon="el-icon-search" 
              v-model="word"
              @keyup.native.enter="handleSearch"
            />

            <ElPopover>
              <ElButton slot="reference">
                アカウントをお持ちの場合 <span>ログイン</span>
                <i class="el-icon-arrow-down el-icon--right" />
              </ElButton>
            </ElPopover>
          </div>
        </div>

        <!-- Mobile -->
        <div class="tablet-only b_nav">
          <div class="b_nav_main">
            <!-- 検索 -->
            <ElInput placeholder="Search"
              prefix-icon="el-icon-search"
              autocomplete="off"
              v-model="word"
              @keyup.native.enter="handleSearch"
            />
          </div>
        </div>
      </template>
    </div>

    <!-- ログイン後 -->
    <template v-if="auth.isAuth">
      <div class="tablet-only w-actionBtn">
        <div class="w-action_container">
          <RouterLink :to="`/${user.name}/create`" class="btn-item">
            <i class="fas fa-edit" /> 記事を書く
          </RouterLink>
          <RouterLink :to="`/presents/${user.name}/create`" class="btn-present">
            <i class="fas fa-gift" /> お土産
          </RouterLink>
        </div>
      </div>
    </template>

    <!-- ログイン前 -->
    <template v-if="!auth.isAuth">
      <div class="tablet-only w-actionBtn">
        <div class="w-action_container">
          <RouterLink to="/signin" class="btn-signin"> ログイン </RouterLink>
          <RouterLink to="/signup" class="btn-signup">
            アカウントを作成
          </RouterLink>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import _ from 'lodash';
import {Logo} from '@/components';
import {mapActions} from 'vuex';

export default {
  name: 'HeaderLayouts',
  components: {Logo},
  props: ['auth', 'user'],
  data() {
    return { word: '' };
  },
  watch: {
    word(value) {
      this.word = value.replace(/　/g, ' ');
    },
  },
  methods: {
    ...mapActions('auth', ['deleteSignOut']),
    ...mapActions('articles', ['getSearchArticle']),
    async logout() {
      try {
        await this.deleteSignOut(this.auth);
      } catch (error) {
        throw error;
      }
    },
    handleSearch() {
      if (_.trim(this.word) !== '') {
        this.$router.push(`/search?q=${this.word}`);
        this.getSearchArticle(this.word);
        this.word = '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import './SiteHeader';
</style>
