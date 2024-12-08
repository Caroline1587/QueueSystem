<template>
  <div class="queue-wrapper">
    <div class="queue-item" v-for="queueItem in queueData" :key="queueItem.id">
      <div class="item-left">
        <div class="item-title">{{ queueItem.title }}</div>
        <div class="item-explain">{{ queueItem.explain }}</div>
      </div>
      <div class="item-right">
        <img src="../../assets/right-arrow.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const queueData = [{
  id: 1,
  title: '基础设置',
  explain: '队伍的基本信息'
},{
  id: 2,
  title: '更多设置',
  explain: '距离限制，到号提醒，时间限制，播报语音等设置'
},{
  id: 3,
  title: '重置号码',
  explain: '手动重置当前号码'
},{
  id: 4,
  title: '复制大屏地址',
  explain: '需配合电脑一起使用'
},{
  id: 5,
  title: '设置表单字段',
  explain: '顾客取号时填写的信息项'
},{
  id: 6,
  title: '设置队伍管理员',
  explain: '管理员可以协助店长进行叫号等操作'
}]
</script>

<style lang="scss" scoped>
.queue-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .queue-item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f4f4f3;
    padding: 10px;
    align-items: center;
    .item-left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .item-title {
        font-size: 14px;
      }
      .item-explain {
        font-size: 11px;
        color: #919193;
        margin-top: 4px;
        text-align: left;
      }
    }
    .item-right {
      img {
        width: 20px;
      }
    }
  }
}

</style>
