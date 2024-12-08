<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { FormInstance } from "element-plus";

import { useQueueStore } from "@/stores/queue";
import { useQueueRecordStore } from "@/stores/queueRecord";
import type { IStudent } from "@/types";
import { QueueStatus } from "@/config";

// import dayjs from "dayjs";
// const formattedTime = dayjs(record.time).format("YYYY-MM-DD HH:mm:ss");

interface IFormInfo {
  id: string;
  password: string;
}
const form = reactive({
  id: "",
  password: "",
});

const formRef = ref<FormInstance>();

// const formRef = ref<InstanceType<
//   typeof import("element-plus")["ElForm"]
// > | null>(null);

const queueStore = useQueueStore();
const queueRecordsStore = useQueueRecordStore();

const router = useRouter();

const submitForm = async (formEl: FormInstance | undefined) => {
  console.log(formEl);
  console.log(formRef);

  if (!formEl) {
    console.error("表单引用未初始化");
    return;
  }

  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
      try {
        // 跳转到个人页面
        router.push({
          name: "me",
          params: {
            id: form.id,
          },
        });
        console.log("=====luyouxinxi ", form.id);
      } catch (error) {
        console.error("取号时发生错误：", error);
      }
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<template>
  <div class="login-wrapper">
    <el-card class="box-card">
      <!-- <h2>login界面</h2> -->
      <div class="title-content">
        <div class="welcome">Welcome!</div>
        <div class="tip">Log in to continue</div>
      </div>
      <el-form :model="form" ref="formRef" label-width="100px">
        <el-form-item
          label=" "
          prop="id"
          :rules="[{ required: true, message: '请输入账号', trigger: 'blur' }]"
        >
          <el-input v-model="form.id" placeholder="account" />
        </el-form-item>
        <el-form-item
          label=" "
          prop="password"
          :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
        >
          <el-input v-model="form.password" placeholder="password" />
        </el-form-item>
        <el-form-item class="login-btn">
          <el-button type="primary" @click="submitForm(formRef)" size="small"
            >login</el-button
          >
        </el-form-item>
      </el-form>
      <el-divider />
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    180deg,
    #409eff 0%,
    #66b1ff 25%,
    #8cc5ff 50%,
    #b2d8ff 75%,
    #d9edff 100%
  );
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  .title-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    .welcome {
      font-size: 26px;
    }
    .tip {
      font-size: 12px;
    }
  }
}
.login-btn {
  margin-top: 7px;
}

:deep(.el-card__body) {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;
}
:deep(.el-form-item) {
  margin-bottom: 3px;
  label {
    width: 0px !important;
  }
}
:deep(.el-form) {
  width: 100%;
}
:deep(.el-form-item__content) {
  width: 100%;
  justify-content: center;
  margin-left: 0px !important;
}
:deep(.el-divider) {
  margin: 0px;
  border: none;
  height: 0px;
}
:deep(.el-card) {
  scale: 1.5;
  --el-card-border-color: none;
  --el-card-border-radius: 0px;
  --el-card-padding: 0px;
  --el-card-bg-color: none;
  box-shadow: none !important;
}
:deep(.el-input) {
  --el-input-height: 24px;
}
:deep(.el-input__inner::placeholder) {
  font-size: 12px;
}
</style>
>
