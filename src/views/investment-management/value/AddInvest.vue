<template>
  <div>
    <Row><b>基本信息</b></Row>
    <Form :label-col="{ span: 8 }" class="form">
      <Row>
        <Col :span="8">
          <FormItem
            :wrapper-col="{ span: 8, offset: 1 }"
            label="姓名(公司名称)"
            v-bind="validateInfos.name"
          >
            <Input v-model:value="modelRef.name" class="w" />
          </FormItem>

          <FormItem
            label="手机"
            v-bind="validateInfos.phone"
            :wrapper-col="{ span: 24, offset: 1 }"
          >
            <Input v-model:value="modelRef.phone" class="input" />
          </FormItem>
          <FormItem
            :wrapper-col="{ span: 24, offset: 1 }"
            label="客户来源"
            v-bind="validateInfos.options"
          >
            <space direction="vertical">
              <Select size="default" style="width: 200px" :options="modelRef.options" />
            </space>
          </FormItem>
          <FormItem
            :wrapper-col="{ span: 24, offset: 1 }"
            label="行业分类"
            v-bind="validateInfos.classify"
            :required="false"
          >
            <space direction="vertical">
              <Select size="default" style="width: 200px" :options="modelRef.classify" />
            </space>
          </FormItem>
          <FormItem
            label="联系人1_姓名"
            v-bind="validateInfos.name1"
            :wrapper-col="{ span: 24, offset: 1 }"
          >
            <Input v-model:value="modelRef.name1" class="input" />
          </FormItem>
        </Col>
        <Col :span="10">
          <FormItem
            label="性别"
            v-bind="validateInfos.sex"
            :required="false"
            :wrapper-col="{ span: 20, offset: 0 }"
          >
            <RadioGroup v-model:value="modelRef.sex">
              <Radio value="1" name="type">男</Radio>
              <Radio value="2" name="type">女</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="高新技术企业" v-bind="validateInfos.type">
            <RadioGroup v-model:value="modelRef.type">
              <Radio value="1" name="type">是</Radio>
              <Radio value="2" name="type">否</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="标签" v-bind="validateInfos.tag">
            <Select
              mode="multiple"
              style="width: 100%"
              :options="modelRef.tag"
              @change="handleChange"
            />
          </FormItem>
          <FormItem label="认知途径" v-bind="validateInfos.cognition">
            <Select
              mode="multiple"
              style="width: 100%"
              :options="modelRef.cognition"
              @change="handleChange"
            />
          </FormItem>
          <FormItem
            label="联系人_类型"
            v-bind="validateInfos.type1"
            :wrapper-col="{ span: 24, offset: 0 }"
          >
            <RadioGroup v-model:value="modelRef.type1">
              <RadioButton value="a">法人</RadioButton>
              <RadioButton style="margin-left: 10px" value="b">主要决策人</RadioButton>
            </RadioGroup>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <!-- <Col :span="8"> -->
        <FormItem
          label="现场办公地址"
          v-bind="validateInfos.address"
          :wrapper-col="{ span: 24, offset: 1 }"
          style="width: 500px"
        >
          <Textarea v-model:value="modelRef.address" :rows="2" showCount :maxlength="200" />
        </FormItem>
        <FormItem
          label="抗性or关注点"
          v-bind="validateInfos.address"
          :wrapper-col="{ span: 24, offset: 1 }"
        >
          <div style="width: 300px">
            <Select
              mode="multiple"
              style="width: 100%"
              :options="modelRef.cognition"
              @change="handleChange"
            />
          </div>
        </FormItem>
        <!-- </Col> -->
      </Row>
      <FormItem :wrapper-col="{ span: 14, offset: 4 }">
        <Button @click="resetFields">取消</Button>
        <Button style="margin-left: 10px" type="primary" @click.prevent="onSubmit">提交</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script lang="ts" setup>
  import {
    Form,
    FormItem,
    Input,
    Select,
    Button,
    RadioGroup,
    Radio,
    RadioButton,
    Space,
    Row,
    Col,
    Textarea,
  } from 'ant-design-vue';

  import { reactive, toRaw } from 'vue';
  const useForm = Form.useForm;
  const modelRef = reactive({
    name: '',
    phone: '',
    name1: '',
    type: [],
    sex: '',
    address: '',
    options: [
      { value: '来电' },
      { value: '来访' },
      { value: '合作伙伴' },
      { value: '代理公司' },
      { value: '中介公司' },
      { value: '老业主' },
      { value: '地产公司员工' },
      { value: '自由经纪人' },
    ],
    classify: [
      { value: '光电子信息' },
      { value: '激光' },
      { value: '人工智能' },
      { value: '生物医药' },
      { value: '医疗器械' },
      { value: '大健康' },
      { value: '智能制造' },
      { value: '节能环保' },
    ],
    tag: [{ value: '大客户' }],
    cognition: [
      { value: '机构推荐' },
      { value: '广告宣传' },
      { value: '网络来电' },
      { value: '他人推荐' },
      { value: '自主拓客' },
      { value: '自然来访' },
      { value: '新媒体推广' },
    ],
    type1: '',
  });
  const rulesRef = reactive({
    name: [
      {
        required: true,
        message: '姓名(公司姓名)',
      },
    ],
    phone: [
      {
        required: true,
        message: '请输入手机号',
      },
    ],
    options: [
      {
        required: true,
        message: '请选择客户来源',
        type: 'array',
      },
    ],
    type: [
      {
        required: false,
        message: 'Please select type',
      },
    ],
    classify: [
      {
        required: false,
        type: 'array',
      },
    ],
    name1: [
      {
        required: true,
        message: '请输入联系人名称',
      },
    ],
    sex: [
      {
        required: false,
      },
    ],
    tag: [
      {
        required: false,
      },
    ],
    cognition: [
      {
        required: true,
        message: '请选择用户认知途径',
        type: 'array',
      },
    ],
    type1: [
      {
        required: true,
        message: '请选择联系人类型',
      },
    ],
    address: [
      {
        required: false,
      },
    ],
  });
  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef);
  const onSubmit = () => {
    validate()
      .then(() => {
        console.log(toRaw(modelRef));
      })
      .catch((err) => {
        console.log('error', err);
      });
  };
</script>
<style scoped>
  .form {
    width: 100%;
  }
  .w {
    width: 240px;
  }
  .input {
    max-width: 200px;
  }
  .a {
    width: 240px;
  }
</style>
