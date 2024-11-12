<template>
  <!-- <div>租赁提成汇总</div> -->
  <div class="ml-[20px]">
    <Row :gutter="[10, 10]">
      <Col>
        <h2 class="pl-2 pr-4 pt-1 pb-1 mr-6 bg-white border-l-4 border-blue-600 rounded-3"
          >提成发放汇总</h2
        >
      </Col>
      <Col :span="8">
        <span>周期</span>
        <div class="flex items-center justify-between">
          <DatePicker v-model:value="mountvalue" />
          <span>至</span>
          <DatePicker v-model:value="mountvalue1" />
        </div>
      </Col>
      <Col :span="8" :offset="8">
        <div class="flex items-center justify-between">
          <div style="position: relative" @click="InputShowModal">
            <Input
              placeholder="分佣人员信息"
              style="
                border: 1px solid #797979;
                border-radius: 20px;
                padding-left: 10px;
                width: 350px;
                height: 35px;
                margin-top: 25px;
                margin-left: 44px;
              "
            />
            <Icon
              icon="material-symbols:search"
              style="position: absolute; right: 10px; top: 36px; color: rgb(21 136 252)"
            />
          </div>
          <Icon icon="lucide:download" style="color: rgb(21 136 252); margin-top: 25px" />
          <Modal v-model:visible="Inputvisible" width="680px" :closable="false" @ok="InputhandleOk">
            <!-- <template #footer>
            <Button key="back" @click="handleCancel">重置</Button>
            <Button key="submit" type="primary" :loading="loading" @click="handleOk">确定</Button>
          </template> -->
            <InputModal />
          </Modal>
        </div>
      </Col>
      <Col>
        <div class="overflow-auto mt-8 bg-white p-4 shadow-md rounded-lg">
          <Table :columns="config.columns" :dataSource="tableDate" style="width: 180%">
            <template #name="{ text }">
              <a>{{ text }}</a>
            </template>
          </Table>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Moment } from 'moment';
  import { Row, Col, DatePicker, Table, Modal } from 'ant-design-vue';
  import { Icon } from '/@/components/Icon';
  import { getmanageData } from '/@/api/performanceManagement/index';
  import InputModal from './InputModal.vue';
  import config from './confing';
  const tableDate = ref();
  getmanageData()
    .then((res) => {
      tableDate.value = res.summary.summary;
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  const mountvalue = ref<Moment>();
  const mountvalue1 = ref<Moment>();
  const Inputvisible = ref(false);
  const InputShowModal = () => {
    Inputvisible.value = true;
  };
  const Inputloading = ref<boolean>(false);
  const InputhandleOk = () => {
    Inputloading.value = true;
    setTimeout(() => {
      Inputloading.value = false;
      Inputvisible.value = false;
    }, 2000);
  };
</script>
<style scoped>
  .ant-table-thead > tr > th:nth-child(5) {
    background-color: #ef6f48;
  }
</style>
