<!-- <template>111</template> -->
<template>
  <div class="ml-5 text-gray-700 text-[14px]">
    <div>
      <Row>
        <Col
          class="mt-3"
          :xs="{ span: 24 }"
          :sm="{ span: 24 }"
          :md="{ span: 24 }"
          :lg="{ span: 24 }"
          :xl="{ span: 24 }"
          :xxl="{ span: 24 }"
          >房间信息:武汉市洪山区万科1期B1栋1401</Col
        >
      </Row>

      <Row>
        <Col
          class="mt-3"
          :xs="{ span: 12 }"
          :sm="{ span: 12 }"
          :md="{ span: 12 }"
          :lg="{ span: 12 }"
          :xl="{ span: 12 }"
          :xxl="{ span: 12 }"
          >应提成总金额:</Col
        >

        <Col
          class="mt-3"
          :xs="{ span: 12 }"
          :sm="{ span: 12 }"
          :md="{ span: 12 }"
          :lg="{ span: 12 }"
          :xl="{ span: 12 }"
          :xxl="{ span: 12 }"
          >剩余发放金额:</Col
        >
      </Row>

      <Row>
        <Col
          class="mt-3"
          :xs="{ span: 24 }"
          :sm="{ span: 24 }"
          :md="{ span: 24 }"
          :lg="{ span: 24 }"
          :xl="{ span: 24 }"
          :xxl="{ span: 24 }"
          >本次应提成金额:</Col
        >
      </Row>
    </div>
    <div class="border-b border-dashed border-gray-400 my-4"></div>
    <div>
      <Row>
        <Col
          class="mt-3"
          :xs="{ span: 12 }"
          :sm="{ span: 12 }"
          :md="{ span: 12 }"
          :lg="{ span: 12 }"
          :xxl="{ span: 12 }"
          >分佣人员:黄哈哈-13111112222</Col
        >

        <Col
          class="mt-3"
          :xs="{ span: 12 }"
          :sm="{ span: 12 }"
          :md="{ span: 12 }"
          :lg="{ span: 12 }"
          :xxl="{ span: 12 }"
          >分佣职务:招商专员/主管</Col
        >
      </Row>

      <Row>
        <Col
          class="mt-3"
          :xs="{ span: 12 }"
          :sm="{ span: 12 }"
          :md="{ span: 12 }"
          :lg="{ span: 12 }"
          :xl="{ span: 12 }"
          :xxl="{ span: 12 }"
          >本次应提成金额:2500</Col
        >

        <Col
          class="mt-3"
          :xs="{ span: 12 }"
          :sm="{ span: 12 }"
          :md="{ span: 12 }"
          :lg="{ span: 12 }"
          :xl="{ span: 12 }"
          :xxl="{ span: 12 }"
          >逾期应扣款金额 :2500</Col
        >
      </Row>

      <div class="mt-5">
        <div
          >* 发放金额:<input
            class="border rounded w-[100px] text-gray-700"
            id="amount"
            type="number"
            placeholder="请输入"
        /></div>

        <div class="mt-5"
          >备注:<input
            class="border rounded text-gray-700 w-[350px] h-[100px]"
            placeholder="请输入"
        /></div>
      </div>
    </div>
    <div class="border-b border-dashed border-gray-400 my-4"></div>

    <div class="mb-4">
      <div
        >上传附件<span class="text-[#ff8f00]"
          >（附件格式.jpg, .png, .jpeg, .word, .excel, .pdf:</span
        ></div
      >
      <input id="attachment" type="file" />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { Col, Row } from 'ant-design-vue';
</script>
