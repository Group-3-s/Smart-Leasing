<template>
  <Row>
    <Col :span="24">
      <div class="flex items-center">
        <div class="w-1/3">
          <span>选择项目：</span>
          <div class="flex items-center justify-between">
            <!-- 下拉选框 -->
            <Select
              v-model:value="value"
              show-search
              placeholder="Select a position"
              style="width: 200px"
              :options="options"
              :filter-option="filterOption"
              @focus="handleFocus"
              @blur="handleBlur"
              @change:string="handleChange"
            />
          </div>
        </div>
        <div class="w-1/3 p-4">
          <span class="text-lg font-semibold">查看维度：</span>
          <div class="flex items-center justify-between">
            <!-- 下拉选框 -->
            <Select
              v-model:value="roomValue"
              show-search
              style="width: 200px"
              :options="roomOptions"
              :filter-option="filterroom"
              @focus="roomFocus"
              @blur="roomBlur"
              @change:string="roomChange"
            />
          </div>
        </div>
        <div class="w-1/3 p-4">
          <div class="flex items-center justify-between">
            <div style="position: relative">
              <Input
                placeholder="模糊搜索房间号信息"
                style="
                  border: 1px solid rgb(21 136 252);
                  border-radius: 20px;
                  padding-left: 10px;
                  width: 280px;
                  height: 30px;
                  margin-top: 25px;
                  margin-left: 44px;
                "
              />
              <Icon
                icon="material-symbols:search"
                style="position: absolute; right: 10px; top: 30px; color: rgb(21 136 252)"
              />
            </div>
            <Icon icon="lucide:download" style="color: rgb(21 136 252); margin-top: 25px" />
          </div>
        </div>
      </div>
    </Col>
    <Col>
      <div class="overflow-auto mt-8 bg-white p-4 shadow-md rounded-lg">
        <Table :columns="roomConfig.columns" :dataSource="tableDate" style="width: 160%">
          <template #name="{ text }">
            <a>{{ text }}</a>
          </template>
        </Table>
      </div>
    </Col>
  </Row>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { SelectTypes } from 'ant-design-vue/es/select';
  import { Row, Col, Select, Table } from 'ant-design-vue';
  import { Icon } from '/@/components/Icon';
  import { getmanageData } from '/@/api/performanceManagement/index';
  import roomConfig from '../roomConfig';
  const tableDate = ref();
  getmanageData()
    .then((res) => {
      tableDate.value = res.room.room;
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  const options = ref<SelectTypes['options']>([
    { value: '不限', label: '不限' },
    { value: '软件新城', label: '软件新城' },
    { value: '邓甲新城', label: '邓甲新城' },
    { value: '创新公寓', label: '创新公寓' },
    { value: '测试公寓楼栋', label: '测试公寓楼栋' },
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

  const value = ref<string | undefined>('不限');

  const roomOptions = ref<SelectTypes['options']>([
    { value: '按房源', label: '按房源' },
    { value: '按分佣人员', label: '按分佣人员', disabled: true },
  ]);

  const roomChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const roomBlur = () => {
    console.log('blur');
  };

  const roomFocus = () => {
    console.log('focus');
  };
  const filterroom = (input: string, option: any) => {
    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };

  const roomValue = ref<string | undefined>('按房源');
</script>
