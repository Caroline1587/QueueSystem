<script setup lang="ts">
import { ref, reactive } from "vue";
import { useQueueStore } from "@/stores/queue";
import type { IStudent, ISatus } from "@/types";
import { useRouter } from "vue-router";
import { FormInstance } from "element-plus";

interface IFormInfo {
  name: string;
  id: string;
}
const form = reactive({
  name: "",
  id: "",
});

const formRef = ref<FormInstance>();

// const formRef = ref<InstanceType<
//   typeof import("element-plus")["ElForm"]
// > | null>(null);

const queueStore = useQueueStore();
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
        // 生成排队号码
        const number = queueStore.generateNumber();
        const status: ISatus.Waiting = 0; // 等待状态
        const time = new Date().toISOString();

        // 创建学生对象
        const currentStudent: IStudent = {
          id: form.id,
          name: form.name,
          number,
          status,
          time,
        };

        // 加入队列
        queueStore.addToQueue(currentStudent);

        // 跳转到个人页面
        router.push({
          name: "PersonalQueue",
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
  <div class="take-number">
    <el-card class="box-card">
      <h2>取号界面</h2>
      <el-form :model="form" ref="formRef" label-width="100px">
        <el-form-item
          label="姓名"
          prop="name"
          :rules="[{ required: true, message: '请输入姓名', trigger: 'blur' }]"
        >
          <el-input v-model="form.name" placeholder="请输入姓名" />
        </el-form-item>

        <el-form-item
          label="学号"
          prop="id"
          :rules="[{ required: true, message: '请输入学号', trigger: 'blur' }]"
        >
          <el-input v-model="form.id" placeholder="请输入学号" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)"
            >取号</el-button
          >
        </el-form-item>
      </el-form>
      <el-divider />
    </el-card>
  </div>
</template>
