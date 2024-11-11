<!-- <template>
  <div class="bg-gray-200 p-4 rounded-lg shadow-md">
    <h1 class="text-3xl font-bold mb-6">新增分佣配置</h1>
    <div class="bg-white p-4 rounded-lg shadow-md">
      <div class="text-xl font-semibold mb-2">项目：E+SPACE</div>
      <div class="text-xl font-semibold mb-2">客户信息</div>
      <div class="text-lg font-semibold mb-2">租赁提成标准：自主招商</div>
      <div class="text-lg font-semibold mb-2">行业内/行业外：行业内</div>
      <div class="text-xl font-semibold mb-2">租赁信息</div>
      <div class="text-lg font-semibold mb-2">签约类型：新签</div>
      <div class="text-lg font-semibold mb-2">签约时长：≥3年</div>
      <table class="w-full text-left mt-8">
        <thead>
          <tr>
            <th class="px-4 py-2 bg-gray-300">分佣职务</th>
            <th class="px-4 py-2 bg-gray-300">分佣人员</th>
            <th class="px-4 py-2 bg-gray-300">提成总额</th>
            <th class="px-4 py-2 bg-gray-300">发放规则</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-2 border">招商专员/主管</td>
            <td class="px-4 py-2 border">黄哈哈</td>
            <td class="px-4 py-2 border">按首月（完整）月租金 100%</td>
            <td class="px-4 py-2 border"
              >分 2 次发放，第1次发放 50%，第2次发放 50%。每逾期 10 天，扣除提成的 10%。</td
            >
          </tr>
          <tr>
            <td class="px-4 py-2 border">招商经理</td>
            <td class="px-4 py-2 border">黄嘻嘻</td>
            <td class="px-4 py-2 border">按首月（完整）月租金 100%</td>
            <td class="px-4 py-2 border"
              >分 2 次发放，第1次发放 50%，第2次发放 50%。每逾期 10 天，扣除提成的 10%。</td
            >
          </tr>
          <tr>
            <td class="px-4 py-2 border">全民营销推荐人</td>
            <td class="px-4 py-2 border">黄笑笑</td>
            <td class="px-4 py-2 border">按首月（完整）月租金 100%</td>
            <td class="px-4 py-2 border"
              >分 2 次发放，第1次发放 50%，第2次发放 50%。每逾期 10 天，扣除提成的 10%。</td
            >
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template> -->
<template>
  <Form :model="form" :rules="rules" layout="vertical">
    <Row :gutter="16">
      <Col :span="12">
        <FormItem label="选择项目" name="name">
          <Select
            v-model:value="Nanmevalue"
            show-search
            style="width: 200px"
            :options="options"
            :filter-option="filterOption"
            @focus="handleFocus"
            @blur="handleBlur"
            @change:string="handleChange"
          />
        </FormItem>
      </Col>
    </Row>
    <Row>
      <h2>客户信息</h2>
      <Col />
      <Col />
    </Row>
  </Form>
  <div
    :style="{
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: '100%',
      borderTop: '1px solid #e9e9e9',
      padding: '10px 16px',
      background: '#fff',
      textAlign: 'right',
      zIndex: 1,
    }"
  >
    <Button style="margin-right: 8px" @click="onClose">Cancel</Button>
    <Button type="primary" @click="onClose">Submit</Button>
  </div> </template
><script lang="ts" setup>
  import { Row, Col, Form, FormItem, Button, Select } from 'ant-design-vue';
  import { reactive, ref } from 'vue';
  import { SelectTypes } from 'ant-design-vue/es/select';
  const form = reactive({
    name: '',
    url: '',
    owner: '',
    type: '',
    approver: '',
    dateTime: '',
    description: '',
  });

  const rules = {
    name: [{ required: false, message: 'Please enter user name' }],
    url: [{ required: true, message: 'please enter url' }],
    owner: [{ required: true, message: 'Please select an owner' }],
    type: [{ required: true, message: 'Please choose the type' }],
    approver: [{ required: true, message: 'Please choose the approver' }],
    dateTime: [{ required: true, message: 'Please choose the dateTime', type: 'object' }],
    description: [{ required: true, message: 'Please enter url description' }],
  };

  const visible = ref(false);

  const onClose = () => {
    visible.value = false;
  };
  const options = ref<SelectTypes['options']>([
    { value: ' E+SPACE', label: ' E+SPACE' },
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

  const Nanmevalue = ref<string | undefined>('E+SPACE');
</script>
