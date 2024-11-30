<template>
    <div class="item-wrapper">
        <el-card  class="number-item" v-for="(item, index) in itemData" :key="index">
            <template #header>
                <div class="card-header">
                <div>排队号: {{ item.queueNumber }}</div>
                </div>
            </template>
            <div class="card-content">
                <div class="card-content-left">
                <div class="card-status" :class="item.queueStatus === '已完成' ? 'card-status-finished' : 'card-status-waiting'" >{{ item.queueStatus }}</div>
                <div class="card-username">{{ item.userName }}</div>
                </div>
                <div> > </div>
            </div>
            <template #footer>
                <div class="card-footer">
                <div>取号时间:{{ item.takeDate }}</div>
                <div class="detail-info">详细信息</div>
                </div>
            </template>
        </el-card>
    </div>
    
</template>
<script setup lang="ts">
interface IProps {
 itemData: any
}
defineProps<IProps>();
</script>
<style lang="scss" scoped>

:deep(.el-card__header) {
  padding: 10px 10px;
}
:deep(.el-card__footer) {
  padding: 8px 10px;
}
.item-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  .number-item {
    font-size: 14px;
    .card-header {
      display: flex;
    }
    .card-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .card-content-left {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .card-status {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          color: white;
          margin-right: 5px;
        }
        .card-status-finished {
          background: #8bceee;
        }
        .card-status-waiting {
          background: #8ea56e;
        }
      }
    }
    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .detail-info {
        border: 1px solid #f2f1f1;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 10px;
      }
    }
  }
}
</style>