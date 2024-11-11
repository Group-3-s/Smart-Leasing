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
            <Card title="组织架构" style="" :bordered="false">
              <template #extra><PlusOutlined @click="showModal" /></template>
              <div>
                <Menu style="border: 0" mode="inline" @openChange="onOpenChange">
                  <SubMenu key="sub1">
                    <template #icon>
                      <HomeOutlined />
                    </template>
                    <template #title>E+SPACE</template>
                    <SubMenu key="sub2" title="科技园">
                      <SubMenu key="sub3" title="(门店)软件新城公寓(4人)">
                        <MenuItem key="1">运用部</MenuItem>
                        <MenuItem key="2">综合部</MenuItem>
                        <MenuItem key="3">财务部</MenuItem>
                      </SubMenu>
                    </SubMenu>
                    <MenuItem key="4">招商策划</MenuItem>
                    <MenuItem key="5">运营管理</MenuItem>
                  </SubMenu>
                  <SubMenu key="sub4">
                    <template #icon><UserOutlined /></template>
                    <template #title>未分配员工</template>
                    <MenuItem key="6">项目一</MenuItem>
                    <MenuItem key="7">项目二</MenuItem>
                    <MenuItem key="8">项目三</MenuItem>
                  </SubMenu>
                  <SubMenu key="sub5">
                    <template #icon>
                      <BellOutlined />
                    </template>
                    <template #title>申请加入员工</template>
                    <MenuItem key="9">项目一</MenuItem>
                    <MenuItem key="10">项目二</MenuItem>
                    <MenuItem key="11">项目三</MenuItem>
                  </SubMenu>
                </Menu>
              </div>
            </Card>
          </Col>
          <Col :span="19">
            <div class="flex justify-between h-[32px]">
              <div class="font-semibold text-[18px] leading-[32px]">成员管理</div>
              <div><Button type="primary" @click="Addemploy">添加员工</Button></div>
            </div>
            <div
              class="h-[36px] rounded-[5px] leading-[36px] pl-[20px] font-bold mt-[10px]"
              style="background-color: rgb(245, 245, 245)"
              >E+SPACE</div
            >
            <Tabs v-model:activeKey="activeKey">
              <TabPane key="1" tab="正常(20)">
                <Table :dataSource="dataSource" :columns="columns" @row-click="detail">
                  <template #departmentalrole="{ record }">
                    <Button>{{ Departmentalrole[record.departmentalrole] }}</Button>
                  </template>
                  <template #operation="">
                    <!-- 点击更多按钮显示更多状态 -->
                    <Popover trigger="hover" placement="bottom">
                      <template #content>
                        <ul>
                          <li><Button type="text" @click="redact">编辑</Button></li>
                          <li><Button type="text" @click="datamigration">数据迁移</Button></li>
                          <li><Button type="text" @click="forbidden">禁用</Button></li>
                          <li><Button type="text" @click="deleteploy">删除</Button></li>
                        </ul>
                      </template>
                      <!-- 更多按钮图标 -->
                      <MoreOutlined @click.prevent />
                    </Popover>
                  </template>
                </Table>
              </TabPane>
              <TabPane key="2" tab="已禁用(1)" force-render>
                <Table :dataSource="dataSource1" :columns="columns" @row-click="detail">
                  <template #departmentalrole="{ record }">
                    <Button>{{ Departmentalrole[record.departmentalrole] }}</Button>
                  </template>
                  <template #operation="">
                    <!-- 点击更多按钮显示更多状态 -->
                    <Popover trigger="hover" placement="bottom">
                      <template #content>
                        <ul>
                          <li><Button type="text" @click="redact">编辑</Button></li>
                          <li><Button type="text" @click="datamigration">数据迁移</Button></li>
                          <li><Button type="text" @click="cancelforbidden">取消禁用</Button></li>
                          <li><Button type="text" @click="deleteploy">删除</Button></li>
                        </ul>
                      </template>
                      <!-- 更多按钮图标 -->
                      <MoreOutlined />
                    </Popover>
                  </template>
                </Table>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    </PageWrapper>
    <!-- 编辑部门 -->
    <Modal
      v-model:visible="visible"
      @ok="handleOk"
      :footer="null"
      :width="800"
      :body-style="{ height: '450px' }"
    >
      <template #title
        ><div class="text-[#1989fa] font-normal text-[28px] m-[5px]">编辑部门</div></template
      >
      <Form>
        <FormItem label="部门名称" v-bind="validateInfos.name" labelAlign="left">
          <Input
            v-model:value="modelRef.name"
            style="
              border: 0;
              border-bottom: 1px solid gray;
              height: 40px;
              margin: 25px;
              width: 750px;
            "
            placeholder="输入部门名称"
          />
        </FormItem>
        <FormItem label="所属部门" labelAlign="left" v-bind="validateInfos.region">
          <Select
            v-model:value="modelRef.region"
            style="border-bottom: 1px solid gray; height: 40px; margin: 25px; width: 750px"
            :bordered="false"
            placeholder="选择所属部门"
          >
            <SelectOption value="shanghai">E+SPACE</SelectOption>
            <SelectOption value="beijing">科技园</SelectOption>
          </Select>
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
    <!-- 添加员工 -->
    <Modal v-model:visible="addvisible" title="添加员工" @ok="handleOk" :footer="null" :width="760">
      <Addemployee />
    </Modal>
    <!-- 编辑员工 -->
    <Modal
      v-model:visible="redactvisible"
      title="编辑员工"
      @ok="handleOk"
      :footer="null"
      :width="760"
    >
      <Redactemployee />
    </Modal>
    <!-- 详情 -->
    <Modal v-model:visible="detailvisible" @ok="handleOk" :footer="null" :width="760">
      <template #title
        ><div class="text-[#1989fa] font-normal text-[18px] m-[5px]">详情</div></template
      >
      <detailemployee />
    </Modal>
    <!-- 数据迁移 -->
    <Modal v-model:visible="datavisible" @ok="handleOk" :footer="null" :width="600">
      <template #title
        ><div class="text-[#1989fa] font-normal text-[18px] m-[5px]">数据转移</div></template
      >
      <DataMigration />
    </Modal>
    <!-- 禁用员工 -->
    <Modal v-model:visible="forvisible" @ok="handleOk" :footer="null" :width="600">
      <template #title
        ><div class="text-[#1989fa] font-normal text-[18px] m-[5px]">禁用员工</div></template
      >
      <Forbidden />
    </Modal>
    <!-- 删除员工 -->
    <Modal v-model:visible="delevisible" @ok="handleOk" :footer="null" :width="600">
      <template #title
        ><div class="text-[#1989fa] font-normal text-[18px] m-[5px]">删除员工</div></template
      >
      <DeletepLoy />
    </Modal>
    <!-- 取消禁用员工 -->
    <Modal v-model:visible="canforvisible" @ok="handleOk" :footer="null" :width="500">
      <CanCelploy />
    </Modal>
  </div>
