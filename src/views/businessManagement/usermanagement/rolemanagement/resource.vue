<template>
  <div>
    <!-- 工作台权限 -->
    <div class="mb-[30px]">
      <div :style="{ borderBottom: '1px solid #E9E9E9' }">
        <Checkbox
          v-model:checked="workbench"
          :indeterminate="indeterworkbench"
          @change="onworkbench"
          style="font-size: 18px; font-weight: 500"
        >
          工作台
        </Checkbox>
      </div>
      <br />
      <CheckboxGroup
        v-model:value="workbenchList"
        :options="workbenchOptions"
        style="margin-left: 60px"
      />
    </div>
    <!-- 招商管理权限 -->
    <div>
      <div :style="{ borderBottom: '1px solid #E9E9E9' }">
        <Checkbox
          v-model:checked="Investment"
          :indeterminate="indeterInvestment"
          @change="onInvestment"
          style="font-size: 18px; font-weight: 500"
        >
          招商管理
        </Checkbox>
      </div>
      <br />
      <CheckboxGroup
        v-model:value="InvestmentList"
        :options="InvestmentOptions"
        style="margin-left: 60px" /></div
  ></div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { Checkbox, CheckboxGroup } from 'ant-design-vue';

  //工作台
  const workbenchOptions = ref(['查看(电脑端)']);
  const workbench = ref(false);
  const workbenchList = ref(['查看(电脑端)']);
  const indeterworkbench = ref(true);
  const onworkbench = (e: any) => {
    workbenchList.value = e.target.checked ? workbenchOptions.value : [];
    indeterworkbench.value = false;
  };
  watch(workbenchList, (val) => {
    indeterworkbench.value = !!val.length && val.length < workbenchOptions.value.length;
    workbench.value = val.length === workbenchOptions.value.length;
  });
  //招商管理
  const InvestmentOptions = ref([
    '租客--私客',
    '查看',
    '添加资源',
    '编辑',
    '跟近',
    '指派',
    '指派',
    '重新激活',
    '转入公客',
    '共享资源',
    '删除',
    '添加提醒',
  ]);
  const Investment = ref(false);
  const InvestmentList = ref(['查看']);
  const indeterInvestment = ref(true);
  const onInvestment = (e: any) => {
    InvestmentList.value = e.target.checked ? InvestmentOptions.value : [];
    indeterInvestment.value = false;
  };
  watch(InvestmentList, (val) => {
    indeterInvestment.value = !!val.length && val.length < InvestmentOptions.value.length;
    Investment.value = val.length === InvestmentOptions.value.length;
  });
</script>
