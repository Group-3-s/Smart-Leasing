<template>
  <PageWrapper>
    <Card style="border-radius: 15px" :headStyle="{ borderBottom: 'unset' }">
      <Tabs v-model:activeKey="activeKey">
        <TabPane key="1" tab="全部" />
        <TabPane key="2" tab="待生效" />
        <TabPane key="3" tab="待入住" />
        <TabPane key="4" tab="已入住" />
        <TabPane key="5" tab="已退定" />
        <TabPane key="6" tab="无效" />
      </Tabs>
    </Card>
  </PageWrapper>
</template>

<script setup>
  import { PageWrapper } from '/@/components/Page';
  import { Tabs, TabPane, Card } from 'ant-design-vue';
  import { ref } from 'vue';

  const activeKey = ref('1');
</script>
