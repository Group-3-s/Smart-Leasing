<!-- eslint-disable vue/valid-v-slot -->
<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<!-- eslint-disable vue/no-useless-template-attributes -->
<template>
  <Popover title="操作" trigger="click">
    <template v-if="props.code === 70011" #content>
      <p @click="outputDetailOpen">查看</p>
      <Modal
        width="700px"
        ok-text="保存"
        title="开票主体详情"
        style="top: 20px"
        v-model:visible="outputDetailVisible"
        :confirm-loading="outputDetailLoading"
        @ok="outputDetailOk"
      >
        <Row :gutter="[10, 10]" style="margin-top: 20px">
          <Col
            :lg="{ span: 5 }"
            :md="{ span: 5 }"
            :sm="{ span: 12 }"
            style="height: 50px; border-right: 1px #e2e2e2 dashed"
          >
            <Row style="display: flex; margin-left: 20px">
              <div class="w-[40px] h-[40px] rounded-[20px] bg-[#e6f3fe] pt-[9px] mr-[10px]">
                <Icon
                  icon="game-icons:check-mark"
                  style="color: #2f92fa; width: 20px; height: 20px; margin-left: 10px"
              /></div>
              <div class="flex flex-col mt-[5px]">
                <span class="text-[12px] text-[gray]">当前状态</span>
                <span class="text-[13px]">{{ financialDict[outputSettingValue[0].status] }}</span>
              </div>
            </Row>
          </Col>
          <Col :lg="{ span: 7 }" :md="{ span: 7 }" :sm="{ span: 12 }">
            <Row style="display: flex" class="lg:ml-[15px] md:ml-[25px] sm:ml-[25px]">
              <div
                class="w-[25px] h-[25px] rounded-[12.5px] bg-[#e6f3fe] pt-[9px] mr-[10px] md:mt-[15px] sm:mt-[7px] lg:mt-[15px]"
              >
                <Icon
                  icon="mdi:house-city"
                  style="color: #2f92fa; margin-left: 5px; margin-top: -3px"
                />
              </div>
              <div class="w-[75%] flex flex-col mt-[5px]">
                <span class="text-[12px] text-[gray]">企业名称</span>
                <span class="text-[13px]">{{ outputSettingValue[0].enterpriseName }}</span>
              </div>
            </Row>
          </Col>
          <Col :lg="{ span: 6 }" :md="{ span: 6 }" :sm="{ span: 12 }">
            <Row style="display: flex" class="lg:ml-[0px] md:ml-[25px] sm:ml-[25px]">
              <div
                class="w-[25px] h-[25px] rounded-[12.5px] bg-[#fff5eb] pt-[9px] mr-[10px] md:mt-[15px] sm:mt-[5px] lg:mt-[15px]"
              >
                <Icon
                  icon="ri:stack-fill"
                  style="color: #ffa036; margin-left: 6px; margin-top: -4px"
                />
              </div>
              <div class="w-[75%] flex flex-col mt-[5px]">
                <span class="text-[12px] text-[gray]">企业税号</span>
                <span class="text-[13px]">{{ outputSettingValue[0].enterpriseTaxNumber }}</span>
              </div>
            </Row>
          </Col>
          <Col :lg="{ span: 6 }" :md="{ span: 6 }" :sm="{ span: 12 }">
            <Row style="display: flex" class="lg:ml-[0px] md:ml-[25px] sm:ml-[25px]">
              <div
                class="w-[25px] h-[25px] rounded-[12.5px] bg-[#e5f9f2] pt-[9px] mr-[10px] md:mt-[15px] sm:mt-[5px] lg:mt-[15px]"
              >
                <Icon
                  icon="icon-park-twotone:connect"
                  style="color: #05c684; margin-left: 6px; margin-top: -4px"
                />
              </div>
              <div class="w-[75%] flex flex-col sm:mt-[5px] md:mt-[12px]">
                <span class="text-[12px] text-[gray]">关联账号</span>
                <span class="text-[13px] text-[#2f92fa]">{{
                  outputSettingValue[0].invoice_account_settings
                }}</span>
              </div>
            </Row>
          </Col>
          <Col :span="24">
            <div class="flex absolute top-[15px] right-[25px]">
              <span class="text-[#2f92fa] flex text-[13px]">
                <Icon icon="ant-design:disconnectOutlined" style="color: #2f92fa" />
                解绑账号 </span
              >&nbsp;&nbsp;&nbsp;
              <span class="text-[#2f92fa] flex text-[13px]">
                <Icon icon="fluent:prohibited-24-filled" style="color: #2f92fa" />禁用
              </span>
            </div>
            <Tabs v-model:activeKey="activeKey" @change="fun">
              <TabPane key="1">
                <template #tab>
                  <span class="text-[13px] flex"><Icon icon="f7:menu" />基本信息 </span>
                </template>
                <Row :gutter="[10, 10]">
                  <Col :span="24">
                    <div class="flex ml-[20px] mt-[10px]">
                      <span class="text-[16px]">销方/开票主体信息</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span class="flex text-[#2f92fa]">
                        <Icon icon="solar:pen-2-bold" style="color: #2f92fa; padding-top: 3px" />
                        编辑
                      </span>
                    </div>
                  </Col>
                  <Col :lg="{ span: 9 }" :md="{ span: 9 }" :sm="{ span: 12 }">
                    <div class="flex flex-col ml-[20px]">
                      <span class="text-[gray] text-[13px] mb-[10px]">企业名称</span>
                      <span class="text-[12px]">{{ outputSettingValue[0].enterpriseName }}</span>
                    </div>
                  </Col>
                  <Col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 12 }">
                    <div class="flex flex-col">
                      <span class="text-[gray] text-[13px] mb-[10px]">纳税人识别号</span>
                      <span class="text-[12px]">{{
                        outputSettingValue[0].enterpriseTaxNumber
                      }}</span>
                    </div>
                  </Col>
                  <Col :lg="{ span: 7 }" :md="{ span: 7 }" :sm="{ span: 12 }">
                    <div class="flex flex-col ml-[20px]">
                      <span class="text-[gray] text-[13px] mb-[10px]">企业电话</span>
                      <span class="text-[12px]">{{ outputSettingValue[0].enterprisePhone }}</span>
                    </div>
                  </Col>
                  <Col :span="24">
                    <div class="flex flex-col ml-[20px]">
                      <span class="text-[gray] text-[13px] my-[10px]">企业注册地址</span>
                      <span class="text-[12px]">{{
                        outputSettingValue[0].enterpriseRegisteredAddress
                      }}</span>
                    </div>
                  </Col>
                  <Col :span="24">
                    <div class="flex flex-col ml-[20px]">
                      <span class="text-[gray] text-[13px] my-[10px]">企业开户行名称及账号</span>
                      <Table :columns="columns" :dataSource="openingBankValue">
                        <template #default="">
                          <Icon
                            icon="healthicons:yes-outline"
                            style="color: #2f92fa; width: 20px; height: 20px; margin-left: 5px"
                          />
                        </template>
                      </Table>
                    </div>
                  </Col>
                  <Col :span="24">
                    <div class="flex ml-[20px] mt-[10px]">
                      <span class="text-[16px]">通用门店配置</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span class="flex mt-[-10px]">
                        <Button style="margin-right: 20px">取消</Button>
                        <Button type="primary">保存</Button>
                      </span>
                    </div>
                  </Col>
                  <Col :span="24">
                    <div class="flex flex-col ml-[20px]">
                      <span class="text-[gray] text-[13px] my-[10px]">适用门店</span>
                      <Select
                        a-select
                        v-model:value="selectValue"
                        mode="multiple"
                        style="width: 97%"
                        placeholder="请选择适用门店"
                        :options="selectOption"
                        @click="selectChange"
                      />
                    </div>
                  </Col>
                  <Col :span="24">
                    <span class="text-[16px] ml-[20px] mt-[10px]">关联账号</span>
                  </Col>
                  <Col :lg="{ span: 10 }" :md="{ span: 9 }" :sm="{ span: 12 }">
                    <div class="flex flex-col ml-[20px]">
                      <span class="text-[gray] text-[13px] mb-[10px]">开票账号</span>
                      <span class="flex">
                        <span
                          class="inline-block w-[45px] h-[18px] bg-[#e6f3fe] text-[#0a87f8] leading-[17px] text-[11px] pl-[7px]"
                          >易票云</span
                        >
                        <span class="text-[12px] ml-[5px] mt-[3px]">{{
                          outputSettingValue[0].enterpriseTaxNumber
                        }}</span>
                      </span>
                    </div>
                  </Col>
                  <Col :lg="{ span: 7 }" :md="{ span: 8 }" :sm="{ span: 12 }">
                    <div class="flex flex-col">
                      <span class="text-[gray] text-[13px] mb-[10px]">开票分机号</span>
                      <span class="text-[12px]">{{ outputSettingValue[0].separate_numbers }}</span>
                    </div>
                  </Col>
                  <Col :lg="{ span: 7 }" :md="{ span: 7 }" :sm="{ span: 12 }">
                    <div class="flex flex-col ml-[20px]">
                      <span class="text-[gray] text-[13px] mb-[10px]">授权绑定人</span>
                      <span class="text-[12px]">{{
                        outputSettingValue[0].authorizedBindingPerson
                      }}</span>
                    </div>
                  </Col>
                  <Col :lg="{ span: 10 }" :md="{ span: 10 }" :sm="{ span: 12 }">
                    <div class="flex flex-col mt-[15px] lg:ml-[20px] md:ml-[20px] sm:ml-[0px]">
                      <span class="text-[gray] text-[13px] mb-[10px]">授权绑定时间</span>
                      <span class="text-[12px]">{{ outputSettingValue[0].bindingTime }}</span>
                    </div>
                  </Col>
                  <Col :lg="{ span: 9 }" :md="{ span: 9 }" :sm="{ span: 12 }">
                    <div class="flex flex-col lg:ml-[0px] md:ml-[-30px] sm:ml-[20px] mt-[15px]">
                      <span class="text-[gray] text-[13px] mb-[10px]">剩余电子发票数量</span>
                      <span class="text-[12px]"
                        >{{ outputSettingValue[0].separate_numbers }}张</span
                      >
                    </div>
                  </Col>
                  <Col :span="24">
                    <div style="border-top: 1px gray dashed; font-size: 16px">
                      <span class="text-[gray] ml-[20px]"
                        >{{ outputSettingValue[0].authorizedBindingPerson }}创建于{{
                          outputSettingValue[0].bindingTime
                        }}&nbsp;&nbsp; |
                      </span>
                      <span class="text-[gray] mr-[20px]">
                        &nbsp;&nbsp;{{ outputSettingValue[0].authorizedBindingPerson }}更新于{{
                          outputSettingValue[0].bindingTime
                        }}</span
                      >
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane key="2">
                <template #tab>
                  <span class="text-[13px] flex"
                    ><Icon icon="ion:newspaper-outline" />开票商品信息
                  </span>
                </template>
                <Row :gutter="[10, 10]">
                  <Col :span="24">
                    <div class="text-[#272727] bg-[#f7f8fb]"
                      >开票时仅支持对已配置的商品进行申请和开票，请仔细核对</div
                    >
                  </Col>
                </Row>
              </TabPane>
              <TabPane key="3">
                <template #tab>
                  <span class="text-[13px] flex"
                    ><Icon icon="material-symbols:smart-toy-sharp" />智能决策</span
                  >
                </template>
                智能决策
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Modal>
      <p>更多</p>
    </template>
    <template v-if="props.code === 70012" #content>
      <p @click="outputDetailOpen">查看</p>
      <Modal
        width="700px"
        ok-text="保存"
        title="开票主体详情"
        style="top: 20px"
        v-model:visible="outputDetailVisible"
        :confirm-loading="outputDetailLoading"
        @ok="outputDetailOk"
      >
        <Row :gutter="[10, 10]" style="margin-top: 20px">
          <Col
            :lg="{ span: 5 }"
            :md="{ span: 5 }"
            :sm="{ span: 12 }"
            style="height: 50px; border-right: 1px #e2e2e2 dashed"
          >
            <Row style="display: flex; margin-left: 20px">
              <div class="w-[40px] h-[40px] rounded-[20px] bg-[#e6f3fe] pt-[9px] mr-[10px]">
                <Icon
                  icon="game-icons:check-mark"
                  style="color: #2f92fa; width: 20px; height: 20px; margin-left: 10px"
              /></div>
              <div class="flex flex-col mt-[5px]">
                <span class="text-[12px] text-[gray]">当前状态</span>
                <span class="text-[13px]">{{ financialDict[outputSettingValue[1].status] }}</span>
              </div>
            </Row>
          </Col>
          <Col :lg="{ span: 7 }" :md="{ span: 7 }" :sm="{ span: 12 }">
            <Row style="display: flex" class="lg:ml-[0px] md:ml-[25px] sm:ml-[25px]">
              <div
                class="w-[25px] h-[25px] rounded-[12.5px] bg-[#e6f3fe] pt-[9px] mr-[10px] md:mt-[15px] sm:mt-[7px] lg:mt-[15px]"
              >
                <Icon
                  icon="mdi:house-city"
                  style="color: #2f92fa; margin-left: 5px; margin-top: -3px"
                />
              </div>
              <div class="w-[75%] flex flex-col mt-[5px]">
                <span class="text-[12px] text-[gray]">企业名称</span>
                <span class="text-[13px]">{{ outputSettingValue[1].enterpriseName }}</span>
              </div>
            </Row>
          </Col>
          <Col :lg="{ span: 6 }" :md="{ span: 6 }" :sm="{ span: 12 }">
            <Row style="display: flex" class="lg:ml-[0px] md:ml-[25px] sm:ml-[25px]">
              <div
                class="w-[25px] h-[25px] rounded-[12.5px] bg-[#fff5eb] pt-[9px] mr-[10px] md:mt-[15px] sm:mt-[5px] lg:mt-[15px]"
              >
                <Icon
                  icon="ri:stack-fill"
                  style="color: #ffa036; margin-left: 6px; margin-top: -4px"
                />
              </div>
              <div class="w-[75%] flex flex-col mt-[5px]">
                <span class="text-[12px] text-[gray]">企业税号</span>
                <span class="text-[13px]">{{ outputSettingValue[1].enterpriseTaxNumber }}</span>
              </div>
            </Row>
          </Col>
          <Col :lg="{ span: 6 }" :md="{ span: 6 }" :sm="{ span: 12 }">
            <Row style="display: flex" class="lg:ml-[0px] md:ml-[25px] sm:ml-[25px]">
              <div
                class="w-[25px] h-[25px] rounded-[12.5px] bg-[#e5f9f2] pt-[9px] mr-[10px] md:mt-[15px] sm:mt-[5px] lg:mt-[15px]"
              >
                <Icon
                  icon="icon-park-twotone:connect"
                  style="color: #05c684; margin-left: 6px; margin-top: -4px"
                />
              </div>
              <div class="w-[75%] flex flex-col sm:mt-[5px] md:mt-[12px]">
                <span class="text-[12px] text-[gray]">关联账号</span>
                <span class="text-[13px] text-[#2f92fa]">{{
                  outputSettingValue[1].invoice_account_settings
                }}</span>
              </div>
            </Row>
          </Col>
          <Col :span="24">
            <div class="flex absolute top-[15px] right-[25px]">
              <span class="text-[#2f92fa] flex text-[13px]">
                <Icon icon="ant-design:disconnectOutlined" style="color: #2f92fa" />
                解绑账号 </span
              >&nbsp;&nbsp;&nbsp;
              <span class="text-[#2f92fa] flex text-[13px]">
                <Icon icon="fluent:prohibited-24-filled" style="color: #2f92fa" />禁用
              </span>
            </div>
            <Tabs v-model:activeKey="activeKey" @change="fun">
              <TabPane key="1">
                <template #tab>
                  <span class="text-[13px] flex"><Icon icon="f7:menu" />基本信息 </span>
                </template>
                <Row :gutter="[10, 10]">
                  <Col :span="24">
                    <div class="flex ml-[20px] mt-[10px]">
                      <span class="text-[16px]">销方/开票主体信息</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span class="flex text-[#2f92fa]">
                        <Icon icon="solar:pen-2-bold" style="color: #2f92fa; padding-top: 3px" />
                        编辑
                      </span>
                    </div>
                  </Col>
                  <Col :lg="{ span: 9 }" :md="{ span: 9 }" :sm="{ span: 12 }">
                    <div class="flex flex-col ml-[20px]">
                      <span class="text-[gray] text-[13px] mb-[10px]">企业名称</span>
                      <span class="text-[12px]">{{ outputSettingValue[1].enterpriseName }}</span>
                    </div>
                  </Col>
                  <Col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 12 }">
                    <div class="flex flex-col">
                      <span class="text-[gray] text-[13px] mb-[10px]">纳税人识别号</span>
                      <span class="text-[12px]">{{
                        outputSettingValue[1].enterpriseTaxNumber
                      }}</span>
                    </div>
                  </Col>
                  <Col :lg="{ span: 7 }" :md="{ span: 7 }" :sm="{ span: 12 }">
                    <div class="flex flex-col ml-[20px]">
                      <span class="text-[gray] text-[13px] mb-[10px]">企业电话</span>
                      <span class="text-[12px]">{{ outputSettingValue[1].enterprisePhone }}</span>
                    </div>
                  </Col>
                  <Col :span="24">
                    <div class="flex flex-col ml-[20px]">
                      <span class="text-[gray] text-[13px] my-[10px]">企业注册地址</span>
                      <span class="text-[12px]">{{
                        outputSettingValue[1].enterpriseRegisteredAddress
                      }}</span>
                    </div>
                  </Col>
                  <Col :span="24">
                    <div class="flex flex-col ml-[20px]">
                      <span class="text-[gray] text-[13px] my-[10px]">企业开户行名称及账号</span>
                      <Table :columns="columns" :dataSource="openingBankValue">
                        <template #default="">
                          <Icon
                            icon="healthicons:yes-outline"
                            style="color: #2f92fa; width: 20px; height: 20px; margin-left: 5px"
                          />
                        </template>
                      </Table>
                    </div>
                  </Col>
                  <Col :span="24">
                    <div class="flex ml-[20px] mt-[10px]">
                      <span class="text-[16px]">通用门店配置</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span class="flex mt-[-10px]">
                        <Button style="margin-right: 20px">取消</Button>
                        <Button type="primary">保存</Button>
                      </span>
                    </div>
                  </Col>
                  <Col :span="24">
                    <div class="flex flex-col ml-[20px]">
                      <span class="text-[gray] text-[13px] my-[10px]">适用门店</span>
                      <Select
                        a-select
                        v-model:value="selectValue"
                        mode="multiple"
                        style="width: 97%"
                        placeholder="请选择适用门店"
                        :options="selectOption"
                        @click="selectChange"
                      />
                    </div>
                  </Col>
                  <Col :span="24">
                    <span class="text-[16px] ml-[20px] mt-[10px]">关联账号</span>
                  </Col>
                  <Col :lg="{ span: 10 }" :md="{ span: 9 }" :sm="{ span: 12 }">
                    <div class="flex flex-col ml-[20px]">
                      <span class="text-[gray] text-[13px] mb-[10px]">开票账号</span>
                      <span class="flex">
                        <span
                          class="inline-block w-[45px] h-[18px] bg-[#e6f3fe] text-[#0a87f8] leading-[17px] text-[11px] pl-[7px]"
                          >易票云</span
                        >
                        <span class="text-[12px] ml-[5px] mt-[3px]">{{
                          outputSettingValue[1].enterpriseTaxNumber
                        }}</span>
                      </span>
                    </div>
                  </Col>
                  <Col :lg="{ span: 7 }" :md="{ span: 8 }" :sm="{ span: 12 }">
                    <div class="flex flex-col">
                      <span class="text-[gray] text-[13px] mb-[10px]">开票分机号</span>
                      <span class="text-[12px]">{{ outputSettingValue[1].separate_numbers }}</span>
                    </div>
                  </Col>
                  <Col :lg="{ span: 7 }" :md="{ span: 7 }" :sm="{ span: 12 }">
                    <div class="flex flex-col ml-[20px]">
                      <span class="text-[gray] text-[13px] mb-[10px]">授权绑定人</span>
                      <span class="text-[12px]">{{
                        outputSettingValue[1].authorizedBindingPerson
                      }}</span>
                    </div>
                  </Col>
                  <Col :lg="{ span: 10 }" :md="{ span: 10 }" :sm="{ span: 12 }">
                    <div class="flex flex-col mt-[15px] lg:ml-[20px] md:ml-[20px] sm:ml-[0px]">
                      <span class="text-[gray] text-[13px] mb-[10px]">授权绑定时间</span>
                      <span class="text-[12px]">{{ outputSettingValue[1].bindingTime }}</span>
                    </div>
                  </Col>
                  <Col :lg="{ span: 9 }" :md="{ span: 9 }" :sm="{ span: 12 }">
                    <div class="flex flex-col lg:ml-[0px] md:ml-[-30px] sm:ml-[20px] mt-[15px]">
                      <span class="text-[gray] text-[13px] mb-[10px]">剩余电子发票数量</span>
                      <span class="text-[12px]"
                        >{{ outputSettingValue[1].separate_numbers }}张</span
                      >
                    </div>
                  </Col>
                  <Col :span="24">
                    <div style="border-top: 1px gray dashed; font-size: 16px">
                      <span class="text-[gray] ml-[20px]"
                        >{{ outputSettingValue[1].authorizedBindingPerson }}创建于{{
                          outputSettingValue[1].bindingTime
                        }}&nbsp;&nbsp; |
                      </span>
                      <span class="text-[gray] mr-[20px]">
                        &nbsp;&nbsp;{{ outputSettingValue[1].authorizedBindingPerson }}更新于{{
                          outputSettingValue[1].bindingTime
                        }}</span
                      >
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane key="2">
                <template #tab>
                  <span class="text-[13px] flex"
                    ><Icon icon="ion:newspaper-outline" />开票商品信息
                  </span>
                </template>
                <Row :gutter="[10, 10]">
                  <Col :span="24">
                    <div class="text-[#272727] bg-[#f7f8fb]"
                      >开票时仅支持对已配置的商品进行申请和开票，请仔细核对</div
                    >
                  </Col>
                </Row>
              </TabPane>
              <TabPane key="3">
                <template #tab>
                  <span class="text-[13px] flex"
                    ><Icon icon="material-symbols:smart-toy-sharp" />智能决策</span
                  >
                </template>
                智能决策
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Modal>
      <p>更多</p>
    </template>
    <!-- <template v-if="props.code === 70012" #content>
      <p @click="outputDetailOpen2">查看</p>
      <Modal
        width="700px"
        ok-text="保存"
        title="开票主体详情"
        style="top: 20px"
        v-model:visible="outputDetailVisible2"
        :confirm-loading="outputDetailLoading2"
        @ok="outputDetailOk2"
      >
        {{ outputSettingValue1[1].enterpriseName }}
        <Row :gutter="[10, 10]" style="margin-top: 20px">
          <Col
            :lg="{ span: 5 }"
            :md="{ span: 5 }"
            :sm="{ span: 12 }"
            style="height: 50px; border-right: 1px #e2e2e2 dashed"
          >
            <Row style="display: flex; margin-left: 20px">
              <div class="w-[40px] h-[40px] rounded-[20px] bg-[#e6f3fe] pt-[9px] mr-[10px]">
                <Icon
                  icon="game-icons:check-mark"
                  style="color: #2f92fa; width: 20px; height: 20px; margin-left: 10px"
              /></div>
              <div class="flex flex-col mt-[5px]">
                <span class="text-[12px] text-[gray]">当前状态</span>
                <span class="text-[13px]">{{ financialDict[outputSettingValue1[1].status] }}</span>
              </div>
            </Row>
          </Col>
          <Col :lg="{ span: 7 }" :md="{ span: 7 }" :sm="{ span: 12 }">
            <Row style="display: flex; margin-left: 10px">
              <div
                class="w-[25px] h-[25px] rounded-[12.5px] bg-[#e6f3fe] pt-[9px] mr-[10px] mt-[15px]"
              >
                <Icon
                  icon="mdi:house-city"
                  style="color: #2f92fa; margin-left: 5px; margin-top: -5px"
                />
              </div>
              <div class="w-[75%] flex flex-col mt-[5px]">
                <span class="text-[12px] text-[gray]">企业名称</span>
                <span class="text-[13px]">{{ outputSettingValue1[1].enterpriseName }}</span>
              </div>
            </Row>
          </Col>
          <Col :lg="{ span: 6 }" :md="{ span: 6 }" :sm="{ span: 12 }">
            <Row style="display: flex">
              <div
                class="w-[25px] h-[25px] rounded-[12.5px] bg-[#fff5eb] pt-[9px] mr-[10px] mt-[15px]"
              >
                <Icon
                  icon="ri:stack-fill"
                  style="color: #ffa036; margin-left: 6px; margin-top: -4px"
                />
              </div>
              <div class="w-[75%] flex flex-col mt-[5px]">
                <span class="text-[12px] text-[gray]">企业税号</span>
                <span class="text-[13px]">{{ outputSettingValue1[1].enterpriseTaxNumber }}</span>
              </div>
            </Row>
          </Col>
          <Col :lg="{ span: 6 }" :md="{ span: 6 }" :sm="{ span: 12 }">
            <Row style="display: flex">
              <div
                class="w-[25px] h-[25px] rounded-[12.5px] bg-[#e5f9f2] pt-[9px] mr-[10px] mt-[15px]"
              >
                <Icon
                  icon="icon-park-twotone:connect"
                  style="color: #05c684; margin-left: 6px; margin-top: -4px"
                />
              </div>
              <div class="w-[75%] flex flex-col mt-[15px]">
                <span class="text-[12px] text-[gray]">关联账号</span>
                <span class="text-[13px] text-[#2f92fa]">{{
                  outputSettingValue1[1].invoice_account_settings
                }}</span>
              </div>
            </Row>
          </Col>
          <Col :span="24">
            <div class="flex absolute top-[15px] right-[25px]">
              <span class="text-[#2f92fa] flex text-[13px]">
                <Icon icon="ant-design:disconnectOutlined" style="color: #2f92fa" />
                解绑账号 </span
              >&nbsp;&nbsp;&nbsp;
              <span class="text-[#2f92fa] flex text-[13px]">
                <Icon icon="fluent:prohibited-24-filled" style="color: #2f92fa" />禁用
              </span>
            </div>
            <Tabs v-model:activeKey="activeKey" @change="fun">
              <TabPane key="1">
                <template #tab>
                  <span class="text-[13px] flex"><Icon icon="f7:menu" />基本信息 </span>
                </template>
                <Row :gutter="[10, 10]">
                  <Col :span="24">
                    <div class="flex ml-[20px] mt-[10px]">
                      <span class="text-[16px]">销方/开票主体信息</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span class="flex text-[#2f92fa]">
                        <Icon icon="solar:pen-2-bold" style="color: #2f92fa; padding-top: 3px" />
                        编辑
                      </span>
                    </div>
                  </Col>
                  <Col :lg="{ span: 9 }" :md="{ span: 9 }" :sm="{ span: 12 }">
                    <div class="flex flex-col ml-[20px]">
                      <span class="text-[gray] text-[13px] mb-[10px]">企业名称</span>
                      <span class="text-[12px]">{{ outputSettingValue1[1].enterpriseName }}</span>
                    </div>
                  </Col>
                  <Col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 12 }">
                    <div class="flex flex-col">
                      <span class="text-[gray] text-[13px] mb-[10px]">纳税人识别号</span>
                      <span class="text-[12px]">{{
                        outputSettingValue1[1].enterpriseTaxNumber
                      }}</span>
                    </div>
                  </Col>
                  <Col :lg="{ span: 7 }" :md="{ span: 7 }" :sm="{ span: 12 }">
                    <div class="flex flex-col">
                      <span class="text-[gray] text-[13px] mb-[10px]">企业电话</span>
                      <span class="text-[12px]">{{ outputSettingValue1[1].enterprisePhone }}</span>
                    </div>
                  </Col>
                  <Col :span="24">
                    <div class="flex flex-col ml-[20px]">
                      <span class="text-[gray] text-[13px] my-[10px]">企业注册地址</span>
                      <span class="text-[12px]">{{
                        outputSettingValue1[1].enterpriseRegisteredAddress
                      }}</span>
                    </div>
                  </Col>
                  <Col :span="24">
                    <div class="flex flex-col ml-[20px]">
                      <span class="text-[gray] text-[13px] my-[10px]">企业开户行名称及账号</span>
                      <Table :columns="columns" :dataSource="openingBankValue">
                        <template #default="">
                          <Icon
                            icon="healthicons:yes-outline"
                            style="color: #2f92fa; width: 20px; height: 20px; margin-left: 5px"
                          />
                        </template>
                      </Table>
                    </div>
                  </Col>
                  <Col :span="24">
                    <div class="flex ml-[20px] mt-[10px]">
                      <span class="text-[16px]">通用门店配置</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span class="flex mt-[-10px]">
                        <Button style="margin-right: 20px">取消</Button>
                        <Button type="primary">保存</Button>
                      </span>
                    </div>
                  </Col>
                  <Col :span="24">
                    <div class="flex flex-col ml-[20px]">
                      <span class="text-[gray] text-[13px] my-[10px]">适用门店</span>
                      <Select
                        a-select
                        v-model:value="selectValue"
                        mode="multiple"
                        style="width: 100%"
                        placeholder="请选择适用门店"
                        :options="selectOption"
                        @click="selectChange"
                      />
                    </div>
                  </Col>
                  <Col :span="24">
                    <span class="text-[16px] ml-[20px] mt-[10px]">关联账号</span>
                  </Col>
                  <Col :lg="{ span: 10 }" :md="{ span: 9 }" :sm="{ span: 12 }">
                    <div class="flex flex-col ml-[20px]">
                      <span class="text-[gray] text-[13px] mb-[10px]">开票账号</span>
                      <span class="flex">
                        <span
                          class="inline-block w-[45px] h-[18px] bg-[#e6f3fe] text-[#0a87f8] leading-[17px] text-[11px] pl-[7px]"
                          >易票云</span
                        >
                        <span class="text-[12px] ml-[5px] mt-[3px]">{{
                          outputSettingValue1[1].enterpriseTaxNumber
                        }}</span>
                      </span>
                    </div>
                  </Col>
                  <Col :lg="{ span: 7 }" :md="{ span: 8 }" :sm="{ span: 12 }">
                    <div class="flex flex-col">
                      <span class="text-[gray] text-[13px] mb-[10px]">开票分机号</span>
                      <span class="text-[12px]">{{
                        outputSettingValue1[1].invoiceExtensionNumber
                      }}</span>
                    </div>
                  </Col>
                  <Col :lg="{ span: 7 }" :md="{ span: 7 }" :sm="{ span: 12 }">
                    <div class="flex flex-col">
                      <span class="text-[gray] text-[13px] mb-[10px]">授权绑定人</span>
                      <span class="text-[12px]">{{
                        outputSettingValue1[1].authorizedBindingPerson
                      }}</span>
                    </div>
                  </Col>
                  <Col :lg="{ span: 10 }" :md="{ span: 10 }" :sm="{ span: 12 }">
                    <div class="flex flex-col ml-[20px] mt-[15px]">
                      <span class="text-[gray] text-[13px] mb-[10px]">授权绑定时间</span>
                      <span class="text-[12px]">{{ outputSettingValue1[1].bindingTime }}</span>
                    </div>
                  </Col>
                  <Col :lg="{ span: 9 }" :md="{ span: 9 }" :sm="{ span: 12 }">
                    <div class="flex flex-col mt-[15px]">
                      <span class="text-[gray] text-[13px] mb-[10px]">剩余电子发票数量</span>
                      <span class="text-[12px]"
                        >{{ outputSettingValue1[1].invoiceExtensionNumber }}张</span
                      >
                    </div>
                  </Col>
                  <Col :span="24">
                    <div style="border-top: 1px gray dashed; font-size: 16px">
                      <span class="text-[gray] ml-[20px]"
                        >{{ outputSettingValue1[1].authorizedBindingPerson }}创建于{{
                          outputSettingValue1[1].bindingTime
                        }}&nbsp;&nbsp; |
                      </span>
                      <span class="text-[gray] mr-[20px]">
                        &nbsp;&nbsp;{{ outputSettingValue1[1].authorizedBindingPerson }}更新于{{
                          outputSettingValue1[1].bindingTime
                        }}</span
                      >
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane key="2">
                <template #tab>
                  <span class="text-[13px] flex"
                    ><Icon icon="ion:newspaper-outline" />开票商品信息
                  </span>
                </template>
                <Row :gutter="[10, 10]">
                  <Col :span="24">
                    <div class="text-[#272727] bg-[#f7f8fb]"
                      >开票时仅支持对已配置的商品进行申请和开票，请仔细核对</div
                    >
                  </Col>
                </Row>
              </TabPane>
              <TabPane key="3">
                <template #tab>
                  <span class="text-[13px] flex"
                    ><Icon icon="material-symbols:smart-toy-sharp" />智能决策</span
                  >
                </template>
                智能决策
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Modal>
      <p>更多</p>
    </template> -->
    <Icon icon="mingcute:more-2-fill" />
  </Popover>
