<template>
  <h2 class="pl-2 pr-4 pt-1 pb-1 mr-6 bg-white border-l-4 border-blue-600 rounded-3"
    >提成发放记录</h2
  >
  <Tabs v-model:activeKey="activeKey">
    <TabPane key="1" tab="按房源">
      <roomPage />
    </TabPane>
    <TabPane key="2" tab="按分佣人员" force-render>
      <peoplePage />
    </TabPane>
  </Tabs>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import roomPage from './component/roomPage.vue';
  import peoplePage from './component/peoplePage.vue';
  import { Tabs, TabPane } from 'ant-design-vue';
  const activeKey = ref('1');
</script>
