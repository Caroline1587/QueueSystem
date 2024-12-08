<template>
  <div class="footer-bar" @click="handleClick">
    <div class="home">
      <!-- <el-icon><QuestionFilled /></el-icon> -->
      主页
    </div>
    <div class="me">
      <!-- <el-icon><List /></el-icon> -->
      我的
    </div>
  </div>
</template>
<script setup lang="ts">
import { UserFilled, QuestionFilled, List } from "@element-plus/icons-vue";
interface IEmits {
  (e: "update:value", v?: string | number): void;
}
const emits = defineEmits<IEmits>();

const handleClick = (event: Event) => {
  // emits("update:value",)
  console.log("shijianuan=======", event.target);
};
</script>
<style lang="scss" scoped>
.footer-bar {
  width: 100%;
  height: 11vh;
  display: flex;
  justify-content: space-around;
  .question,
  .records {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
