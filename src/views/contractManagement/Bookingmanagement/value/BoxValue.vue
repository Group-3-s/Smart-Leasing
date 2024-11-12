<template>
  <div>
    <Row>
      <Col
        span="24"
        class="bg-[#e6f3fe] text-[#7f8080] h-[40px] leading-[40px] text-[17px] pl-[10px]"
      >
        房源地址：{{ dataSource.Availability }}</Col
      >
      <Col span="24" style="display: flex; padding-top: 15px; padding-bottom: 15px">
        <Col
          :lg="{ span: 5 }"
          :md="{ span: 5 }"
          :sm="{ span: 12 }"
          style="height: 50px; border-right: 1px #e2e2e2 dashed"
        >
          <div class="ml-[20px] flex">
            <div
              class="w-[40px] h-[40px] rounded-[20px] bg-[#feecec] mr-[10px] text-center leading-[40px]"
            >
              <span
                class="iconify inline-block w-[30px] h-[30px]"
                data-icon="icon-park-solid:ticket"
                style="color: #f84246"
              ></span>
            </div>
            <div class="flex flex-col mt-[15px]">
              <span class="text-[12px] text-[gray]">当前状态</span>
              <span class="text-[13px]">
                {{ dict[dataSource.status] }}
              </span>
            </div>
          </div>
        </Col>
        <Col :lg="{ span: 5 }" :md="{ span: 5 }" :sm="{ span: 12 }">
          <div class="ml-[20px] flex">
            <div
              class="w-[30px] h-[30px] rounded-[12.5px] bg-[#e6f3fe] mr-[10px] mt-[15px] text-center"
            >
              <span
                class="iconify inline-block w-[20px] h-[20px]"
                data-icon="icon-park-solid:people"
                style="color: #0a87f8"
              ></span>
            </div>
            <div class="w-[75%] flex flex-col mt-[15px]">
              <span class="text-[12px] text-[gray]">客户信息</span>
              <span class="text-[13px] mt-[10px]"
                >{{ dataSource.name }}-{{ dataSource.number }}</span
              >
            </div>
          </div>
        </Col>
        <Col :lg="{ span: 5 }" :md="{ span: 5 }" :sm="{ span: 12 }">
          <div class="ml-[25px] flex">
            <div
              class="w-[30px] h-[30px] rounded-[12.5px] bg-[#fff5eb] mr-[10px] mt-[15px] text-center"
            >
              <span
                class="iconify w-[20px] h-[20px] inline-block"
                data-icon="mdi:house-flash"
                style="color: #ffa036"
              ></span>
            </div>
            <div class="w-[75%] flex flex-col mt-[15px]">
              <span class="text-[12px] text-[gray]">定金</span>
              <span class="text-[13px] mt-[10px]">{{ dataSource.price }}元</span>
            </div>
          </div>
        </Col>
        <Col :lg="{ span: 4 }" :md="{ span: 5 }" :sm="{ span: 12 }">
          <div class="ml-[10px] flex">
            <div
              class="w-[30px] h-[30px] rounded-[12.5px] bg-[#e5f9f2] text-center mr-[10px] mt-[15px]"
            >
              <span
                class="iconify w-[20px] h-[20px] inline-block"
                data-icon="mingcute:bank-card-fill"
                style="color: #03c683"
              ></span>
            </div>
            <div class="w-[75%] flex flex-col mt-[15px]">
              <span class="text-[12px] text-[gray]">支付方式</span>
              <span class="text-[13px] mt-[10px]"> - </span>
            </div>
          </div>
        </Col>
        <Col :lg="{ span: 5 }" :md="{ span: 5 }" :sm="{ span: 12 }">
          <div class="ml-[10px] flex">
            <div
              class="w-[30px] h-[30px] rounded-[12.5px] bg-[#feecec] text-center mr-[10px] mt-[15px]"
            >
              <span
                class="iconify w-[20px] h-[20px] inline-block"
                data-icon="fa-solid:calendar-check"
                style="color: #f84246"
              ></span>
            </div>
            <div class="w-[75%] flex flex-col mt-[15px]">
              <span class="text-[12px] text-[gray]">预计入住日期</span>
              <span class="text-[13px] mt-[10px]">{{ dataSource.createTime }}</span>
            </div>
          </div>
        </Col>
      </Col>
      <Col style="position: relative">
        <Tabs style="margin-left: 15px">
          <TabPane key="1">
            <template #tab>
              <span class="iconify inline-block" data-icon="fluent:people-list-20-regular"></span>
              预定信息
            </template>
            <div class="absolute top-[15px] right-[15px] cal">
              <span
                ><span class="iconify inline-block" data-icon="mdi:arrow-down-bold"></span>
                &nbsp;线下收款</span
              >
              <span
                ><span class="iconify inline-block" data-icon="mage:user-plus"></span
                >&nbsp;邀请租客支付</span
              >
              <span
                ><span class="iconify inline-block" data-icon="fluent:prohibited-12-regular"></span
                >&nbsp;置位无效</span
              >
              <span
                ><span class="iconify inline-block" data-icon="icon-park-outline:more-app"></span
                >&nbsp;更多</span
              >
            </div>
            <div>
              <Row>
                <Col><span class="text-[20px]">预定人信息</span></Col>
                <Col span="6">
                  <div class="h-[70px] mt-[10px]">
                    <div class="text-[#777777]">预定人姓名</div>
                    <div class="text-[17px] pt-[5px]">{{ dataSource.name }}</div>
                  </div>
                </Col>
                <Col span="6">
                  <div class="h-[70px] mt-[10px]">
                    <div class="text-[#777777]">预定人电话</div>
                    <div class="text-[17px] pt-[5px]"> {{ dataSource.number }}</div>
                  </div>
                </Col>
                <Col span="6">
                  <div class="h-[70px] mt-[10px]">
                    <div class="text-[#777777]">预定人性别</div>
                    <div class="text-[17px] pt-[5px]"> {{ dataSource.sex }}</div>
                  </div>
                </Col>
                <Col span="6">
                  <div class="h-[70px] mt-[10px]">
                    <div class="text-[#777777]">身份信息</div>
                    <div class="text-[17px] pt-[5px]"> -/-</div>
                  </div>
                </Col>
                <Col span="24">
                  <div class="h-[70px] mt-[10px]">
                    <div class="text-[#777777]">证件信息</div>
                    <div class="text-[17px] pt-[5px]"> - </div>
                  </div>
                </Col>
                <Col span="24"><span class="text-[17px] mt-[10px]">预定信息</span></Col>
                <Col span="6">
                  <div class="h-[70px] mt-[10px]">
                    <div class="text-[#777777]">定金</div>
                    <div class="text-[17px] pt-[5px]"> {{ dataSource.price }}元</div>
                  </div>
                </Col>
                <Col span="6">
                  <div class="h-[70px] mt-[10px]">
                    <div class="text-[#777777]">编号</div>
                    <div class="text-[17px] pt-[5px]"> {{ dataSource.serial }}</div>
                  </div>
                </Col>
                <Col span="6">
                  <div class="h-[70px] mt-[10px]">
                    <div class="text-[#777777]">预定入住日期</div>
                    <div class="text-[17px] pt-[5px]"> {{ dataSource.createTime }}</div>
                  </div>
                </Col>
                <Col span="6">
                  <div class="h-[70px] mt-[10px]">
                    <div class="text-[#777777]">预定入住时长</div>
                    <div class="text-[17px] pt-[5px]"> {{ dataSource.Duration }}</div>
                  </div>
                </Col>
                <Col span="24">
                  <div class="h-[70px] mt-[10px]">
                    <div class="text-[#777777]">申请类型</div>
                    <div class="text-[17px] pt-[5px]"> - </div>
                  </div>
                </Col>
                <Col span="24">
                  <div class="h-[70px] mt-[10px]">
                    <div class="text-[#777777]">备注信息</div>
                    <div class="text-[17px] pt-[5px]"> - </div>
                  </div>
                </Col>
                <Col span="24">
                  <div class="h-[70px] mt-[10px]">
                    <div class="text-[#777777]">预定凭证</div>
                    <div class="text-[17px] pt-[5px]"> - </div>
                  </div>
                </Col>
                <Col span="24"><span class="text-[17px]">所属门店(部门)/维护人</span></Col>
                <Col span="12">
                  <div class="h-[70px] mt-[10px]">
                    <div class="text-[#777777]">所属门店(部门)</div>
                    <div class="text-[17px] pt-[5px]"> - </div>
                  </div>
                </Col>
                <Col span="12">
                  <div class="h-[70px] mt-[10px]">
                    <div class="text-[#777777]">维护人</div>
                    <div class="text-[17px] pt-[5px]"> - </div>
                  </div>
                </Col>
                <Col span="24">
                  <div
                    class="h-[40px] mt-[10px] border-dashed border-t-[1px] border-[#efefef] flex flex-1"
                  >
                    <div class="text-[16px] text-[#7f7f7f] mt-[10px]"
                      >王佳伟创建于2023年2月11日&nbsp;17:50</div
                    >
                    <div
                      class="border-dashed border-l-[1px] mt-[10px] border-[#efefef] text-[16px] text-[#7f7f7f] ml-[15px] pl-[15px] my-[5px]"
                      >王佳伟跟新于2023年2月11日&nbsp;17:50</div
                    >
                  </div>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane key="2">
            <template #tab>
              <span class="iconify inline-block" data-icon="lets-icons:paper"></span>
              账单信息
            </template>
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  </div>
</template>
<script setup>
  import { Row, Col, Tabs, TabPane } from 'ant-design-vue';
  import { ref } from 'vue';
  import { getBookingmanagement } from '/@/api/contractManagement/Bookingmanagement/index';
  import { getSysDict } from '/@/api/dict/dict';

  const dataSource = ref([]);
  const dict = ref([]);

  getBookingmanagement().then((res) => {
    dataSource.value = res.result[1];

    getSysDict().then((res) => {
      dict.value = res;
    });
    // console.log(res.result[0].Availability);
  });
</script>

<style scoped>
  .cal span {
    margin-left: 20px;
    color: #0a87f8;
  }
</style>
