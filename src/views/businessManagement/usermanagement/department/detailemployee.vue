<template>
  <div class="mt-[20px] flex justify-around">
    <div class="flex pr-[20px]" style="border-right: 2px dashed gray"
      ><CheckCircleTwoTone twoToneColor="#1989fa" :style="{ fontSize: '50px' }" /><div
        class="mt-[8px] ml-[8px]"
        ><div class="text-[#b0afaf] text-[12px]">当前状态</div><div>正常</div></div
      ></div
    >
    <div class="flex"
      ><Icon icon="ion:person-circle-sharp" style="color: #52c41a; font-size: 50px" /><div
        class="mt-[10px] ml-[8px]"
        ><div class="text-[#b0afaf] text-[12px]">姓名</div
        ><div class="text-[12px] mt-[5px]"
          ><span>郑鹏</span><span class="text-[#f3b541] bg-[#e8d5ad] rounded-[3px]">员工</span></div
        ></div
      ></div
    >
    <div class="flex">
      <Icon icon="f7:phone-circle-fill" style="color: #1989fa; font-size: 50px" />
      <div class="mt-[10px] ml-[8px]"
        ><div class="text-[#b0afaf] text-[12px]">联系电话(登录账号)</div
        ><div class="text-[12px] mt-[5px]">15927369212</div></div
      >
    </div>
  </div>
  <Tabs>
    <TabPane key="1">
      <template #tab>
        <span>
          <UnorderedListOutlined />
          基本信息
        </span>
      </template>
      <Row :gutter="[10, 40]" style="margin: 20px">
        <Col :span="8"><div class="text-[#b0afaf]">员工编号</div><div>-</div></Col>
        <Col :span="8"><div class="text-[#b0afaf]">姓名</div><div>郑鹏</div></Col>
        <Col :span="8"
          ><div class="text-[#b0afaf]">联系电话(登录账号)</div><div>15927369212</div></Col
        >
        <Col :span="8"><div class="text-[#b0afaf]">身份证号</div><div>420103199712265319</div></Col>
        <Col :span="8"><div class="text-[#b0afaf]">性别</div><div>男</div></Col>
        <Col :span="8"><div class="text-[#b0afaf]">员工类型</div><div>员工</div></Col>
        <Col :span="8"><div class="text-[#b0afaf]">联系邮箱</div><div>-</div></Col>
        <Col :span="8"><div class="text-[#b0afaf]">入职时间</div><div>-</div></Col>
        <Col :span="8"><div class="text-[#b0afaf]">直属部门</div><div>公寓测试门店</div></Col>
        <Col :span="8"><div class="text-[#b0afaf]">兼职部门</div><div>-</div></Col>
        <Col :span="8"><div class="text-[#b0afaf]">所属角色</div><div>管理员</div></Col>
        <Row style="border-top: 1px dashed gray; width: 100%; color: #b0afaf; padding-top: 20px">
          <Col :span="8">王子郭创建于2023年2月19日 17：14</Col>
          <Col :span="8">王子郭更新于2023年2月19日 17：14</Col>
        </Row>
      </Row>
    </TabPane>
    <template #tabBarExtraContent>
      <div style="color: #1989fa" class="mr-[7px]"
        ><Icon icon="mage:edit-pen" /><span class="mr-[7px]"> 编辑 </span
        ><Icon icon="mingcute:transfer-line" /><span class="mr-[7px]">数据转移</span
        ><Icon icon="fe:disabled" /><span class="mr-[7px]">禁用</span
        ><Icon icon="fluent-mdl2:delete" /><span class="mr-[7px]">删除</span></div
      >
    </template>
  </Tabs>
</template>

<script lang="ts" setup>
  import { CheckCircleTwoTone, UnorderedListOutlined } from '@ant-design/icons-vue';
  import Icon from '/@/components/Icon/src/Icon.vue';
  import { Tabs, TabPane, Row, Col } from 'ant-design-vue';
</script>
