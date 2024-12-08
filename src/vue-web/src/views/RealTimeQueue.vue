<template>
  <div class="real-time-queue">
    <el-card class="box-card">
      <h2>实时队列</h2>
      <el-table :data="queueList" style="width: 100%">
        <el-table-column prop="number" label="排队号码" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="status" label="状态">
          <template #default="{ row }">
            <el-tag type="success" v-if="row.status === '正在办理'"
              >正在办理</el-tag
            >
            <el-tag type="info" v-else>等待中</el-tag>
          </template>
        </el-table-column>
      </el-table>
      <el-divider />
      <div>
        <h3>正在办理：</h3>
        <el-tag type="success">{{ currentNumber }}</el-tag>
      </div>
    </el-card>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useQueueStore } from "@/stores/queueStore";

export default defineComponent({
  name: "RealTimeQueue",
  setup() {
    const queueStore = useQueueStore();

    const queueList = computed(() => queueStore.queue);
    const currentNumber = computed(() => queueStore.currentNumber);

    return { queueList, currentNumber };
  },
});
</script>

<style scoped>
.real-time-queue {
  max-width: 800px;
  margin: 0 auto;
}
</style>