</template>
<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { BasicTitle } from '/@/components/Basic/index';
  import {
    Row,
    Col,
    Card,
    Button,
    Menu,
    SubMenu,
    MenuItem,
    Tabs,
    TabPane,
    Table,
    Popover,
    Modal,
    FormItem,
    Form,
    Select,
    SelectOption,
  } from 'ant-design-vue';
  import {
    PlusOutlined,
    HomeOutlined,
    UserOutlined,
    BellOutlined,
    MoreOutlined,
  } from '@ant-design/icons-vue';
  import { reactive, ref, toRaw } from 'vue';
  import config from './config';
  import { userListResult } from '/@/api/businessManagement/model/businessManagement';
  import { getInvestmentManagement } from '/@/api/businessManagement/index';
  import { Departmentalrole } from '/@/api/businessManagement/model/businessManagement';
  import Addemployee from './Addemployee.vue';
  import Redactemployee from './redactemployee.vue';
  import detailemployee from './detailemployee.vue';
  import DataMigration from './DataMigration.vue';
  import Forbidden from './Forbidden.vue';
  import DeletepLoy from './DeletepLoy.vue';
  import CanCelploy from './CanCelploy.vue';

  const columns = [...config.columns];
  const dataSource = ref<userListResult[]>([]);
  const dataSource1 = ref<userListResult[]>([]);
  getInvestmentManagement().then((res) => {
    console.log(res);
    dataSource.value = [...res.result];
    dataSource1.value = [...res.forbidden];
  });
  const activeKey = ref('1');
  const state = reactive({
    rootSubmenuKeys: ['sub1', 'sub4', 'sub5'],
    openKeys: ['sub1'],
    selectedKeys: [],
  });
  const onOpenChange = (openKeys: string[]) => {
    const latestOpenKey = openKeys.find((key) => state.openKeys.indexOf(key) === -1);
    if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      state.openKeys = openKeys;
    } else {
      state.openKeys = latestOpenKey ? [latestOpenKey] : [];
    }
  };

  // 添加部门
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
    region: undefined,
  });
  const { resetFields, validate, validateInfos } = useForm(
    modelRef,
    reactive({
      name: [
        {
          required: true,
          message: '部门名称不能为空',
        },
      ],
      region: [
        {
          required: true,
          message: '所属部门不能为空',
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
  //添加员工
  const addvisible = ref<boolean>(false);
  const Addemploy = () => {
    addvisible.value = true;
  };
  //编辑员工
  const redactvisible = ref<boolean>(false);
  const redact = () => {
    redactvisible.value = true;
  };
  //员工详情
  const detailvisible = ref<boolean>(false);
  const detail = () => {
    detailvisible.value = true;
  };
  //数据转移
  const datavisible = ref<boolean>(false);
  const datamigration = () => {
    datavisible.value = true;
  };
  //禁用员工
  const forvisible = ref<boolean>(false);
  const forbidden = () => {
    forvisible.value = true;
  };
  //删除部门
  const delevisible = ref<boolean>(false);
  const deleteploy = () => {
    delevisible.value = true;
  };
  //取消禁用员工
  const canforvisible = ref<boolean>(false);
  const cancelforbidden = () => {
    canforvisible.value = true;
  };
</script>
<style scoped>
  li {
    border-bottom: 1px solid #d9d9d9;
    text-align: center;
  }
  li Button {
    height: 50px;
    line-height: 50px;
    width: 100%;
  }
</style>
