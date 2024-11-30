<template>
  <div class="personal-queue">
      <div class="waiting-count-wrapper">
        <el-icon><UserFilled /></el-icon>
        <div class="waiting-content">当前等待人数：{{ waitingCount }}人</div>
      </div>
      <div class="waiting-time-wrapper">
        <img class="wait-time-img" src="../../assets/clock.svg" alt="">
        <div class="wait-time-content">预计需要等候时间：{{ estimatedTime }} 分钟</div>
      </div>
      <div class="call-time-wrapper">
        <img class="call-time-img" src="../../assets/notification.svg" alt="">
        <div class="call-time-content">当前叫号：{{ queueStore.state.currentCallingNumber || "暂未叫号" }}</div>
      </div>
      <el-button class="cancel-queue-btn" type="danger" @click="cancelQueue">
        取消排队
      </el-button>
      <div>
        当前状态：{{ (me?.status === 0 ? "waiting" : "called") || "未取号" }}
      </div>
      <div>我的号码：{{ me?.number }}</div>
      <div>取号时间：{{ me?.time }}</div>

      <el-button type="text" @click="viewRecords">
        查看取号记录
      </el-button>
      <el-dialog v-model="isCancelDialogVisible" title="确认取消">
        <div>您确定要取消排队吗？</div>
        <template #footer>
          <el-button @click="isCancelDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmCancelQueue">确定</el-button>
        </template>
      </el-dialog>
      <FooterBar />
      <div class="refresh">刷新</div>
  </div>
  
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";
import {
  UserFilled,
  Timer
} from "@element-plus/icons-vue";
import { useQueueStore } from "@/stores/queue";
import type { IStudent } from "@/types/index";
import FooterBar from '@/components/FooterBar.vue'
const queueStore = useQueueStore();
const router = useRouter();
const route = useRoute();

let meId: string;

onMounted(() => {});
console.log(route.params);

meId = route.params.id as string;
console.log(meId);
const me = queueStore.findStudentById(meId);

// const me = computed(() =>
//   queueStore.state.queue.find((student: Student) => student.id === meId)
// );

console.log("me=======", me);

// const currentCallingStudent=queueStore.currentStudent;//dangqian jiaohao xuesheng
const waitingCount = computed(() => queueStore.waitingQueue.length);
const estimatedTime = computed(
  () => queueStore.findPlaceOfWaitingQueue(meId) * 5
); // 假设每人需要 5 分钟
const isCancelDialogVisible = ref(false);

function cancelQueue() {
  isCancelDialogVisible.value = true;
}

function confirmCancelQueue() {
  if (me) {
    queueStore.cancelStudent(me.id);
  }
  isCancelDialogVisible.value = false;
}

function viewRecords() {
  router.push({ name: "QueueRecords" });
}
</script>



<style lang="scss" scoped>
.personal-queue {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  padding-top: 45px;
  background: linear-gradient(180deg, #409eff 0%, #66b1ff 25%, #8cc5ff 50%, #b2d8ff 75%, #d9edff 100%);
  height: 100vh;
}
.cancel-queue-btn {
  width: 163px;
  height: 54px;
  border-radius: 45px;
  font-size: 18px;
}
.wait-time-img, .call-time-img {
  width: 1em;
}
.waiting-count-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  .waiting-content {
    margin-left: 5px;
  }
}
.waiting-time-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  .wait-time-content {
    margin-left: 5px;
  }
}
.call-time-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  .call-time-content {
    margin-left: 5px;
  }
}
.footer-bar {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
}
.refresh {
  width: 65px; /* 设置宽度 */
  height: 65px; /* 设置高度 */
  border-radius: 50%; /* 设置为圆形 */
  background-color: #f9fbfb; /* 设置背景颜色 */
  color: black; /* 设置文字颜色 */
  display: flex; /* 使用flex布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  font-size: 14px; /* 设置字体大小 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 添加阴影效果 */
  cursor: pointer; /* 鼠标悬停时显示为手型，表示可点击 */
  transition: transform 0.2s, box-shadow 0.2s; /* 添加过渡效果 */
  position: fixed;
  left: 10px;
  top: 24%;
}
.refresh:active {
    transform: scale(1.05); /* 鼠标悬停时放大 */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7); /* 鼠标悬停时阴影加深 */
}
</style>
