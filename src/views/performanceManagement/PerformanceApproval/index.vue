<template>
  <div class="w-full bg-white">
    <h2 class="pl-2 pr-4 pt-1 pb-1 mr-6 bg-white border-l-4 border-blue-600 rounded-3">配置管理</h2>
    <Tabs v-model:activeKey="activeKey">
      <TabPane key="1" tab="字典配置"> 字典配置 </TabPane>
      <TabPane key="2" tab="运营配置" force-render> 运营配置 </TabPane>
      <TabPane key="3" tab="收款账号配置">收款账号配置</TabPane>
      <TabPane key="4" tab="审批配置">审批配置</TabPane>
      <TabPane key="5" tab="个性化配置">个性化配置</TabPane>
    </Tabs>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Tabs, TabPane } from 'ant-design-vue';

  const activeKey = ref('1');
</script>
