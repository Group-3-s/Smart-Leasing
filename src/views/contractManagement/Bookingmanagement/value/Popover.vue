<template>
  <Popover placement="bottom" trigger="click">
    <template #content>
      <div v-if="props.code === 31001">
        <ul>
          <li><Button type="text" @click="fun">详细</Button></li>
          <li><Button type="text" @click="QR">邀请签字</Button></li>
          <li><Button type="text">提醒签字</Button></li>
        </ul>
      </div>
      <div v-if="props.code === 31002">
        <ul>
          <li><Button type="text" @click="fun">详细</Button></li>
          <li><Button type="text">邀请签字</Button></li>
          <li><Button type="text" @click="QR">提醒签字</Button></li>
          <li><Button type="text">变更房源</Button></li>
          <li><Button type="text">签约</Button></li>
          <li><Button type="text">退定</Button></li>
          <li><Button type="text" @click="edit">编辑预定信息</Button></li>
          <li><Button type="text">置为无效</Button></li>
        </ul>
      </div>
      <div v-if="props.code === 31003">
        <ul>
          <li><Button type="text" @click="fun">详细</Button></li>
          <li><Button type="text" @click="pay">邀请租客支付</Button></li>
          <li><Button type="text" @click="QR">提醒签字</Button></li>
          <li><Button type="text">线下收款</Button></li>
          <li><Button type="text" @click="edit">编辑预定信息</Button></li>
          <li><Button type="text">置为无效</Button></li>
        </ul>
      </div>
      <div v-if="props.code === 31004">
        <ul>
          <li><Button type="text" @click="fun">详细</Button></li>
          <li><Button type="text" @click="edit">编辑预定信息</Button></li>
          <li><Button type="text">置为无效</Button></li>
        </ul>
      </div>
      <div v-if="props.code === 31005">
        <ul>
          <li><Button type="text" @click="fun">详细</Button></li>
          <li><Button type="text" @click="Delete">删除</Button></li>
        </ul>
      </div>
    </template>
    <Icon icon="mingcute:more-2-fill" />
  </Popover>
  <Modal v-model:visible="visible" width="1000px" :footer="null" title="预定详细" @ok="handleOk">
    <BoxValue :child-value="parentValue" />
  </Modal>
  <Modal v-model:visible="Disible" :closable="false" @ok="handleOk1">
    <div class="mx-[40px] pt-[40px] h-[150px] flex flex-1">
      <div class="inline-block">
        <Icon
          icon="fluent-mdl2:status-error-full"
          width="10px"
          height="10px"
          style="color: #ff0000"
        />
      </div>
      <div class="inline-block ml-[20px]">
        <div class="text-[20px]">确定要删除员工[{{ people }}]的预定信息吗？ </div>
        <p class="text-[17px] mt-[10px]">删除后将无法恢复</p>
      </div>
    </div>
  </Modal>
  <Modal v-model:visible="Aisible" :closable="false" @ok="handleOk2">
    <div class="mx-[40px] pt-[40px] h-[150px] flex flex-1">
      <div class="inline-block">
        <Icon
          icon="material-symbols-light:error-outline"
          width="10px"
          height="10px"
          style="color: #f2b32c"
        />
      </div>
      <div class="inline-block ml-[20px]">
        <div class="text-[20px]">确定要给租客[{{ people }}]发送邀请支付短信吗？ </div>
      </div>
    </div>
  </Modal>
  <Modal v-model:visible="QRisible" :closable="false" :footer="null" width="400px" @ok="handleOk3">
    <div>
      <div class="mx-[100px] pt-[40px] h-[300px] text-center">
        <p>邀请[{{ people }}]</p>
        <p class="text-[#6e6c6c]">扫码即可完成签字</p>
        <qrcode-vue :value="value" :size="160" level="H" class="p-[5px] border" />
      </div>
      <!-- 中间分割线 -->
      <div class="flex flex-1 justify-center h-[30px]">
        <div class="border-b-[1px] inline-block w-[100px] mr-[10px] mb-[87px]"></div>
        <div class="inline-block">其他邀请方式</div>
        <div class="border-b-[1px] inline-block w-[100px] ml-[10px] mb-[87px]"></div>
      </div>
      <div class="flex flex-1 justify-around h-[100px]">
        <div>
          <div class="bg-green-500 rounded-full w-[50px] h-[50px] text-center leading-[50px]">
            <span
              class="iconify inline-block text-white w-[35px] h-[35px]"
              data-icon="mage:message-dots-fill"
            ></span>
          </div>
          <div>短信邀请</div>
        </div>
        <div class="text-center">
          <div
            class="bg-blue-500 rounded-full w-[50px] h-[50px] text-center leading-[50px] ml-[20px]"
          >
            <span
              class="iconify inline-block text-white w-[35px] h-[35px]"
              data-icon="solar:link-bold"
            ></span>
          </div>
          <div>复制链接地址</div>
        </div>
      </div>
    </div>
  </Modal>
  <Modal v-model:visible="Xisible" :closable="false" title="编辑预定信息" @ok="handleOk4">
    <div class="bg-[#f5f7fe] mt-[10px]">
      <Row style="padding-top: 10px; margin-left: 5px">
        <Col><div class="font-bold text-[17px] h-[30px] leading-[30px]">预定地址</div> </Col>
        <Col
          ><div class="h-[30px] leading-[30px]">房源地址：{{ address }}</div>
        </Col>
        <Col
          ><div class="h-[30px] leading-[30px]">预订人：{{ name }}/{{ sex }}/{{ phone }}</div>
        </Col>
        <Col
          ><div class="h-[30px] leading-[30px]">预计入住日期：{{ data }}</div>
        </Col>
        <Col
          ><div class="h-[30px] leading-[30px]">预计入住时长：{{ time }}</div>
        </Col>
      </Row>
    </div>
    <div class="mx-[10px] my-[10px]">
      <Row>
        <Col span="12">
          <div>预定类型</div>
          <Select
            placeholder="请选择类型 "
            style="border-bottom: 1px solid #d9d9d9; width: 80%"
            :bordered="false"
          />
        </Col>
        <Col span="12">
          <div>预定入住日期</div>
          <Input
            class="ml-[5px]"
            v-model:value="data"
            style="border-bottom: 1px solid #d9d9d9; width: 80%"
            :bordered="false"
          />
        </Col>
        <Col span="24">
          <div>预定入住时长</div>
          <Input
            v-model:value="time"
            style="border-bottom: 1px solid #d9d9d9; width: 50%"
            :bordered="false"
          />
        </Col>
      </Row>
    </div>
  </Modal>
