import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import type { IRecord } from "@/types";

// 定义队列的默认值
const getDefaultQueueState = () => ({
  queue: [] as IRecord[], // 队列中的所有号码
  currentCallingNumber: null as string | null, // 当前正在叫号的号码
  currentCallingId: null as number | null, // 当前正在叫号的号码id
  currentCallingUserId: null as number | null, // 当前叫号学生的 ID
});
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
export const useQueueStore = defineStore("queue", () => {
  // 初始化状态
  let state = reactive(getDefaultQueueState());
  state.queue = itemData;

  // 计算属性：获取等待中的队列
  const waitingQueue = computed(() =>
    state.queue.filter((record) => record.status === 0)
  );

  // 学生信息
  const currentCallingStudentInfo = (id: number) =>
    state.queue.find((record) => {
      record.id === id;
    });

  // 通过号码id查询信息
  const findRecordById = (id: number) => {
    return state.queue.find((record: IRecord) => record.id === id);
  };

  // 在队列中所处位置
  const findPlaceOfWaitingQueue = (id: number) => {
    return waitingQueue.value.findIndex((record) => {
      record.id === id;
    });
  };

  // 生成号码
  const generateNumber = () => {
    return `A${state.queue.length + 1}`;
  };

  // 添加号码
  const addToQueue = (record: IRecord) => {
    state.queue.push(record);
    // state.value.currentUserId = student.id; // 设置当前叫号用户 ID
  };

  // 取消排队
  const cancel = (id: number) => {
    const record = state.queue.find((r) => r.id === id);
    if (record) {
      record.status = 2;
    }
  };

  // 调用下一位
  const callNext = () => {
    const next = waitingQueue.value.shift();
    if (next) {
      state.currentCallingNumber = next.number;
      next.status = 1; //完成状态
      state.currentCallingUserId = next.userId; // 设置当前叫号用户 ID
    }
  };

  // 重置队列
  const resetQueue = () => {
    state = getDefaultQueueState();
  };

  return {
    state,
    waitingQueue,
    currentCallingStudentInfo,
    findRecordById,
    findPlaceOfWaitingQueue,
    generateNumber,
    addToQueue,
    cancel,
    callNext,
    resetQueue,
  };
});
