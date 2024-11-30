<script setup lang="ts">
import { RouterView } from "vue-router";
// import TabsView from './views/tabs/TabsView.vue'

// import { fetchTest } from '@/api/test'

// fetchTest()
</script>

<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">login</router-link>
  </nav> -->
  <router-view />
  <!-- <RouterView /> -->
</template>

<style lang="scss">
// @import 'normalize.css';
// #app {
//   /** 字体抗锯齿，让字体看起来更清晰 */
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   color: #2c3e50;
//   font-size: 14px;
// }

#app {
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
