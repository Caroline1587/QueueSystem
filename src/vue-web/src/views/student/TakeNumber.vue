<template>
  <div class="take-number">
    <div class="queue-number-wrapper">
      <el-icon><UserFilled /></el-icon>
      <div class="number-wrapper">当前排队总人数：{{ waitingQueueCount }}人</div>
    </div>
    <div class="take-number-btn" @click="takeNumber">取号</div>
    <div class="warning-title">⚠️注意事项</div>
    <div class="warning-content">取号后请注意消息通知，到您的号码后请及时到柜台办理业务。</div>
    <FooterBar />
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
import FooterBar from '@/components/FooterBar.vue';
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
  // if (!getAccessToken()) {
  //   router.push({
  //     name: "login",
  //   });
  //   return;
  // }

  // const { id, name } = fetchMeData();

  // // 生成排队号码
  // const number = queueStore.generateNumber();
  // const time = new Date().toISOString(); // 使用标准时间格式
  // const status = QueueStatus.WAITING; // 等待状态

  // // 创建学生对象
  // const currentStudent: IStudent = {
  //   id,
  //   name,
  //   number,
  //   time,
  //   status,
  // };

  // // 加入quhao队列
  // queueStore.addToQueue(currentStudent);

  // //生成取号记录
  // const record = {
  //   number,
  //   time,
  //   status, // 初始状态
  // };
  // queueRecordsStore.addRecord(record); // 添加到记录

  // router.push({ name: "PersonalQueue" });
}
</script>

<style lang="scss" scoped>
.take-number {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 80px 20px 0px;
  align-items: center;
  height: 100vh;
  font-size: 16px;
  background: linear-gradient(180deg, #409eff 0%, #66b1ff 25%, #8cc5ff 50%, #b2d8ff 75%, #d9edff 100%);
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
  width: 150px; /* 设置宽度 */
  height: 150px; /* 设置高度 */
  border-radius: 50%; /* 设置为圆形 */
  background-color: #409eff; /* 设置背景颜色 */
  color: black; /* 设置文字颜色 */
  display: flex; /* 使用flex布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  font-size: 30px; /* 设置字体大小 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 添加阴影效果 */
  cursor: pointer; /* 鼠标悬停时显示为手型，表示可点击 */
  transition: transform 0.2s, box-shadow 0.2s; /* 添加过渡效果 */
}
.take-number-btn:active {
    transform: scale(1.05); /* 鼠标悬停时放大 */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7); /* 鼠标悬停时阴影加深 */
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
}
</style>
