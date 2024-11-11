<template>
  <div class="px-[20px]">
    <Form :label-col="{ span: 24 }">
      <Row>
        <Col :span="24">
          <FormItem
            labelAlign="left"
            :colon="false"
            :wrapper-col="{ span: 24, offset: 0 }"
            label="房源信息"
            :required="true"
            message="请填写房源信息"
          >
            <Input
              placeholder="请输入房源编号/房源地址/项目名称/门牌号信息 检索房源"
              style="border-radius: 5px; height: 50px"
              v-model:value="modelRef.Information"
            />
          </FormItem>
        </Col>
        <Col :span="8">
          <FormItem
            labelAlign="left"
            :colon="false"
            :wrapper-col="{ span: 24, offset: 0 }"
            label="定金"
            :required="true"
            message="请输入定金"
          >
            <a-input
              placeholder="请输入定金"
              prefix="￥"
              suffix="元"
              style="border-radius: 5px; height: 50px"
              v-model:value="modelRef.price"
            />
          </FormItem>
        </Col>
        <Col :span="8" class="pt-[50px] pl-[50px]">
          <FormItem :wrapper-col="{ span: 24, offset: 0 }">
            <RadioGroup v-model:value="modelRef.money" button-style="solid">
              <RadioButton
                value="1"
                style="border-top-left-radius: 5px; border-bottom-left-radius: 5px"
                >已收款</RadioButton
              >
              <RadioButton
                value="2"
                style="border-top-right-radius: 5px; border-bottom-right-radius: 5px"
                >未收款</RadioButton
              >
            </RadioGroup>
          </FormItem>
        </Col>
        <Col :span="8">
          <FormItem
            labelAlign="left"
            :colon="false"
            :wrapper-col="{ span: 24, offset: 0 }"
            label="收款方式"
          >
            <Select
              v-model:value="modelRef.Collection"
              size="large"
              :options="options"
              style="border-radius: 5px"
            />
          </FormItem>
        </Col>
        <Col>
          <FormItem
            labelAlign="left"
            :colon="false"
            :wrapper-col="{ span: 24, offset: 0 }"
            label="实收时间"
            :required="true"
            message="请选择入住日期"
          >
            <DatePicker v-model:value="modelRef.data" style="border: 1px solid white" />
            <TimePicker v-model:value="modelRef.time" style="border: 1px solid white" />
          </FormItem>
        </Col>
        <Col>
          <b>预订人信息</b>
        </Col>
        <Col :span="8">
          <FormItem
            labelAlign="left"
            :colon="false"
            :wrapper-col="{ span: 24, offset: 0 }"
            label="姓名"
            :required="true"
            message="请输入姓名"
          >
            <Input
              placeholder="请输入姓名"
              style="border-radius: 5px; height: 50px"
              v-model:value="modelRef.name"
            />
          </FormItem>
        </Col>
        <Col :span="8" class="pt-[50px] pl-[50px]">
          <FormItem :wrapper-col="{ span: 24, offset: 0 }">
            <RadioGroup v-model:value="modelRef.sex" button-style="solid">
              <RadioButton
                value="1"
                style="border-top-left-radius: 5px; border-bottom-left-radius: 5px"
                >女士</RadioButton
              >
              <RadioButton
                value="2"
                style="border-top-right-radius: 5px; border-bottom-right-radius: 5px"
                >先生</RadioButton
              >
            </RadioGroup>
          </FormItem>
        </Col>
        <Col :span="8">
          <FormItem
            labelAlign="left"
            :colon="false"
            :wrapper-col="{ span: 24, offset: 0 }"
            label="电话"
            :required="true"
            message="请输入手机号码"
          >
            <Input
              placeholder="请输入手机号码"
              style="border-radius: 5px; height: 50px"
              v-model:value="modelRef.phone"
            />
          </FormItem>
        </Col>
        <Col span="24">
          <FormItem
            labelAlign="left"
            :colon="false"
            :wrapper-col="{ span: 24, offset: 0 }"
            label="身份信息"
          >
            <Input v-model:value="modelRef.identity" style="width: 500px" size="large">
              <template #addonBefore>
                <Select v-model:value="modelRef.identityselect" style="width: 120px">
                  <SelectOption value="1">身份证</SelectOption>
                  <SelectOption value="2">护照</SelectOption>
                  <SelectOption value="3">港澳通行证</SelectOption>
                  <SelectOption value="4">台湾同胞证</SelectOption>
                  <SelectOption value="5">统一社会信用代码</SelectOption>
                  <SelectOption value="6">其他</SelectOption>
                </Select>
              </template>
            </Input>
          </FormItem>
        </Col>
        <Col span="24">
          <FormItem
            labelAlign="left"
            :colon="false"
            :wrapper-col="{ span: 24, offset: 0 }"
            label="证件信息（附件支持格式：jpg、png、jpeg）"
          >
            <Upload
              v-model:file-list="fileList"
              name="avatar"
              list-type="picture-card"
              class="avatar-uploader"
              :show-upload-list="false"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              :before-upload="beforeUpload"
              @change="handleChange"
            >
              <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
              <div v-else>
                <loading-outlined v-if="loading" />
                <plus-outlined v-else />
                <div class="ant-upload-text">Upload</div>
              </div>
            </Upload>
            <Upload
              v-model:file-list="fileList"
              name="avatar"
              list-type="picture-card"
              class="avatar-uploader"
              :show-upload-list="false"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              :before-upload="beforeUpload"
              @change="handleChange"
            >
              <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
              <div v-else>
                <loading-outlined v-if="loading" />
                <plus-outlined v-else />
                <div class="ant-upload-text">Upload</div>
              </div>
            </Upload>
            <Upload
              v-model:file-list="fileList"
              name="avatar"
              list-type="picture-card"
              class="avatar-uploader"
              :show-upload-list="false"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              :before-upload="beforeUpload"
              @change="handleChange"
            >
              <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
              <div v-else>
                <loading-outlined v-if="loading" />
                <plus-outlined v-else />
                <div class="ant-upload-text">Upload</div>
              </div>
            </Upload>
            <Upload
              v-model:file-list="fileList"
              name="avatar"
              list-type="picture-card"
              class="avatar-uploader"
              :show-upload-list="false"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              :before-upload="beforeUpload"
              @change="handleChange"
            >
              <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
              <div v-else>
                <loading-outlined v-if="loading" />
                <plus-outlined v-else />
                <div class="ant-upload-text">Upload</div>
              </div>
            </Upload>
          </FormItem>
        </Col>
        <Col span="24"> 预定信息 </Col>
        <Col span="8">
          <FormItem
            labelAlign="left"
            :colon="false"
            :wrapper-col="{ span: 24, offset: 0 }"
            label="预定类型"
          >
            <Select v-model:value="modelRef.type" size="large" style="border-radius: 5px" />
          </FormItem>
        </Col>
        <Col span="8" class="pl-[40px]">
          <FormItem
            labelAlign="left"
            :colon="false"
            :wrapper-col="{ span: 24, offset: 0 }"
            label="预定入住时间"
          >
            <DatePicker v-model:value="modelRef.time" />
          </FormItem>
        </Col>
        <Col span="8">
          <FormItem
            labelAlign="left"
            :colon="false"
            :wrapper-col="{ span: 24, offset: 0 }"
            label="预定入住时长"
          >
            <DatePicker v-model:value="modelRef.day1" />
          </FormItem>
        </Col>
        <Col span="24">
          <FormItem
            labelAlign="left"
            :colon="false"
            :wrapper-col="{ span: 24, offset: 0 }"
            label="备注"
          >
            <Textarea v-model:value="modelRef.Textarea" showCount :maxlength="100" />
          </FormItem>
        </Col>
        <Col span="24">
          <FormItem
            labelAlign="left"
            :colon="false"
            :wrapper-col="{ span: 24, offset: 0 }"
            label="预定凭证（附件支持格式：jpg、png、jpeg）"
          >
            <Upload
              v-model:file-list="fileList"
              name="avatar"
              list-type="picture-card"
              class="avatar-uploader"
              :show-upload-list="false"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              :before-upload="beforeUpload"
              @change="handleChange"
            >
              <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
              <div v-else>
                <loading-outlined v-if="loading" />
                <plus-outlined v-else />
                <div class="ant-upload-text">Upload</div>
              </div>
            </Upload>
          </FormItem>
        </Col>
        <Col span="6">
          <FormItem
            labelAlign="left"
            :colon="false"
            :wrapper-col="{ span: 24, offset: 0 }"
            label="所属门店(部门)/维护人"
            :required="true"
            message="请选择门店(部门)/维护人"
          >
            <Select
              v-model:value="modelRef.department"
              size="large"
              style="border-bottom: 1px solid #d7d7d7"
              :bordered="false"
            />
          </FormItem>
        </Col>
        <Col span="6">
          <FormItem
            labelAlign="left"
            :colon="false"
            :wrapper-col="{ span: 24, offset: 0 }"
            label="维护人"
          >
            <Select
              v-model:value="modelRef.maintenance"
              size="large"
              style="border-bottom: 1px solid #d7d7d7"
              :bordered="false"
            /> </FormItem
        ></Col>
      </Row>
    </Form>
  </div>
