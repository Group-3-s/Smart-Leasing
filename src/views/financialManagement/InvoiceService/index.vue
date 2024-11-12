<template>
  <PageWrapper>
    <Row :gutter="[10, 10]" style="width: 100%; background-color: #fff; border-radius: 15px">
      <Col :lg="{ span: 24 }" style="margin-left: 10px; margin-top: 15px">
        <BasicTitle helpMessage="发票服务">发票服务</BasicTitle>
      </Col>
      <Col :lg="{ span: 24 }" style="margin-left: 10px; margin-top: 15px">
        <div class="card-container">
          <Tabs v-model:activeKey="activeKey" type="card" style="width: 98%">
            <TabPane key="1" tab="开票记录" style="width: 100%">
              <Row :gutter="[10, 10]">
                <Col
                  :lg="{ span: 12 }"
                  style="border-bottom: 1px #e2e2e2 solid; padding-bottom: 4px; padding-left: 10px"
                >
                  <div class="w-[100%]">
                    <span class="text-[#2f92fa]">全部（2）</span><span>待处理（0）</span
                    ><span>开票中（0）</span><span>已开票（0）</span><span>开票失败（0）</span
                    ><span>已冲红（1）</span>|<span>已作废（1）</span>
                  </div>
                </Col>
                <Col
                  :lg="{ span: 12 }"
                  :md="{ span: 12 }"
                  style="border-bottom: 1px #e2e2e2 solid; padding-bottom: 4px; padding-right: 20px"
                >
                  <div class="w-[99%] flex lg:justify-end">
                    <Input
                      placeholder="房源编号/房源地址/房间号/租客姓名/租客电话/购方姓名/购方税号"
                      size="small"
                      style="width: 300px"
                    />
                    <Icon
                      icon="lsicon:download-filled"
                      style="color: #2f92fa; width: 25px; height: 25px"
                    />
                  </div>
                </Col>
                <Col :lg="{ span: 24 }">
                  <div
                    class="w-[100%] h-[50px] rounded-[10px] bg-[#e5e5e5] leading-[50px] pl-[20px]"
                    v-for="item in allValue"
                    :key="item"
                  >
                    <span class="text-[black] font-bold pr-[10px]">合计:</span>
                    <span class="text-[#797979] px-[15px]">金额(不含税):</span>
                    <span>{{ item.money }}</span>
                    <span class="text-[#797979] px-[15px]">税额:</span>
                    <span>{{ item.money }}</span>
                    <span class="text-[#797979] px-[15px]">价税合计:</span>
                    <span>{{ item.money }}</span>
                  </div>
                </Col>
                <Col :lg="{ span: 24 }">
                  <Table :dataSource="invoiceValue" :columns="config.columns" :key="invoiceValue">
                    <template #status="{ record }">
                      <div>{{ financialDict[record.status] }}</div>
                    </template>
                    <template #operation="{ record }">
                      <Popover :code="record.status" />
                    </template>
                  </Table>
                </Col>
              </Row>
            </TabPane>
            <TabPane key="2" tab="销项设置">
              <Row :gutter="[10, 10]">
                <Col
                  :lg="{ span: 12 }"
                  style="border-bottom: 1px #e2e2e2 solid; padding-bottom: 4px; padding-left: 10px"
                >
                  <Button type="primary" @click="showModal">添加开票主体</Button>
                  <Modal
                    width="600px"
                    title="添加销项/开票主体信息"
                    ok-text="保存"
                    style="top: 20px"
                    :closable="false"
                    v-model:visible="outputVisible"
                    :confirm-loading="confirmLoading"
                    @ok="handleOk"
                  >
                    <AddInvoicingEntity />
                  </Modal>
                </Col>
                <Col
                  :lg="{ span: 12 }"
                  :md="{ span: 12 }"
                  style="border-bottom: 1px #e2e2e2 solid; padding-bottom: 4px; padding-right: 20px"
                >
                  <div class="w-[99%] flex lg:justify-end">
                    <Input
                      placeholder="房源编号/房源地址/房间号/租客姓名/租客电话/购方姓名/购方税号"
                      size="small"
                      style="width: 300px"
                    />
                    <Icon
                      icon="lsicon:download-filled"
                      style="color: #2f92fa; width: 25px; height: 25px"
                    />
                  </div>
                </Col>
                <Col :lg="{ span: 24 }">
                  <Table
                    :dataSource="outputSettingValue"
                    :columns="setting.columns"
                    :key="outputSettingValue"
                  >
                    <template #status="{ record }">
                      <div>{{ financialDict[record.status] }}</div>
                    </template>
                    <template #operations="{ record }">
                      <OutputDetail :code="record.status" />
                      <!-- <span @click="outputDetailOpen" :code="record.status">查看 </span>
                      <Modal
                        width="700px"
                        ok-text="保存"
                        title="开票主体详情"
                        style="top: 20px"
                        v-model:visible="outputDetailVisible"
                        :confirm-loading="outputDetailLoading"
                        @ok="outputDetailOk"
                      >
                        <OutputDetail />
                      </Modal>
                      <span class="text-[#2f92fa]"> 更多</span> -->
                    </template>
                  </Table>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </div>
      </Col>
    </Row>
  </PageWrapper>
</template>

<script setup>
  import { PageWrapper } from '/@/components/Page';
  import { Row, Col, Tabs, TabPane, Input, Table, Button, Modal } from 'ant-design-vue';
  import { BasicTitle } from '/@/components/Basic/index';
  import { getFinancialData } from '/@/api/financialManagement';
  import { ref } from 'vue';
  import { Icon } from '@iconify/vue';
  import { getSysDict } from '/@/api/sys/dict';
  import Popover from './components/Popover.vue';
  import setting from './setting';
  import config from './config';
  import OutputDetail from './components/OutputDetail.vue';
  import AddInvoicingEntity from './components/AddInvoicingEntity.vue';
  const activeKey = ref('1');
  const allValue = ref();
  const invoiceValue = ref();
  const financialDict = ref();
  const outputSettingValue = ref();
  getSysDict()
    .then((res) => {
      financialDict.value = res;
      console.log('dict:', financialDict.value);
    })
    .catch((err) => {
      console.log(err);
    });
  getFinancialData()
    .then((res) => {
      allValue.value = res.auditManagement;
      invoiceValue.value = res.invoiceList.invoiceList;
      outputSettingValue.value = res.outputSetting.outputSetting;
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  const outputVisible = ref(false);
  const confirmLoading = ref(false);

  const showModal = () => {
    outputVisible.value = true;
  };
  const handleOk = () => {
    confirmLoading.value = true;
    setTimeout(() => {
      outputVisible.value = false;
      confirmLoading.value = false;
    }, 2000);
  };
  // const outputDetailVisible = ref(false);
  // const outputDetailLoading = ref(false);
  // const outputDetailOpen = () => {
  //   outputDetailVisible.value = true;
  // };
  // const outputDetailOk = () => {
  //   outputDetailLoading.value = true;
  //   setTimeout(() => {
  //     outputDetailVisible.value = false;
  //     outputDetailLoading.value = false;
  //   }, 2000);
  // };
</script>
