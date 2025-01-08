<template>
  <div class="manage-wrapper">
    <div class="left-menu">
      <el-radio-group v-model="isCollapse" class="radio-wrapper">
        <el-radio-button :value="false">展开</el-radio-button>
        <el-radio-button :value="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu
        default-active="active"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        router
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="/manage/page1">
          <el-icon><location /></el-icon>
          <template #title>业务主页</template>
        </el-menu-item>

        <el-menu-item index="/manage/page2">
          <el-icon><icon-menu /></el-icon>
          <template #title>全部记录</template>
        </el-menu-item>

        <el-menu-item index="/manage/page3">
          <el-icon><document /></el-icon>
          <template #title>导出excel</template>
        </el-menu-item>

        <el-menu-item index="/manage/page4">
          <el-icon><setting /></el-icon>
          <template #title>队伍配置</template>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="right-content">
      <router-view/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const active = ref("2");

const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.manage-wrapper {
  display: flex;
  .left-menu {
    display: flex;
    flex-direction: column;
    height: 100vh;
    .el-radio-group {
      border-right: 1px solid #dcdfe6;
      margin-bottom: 0px !important;
      .el-radio-button {
        width: 100%;
        :deep(.el-radio-button__inner) {
          display: block;
          border-radius: 0 !important;
        }
      }
    }
    .radio-wrapper {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }
    .el-menu {
      height: 100%;
    }
  }
  .right-content {
    flex: 1;
    background: #f5f6f8;
  }
}

</style>
