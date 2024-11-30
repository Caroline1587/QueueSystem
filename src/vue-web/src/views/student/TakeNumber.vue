<template>
  <div class="take-number">
    <el-card>
      <h2>取号服务</h2>
      <el-button type="primary" @click="takeNumber">取号</el-button>
      <p>当前排队总人数：{{ waitingQueueCount }}</p>
    </el-card>
    <el-alert
      title="取号后请注意消息通知，到您的号码后请及时到柜台办理业务。"
      type="info"
      show-icon
    />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";

import { useQueueStore } from "@/stores/queue";
import { useQueueRecordStore } from "@/stores/queueRecord";
import { QueueStatus } from "@/config";
import type { IStudent } from "@/types";
import { getAccessToken } from "@/utils/auth";
import { fetchMeData } from "@/api/me";
const router = useRouter();

const queueStore = useQueueStore();
const queueRecordsStore = useQueueRecordStore();

const waitingQueueCount = ref(queueStore.waitingQueue.length);

function takeNumber() {
  if (!getAccessToken()) {
    router.push({
      name: "login",
    });
    return;
  }

  const { id, name } = fetchMeData();

  // 生成排队号码
  const number = queueStore.generateNumber();
  const time = new Date().toISOString(); // 使用标准时间格式
  const status = QueueStatus.WAITING; // 等待状态

  // 创建学生对象
  const currentStudent: IStudent = {
    id,
    name,
    number,
    time,
    status,
  };

  // 加入quhao队列
  queueStore.addToQueue(currentStudent);

  //生成取号记录
  const record = {
    number,
    time,
    status, // 初始状态
  };
  queueRecordsStore.addRecord(record); // 添加到记录

  router.push({ name: "PersonalQueue" });
}
</script>

<style scoped>
.take-number {
  /* max-width: 600px; */
  margin: auto;
  padding: 20px;
}
</style>
