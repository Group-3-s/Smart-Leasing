<template>
  <!-- <div>业绩台账</div> -->
  <Dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      业绩台账
      <DownOutlined />
    </a>
    <template #overlay>
      <Menu>
        <MenuItem key="0">
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            租赁提成明细
          </a>
        </MenuItem>
        <MenuItem key="1">
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            租赁提成汇总
          </a>
        </MenuItem>
        <MenuDivider />
        <MenuItem key="3">
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            提成发放记录
          </a>
        </MenuItem>
      </Menu>
    </template>
  </Dropdown>

  <!--下拉选框 日历 搜索 -->
  <div class="bg-white p-4 shadow-md rounded-lg">
    <h2 class="text-lg font-semibold">租赁提成明细</h2>
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
        <span>周期</span>
        <div class="flex items-center justify-between">
          <DatePicker v-model:value="mountvalue" />
          <span>至</span>
          <DatePicker v-model:value="mountvalue1" />
        </div>
      </div>
      <div class="w-1/3 p-4">
        <div class="flex items-center justify-between">
          <div class="">
            <Input
              placeholder="搜索信息"
              style="
                border: 1px solid rgb(21 136 252);
                border-radius: 20px;
                padding-left: 10px;
                width: 280px;
                height: 25px;
                margin-top: 25px;
              "
            />
            <Icon
              icon="material-symbols:search"
              style="position: absolute; right: 125px; top: 100px; color: rgb(21 136 252)"
            />
          </div>
          <Icon icon="lucide:download" style="color: rgb(21 136 252); margin-top: 25px" />
        </div>
      </div>
    </div>
  </div>
  <!-- 表格主体 -->
  <Table :columns="config.columns" :dataSource="tableDate">
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
    <template #action="">
      <div @click="deleteItem">
        <!-- <Icon icon="mingcute:more-2-fill" /> -->
        发放提成
      </div>
    </template>
  </Table>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { Dropdown, Menu, MenuItem, Select, Table, DatePicker } from 'ant-design-vue';
  import { DownOutlined } from '@ant-design/icons-vue';
  import { SelectTypes } from 'ant-design-vue/es/select';
  import { Icon } from '/@/components/Icon';
  import { Moment } from 'moment';
  import { getmanageData } from '/@/api/performanceManagement';
  const mountvalue = ref<Moment>();
  const mountvalue1 = ref<Moment>();
  import config from './config';
  const tableDate = ref();
  getmanageData()
    .then((res) => {
      tableDate.value = res.result.result;
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

  function deleteItem(e) {
    console.log(e);
  }
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

  const value = ref<string | undefined>(undefined);
</script>
