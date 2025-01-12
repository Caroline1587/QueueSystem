<template>
  <div class="personal-queue">
    <div class="common-queue-info">
      <div class="waiting-count-wrapper">
        <el-icon><UserFilled /></el-icon>
        <div class="waiting-content">当前等待人数：{{ waitingCount }}人</div>
      </div>
      <div class="waiting-time-wrapper">
        <img class="wait-time-img" src="../../assets/clock.svg" alt="" />
        <div class="wait-time-content">
          预计需要等候时间：{{ estimatedTime }} 分钟
        </div>
      </div>
      <div class="call-time-wrapper">
        <img class="call-time-img" src="../../assets/notification.svg" alt="" />
        <div class="call-time-content">
          当前叫号：{{ queueStore.state.currentCallingNumber || "暂未叫号" }}
        </div>
      </div>
    </div>
    <div class="cancel-btn">
      <el-button
        v-if="getStatus === '等待中'"
        class="cancel-queue-btn"
        type="danger"
        @click="cancelQueue"
      >
        取消排队
      </el-button>
    </div>
    <div class="my-record-info">
      <div class="myNumber">我的号码：{{ record?.number }}</div>
      <div class="curStatus">当前状态：{{ getStatus }}</div>
      <div class="createdTime">取号时间：{{ record?.createdTime }}</div>
    </div>
    <el-button type="text" @click="viewRecords"> 查看取号记录 </el-button>
    <el-button class="back-btn" @click="onBack" color="#626aef">返回</el-button>

    <el-dialog v-model="isCancelDialogVisible" title="确认取消">
      <div>您确定要取消排队吗？</div>
      <template #footer>
        <el-button @click="isCancelDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmCancelQueue">确定</el-button>
      </template>
    </el-dialog>

    <div class="refresh" @click="refresh">刷新</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, reactive, ref, watchEffect } from "vue";
import { UserFilled, Timer } from "@element-plus/icons-vue";
import { useQueueStore } from "@/stores/queue";
import { useQueueRecordStore } from "@/stores/queueRecord";
import type { IRecord } from "@/types/index";
const queueStore = useQueueStore();
const queueRecordStore = useQueueRecordStore();

const router = useRouter();
const route = useRoute();

const recordId = ref<number>();
const record = ref<IRecord>();

const refresh = () => {
  console.log("刷新按钮");
  // 重新获取接口数据
  location.reload();
};

onMounted(() => {
  recordId.value = parseInt(route.params.id as string);
  record.value = queueRecordStore.getRecordById(
    recordId.value as number
  ) as IRecord;
  // console.log("record.value =", record.value);

  queueStore.callNext();
});

const waitingCount = computed(() => queueStore.waitingQueue.length);
const estimatedTime = computed(
  () => queueStore.findPlaceOfWaitingQueue(recordId.value as number) * 5 + 5
); // 假设每人需要 5 分钟
const isCancelDialogVisible = ref(false);

const cancelQueue = () => {
  isCancelDialogVisible.value = true;
};

const getStatus = computed(() => {
  console.log("record?.status=", record.value?.status);
  if (record.value?.status === 0) return "等待中";
  else if (record.value?.status === 1) return "叫号中";
  else if (record.value?.status === 2) return "已完结";
  else return "未取号";
});
const confirmCancelQueue = () => {
  if (recordId.value) {
    queueStore.cancel(recordId.value as number);
    // me.status=2;
    queueRecordStore.updateRecordStatus(record.value!.number as string, 2);
    record.value!.status = 2; //结束
  }
  isCancelDialogVisible.value = false;
};

const viewRecords = () => {
  router.push({ name: "myRecords" });
};
const onBack = () => {
  router.back();
};
</script>

<style lang="scss" scoped>
.personal-queue {
  // max-width: 600px;
  // margin: auto;
  padding: 20px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  align-items: center;
  padding-top: 45px;
  background: linear-gradient(
    180deg,
    #409eff 0%,
    #66b1ff 25%,
    #8cc5ff 50%,
    #b2d8ff 75%,
    #d9edff 100%
  );
  height: 100vh;
  .common-queue-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-weight: 400;
    font-size: smaller;
    margin-bottom: 1rem;

    .waiting-count-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      .waiting-content {
        margin-left: 5px;
      }
    }
    .waiting-time-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      .wait-time-content {
        margin-left: 5px;
      }
    }
    .call-time-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      .call-time-content {
        margin-left: 5px;
      }
    }
  }

  .my-record-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;

    .curStatus {
      font-weight: 500;
      font-size: 1.4rem;
    }
    .myNumber {
      color: #b93333;
      font-weight: bolder;
      font-size: 2rem;
    }
    .createdTime {
      font-weight: lighter;
      font-size: smaller;
    }
  }
}
.cancel-queue-btn {
  width: 170px;
  height: 60px;
  border-radius: 45px;
  font-size: 18px;
}
.back-btn {
  width: 80%;
  height: 3rem; /* 设置高度 */
}
.wait-time-img,
.call-time-img {
  width: 1em;
}

.refresh {
  width: 65px; /* 设置宽度 */
  height: 65px; /* 设置高度 */
  border-radius: 50%; /* 设置为圆形 */
  background-color: #f9fbfb; /* 设置背景颜色 */
  color: black; /* 设置文字颜色 */
  display: flex; /* 使用flex布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  font-size: 14px; /* 设置字体大小 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 添加阴影效果 */
  cursor: pointer; /* 鼠标悬停时显示为手型，表示可点击 */
  transition: transform 0.2s, box-shadow 0.2s; /* 添加过渡效果 */
  position: fixed;
  left: 10px;
  top: 24%;
}
.refresh:active {
  transform: scale(1.05); /* 鼠标悬停时放大 */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7); /* 鼠标悬停时阴影加深 */
}
</style>
