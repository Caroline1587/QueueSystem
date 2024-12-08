<script setup lang="ts">
import { RouterView } from "vue-router";
import Layout from "./components/Layout.vue";
// import TabsView from './views/tabs/TabsView.vue'

// import { fetchTest } from '@/api/test'

// fetchTest()
</script>

<template>
  <Layout />

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
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.--flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
