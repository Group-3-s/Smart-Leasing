<template>
  <Row :gutter="[10, 40]" style="margin-left: 25px">
    <Col :span="24">
      <div class="font-bold text-[16px] mt-[15px]"> 企业信息 </div>
    </Col>
    <Col :span="24">
      <span class="text-[red]">*</span>
      <span>企业名称：</span>
      <Input style="width: 450px" />
    </Col>
    <Col :span="24">
      <span class="text-[red]">*</span>
      <span>企业名称：</span>
      <Input style="width: 450px" />
    </Col>
    <Col :span="24">
      <span>*</span>
      <span>企业名称：</span>
      <Input style="width: 450px" />
    </Col>
    <Col :span="24">
      <span>*</span>
      <span>企业名称：</span>
      <Input style="width: 450px" />
    </Col>
    <Col :span="24">
      <span>企业开户行及账号</span>
      <span class="text-[red]">*</span>
      <Table :columns="columns" :data-source="data" />
    </Col>
    <Col :span="24" style="margin-top: -30px">
      <span>适用门店 </span>
      <Input style="width: 450px" />
    </Col>
  </Row>
</template>

<script setup>
  import { Row, Col, Input, Table } from 'ant-design-vue';

  const columns = [
    {
      title: '默认',
    },
    {
      title: '开户行',
    },
    {
      title: '银行账号',
    },
    {
      title: '操作',
    },
  ];
  const data = [{}];
</script>
