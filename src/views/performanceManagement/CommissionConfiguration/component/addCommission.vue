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
  <Form :model="form" layout="vertical">
    <Row :gutter="16">
      <Col :span="12">
        <FormItem label="选择项目" name="name">
          <Select
            v-model:value="Nanmevalue"
            show-search
            style="width: 200px"
            :options="nameoptions"
            :filter-option="filterOption"
            @focus="handleFocus"
            @blur="handleBlur"
            @change:string="handleChange"
          />
        </FormItem>
      </Col>
    </Row>
    <h2>客户信息</h2>
    <Row>
      <Col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 12 }"
        :lg="{ span: 12 }"
        :xl="{ span: 12 }"
        :xxl="{ span: 12 }"
      >
        <FormItem label="租赁提成标准" name="standard">
          <Select
            v-model:value="standardvalue"
            mode="multiple"
            style="width: 100%"
            placeholder="select one country"
            option-label-prop="label"
            :options="standardoptions"
          >
            <template #option="{ value: val, label, icon }">
              <span role="img" :aria-label="val">{{ icon }}</span>
              &nbsp;&nbsp;{{ label }}
            </template>
          </Select>
        </FormItem>
      </Col>
      <Col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 12 }"
        :lg="{ span: 12 }"
        :xl="{ span: 12 }"
        :xxl="{ span: 12 }"
      >
        <FormItem label="行业内/行业外" name="industry">
          <Select
            v-model:value="industryvalue"
            show-search
            style="width: 200px"
            :options="industryoptions"
            :filter-option="filterindustry"
            @focus="industryFocus"
            @blur="industryBlur"
            @change:string="industryChange"
          />
        </FormItem>
      </Col>
    </Row>
    <h2>租赁信息</h2>
    <Row>
      <Col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 12 }"
        :lg="{ span: 12 }"
        :xl="{ span: 12 }"
        :xxl="{ span: 12 }"
      >
        <FormItem label="签约类型" name="type">
          <Select
            v-model:value="typevalue"
            show-search
            style="width: 200px"
            :options="typeoptions"
            :filter-option="filtertype"
            @focus="typeFocus"
            @blur="typeBlur"
            @change:string="typeChange"
          />
        </FormItem>
      </Col>
      <Col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 12 }"
        :lg="{ span: 12 }"
        :xl="{ span: 12 }"
        :xxl="{ span: 12 }"
      >
        <FormItem label="签约时长" name="time">
          <Select
            v-model:value="timevalue"
            show-search
            style="width: 200px"
            :options="timeoptions"
            :filter-option="filtertime"
            @focus="timeFocus"
            @blur="timeBlur"
            @change:string="timeChange"
          />
        </FormItem>
      </Col>
    </Row>
  </Form>
  <Form>
    <h2>分佣规则</h2>
    <Row>
      <Col
        :xs="{ span: 8 }"
        :sm="{ span: 8 }"
        :md="{ span: 4 }"
        :lg="{ span: 4 }"
        :xl="{ span: 4 }"
        :xxl="{ span: 4 }"
      >
        <FormItem label="分佣职务" name="position">
          <Select
            v-model:value="positionvalue"
            show-search
            style="width: 200px"
            :options="positionoptions"
            :filter-option="filterposition"
            @focus="positionFocus"
            @blur="positionBlur"
            @change:string="positionChange"
          />
        </FormItem>
      </Col>
      <Col
        :xs="{ span: 8 }"
        :sm="{ span: 8 }"
        :md="{ span: 4 }"
        :lg="{ span: 4 }"
        :xl="{ span: 4 }"
        :xxl="{ span: 4 }"
      >
        <FormItem label="分佣人员" name="people">
          <Select
            v-model:value="peoplevalue"
            show-search
            style="width: 200px"
            :options="peopleoptions"
            :filter-option="filterpeople"
            @focus="peopleFocus"
            @blur="peopleBlur"
            @change:string="peopleChange"
          />
        </FormItem>
      </Col>
      <Col
        :xs="{ span: 8 }"
        :sm="{ span: 8 }"
        :md="{ span: 4 }"
        :lg="{ span: 4 }"
        :xl="{ span: 4 }"
        :xxl="{ span: 4 }"
      >
        <FormItem label="签约时长" name="time">
          <Select
            v-model:value="timevalue"
            show-search
            style="width: 200px"
            :options="timeoptions"
            :filter-option="filtertime"
            @focus="timeFocus"
            @blur="timeBlur"
            @change:string="timeChange"
          />
        </FormItem>
      </Col>
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
  </div>
