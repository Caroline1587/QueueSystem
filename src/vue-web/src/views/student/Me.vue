<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" class="history-tabs">
    <el-tab-pane label="All" name="All">
      <QueueRecords />
    </el-tab-pane>
    <el-tab-pane label="Waiting" name="Waiting">waiting-content</el-tab-pane>
    <el-tab-pane label="Completed" name="Completed">completed</el-tab-pane>
    <el-tab-pane label="Cancelled" name="Cancelled">Cancelled</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import { Calendar } from "@element-plus/icons-vue";
import QueueRecords from "./QueueRecords.vue";

const activeName = ref("All");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<style lang="scss" scoped>
:deep(el-tabs__header) {
  margin: 0;
}
:deep(.el-tabs__nav) {
  float: none;
}

:deep(.el-tabs__item) {
  flex: 1;
  padding: 0;
}
.el-tabs--border-card {
  border: none;
}
.history-tabs > .el-tabs__content {
  /* padding: 32px; */
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--border-card > .el-tabs__content {
  padding: 0;
}
</style>