</template>

<script lang="ts" setup>
  import {
    Form,
    FormItem,
    Input,
    Row,
    Col,
    RadioGroup,
    RadioButton,
    Select,
    DatePicker,
    TimePicker,
    SelectOption,
    Upload,
    message,
    Textarea,
  } from 'ant-design-vue';
  import { reactive, ref } from 'vue';
  import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';

  const options = [
    { value: '平台钱包' },
    { value: '支付宝' },
    { value: '微信' },
    { value: '现金' },
    { value: '转账' },
    { value: 'pos机刷卡' },
    { value: '云闪付' },
    { value: '结转' },
    { value: '联通pos机' },
  ];

  const modelRef = reactive({
    Information: '',
    price: [],
    money: '',
    Collection: ['平台钱包'],
    data: '',
    time: '',
    name: '',
    sex: [],
    phone: '',
    identityselect: ['身份证'],
    identity: '',
    type: '',
    day1: '',
    Textarea: '',
    department: ['E+SPACE'],
    maintenance: ['王子郭'],
    checked: '',
    Select: ['没有可选模版'],
  });

  interface FileItem {
    uid: string;
    name?: string;
    status?: string;
    response?: string;
    url?: string;
    type?: string;
    size: number;
    originFileObj: any;
  }

  interface FileInfo {
    file: FileItem;
    fileList: FileItem[];
  }

  function getBase64(img: Blob, callback: (base64Url: string) => void) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  }

  const fileList = ref([]);
  const loading = ref<boolean>(false);
  const imageUrl = ref<string>('');

  const handleChange = (info: FileInfo) => {
    if (info.file.status === 'uploading') {
      loading.value = true;
      console.log(loading.value);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (base64Url: string) => {
        imageUrl.value = base64Url;
        loading.value = false;
      });
    }
    if (info.file.status === 'error') {
      loading.value = false;
      message.error('上传失败');
    }
  };

  const beforeUpload = (file: FileItem) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };
</script>
<style scoped>
  .avatar-uploader {
    width: 135px;
  }
</style>
