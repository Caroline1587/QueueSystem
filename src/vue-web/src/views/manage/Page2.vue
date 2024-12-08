<template>
  <div class="records-wrapper">
    <div class="refresh-btn">
      <img src="../../assets/record-refresh.svg" alt="">
      <div>刷新</div>
    </div>
    <div class="record-info">
      <div class="queue-people-number">
        <div class="people-number-title">队伍总人数</div>
        <div class="people-number info-content">0</div>
      </div>
      <div class="current-call">
        <div class="call-title">当前叫号</div>
        <div class="call-content info-content">无</div>
      </div>
      <div class="broadcast">
        <div class="broadcast-title">广播语音</div>
        <div class="broadcast-img-wrapper">
          <img class="broadcast-img" src="../../assets/broadcast.svg"/>
        </div>
      </div>
    </div>
    <el-tabs
      v-model="activeName"
      type="card"
      class="demo-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="排队中" name="first"></el-tab-pane>
      <el-tab-pane label="已完成" name="second"></el-tab-pane>
      <el-tab-pane label="已过号" name="third"></el-tab-pane>
      <el-tab-pane label="已取消" name="fourth"></el-tab-pane>
      <el-tab-pane label="全部" name="fifth"></el-tab-pane>
  </el-tabs>
  <div class="no-more">没有更多了</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style lang="scss" scoped>
.records-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 10px;
  box-sizing: border-box;
  .refresh-btn {
    width: 64px;
    height: 27px;
    background: #589af7;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    gap: 4px;
    border-radius: 3px;
    img {
      width: 16px;
    }
  }
  .record-info {
    display: flex;
    background: #fff;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 2px;
    font-size: 12px;
    border-radius: 3px;
    box-shadow: 4px 1px 10px rgba(0, 0, 0, 0.3);
    div {
      display: flex;
      flex-direction: column;
    }
    .call-content {
      font-weight: 500;
      font-size: 18px;
    }
    .broadcast-img-wrapper {
      background: #589af7;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 2px;
      .broadcast-img {
        width: 14px;
      }
    }
    .info-content {
      color: #265cf6;
    }
  }
  
  .el-tabs {
    width: 100%;
    :deep(.el-tabs__header) {
      .el-tabs__nav-wrap {
        background: #fff;
      }
      .el-tabs__nav {
        width: 100%;
        border: none;
        border-radius: 0;
        div {
          width: calc(100% / 4);
        }
        .el-tabs__item {
          border-left: none;
        }
        // .el-tabs__item:active {
        //   border-bottom: 1px solid #265cf6;
        // }
      }
    }
  }

  .no-more {
    color: #6c6e71;
    font-size: 14px;
  }
}

</style>
