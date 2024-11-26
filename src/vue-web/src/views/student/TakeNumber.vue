<template>
  <div class="take-number">
    <el-card>
      <h2>取号服务</h2>
      <el-button type="primary" @click="takeNumber">取号</el-button>
      <p>当前排队总人数：{{ totalQueue }}</p>
    </el-card>
    <el-alert
      title="取号后请注意消息通知，到您的号码后请及时到柜台办理业务。"
      type="info"
      show-icon
    />
  </div>
</template>

<script setup lang="ts">
import { useQueueStore } from "@/stores/queue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const queueStore = useQueueStore();
const router = useRouter();
const totalQueue = ref(queueStore.state.queue.length);

function takeNumber() {
  const newNumber = queueStore.generateNumber(); // 生成号码逻辑在 Store 中实现
  queueStore.addStudent({
    id: Date.now(),
    name: "学生用户", // 可从登录上下文中获取
    number: newNumber,
    status: "waiting",
    time: new Date().toLocaleString(),
  });
  router.push({ name: "PersonalQueue" });
}
</script>

<style scoped>
.take-number {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
</style>
