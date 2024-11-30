<template>
  <div class="take-number">
    <div class="queue-number-wrapper">
      <el-icon><UserFilled /></el-icon>
      <div class="number-wrapper">当前排队总人数：{{ waitingQueueCount }}人</div>
    </div>
    <el-button class="take-number-btn" type="primary" @click="takeNumber" >开始取号</el-button>
    <div class="warning-title">⚠️注意事项</div>
    <div class="warning-content">取号后请注意消息通知，到您的号码后请及时到柜台办理业务。</div>
    <div class="footer-bar">
      <div class="question">
        <el-icon><QuestionFilled /></el-icon>
        常见问题
      </div>
      <div class="records">
        <el-icon><List /></el-icon>
        取号记录
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import {
  UserFilled,
  QuestionFilled,
  List
} from "@element-plus/icons-vue";
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

<style lang="scss" scoped>
.take-number {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  justify-content: center;
  height: 46vh;
}
.queue-number-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #848588;
  .number-wrapper {
    margin-left: 5px;
    font-size: 22px;
  }
}
.take-number-btn {
  width: 163px;
  height: 54px;
  border-radius: 45px;
  font-size: 18px;
}
.warning-title {
  font-weight: 500;
  margin-bottom: -14px;
}
.footer-bar {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-around;
  .question, .records {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.take-number {
  /* max-width: 600px; */
  margin: auto;
  padding: 20px;
}
</style>
