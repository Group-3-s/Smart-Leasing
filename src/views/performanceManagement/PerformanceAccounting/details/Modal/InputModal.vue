<template>
  <div class="p-5 border rounded-lg shadow-sm h-[480px]">
    <Row :gutter="16" class="items-center">
      <!-- 下拉菜单和搜索输入框 -->
      <Col :span="24" class="flex flex-col sm:flex-row sm:items-center">
        <div class="flex items-center border rounded-lg overflow-hidden">
          <!-- 下拉选择 -->
          <Select v-model:value="selectedOption" style="width: 150px" class="mb-2 sm:mb-0 sm:mr-2">
            <SelectOption value="综合检索">综合检索</SelectOption>
            <SelectOption value="企业名称">企业名称</SelectOption>
            <SelectOption value="招商人员">招商人员</SelectOption>
            <SelectOption value="房间号">房间号</SelectOption>
          </Select>
          <!-- 搜索输入框 -->
          <Input
            v-model:value="searchText"
            placeholder="请输入企业名称/招商人员姓名"
            enter-button
            class="flex-grow"
            :style="{ border: 'none', outline: 'none' }"
          />
        </div>
      </Col>
    </Row>

    <!-- 日期选择器 -->
    <Row :gutter="16" class="mt-4">
      <Col>
        <div>签约日期：</div>
        <div class="flex items-center space-x-2">
          <DatePicker v-model:value="mountvalue" />
          <span class="mx-2">至</span>
          <DatePicker v-model:value="mountvalue1" />
        </div>
      </Col>
    </Row>
    <Row :gutter="16" type="flex" justify="space-around">
      <Col :span="24">
        <h2>首月租金</h2>
        <RadioGroup v-model="selectedRent" :column="10">
          <RadioButton value="不限" style="margin-right: 30px; margin-top: 5px">不限</RadioButton>
          <RadioButton value="≤1000元" style="margin-left: 50px; margin-top: 5px"
            >≤1000元</RadioButton
          >
          <RadioButton value="1000-1500元" style="margin-left: 30px; margin-top: 5px"
            >1000-1500元</RadioButton
          >
          <RadioButton value="1500-2000元" style="margin-right: 30px; margin-top: 5px"
            >1500-2000元</RadioButton
          >
          <RadioButton value="2000-3000元" style="margin-right: 30px; margin-top: 5px"
            >2000-3000元</RadioButton
          >
          <RadioButton value="3000-5000元" style="margin-right: 30px; margin-top: 5px"
            >3000-5000元</RadioButton
          >
          <RadioButton value="5000-8000元" style="margin-right: 30px; margin-top: 5px"
            >5000-8000元</RadioButton
          >
          <RadioButton value="8000元" style="margin-right: 30px; margin-top: 5px"
            >8000元</RadioButton
          >
        </RadioGroup>
      </Col>
    </Row>
    <Row :gutter="16" type="flex" justify="space-around">
      <Col :span="24" :column="10">
        <h2>签约面积</h2>
        <RadioGroup v-model="selectedArea">
          <RadioButton value="不限" style="margin-top: 5px">不限</RadioButton>
          <RadioButton value="≤10㎡" style="margin-left: 30px; margin-top: 5px">≤10㎡</RadioButton>
          <RadioButton value="10-30㎡" style="margin-left: 30px; margin-top: 5px"
            >10-30㎡</RadioButton
          >
          <RadioButton value="30-50㎡" style="margin-left: 30px; margin-top: 5px"
            >30-50㎡</RadioButton
          >
          <RadioButton value="50-70㎡" style="margin-right: 30px; margin-top: 5px"
            >50-70㎡</RadioButton
          >
          <RadioButton value="70-90㎡" style="margin-right: 30px; margin-top: 5px"
            >70-90㎡</RadioButton
          >
          <RadioButton value="90-110㎡" style="margin-right: 30px; margin-top: 5px"
            >90-110㎡</RadioButton
          >
          <RadioButton value="110㎡" style="margin-right: 30px; margin-top: 5px">110㎡</RadioButton>
        </RadioGroup>
      </Col>
    </Row>
  </div>
</template>
<script lang="ts" setup>
  import {
    Row,
    Col,
    Select,
    SelectOption,
    Input,
    DatePicker,
    RadioGroup,
    RadioButton,
    // Button,
  } from 'ant-design-vue';
  import { ref } from 'vue';
  import { Moment } from 'moment';
  const selectedOption = ref<string>('招商人员');
  const searchText = ref<string>('');

  // 日期
  const mountvalue = ref<Moment>();
  const mountvalue1 = ref<Moment>();
  // 首月租金

  // function resetFilters() {
  //   selectedRent.value = '不限';
  //   selectedArea.value = '不限';
  // }

  const selectedRent = ref<string>('不限');
  const selectedArea = ref<string>('不限');
</script>
<style scoped></style>