</template>

<script lang="ts" setup>
  import { Popover, Button, Modal, Row, Col, Select, Input } from 'ant-design-vue';
  import { defineProps, ref } from 'vue';
  import Icon from '/@/components/Icon';
  import { clientListResult } from '/@/api/contractManagement/Bookingmanagement/model/Bookingmanagement';
  import { getBookingmanagement } from '/@/api/contractManagement/Bookingmanagement/index';
  import BoxValue from './BoxValue.vue';
  import QrcodeVue from 'qrcode.vue';

  const value = '200';
  const visible = ref<boolean>(false);
  const Disible = ref<boolean>(false);
  const Aisible = ref<boolean>(false);
  const QRisible = ref<boolean>(false);
  const Xisible = ref<boolean>(false);
  const dataSource = ref<clientListResult[]>([]);
  const address = ref<string>();
  const people = ref<string>();
  const type = ref<number>();
  const name = ref<string>();
  const sex = ref<string>();
  const phone = ref<string>();
  const data = ref<string>();
  const time = ref<string>();

  const props = defineProps({
    code: Number,
  });
  let parentValue = ref<string>();

  getBookingmanagement().then((res) => {
    dataSource.value = [...res.result];
    address.value = res.result[0].Availability;
    type.value = res.result[0].status;
    people.value = res.result[0].person;
    name.value = res.result[0].name;
    sex.value = res.result[0].sex;
    phone.value = res.result[0].number;
    data.value = res.result[0].createTime;
    time.value = res.result[0].Duration;
    // console.log(res.result[0].Availability);
  });

  const handleOk = (e: MouseEvent) => {
    console.log(e);
    Disible.value = false;
  };

  const handleOk1 = (e: MouseEvent) => {
    console.log(e);
    visible.value = false;
  };

  const handleOk2 = (e: MouseEvent) => {
    console.log(e);
    Aisible.value = false;
  };

  const handleOk3 = (e: MouseEvent) => {
    console.log(e);
    Aisible.value = false;
  };
  const handleOk4 = (e: MouseEvent) => {
    console.log(e);
    Xisible.value = false;
  };

  function fun() {
    visible.value = true;
    Xisible.value = false;
    Aisible.value = false;
    Disible.value = false;
    QRisible.value = false;
  }

  function edit() {
    Xisible.value = true;
    visible.value = false;
    QRisible.value = false;
    Disible.value = false;
    Aisible.value = false;
  }

  function pay() {
    Aisible.value = true;
    Xisible.value = false;
    visible.value = false;
    Disible.value = false;
    QRisible.value = false;
  }

  function QR() {
    QRisible.value = true;
    Xisible.value = false;
    visible.value = false;
    Aisible.value = false;
    Disible.value = false;
  }

  function Delete() {
    Disible.value = true;
    Xisible.value = false;
    visible.value = false;
    Aisible.value = false;
    QRisible.value = false;
  }
</script>

<style scoped>
  li {
    border-bottom: 1px solid #d9d9d9;
    text-align: center;
  }
  Button {
    height: 50px;
    line-height: 50px;
    width: 100%;
  }
</style>
