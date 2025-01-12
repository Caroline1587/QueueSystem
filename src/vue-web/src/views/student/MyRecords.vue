<template>
  <div class="myRecords">
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
      stretch
      tab-position="top"
      class="history-tabs"
    >
      <el-tab-pane label="All" name="All">
        <QueueRecords :itemData="itemData" />
      </el-tab-pane>
      <el-tab-pane label="Waiting" name="Waiting">
        <QueueRecords :itemData="item__waiting" />
      </el-tab-pane>
      <el-tab-pane label="Processing" name="Processing">
        <QueueRecords :itemData="item__processing" />
      </el-tab-pane>
      <el-tab-pane label="Finished" name="Finished">
        <QueueRecords :itemData="item__finished" />
      </el-tab-pane>
    </el-tabs>

    <FooterNavBar />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import { Calendar } from "@element-plus/icons-vue";

import FooterNavBar from "@/components/FooterNavBar.vue";
import QueueRecords from "@/views/student/components/QueueRecords.vue";
import { useQueueRecordStore } from "@/stores/queueRecord";

const queueStore = useQueueRecordStore();
const itemData = queueStore.getRecords;
const item__waiting = itemData.filter((item) => item.status === 0);
const item__processing = itemData.filter((item) => item.status === 1);
const item__finished = itemData.filter((item) => item.status === 2);
onMounted(() => {});

const activeName = ref("All");
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<style lang="scss" scoped>
.myRecords {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
:deep(.el-tabs__header) {
  margin: 0;
  padding: 5px;
  position: sticky;
  top: 0;
  background-color: #ffff;
}
:deep(.el-tabs__nav) {
  // float: none;
}

:deep(.el-tabs__item) {
  // flex: 1;
  // padding: 0;
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
  // padding: 0;
}
</style>
