<template>
  <div class="wrapper">
    <router-view />
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
      :tab-position="tabPosition"
      class="nav-tabs footer-bar"
    >
      <el-tab-pane label="取号" name="takeNumber"></el-tab-pane>
      <el-tab-pane label="我的" name="myRecords"></el-tab-pane>
    </el-tabs>
  </div>

  <!-- <FooterNavBar /> -->

  <!-- <div class="footer-bar">
    <router-link to="/myRecords">我的</router-link>
    <router-link to="/takeNumber">主页</router-link>
  </div> -->
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { TabsInstance } from "element-plus";
import type { TabsPaneContext } from "element-plus";
import { useRouter } from "vue-router";

import FooterNavBar from "./FooterNavBar.vue";

const tabPosition = ref<TabsInstance["tabPosition"]>("bottom");
const activeName = ref("takeNumber");
const router = useRouter();

watch(activeName, (nv) => {
  router.push({
    name: nv,
  });
});

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
  console.log("tab.paneName: ", tab.paneName);
};
</script>

<style scoped lang="scss">
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .footer-bar {
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    position: sticky;
    bottom: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 10px 10px 10px 10px lightcyan;
    .question,
    .records {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
a {
  text-decoration: none;
  color: #303133;
}
:deep(.el-tabs__nav) {
  float: none;
  justify-content: space-around;
  margin-bottom: 16px;
}
</style>
