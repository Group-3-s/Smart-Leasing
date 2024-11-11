<template>
  <PageWrapper>
    <Card style="border-radius: 15px" :headStyle="{ borderBottom: 'unset' }">
      <div class="flex flex-row-reverse">
        <Button type="primary" @click="addBooking">添加预定</Button>
      </div>
      <Modal v-model:visible="visible" title="添加预定" @ok="handleOk" width="800px">
        <template #footer>
          <span class="mr-[20px]">
            <Checkbox :disabled="true">邀请租客签字</Checkbox>
            <Select :disabled="true" size="small" style="width: 200px" />
          </span>
          <a-button key="back" @click="handleCancel">取消</a-button>
          <a-button key="submit" type="primary" :loading="loading" @click="handleOk">确定</a-button>
        </template>
        <Model />
      </Modal>

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
          <div>{{ Status[record.status] }}</div>
        </template>
        <template #Type="{ record }">
          {{ Type[record.type] }}
        </template>
        <template #caozuo="{ record }">
          <Popover :code="record.status" />
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
  import {
    Card,
    Button,
    Tabs,
    TabPane,
    Input,
    Table,
    Drawer,
    Modal,
    Checkbox,
    Select,
  } from 'ant-design-vue';
  import Icon from '/@/components/Icon';
  import config from './config';
  import { getBookingmanagement } from '/@/api/contractManagement/Bookingmanagement/index';
  import { getSysDict } from '../../../api/dict/dict';
  import {
    Status,
    Type,
  } from '/@/api/contractManagement/Bookingmanagement/model/Bookingmanagement';
  import { clientListResult } from '/@/api/contractManagement/Bookingmanagement/model/Bookingmanagement';
  import serch from './value/serch.vue';
  import Popover from './value/Popover.vue';
  import Model from './value/Modal.vue';

  const columns = [...config.columns];
  const dataSource = ref<clientListResult[]>([]);
  const open = ref<boolean>(false);
  const activeKey = ref('1');

  getSysDict().then((res) => {
    console.log(res);
  });

  const loading = ref(false);
  const visible = ref(false);
  const addBooking = () => {
    visible.value = true;
  };
  const handleOk = () => {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      visible.value = false;
    }, 2000);
  };
  const handleCancel = () => {
    visible.value = false;
  };

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
