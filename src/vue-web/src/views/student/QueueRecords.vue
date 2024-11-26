<template>
  <div class="queue-records">
    <el-card>
      <h2>取号记录</h2>
      <el-table :data="queueStore.queue">
        <el-table-column prop="number" label="号码" />
        <el-table-column prop="time" label="取号时间" />
        <el-table-column prop="status" label="状态" />
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useQueueRecordStore } from "@/stores/queueRecord";

const queueStore = useQueueRecordStore();
</script>

<style scoped>
.queue-records {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
</style>
