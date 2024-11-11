<template>
  <div>
    <div class="flex mt-[15px] ml-[15px]">
      <div
        class="bg-[blue] w-[50px] h-[50px] rounded-[25px] text-[white] text-center leading-[50px]"
        >郑鹏</div
      >
      <div class="mt-[15px] ml-[7px]"
        ><span>郑鹏</span><span>账号状态：</span><span class="text-[#83e983]">正常</span></div
      >
    </div>
    <Form
      ref="formRef"
      :rules="rules"
      :model="formState"
      style="padding: 25px"
      labelAlign="left"
      :colon="false"
    >
      <Row :gutter="[20, 0]">
        <Col :span="12">
          <FormItem label="员工编号" name="id">
            <Input
              v-model:value="formState.id"
              style="width: 280px; height: 40px; border: 1px solid gray"
              placeholder="请输入员工编号"
            />
          </FormItem>
        </Col>
        <Col :span="12">
          <FormItem label="员工类型" name="region">
            <Select v-model:value="formState.region" size="large" style="border: 1px solid gray">
              <SelectOption value="yuangong">员工</SelectOption>
              <SelectOption value="gongyingshang">供应商</SelectOption>
              <SelectOption value="jianzhi">兼职人员</SelectOption>
            </Select>
          </FormItem>
        </Col>
        <Col :span="12">
          <FormItem label="员工姓名" name="name">
            <Input
              v-model:value="formState.name"
              style="height: 40px; border: 1px solid gray"
              placeholder="请输入员工姓名"
            />
          </FormItem>
        </Col>
        <Col :span="12">
          <FormItem label="员工电话(登录手机号)" name="phone">
            <Input
              v-model:value="formState.phone"
              style="height: 40px; border: 1px solid gray"
              placeholder="请输入手机号"
            />
          </FormItem>
        </Col>
        <Col :span="19">
          <FormItem label="直属部门" name="department">
            <Input
              v-model:value="formState.department"
              style="height: 40px; border: 1px solid gray"
              placeholder="请输入部门"
            />
          </FormItem>
        </Col>
        <Col :span="5">
          <FormItem name="type">
            <CheckboxGroup v-model:value="formState.type" style="margin-top: 40px">
              <Checkbox value="1" name="type">本部门领导</Checkbox>
            </CheckboxGroup>
          </FormItem>
        </Col>
        <Col :span="24">
          <FormItem label="角色" name="role">
            <Select v-model:value="formState.role" size="large" style="border: 1px solid gray">
              <SelectOption value="1">物业岗位</SelectOption>
              <SelectOption value="2">公寓管家</SelectOption>
              <SelectOption value="3">财务</SelectOption>
              <SelectOption value="4">管理员</SelectOption>
              <SelectOption value="5">综合审批</SelectOption>
              <SelectOption value="6">产品管理员</SelectOption>
              <SelectOption value="7">总经理</SelectOption>
              <SelectOption value="8">集团运营管理部</SelectOption>
            </Select>
          </FormItem>
        </Col>
        <Col :span="18">
          <FormItem label="员工身份证号" name="idcard">
            <Input
              v-model:value="formState.idcard"
              style="height: 40px; border: 1px solid gray"
              placeholder="身份证号"
            />
          </FormItem>
        </Col>
        <Col :span="6">
          <FormItem name="resource">
            <RadioGroup v-model:value="formState.resource" style="margin-top: 40px">
              <Radio value="1">男</Radio>
              <Radio value="2">女</Radio>
            </RadioGroup>
          </FormItem>
        </Col>
        <Col :span="12">
          <FormItem label="邮箱" name="email">
            <Input
              v-model:value="formState.email"
              style="height: 40px; border: 1px solid gray"
              placeholder="邮箱"
            />
          </FormItem>
        </Col>
        <Col :span="12">
          <FormItem label="入职日期" name="date1">
            <DatePicker
              v-model:value="formState.date1"
              type="date"
              placeholder="选择日期"
              style="width: 100%; border: 1px solid gray"
              size="large"
              suffixIcon=""
          /></FormItem>
        </Col>
        <Col
          ><FormItem :wrapper-col="{ span: 14, offset: 16 }">
            <Button @click="resetForm">取消</Button>
            <Button style="margin-left: 40px" type="primary" @click="onSubmit">保存</Button>
          </FormItem></Col
        >
      </Row>
    </Form>
  </div>
</template>
<script lang="ts" setup>
  import {
    Form,
    FormItem,
    Input,
    Select,
    SelectOption,
    Row,
    Col,
    CheckboxGroup,
    Checkbox,
    RadioGroup,
    Radio,
    DatePicker,
    Button,
  } from 'ant-design-vue';
  import { reactive, ref, UnwrapRef, toRaw } from 'vue';
  import { Moment } from 'moment';
  import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';

  interface FormState {
    id: string;
    region: any;
    name: string;
    phone: string;
    department: string;
    type: string[];
    role: any;
    idcard: string;
    resource: string;
    email: string;
    date1: Moment | undefined;
  }
  const formRef = ref();
  const formState: UnwrapRef<FormState> = reactive({
    id: '',
    region: ['员工'],
    name: '',
    phone: '',
    department: '',
    type: [],
    role: ['选择所属角色'],
    idcard: '',
    resource: '',
    email: '',
    date1: undefined,
  });
  const rules = {
    name: [
      { required: true, message: '请填写员工姓名' },
      { min: 2, message: '长度最少为2' },
    ],
    phone: [{ required: true, message: '请填写手机号' }],
    department: [{ required: true, message: '请填写部门' }],
    role: [{ required: true, message: '请选择角色' }],
  };
  const onSubmit = () => {
    formRef.value
      .validate()
      .then(() => {
        console.log('values', formState, toRaw(formState));
      })
      .catch((error: ValidateErrorEntity<FormState>) => {
        console.log('error', error);
      });
  };
  const resetForm = () => {
    formRef.value.resetFields();
  };
</script>