</template>
<script setup>
  import { Modal, Popover, Col, Table, Button, Row, TabPane, Tabs, Select } from 'ant-design-vue';

  import { Icon } from '@iconify/vue';
  import { defineProps } from 'vue';
  import { getFinancialData } from '/@/api/financialManagement';
  import { ref } from 'vue';
  import { getSysDict } from '/@/api/sys/dict';
  const outputDetailValue = ref();
  const openingBankValue = ref();
  const outputSettingValue = ref();

  const financialDict = ref();
  const props = defineProps({ code: Number });
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
      outputDetailValue.value = res.outputdetail;
      openingBankValue.value = res.openingBank.openingBank;
      outputSettingValue.value = res.outputSetting.outputSetting;
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  const outputDetailVisible = ref(false);
  const outputDetailLoading = ref(false);
  const outputDetailOpen = () => {
    outputDetailVisible.value = true;
  };
  const outputDetailOk = () => {
    outputDetailLoading.value = true;
    setTimeout(() => {
      outputDetailVisible.value = false;
      outputDetailLoading.value = false;
    }, 2000);
  };

  const columns = [
    {
      title: '默认',
      dataIndex: 'default',
      slots: { customRender: 'default' },
    },
    {
      title: '开户行',
      dataIndex: 'bank',
    },
    {
      title: '银行账号',
      dataIndex: 'bankAccount',
    },
  ];
  const selectChange = (value) => {
    console.log(`selected ${value}`);
  };
  const selectValue = ref('软件新城公寓');
  const selectOption = ref([
    {
      value: 'one',
      label: '软件新城公寓',
    },
    {
      value: 'two',
      label: '高新技术开发区',
    },
    {
      value: 'three',
      label: '江夏开发新区',
    },
    {
      value: 'four',
      label: '江汉路开发新区',
    },
  ]);
</script>
