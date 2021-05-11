<template>
  <div id="app">
    <div class="nav-title">超级市场</div>
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar';

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import url('assets/css/base.css');
.nav-title{
  width: 100%;
  height: 25px;
  font-size: var(--font-size);
  background-color: var(--color-tint);
  text-align: center;
  line-height: var(--line-height);
  color: var(--color-text);
}
</style>
