<template>
  <div id="app">
    <SiteHeader :auth="auth" :user="users" />
    <RouterView />
  </div>
</template>

<script lang="ts">
import enhancer from './enhancer';
import {SiteHeader} from '@/layouts';

export default {
  name: 'App',
  components: {SiteHeader},
  mixins: [enhancer],
};
</script>

<style lang="scss" scoped>
</style>
