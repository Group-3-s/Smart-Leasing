<template>
  <div>
    <PageWrapper>
      <div class="h-[1216px] rounded-[1vw] bg-[#ffffff]">
        <BasicTitle helpMessage="用户管理" class="pt-[30px] ml-[15px]"
          ><span
            class="inline-block w-[5px] h-[1vw] bg-[#1989fa] rounded-[2.5px] mt-[0.3vw] mr-[1vw]"
          ></span
          >用户管理</BasicTitle
        >
        <Row :gutter="[40, 20]" style="margin: 15px">
          <Col
            :span="5"
            style="border: 15px solid rgb(245, 245, 245); border-radius: 5px; height: 1094px"
          >
            <Card title="角色岗位" style="" :bordered="false">
              <template #extra>
                <PlusOutlined @click="showModal" />
              </template>
              <Menu style="border: 0" mode="vertical" @click="handleClick">
                <MenuItem key="1">
                  <template #icon>
                    <UserOutlined />
                  </template>
                  总经理
                </MenuItem>
                <MenuItem key="2">
                  <template #icon>
                    <UserOutlined />
                  </template>
                  产品经理
                </MenuItem>
              </Menu>
            </Card>
          </Col>
          <Col :span="19">
            <Tabs v-model:activeKey="activeKey">
              <TabPane key="1" tab="成员管理">
                <Table :dataSource="dataSource" :columns="columns">
                  <template #departmentalrole="{ record }">
                    <Button>{{ Departmentalrole[record.departmentalrole] }}</Button>
                  </template>
                </Table>
              </TabPane>
              <TabPane key="2" tab="资源管理"><resource /></TabPane>
              <TabPane key="3" tab="数据权限">33</TabPane>
              <template #tabBarExtraContent>
                <Input placeholder="客户姓名/客户电话" style="width: 400px; height: 30px" />
              </template>
            </Tabs>
          </Col>
        </Row>
      </div>
    </PageWrapper>
    <Modal
      v-model:visible="visible"
      @ok="handleOk"
      :footer="null"
      :width="800"
      :body-style="{ height: '450px' }"
    >
      <template #title
        ><div class="text-[#1989fa] font-normal text-[28px] m-[5px]">添加角色</div></template
      >
      <Form>
        <FormItem label="角色名称" v-bind="validateInfos.name" labelAlign="left">
          <Input
            v-model:value="modelRef.name"
            style="
              border: 0;
              border-bottom: 1px solid gray;
              height: 40px;
              margin: 25px;
              width: 750px;
            "
            placeholder="输入角色名称"
          />
        </FormItem>
        <FormItem label="角色描述" labelAlign="left">
          <Textarea
            v-model:value="modelRef.sub.name"
            placeholder="输入角色描述"
            :maxlength="500"
            style="
              border: 0;
              border-bottom: 1px solid gray;
              height: 40px;
              margin: 25px;
              width: 750px;
            "
          />
        </FormItem>
        <FormItem :wrapper-col="{ span: 18, offset: 14 }">
          <Button @click="reset" style="width: 100px; height: 50px">取消</Button>
          <Button
            type="primary"
            @click.prevent="onSubmit"
            style="margin-left: 15px; width: 100px; height: 50px"
            >保存</Button
          >
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive, toRaw } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicTitle } from '/@/components/Basic/index';
  import {
    Row,
    Col,
    Card,
    Menu,
    MenuItem,
    Tabs,
    TabPane,
    Table,
    Input,
    Modal,
    Form,
    FormItem,
    Textarea,
    Button,
  } from 'ant-design-vue';
  import { PlusOutlined, UserOutlined } from '@ant-design/icons-vue';
  import config from './config';
  import { userListResult } from '/@/api/businessManagement/model/businessManagement';
  import { getInvestmentManagement } from '/@/api/businessManagement/index';
  import { Departmentalrole } from '/@/api/businessManagement/model/businessManagement';
  import resource from './resource.vue';

  const columns = [...config.columns];
  const dataSource = ref<userListResult[]>([]);
  getInvestmentManagement().then((res) => {
    console.log(res);
    dataSource.value = [...res.result];
  });
  interface MenuInfo {
    key: string;
    keyPath: string[];
    domEvent: MouseEvent;
  }
  const handleClick = (e: MenuInfo) => {
    console.log('click ', e);
  };
  const activeKey = ref('1');

  //添加角色打开弹窗
  const visible = ref<boolean>(false);
  const showModal = () => {
    visible.value = true;
  };
  const handleOk = (e: MouseEvent) => {
    console.log(e);
    visible.value = false;
  };

  const useForm = Form.useForm;
  const modelRef = reactive({
    name: '',
    sub: {
      name: '',
    },
  });
  const { resetFields, validate, validateInfos } = useForm(
    modelRef,
    reactive({
      name: [
        {
          required: true,
          message: '请输入角色名称',
        },
      ],
      'sub.name': [
        {
          required: true,
          message: 'Please input sub name',
        },
      ],
    }),
  );
  const onSubmit = () => {
    validate()
      .then((res) => {
        console.log(res, toRaw(modelRef));
      })
      .catch((err) => {
        console.log('error', err);
      });
  };
  const reset = () => {
    resetFields();
  };
</script>
