<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <PageWrapper>
    <Card style="border-radius: 15px" :headStyle="{ borderBottom: 'unset' }">
      <BasicTitle>
        <div class="bg-blue-500 h-[20px] w-[5px] inline-block rounded-lg mr-[15px]"></div
        ><span class="text-[14px] leading-[24px]"> 招商管理</span></BasicTitle
      >
      <div class="ant">
        <Select
          v-model:value="Value"
          label-in-value
          style="width: 120px"
          :options="options"
          @change="handleChange"
        /><Button type="primary" @click="showDrawer">添加招商信息</Button>
      </div>
      <!-- 操作栏 -->
      <div class="mb-[10px]">
        <Tabs v-model:activeKey="activeKey">
          <TabPane key="1" tab="私客" />
          <TabPane key="2" tab="公客" />
        </Tabs>
        <div class="flex justify-right; w-[500px] ml-[70%]">
          <Input placeholder="客户姓名/客户电话" />
          <Icon icon="mynaui:download" class="mt-[5px] ml-[5px]" />
        </div>
      </div>
      <!-- 表格主体 -->
      <Table :dataSource="dataSource" :columns="columns">
        <template #Status="{ record }">
          <Button>{{ Status[record.status] }}</Button>
        </template>
        <template #Channel="{ record }">
          <Button>{{ Channel[record.channel] }}</Button>
        </template>
        <template #caozuo="">
          <Popover trigger="hover" placement="bottom">
            <template #content>
              <ul>
                <li>添加提醒</li>
                <li>跟进</li>
                <li>指派</li>
                <li>预定</li>
                <li>签约</li>
                <li>关闭</li>
              </ul>
            </template>
            <Icon icon="mingcute:more-2-fill" @click.prevent />
          </Popover>
        </template>
      </Table>
      <Drawer
        title="添加招商信息"
        placement="bottom"
        :closable="false"
        :drawerStyle="{ width: '100%' }"
        v-model:visible="open"
        style="padding-left: 20vw"
        :after-visible-change="afterOpenChange"
        height="95vh"
      >
        <AddInvest />
      </Drawer>
    </Card>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { ref } from 'vue';
  import { Icon } from '/@/components/Icon';
  import { SelectTypes } from 'ant-design-vue/es/select';
  import {
    TabPane,
    Tabs,
    Button,
    Select,
    Input,
    Table,
    Drawer,
    Card,
    Popover,
  } from 'ant-design-vue';
  import { BasicTitle } from '/@/components/Basic/index';
  import { getInvestmentManagement } from '/@/api/investment-management/index';
  import config from './config';
  import { Status, Channel } from '/@/api/investment-management/model/investmentManagementModel';
  import { clientListResult } from '/@/api/investment-management/model/investmentManagementModel';

  import AddInvest from './value/AddInvest.vue';

  const columns = [...config.columns];
  const dataSource = ref<clientListResult[]>([]);

  getInvestmentManagement().then((res) => {
    console.log(res);
    dataSource.value = [...res.result];
  });

  const activeKey = ref('1');
  interface Value {
    value?: string;
    label?: string;
  }
  const options = ref<SelectTypes['options']>([
    {
      value: '不限',
      label: '不限',
    },
    {
      value: '测试楼栋',
      label: '测试楼栋',
    },
    {
      value: '东西湖新创基地',
      label: '东西湖新创基地',
    },
  ]);
  const handleChange = (value: Value) => {
    console.log(value); // { key: "lucy", label: "Lucy (101)" }
  };
  const Value = ref({
    value: '测试楼栋',
    label: '测试楼栋',
  });
  const open = ref<boolean>(false);

  const afterOpenChange = (bool: boolean) => {
    console.log('open', bool);
  };

  const showDrawer = () => {
    open.value = true;
  };
</script>

<style scoped>
  .ant-drawer .ant-drawer-content {
    width: 80%;
  }
  .ant {
    display: flex;
    justify-content: space-between;
  }

  .ant1 {
    display: flex;
    justify-content: right;
    width: 500px;
    margin-left: 70%;
  }
  li {
    height: 35px;
    line-height: 35px;
  }
</style>
