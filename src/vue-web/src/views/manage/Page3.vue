<template>
  <div class="export-wrapper">
    <div class="title">导出excel</div>
    <div class="export-time-wrapper">
      <div class="export-time-text">选择日期区间:</div>
      <div class="export-time">2021-03-30 00:00:00 - 2021-03-30 23:59:59</div>
    </div>
    <div class="generate-btn">生成excel</div>
    <div class="download-address">
      <div class="download-title">excel下载地址:</div>
      <el-input v-model="input" style="width: 240px" placeholder="" />
    </div>
  </div>
</template>

<script setup lang="ts">
const input = '';
</script>

<style lang="scss" scoped>
.export-wrapper {
  box-sizing: border-box;
  width: 90%;
  height: fit-content;
  background: #fff;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  row-gap: 25px;
  margin: auto;
  margin-top: 25px;
  .title {
    font-size: 24px;
    height: 60px;
    width: 90%;
    border-bottom: 1px solid #f5f6f5;
    text-align: left;
  }
  .export-time-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .export-time {
      background: #eeeeee;
      padding: 5px 3px;
      border: 1px solid #d3d6dd;
      font-size: 12px;
      text-align: left;
    }
  }
  .generate-btn {
    background: #f2ad46;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
  }
  .download-address {
    .download-title {
      text-align: left;
      margin-bottom: 5px;
    }
  }
}
</style>
