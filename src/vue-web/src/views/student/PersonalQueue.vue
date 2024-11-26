<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";

import { useQueueStore } from "@/stores/queue";
import type { IStudent } from "@/types/index";

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

<template>
  <div class="personal-queue">
    <el-card>
      <h2>我的排队信息</h2>
      <p>当前等待人数：{{ waitingCount }}</p>
      <p>预计需要等候时间：{{ estimatedTime }} 分钟</p>
      <p>当前叫号：{{ queueStore.state.currentCallingNumber || "暂未叫号" }}</p>
      <p>
        当前状态：{{ (me?.status === 0 ? "waiting" : "called") || "未取号" }}
      </p>
      <p>我的号码：{{ me?.number }}</p>
      <p>取号时间：{{ me?.time }}</p>
      <el-button type="danger" @click="cancelQueue" v-if="me?.status === 0">
        取消排队
      </el-button>
      <el-dialog v-model="isCancelDialogVisible" title="确认取消">
        <p>您确定要取消排队吗？</p>
        <template #footer>
          <el-button @click="isCancelDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmCancelQueue">确定</el-button>
        </template>
      </el-dialog>
    </el-card>
    <el-button type="text" @click="viewRecords">查看取号记录</el-button>
  </div>
</template>

<style scoped>
.personal-queue {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
</style>
