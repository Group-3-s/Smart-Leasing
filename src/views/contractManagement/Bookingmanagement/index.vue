<template>
  <PageWrapper>
    <Card style="border-radius: 15px" :headStyle="{ borderBottom: 'unset' }">
      <div class="flex flex-row-reverse">
        <Button type="primary">添加预定</Button>
      </div>
      <!-- 操作栏 -->
      <div class="mb-[10px]">
        <Tabs v-model:activeKey="activeKey">
          <TabPane key="1" tab="全部" />
          <TabPane key="2" tab="待生效" />
          <TabPane key="3" tab="待入住" />
          <TabPane key="4" tab="已入住" />
          <TabPane key="5" tab="已退定" />
          <TabPane key="6" tab="无效" />
        </Tabs>
        <div class="flex justify-right; w-[500px] ml-[70%]">
          <Input
            placeholder="房源编号/房源地址/房间号/项目名称/预订人姓名/电话/编号"
            @click="showDrawer"
          />
          <Icon icon="mynaui:download" class="mt-[5px] ml-[5px]" />
        </div>
      </div>
      <!-- 表格主体 -->
      <Table :dataSource="dataSource" :columns="columns">
        <template #Status="{ record }">
          {{ Status[record.status] }}
        </template>
        <template #Type="{ record }">
          {{ Type[record.type] }}
        </template>
        <template #caozuo="">
          <Icon icon="mingcute:more-2-fill" />
        </template>
      </Table>
      <Drawer
        placement="right"
        :closable="false"
        :drawerStyle="{ width: '100%' }"
        v-model:visible="open"
        :after-visible-change="afterOpenChange"
        width="35%"
      >
        <serch />
      </Drawer>
    </Card>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Card, Button, Tabs, TabPane, Input, Table, Drawer } from 'ant-design-vue';
  import Icon from '/@/components/Icon';
  import config from './config';
  import { getBookingmanagement } from '/@/api/contractManagement/Bookingmanagement/index';
  import {
    Status,
    Type,
  } from '/@/api/contractManagement/Bookingmanagement/model/Bookingmanagement';
  import { clientListResult } from '/@/api/contractManagement/Bookingmanagement/model/Bookingmanagement';
  import serch from './value/serch.vue';

  const columns = [...config.columns];
  const dataSource = ref<clientListResult[]>([]);
  const open = ref<boolean>(false);
  const activeKey = ref('1');

  getBookingmanagement().then((res) => {
    dataSource.value = [...res.result];
  });
  const showDrawer = () => {
    open.value = true;
  };
  const afterOpenChange = (bool: boolean) => {
    console.log('open', bool);
  };
</script>
