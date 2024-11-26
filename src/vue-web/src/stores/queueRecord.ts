import { defineStore } from "pinia";
import { ref, computed } from "vue";

// 定义记录的接口
export interface QueueRecord {
  // uid:number,//所属用户
  number: string; // 排队号码
  time: string; // 取号时间，格式：YYYY-MM-DD HH:mm:ss
  status: number; // 状态信息（如 "排队中", "已完成"\quxiao 等---0 1 2）
}

export const useQueueRecordStore = defineStore("queueRecord", () => {
  // 状态：记录数组
  const records = ref<QueueRecord[]>([]);

  // 获取所有记录
  const getRecords = computed(() => records.value);

  // 添加新记录
  const addRecord = (record: QueueRecord) => {
    records.value.push(record);
  };

  //记录的状态可能发生改变时（如完成或取消）
  const updateRecordStatus = (number: string, newStatus: number) => {
    const record = records.value.find((r) => r.number === number);
    if (record) {
      record.status = newStatus;
    }
  };
  

  // 清空记录（如果需要）
  const clearRecords = () => {
    records.value = [];
  };

  return {
    records,
    getRecords,
    addRecord,
    updateRecordStatus,
    clearRecords,
  };
});
