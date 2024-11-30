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
          prop="studentId"
          :rules="[{ required: true, message: '请输入学号', trigger: 'blur' }]"
        >
          <el-input v-model="form.studentId" placeholder="请输入学号" />
        </el-form-item>
        <el-button type="primary" @click="submitForm">取号</el-button>
      </el-form>
      <el-divider />
      <div v-if="queueNumber">
        <h3>取号成功！</h3>
        <p>
          您的排队号码是：<strong>{{ queueNumber }}</strong>
        </p>
        <p>
          当前等待人数：<strong>{{ queueLength }}</strong>
        </p>
      </div>
    </el-card>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQueueStore } from "@/stores/queue";

export default defineComponent({
  name: "TakeNumber",
  setup() {
    const form = ref({ name: "", studentId: "" });
    const formRef = ref(null);
    const queueStore = useQueueStore();
    const queueNumber = ref(null);
    const queueLength = ref(queueStore.queueLength);

    const submitForm = () => {
      formRef.value.validate((valid) => {
        if (valid) {
          const number = queueStore.addToQueue(
            form.value.name,
            form.value.studentId
          );
          queueNumber.value = number;
          queueLength.value = queueStore.queueLength;
        }
      });
    };

    return { form, formRef, submitForm, queueNumber, queueLength };
  },
});
</script>

<style scoped>
.take-number {
  max-width: 400px;
  margin: 0 auto;
}
</style>
