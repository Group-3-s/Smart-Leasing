<template>
  <div class="w-full bg-white">
    <Tabs v-model:activeKey="activeKey">
      <TabPane key="1" tab="租赁提成明细">
        <index01 />
      </TabPane>
      <TabPane key="2" tab="租赁提成汇总" force-render>
        <index02 />
      </TabPane>
      <TabPane key="3" tab="提成发放记录"><index03 /></TabPane>
    </Tabs>
    <!-- <Empty /> -->
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Tabs, TabPane } from 'ant-design-vue';
  import index01 from './details/index-01.vue';
  import index02 from './summary/index-02.vue';
  import index03 from './commission/index-03.vue';
  const activeKey = ref('1');
</script>
