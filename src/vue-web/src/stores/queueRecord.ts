import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { IRecord } from "@/types";

const itemData: IRecord[] = [
  {
    id: 1,
    number: "009",
    status: 0,
    createdTime: "2024-11-24 22:01:13",
    finishedTime: null, // 取号时间，格式：YYYY-MM-DD HH:mm:ss
    userName: "ads",
    userId: 100,
  },
  {
    id: 2,
    number: "001",
    status: 1,
    userName: "ads",
    createdTime: "2024-11-24 21:59:23",
    finishedTime: null,
    userId: 101,
  },
  {
    id: 3,
    number: "003",
    status: 1,
    userName: "ads",
    createdTime: "2024-11-24 21:59:23",
    finishedTime: null,
    userId: 102,
  },
  {
    id: 4,
    number: "002",
    status: 2,
    userName: "ads",
    createdTime: "2024-11-24 21:59:23",
    finishedTime: null,
    userId: 103,
  },
];
const getDefaultRecords: () => IRecord[] = () => {
  return itemData;
};

export const useQueueRecordStore = defineStore("queueRecord", () => {
  // 状态：记录数组
  const records = ref<IRecord[]>(getDefaultRecords());

  // 获取所有记录
  const getRecords = computed(() => records.value);

  // 添加新记录
  const addRecord = (record: IRecord) => {
    records.value.push(record);
  };

  // 查询指定记录
  const getRecordById = (id: number) => {
    return records.value.find((record) => record.id === id);
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
    getRecordById,
    updateRecordStatus,
    clearRecords,
  };
});
