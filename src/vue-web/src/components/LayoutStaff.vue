<template>
  <div>
    <el-menu
      default-active="active"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      router
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="/manage/page1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
      </el-menu-item>

      <el-menu-item index="/manage/page2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>

      <el-menu-item index="/manage/page3">
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>

      <el-menu-item index="/manage/page4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

const active = ref("2");

const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped></style>
