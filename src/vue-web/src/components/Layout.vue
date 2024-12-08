<template>
  <router-view />
  <!-- <el-tabs
    v-model="activeName"
    @tab-click="handleClick"
    :tab-position="tabPosition"
    class="nav-tabs footer-bar"
  >
    <el-tab-pane label="me" name="me"></el-tab-pane>
    <el-tab-pane label="home" name="home"></el-tab-pane>
  </el-tabs> -->

  <!-- <FooterNavBar /> -->

  <div class="footer-bar">
    <router-link to="/me">me</router-link>
    <router-link to="/home">home</router-link>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { TabsInstance } from "element-plus";
import type { TabsPaneContext } from "element-plus";
import { useRouter } from "vue-router";

import FooterNavBar from "./FooterNavBar.vue";

const tabPosition = ref<TabsInstance["tabPosition"]>("bottom");
const activeName = ref("home");
const router = useRouter();

//    // 跳转到个人页面
//    router.push({
//           name: "me",
//           params: {
//             id: form.id,
//           },
//         });
watch(activeName, (nv) => {
  router.push({
    name: nv,
  });
});

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: #303133;
}
:deep(.el-tabs__nav) {
  float: none;
  justify-content: space-around;
  margin-bottom: 16px;
}
.footer-bar {
  width: 100%;
  height: 11vh;
  display: flex;
  justify-content: space-around;
  .question,
  .records {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
