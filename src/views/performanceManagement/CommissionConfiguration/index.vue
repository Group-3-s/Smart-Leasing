<template>
  <!-- <div>分佣配置</div> -->
  <div class="bg-white">
    <div class="bg-white rounded-lg p-4 m-5">
      <h2 class="pl-2 pr-4 pt-1 pb-1 mr-6 bg-white border-l-4 border-blue-600 rounded-3"
        >分佣配置</h2
      >
      <div class="flex items-center">
        <div class="w-1/2">
          <span>选择项目：</span>
          <div class="flex items-center justify-between">
            <!-- 下拉选框 -->
            <Select
              v-model:value="value"
              show-search
              style="width: 200px"
              :options="options"
              :filter-option="filterOption"
              @focus="handleFocus"
              @blur="handleBlur"
              @change:string="handleChange"
            />
          </div>
        </div>
        <div class="w-1/2 p-4 flex justify-end">
          <Button type="primary" @click="addCommissionShowModal">新增分佣配置</Button>
        </div>
        <div>
          <Modal v-model:visible="addCommissionvisible" :closable="false" title="新增配置">
            <addCommission />
          </Modal>
        </div>
      </div>
    </div>
    <!-- 表格主体 -->
    <div class="p-4">
      <div class="text-lg font-bold">签约业绩提成配置表</div>

      <div class="overflow-auto mt-8 bg-white p-4 shadow-md rounded-lg">
        <Table :columns="config.columns" :dataSource="tableDate" style="width: 100%">
          <template #name="{ text }">
            <a>{{ text }}</a>
          </template>
          <!-- <template #action="">
            <div>
              <Button type="primary">T005</Button>
              Button 
            </div>
          </template> -->
          <template #action="">
            <div class="text-[#1989fa]">编辑</div>
          </template>
          <template #action1="">
            <div class="text-[red]">禁用</div>
          </template>
        </Table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { SelectTypes } from 'ant-design-vue/es/select';
  import { Select, Button, Table, Modal } from 'ant-design-vue';
  import addCommission from './component/addCommission.vue';
  import config from './config';
  import { getmanageData } from '/@/api/performanceManagement/index';

  const tableDate = ref();
  getmanageData()
    .then((res) => {
      tableDate.value = res.commission.commission;
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  const options = ref<SelectTypes['options']>([
    { value: '项目1', label: '项目1' },
    { value: '项目2', label: '项目2' },
    { value: '项目3', label: '项目3' },
    { value: '项目4', label: '项目4' },
    { value: '项目5', label: '项目5' },
  ]);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleBlur = () => {
    console.log('blur');
  };

  const handleFocus = () => {
    console.log('focus');
  };

  const filterOption = (input: string, option: any) => {
    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };

  const value = ref<string | undefined>('项目1');
  const addCommissionvisible = ref(false);

  const addCommissionShowModal = () => {
    addCommissionvisible.value = true;
  };
</script>
