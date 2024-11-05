<template>
  <Row :gutter="[10, 10]">
    <Col span="24">
      <Input
        placeholder="房源编号/房源地址/房间号/项目名称/预订人姓名/电话/编号"
        style="border-radius: 15px"
      >
        <template #addonBefore>
          <Select v-model:value="value" class="w-[120px]">
            <SelectOption value="1">综合检索</SelectOption>
            <SelectOption value="2">2</SelectOption>
          </Select>
        </template>
      </Input>
    </Col>
    <Col span="24">
      <div> 预定维护人(所属部门或人员) </div>
      <Select
        placeholder="请选择预定维护人或维护人所属部门 "
        style="border-bottom: 1px solid #d9d9d9; width: 300px"
        :bordered="false"
      />
    </Col>
    <Col span="24">
      <div> 城市/区域 </div>
      <Select
        placeholder="请选择城市/区域 "
        style="border-bottom: 1px solid #d9d9d9; width: 300px"
        :bordered="false"
      />
    </Col>
    <Col span="24">
      <div> 预选类型 </div>
      <Select
        placeholder="请选择预选类型 "
        style="border-bottom: 1px solid #d9d9d9; width: 300px"
        :bordered="false"
      />
    </Col>
    <Col>
      <div> 签字状态 </div>
      <RadioGroup
        v-model:value="value1"
        button-style="solid"
        style="width: 250px; display: flex; justify-content: space-around"
      >
        <RadioButton value="0">不限</RadioButton>
        <RadioButton value="1">待签字</RadioButton>
        <RadioButton value="2">已签字</RadioButton>
      </RadioGroup>
    </Col>
    <Col>
      <div> 产品类型 </div>
      <RadioGroup
        v-model:value="value2"
        button-style="solid"
        style="width: 300px; display: flex; justify-content: space-around"
      >
        <RadioButton value="0">不限</RadioButton>
        <RadioButton value="1">公寓</RadioButton>
        <RadioButton value="2">办公楼</RadioButton>
        <RadioButton value="3">厂房</RadioButton>
      </RadioGroup>
    </Col>
    <Col>
      <div> 最晚签约日 </div>
      <RadioGroup
        v-model:value="value3"
        button-style="solid"
        style="width: 400px; display: flex; justify-content: space-around"
      >
        <RadioButton value="0">不限</RadioButton>
        <RadioButton value="1">近3天</RadioButton>
        <RadioButton value="2">近7天</RadioButton>
        <RadioButton value="3">本月内</RadioButton>
        <RadioButton value="4">自定义</RadioButton>
      </RadioGroup>
    </Col>
    <Col>
      <div> 预计入住时长 </div>
      <RadioGroup
        v-model:value="value4"
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
    </Col>
    <Col>
      <div> 提交时间 </div>
      <RadioGroup
        v-model:value="value5"
        button-style="solid"
        style="width: 400px; display: flex; justify-content: space-around"
      >
        <RadioButton value="0">不限</RadioButton>
        <RadioButton value="1">今天</RadioButton>
        <RadioButton value="2">本周</RadioButton>
        <RadioButton value="3">本月</RadioButton>
        <RadioButton value="4">自定义</RadioButton>
      </RadioGroup>
    </Col>
  </Row>
</template>

<script lang="ts" setup>
  import { Input, Select, SelectOption, Row, Col, RadioGroup, RadioButton } from 'ant-design-vue';
  import { ref } from 'vue';
  const value = ref<string>('综合检索');
  const value1 = ref<string>('0');
  const value2 = ref<string>('0');
  const value3 = ref<string>('0');
  const value4 = ref<string>('0');
  const value5 = ref<string>('0');
</script>
