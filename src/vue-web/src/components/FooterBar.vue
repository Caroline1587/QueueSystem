<template>
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
</template>
<script setup lang="ts">
import {
  UserFilled,
  QuestionFilled,
  List
} from "@element-plus/icons-vue";
</script>
<style lang="scss" scoped>
.footer-bar {
  width: 100%;
  height: 11vh;
  display: flex;
  justify-content: space-around;
  .question, .records {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>