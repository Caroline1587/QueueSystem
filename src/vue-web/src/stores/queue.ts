import { ref, computed,reactive } from 'vue';
import { defineStore } from 'pinia';
import type{IStudent as Student }from '@/types'

// 定义队列的默认值
const getDefaultQueueState = () => ({
  queue: [] as Student[], // 队列中的所有学生
  currentCallingUserId: null as string | null, // 当前叫号学生的 ID
  currentCallingNumber: null as string | null, // 当前正在叫号的号码
});

export const useQueueStore = defineStore('queue', () => {
  // 初始化状态
  let state = reactive(getDefaultQueueState());

  // 计算属性：获取等待中的队列
  const waitingQueue = computed(() => 
    state.queue.filter((student) => student.status === 0)
  );

  // 当前jiaohao学生信息
  const currentCallingStudentInfo= computed(() => 
    waitingQueue.value.find((student)=>{student.id===state.currentCallingUserId})
    // state.value.queue.find((student) => student.id === state.value.currentUserId) || null
  );

  const findStudentById=(id:string)=>{
    return state.queue.find((student: Student) => student.id === id)
  };

  const findPlaceOfWaitingQueue=(id: string)=>{
    return waitingQueue.value.findIndex(student=>{student.id===id}) 
  };

  // 生成号码
  const generateNumber = () => {
    return `A${state.queue.length + 1}`;
  };

  // 添加学生
  const addToQueue = (student: Student) => {
    state.queue.push(student);
    // state.value.currentUserId = student.id; // 设置当前叫号用户 ID
  };

  // 取消排队
  const cancelStudent = (id: string) => {
    const student = state.queue.find((s) => s.id === id);
    if (student) {
      student.status = 2;
    }
  };

  // 调用下一位
  const callNext = () => {
    const nextStudent = waitingQueue.value.shift();
    if (nextStudent) {
      state.currentCallingNumber = nextStudent.number;
      nextStudent.status = 1;
      state.currentCallingUserId = nextStudent.id; // 设置当前叫号用户 ID
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
    findStudentById,
    findPlaceOfWaitingQueue,
    generateNumber,
    addToQueue,
    cancelStudent,
    callNext,
    resetQueue,
  };
});
