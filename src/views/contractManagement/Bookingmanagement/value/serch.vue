<template>
  <Form ref="formRef" :model="formState" :rules="rules">
    <Row :gutter="[10, 10]">
      <Col span="24">
        <FormItem name="serch">
          <Input
            placeholder="房源编号/房源地址/房间号/项目名称/预订人姓名/电话/编号"
            style="border-radius: 15px"
          >
            <template #addonBefore>
              <Select v-model:value="formState.value" class="w-[120px]">
                <SelectOption value="1">综合检索</SelectOption>
                <SelectOption value="2">房源编号</SelectOption>
                <SelectOption value="3">房源地址</SelectOption>
                <SelectOption value="4">门牌号</SelectOption>
                <SelectOption value="5">项目名称</SelectOption>
                <SelectOption value="6">合同编号</SelectOption>
                <SelectOption value="7">租客姓名</SelectOption>
                <SelectOption value="8">租客电话</SelectOption>
              </Select>
            </template>
          </Input>
        </FormItem>
      </Col>
      <Col span="24">
        <FormItem name="selectpeople">
          <div> 预定维护人(所属部门或人员) </div>
          <Select
            placeholder="请选择预定维护人或维护人所属部门 "
            style="border-bottom: 1px solid #d9d9d9; width: 100%"
            :bordered="false"
          />
        </FormItem>
      </Col>
      <Col span="24">
        <FormItem name="citi">
          <div> 城市/区域 </div>
          <Select
            placeholder="请选择城市/区域 "
            style="border-bottom: 1px solid #d9d9d9; width: 100%"
            :bordered="false"
          />
        </FormItem>
      </Col>
      <Col span="24">
        <FormItem name="type">
          <div> 预选类型 </div>
          <Select
            placeholder="请选择预选类型 "
            style="border-bottom: 1px solid #d9d9d9; width: 100%"
            :bordered="false"
          />
        </FormItem>
      </Col>
      <Col>
        <FormItem name="qianzi">
          <div> 签字状态 </div>
          <RadioGroup
            v-model:value="formState.value1"
            button-style="solid"
            style="width: 250px; display: flex; justify-content: space-around"
          >
            <RadioButton value="0">不限</RadioButton>
            <RadioButton value="1">待签字</RadioButton>
            <RadioButton value="2">已签字</RadioButton>
          </RadioGroup>
        </FormItem>
      </Col>
      <Col>
        <FormItem name="chanpin">
          <div> 产品类型 </div>
          <RadioGroup
            v-model:value="formState.value2"
            button-style="solid"
            style="width: 300px; display: flex; justify-content: space-around"
          >
            <RadioButton value="0">不限</RadioButton>
            <RadioButton value="1">公寓</RadioButton>
            <RadioButton value="2">办公楼</RadioButton>
            <RadioButton value="3">厂房</RadioButton>
          </RadioGroup>
        </FormItem>
      </Col>
      <Col>
        <FormItem name="day">
          <div> 最晚签约日 </div>
          <RadioGroup
            v-model:value="formState.value3"
            button-style="solid"
            style="width: 400px; display: flex; justify-content: space-around"
          >
            <RadioButton value="0">不限</RadioButton>
            <RadioButton value="1">近3天</RadioButton>
            <RadioButton value="2">近7天</RadioButton>
            <RadioButton value="3">本月内</RadioButton>
            <RadioButton value="4">自定义</RadioButton>
          </RadioGroup>
        </FormItem>
      </Col>
      <Col>
        <FormItem name="time">
          <div> 预计入住时长 </div>
          <RadioGroup
            v-model:value="formState.value4"
            button-style="solid"
            style="width: 500px; display: flex; justify-content: space-around"
          >
            <RadioButton value="0">不限</RadioButton>
            <RadioButton value="1">1个月内</RadioButton>
            <RadioButton value="2">3个月内</RadioButton>
            <RadioButton value="3">6个月内</RadioButton>
            <RadioButton value="4">1年内</RadioButton>
            <RadioButton value="5">自定义</RadioButton>
          </RadioGroup>
        </FormItem>
      </Col>
      <Col>
        <FormItem name="submit">
          <div> 提交时间 </div>
          <RadioGroup
            v-model:value="formState.value5"
            button-style="solid"
            style="width: 400px; display: flex; justify-content: space-around"
          >
            <RadioButton value="0">不限</RadioButton>
            <RadioButton value="1">今天</RadioButton>
            <RadioButton value="2">本周</RadioButton>
            <RadioButton value="3">本月</RadioButton>
            <RadioButton value="4">自定义</RadioButton>
          </RadioGroup>
        </FormItem>
      </Col>
      <Col>
        <FormItem class="flex flex-1 justify-center">
          <div @click="resetForm" class="inline-block"
            ><Icon
              icon="solar:refresh-bold"
              width="5px"
              height="5px"
              style="color: #c7c7c7"
            />重置筛选条件</div
          >
          <Button class="ml-[80%]" type="primary">确认</Button>
        </FormItem>
      </Col>
    </Row>
  </Form>
</template>

<script lang="ts" setup>
  import {
    Input,
    Select,
    SelectOption,
    Row,
    Col,
    RadioGroup,
    RadioButton,
    Form,
    FormItem,
    Button,
  } from 'ant-design-vue';
  import { ref, reactive } from 'vue';
  import Icon from '/@/components/Icon';

  const formRef = ref();
  const formState = reactive({
    value: '综合检索',
    value1: '0',
    value2: '0',
    value3: '0',
    value4: '0',
    value5: '0',
  });
  const rules = {
    serch: [{ required: false }],
    selectpeople: [{ required: false }],
    citi: [{ required: false }],
    type: [{ required: false }],
    qianzi: [{ required: false }],
    chanpin: [{ required: false }],
    day: [{ required: false }],
    time: [{ required: false }],
    submit: [{ required: false }],
  };

  const resetForm = () => {
    formRef.value.resetFields();
    console.log(1);
  };
</script>
