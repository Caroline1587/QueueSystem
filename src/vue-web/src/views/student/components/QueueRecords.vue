<template>
  <div class="queue-records">
    <RecordItem :item-data="itemData" />
    <div class="no-more">没有更多了</div>
  </div>
</template>

<script setup lang="ts">
import RecordItem from "@/views/student/components/RecordItem.vue";

const props = defineProps({
  itemData: null,
});
const itemData = props.itemData;
</script>

<style lang="scss" scoped>
.queue-records {
  max-width: 800px;
  margin: auto;
  padding: 10px;
}
.no-more {
  margin-top: 8px;
  color: #6a6a69;
  font-size: 12px;
}
</style>
