<template>
  <div class="queue-records">
    <RecordItem :item-data="itemData"/>
    <div class="no-more">没有更多了</div>
  </div>
</template>

<script setup lang="ts">
import { useQueueRecordStore } from "@/stores/queueRecord";
import RecordItem from '@/components/RecordItem.vue';
const queueStore = useQueueRecordStore();
const itemData = [
  {
    queueNumber: '002',
    queueStatus: '排队中',
    userName: '匿名',
    takeDate: '2024-11-24 22:01:13',
  },
  {
    queueNumber: '001',
    queueStatus: '已完成',
    userName: '匿名',
    takeDate: '2024-11-24 21:59:23',
  }
]
</script>

<style lang="scss" scoped>
.queue-records {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
.no-more {
  margin-top: 8px;
  color: #6a6a69;
  font-size: 12px;
}

</style>
