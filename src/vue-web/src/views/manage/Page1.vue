<template>
  <div class="business-wrapper">
    <div class="operate-wrapper">
      <div class="pause-btn"><img src="../../assets/pause.svg" alt=""></div>
      <div class="title">数据更新倒计时：47</div>
      <div class="refresh-btn"><img src="../../assets/refresh.svg" alt=""></div>
    </div>
    <div class="business-detail">
      <div class="detail-item" v-for="detail in businessDetailData" :key="detail.id">
          <div>
            <div style="width: 40%">Id</div>
            <div>{{ detail.id }}</div>
          </div>
          <div>
            <div style="width: 40%">业务类型</div>
            <div>{{ detail.businessType }}</div>
          </div>
          <div>
            <div style="width: 40%">状态</div>  
            <div>{{ detail.businessStatus }}</div>
          </div>
          <div>
            <div style="width: 40%">姓名</div>
            <div>{{ detail.name }}</div>
          </div>
          <div>
            <div style="width: 40%">电话</div>
            <div>{{ detail.phoneNumber }}</div>
          </div>
          <div>
            <div style="width: 40%">身份证</div>
            <div>{{ detail.idCard }}</div>
          </div>
          <div>
            <div style="width: 40%">申请时间</div>
            <div>{{ detail.operateTime }}</div>
          </div>
          <div>
            <div style="width: 40%; height: 26px;">操作</div>
            <div class="detail-operate">{{ detail.operate }}</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const businessDetailData = [{
    id: 3754,
    businessType: 'A类业务',
    businessStatus: '排队中',
    name: '哈哈',
    phoneNumber: '1881653352*',
    idCard: '55',
    operateTime: '2024-12-08 18:09:33',
    operate: '接  待'
  },{
    id: 3753,
    businessType: 'A类业务',
    businessStatus: '排队中',
    name: '英语',
    phoneNumber: '1881653352*',
    idCard: '255',
    operateTime: '2024-12-08 18:07:48',
    operate: '接待'
  }]
</script>

<style lang="scss" scoped>
.business-wrapper {
  background: #f5f6f8;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  .operate-wrapper {
    display: flex;
    align-items: center;
    background: #fff;
    height: fit-content;
    justify-content: space-between;
    box-sizing: border-box;
    width: 90%;
    padding: 10px;
    margin: 20px 0px 30px 0px;
    .pause-btn, .refresh-btn {
      width: 32px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      img {
        width: 13px;
      }
    };
    .pause-btn {
      background: #57ba9d;
    }
    .refresh-btn {
      background: #f0ae46;
    }
  }
  .business-detail {
    display: flex;
    width: 90%;
    box-sizing: border-box;
    flex-direction: column;
    background: #fff;
    border: 1px solid #f4f4f3;
    .detail-item {
      border-bottom: 1px solid #f4f4f3;
      padding: 10px 0px 10px 10px;
      div {
        display: flex;
        div {
          // width: 40%;
          display: flex;
        }
      }
      .detail-operate {
        border: 1px solid #4186f8;
        color: #4186f8;
        padding: 1px 4px;
        border-radius: 3px;
      }
    }
  }
}


</style>