</template>
<script lang="ts" setup>
  import { Row, Col, Form, FormItem, Button, Select } from 'ant-design-vue';
  import { reactive, ref } from 'vue';
  import { SelectTypes } from 'ant-design-vue/es/select';
  const form = reactive({
    name: '',
    standard: '',
    industry: '',
    type: '',
    time: '',
    position: '',
    people: '',
  });

  // const rules = {
  //   name: [{ required: false }],
  //   standard: [{ required: true }],
  //   industry: [{ required: true }],
  //   type: [{ required: true }],

  // };

  const visible = ref(false);

  const onClose = () => {
    visible.value = false;
  };

  const Nanmevalue = ref<string | undefined>('E+SPACE');
  const nameoptions = ref<SelectTypes['options']>([
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

  // 租赁提成标准
  const standardvalue = ref<string | undefined>('自主招商');
  const standardoptions = ref<SelectTypes['options']>([
    { value: '自主招商', label: '自主招商' },
    { value: '全民营销', label: '全民营销' },
    { value: '产业合作部网络合作渠道', label: '产业合作部网络合作渠道' },
    { value: '产业合作部机构合作推荐', label: '产业合作部机构合作推荐' },
    { value: '产业合作部个人推荐', label: '产业合作部个人推荐' },
  ]);
  // 行业内/行业外:
  const industryvalue = ref<string | undefined>('请选择');
  const industryoptions = ref<SelectTypes['options']>([
    { value: '请选择', label: ' 请选择' },
    { value: '行业内', label: '行业内' },
    { value: '行业外', label: '行业外' },
  ]);
  const industryChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const industryBlur = () => {
    console.log('blur');
  };

  const industryFocus = () => {
    console.log('focus');
  };

  const filterindustry = (input: string, option: any) => {
    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };
  // 签约类型
  const typevalue = ref<string | undefined>('请选择');
  const typeoptions = ref<SelectTypes['options']>([
    { value: '请选择', label: ' 请选择' },
    { value: '新签', label: '新签' },
    { value: '续签', label: '续签' },
    { value: '其他', label: '其他' },
  ]);
  const typeChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const typeBlur = () => {
    console.log('blur');
  };

  const typeFocus = () => {
    console.log('focus');
  };

  const filtertype = (input: string, option: any) => {
    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };
  // 签约时长
  const timevalue = ref<string>('请选择');
  const timeoptions = ref<SelectTypes['options']>([
    { value: '请选择', label: ' 请选择' },
    { value: '<=1年', label: '<=1年' },
    { value: '1年<=X<=2年', label: '1年<=X<=2年' },
    { value: '2年<=X<=3年', label: '2年<=X<=3年' },
    { value: '>3年', label: '>3年' },
    { value: '自定义', label: '自定义' },
  ]);
  const timeChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const timeBlur = () => {
    console.log('blur');
  };

  const timeFocus = () => {
    console.log('focus');
  };

  const filtertime = (input: string, option: any) => {
    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };
  // 分佣职务
  const positionvalue = ref<string>('请选择');
  const positionoptions = ref<SelectTypes['options']>([
    { value: '请选择', label: ' 请选择' },
    { value: '招商专员', label: '<招商专员' },
    { value: '签约人', label: '签约人' },
    { value: '业务经理', label: '业务经理' },
    { value: '外部人员', label: '外部人员' },
  ]);
  const positionChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const positionBlur = () => {
    console.log('blur');
  };

  const positionFocus = () => {
    console.log('focus');
  };

  const filterposition = (input: string, option: any) => {
    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };
  //分佣人员
  const peoplevalue = ref<string | undefined>('请选择');
  const peopleoptions = ref<SelectTypes['options']>([
    { value: '请选择', label: ' 请选择' },
    { value: '招商专员', label: '<招商专员' },
    { value: '签约人', label: '签约人' },
    { value: '业务经理', label: '业务经理' },
    { value: '外部人员', label: '外部人员' },
  ]);
  const peopleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const peopleBlur = () => {
    console.log('blur');
  };

  const peopleFocus = () => {
    console.log('focus');
  };

  const filterpeople = (input: string, option: any) => {
    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };
</script>
