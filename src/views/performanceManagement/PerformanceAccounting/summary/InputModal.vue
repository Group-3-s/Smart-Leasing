<template>
  <div class="p-5 border rounded-lg shadow-sm h-[680px]">
    <Row :gutter="16" class="items-center">
      <!-- 下拉菜单和搜索输入框 -->
      <Col :span="24" class="flex flex-col sm:flex-row sm:items-center">
        <Row :gutter="16" type="flex" justify="space-between">
          <Col :span="24">
            <Input
              placeholder="分佣人员信息"
              style="
                border: 1px solid rgb(21 136 252);
                border-radius: 20px;
                padding-left: 10px;
                width: 522px;
                height: 35px;
                margin-top: 25px;
              "
            />
            <Icon
              icon="material-symbols:search"
              style="position: absolute; right: 136px; top: 36px; color: rgb(21 136 252)"
            />
          </Col>
        </Row>
        <Row :gutter="16" type="flex" justify="space-between" class="mt-[20px]">
          <Col :span="24">
            <h2>角色</h2>
            <Select v-model="selectedRole" style="width: 100%">
              <SelectOption value="请选择角色">请选择角色</SelectOption>
              <SelectOption value="签约人">签约人</SelectOption>
              <SelectOption value="招商专员">招商专员</SelectOption>
              <SelectOption value="招商主管">招商主管</SelectOption>
              <SelectOption value="招商经理">招商经理</SelectOption>
              <SelectOption value="外部人员">外部人员</SelectOption>
            </Select>
          </Col>
        </Row>
      </Col>
    </Row>

    <Row :gutter="16" class="mt-4">
      <Col />
    </Row>
    <Row :gutter="16" type="flex" justify="space-around" class="mt-[20px]">
      <Col :span="24">
        <h2>租赁总提成</h2>
        <RadioGroup v-model="selectedRent1" :column="10">
          <RadioButton value="不限" style="margin-right: 30px; margin-top: 5px">不限</RadioButton>
          <RadioButton value="≤1000元" style="margin-left: 50px; margin-top: 5px"
            >≤1000元</RadioButton
          >
          <RadioButton value="1000-1500元" style="margin-left: 30px; margin-top: 5px"
            >1000-1500元</RadioButton
          >
          <RadioButton value="1500-2000元" style="margin-left: 30px; margin-top: 5px"
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
    <Row :gutter="16" type="flex" justify="space-around" class="mt-[20px]">
      <Col :span="24" :column="10">
        <h2>扣除金额</h2>
        <RadioGroup v-model="selectedRent2" :column="10">
          <RadioButton value="不限" style="margin-right: 30px; margin-top: 5px">不限</RadioButton>
          <RadioButton value="≤1000元" style="margin-left: 50px; margin-top: 5px"
            >≤1000元</RadioButton
          >
          <RadioButton value="1000-1500元" style="margin-left: 30px; margin-top: 5px"
            >1000-1500元</RadioButton
          >
          <RadioButton value="1500-2000元" style="margin-left: 30px; margin-top: 5px"
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

    <Row :gutter="16" type="flex" justify="space-around" class="mt-[20px]">
      <Col :span="24" :column="10">
        <h2>发放金额</h2>
        <RadioGroup v-model="selectedRent3" :column="10">
          <RadioButton value="不限" style="margin-right: 30px; margin-top: 5px">不限</RadioButton>
          <RadioButton value="≤1000元" style="margin-left: 50px; margin-top: 5px"
            >≤1000元</RadioButton
          >
          <RadioButton value="1000-1500元" style="margin-left: 30px; margin-top: 5px"
            >1000-1500元</RadioButton
          >
          <RadioButton value="1500-2000元" style="margin-left: 30px; margin-top: 5px"
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
  </div>
</template>
<script lang="ts" setup>
  import {
    Row,
    Col,
    Select,
    SelectOption,
    Input,
    // DatePicker,
    RadioGroup,
    RadioButton,
    // Button,
  } from 'ant-design-vue';
  import { ref } from 'vue';
  import { Icon } from '/@/components/Icon';

  const selectedRent1 = ref<string>('不限');
  const selectedRent2 = ref<string>('不限');
  const selectedRent3 = ref<string>('不限');

  const selectedRole = ref('签约人');
</script>
<style scoped></style>
