<template>
  <div>
    <PageWrapper>
      <Row :gutter="[10, 10]">
        <!-- 左边 -->
        <Col
          :xs="{ span: 24 }"
          :xl="{ span: 18 }"
          :xxl="{ span: 18 }"
          :lg="{ span: 18 }"
          :sm="{ span: 24 }"
        >
          <Row :gutter="[12, 12]">
            <!-- 常用功能 -->
            <Col :xl="{ span: 12 }" :xs="{ span: 24 }" :lg="{ span: 12 }" :sm="{ span: 24 }">
              <Card
                title="常用功能"
                :headStyle="{ borderBottom: 'unset' }"
                class="h-[178px]"
                style="border-radius: 15px"
              >
                <template #extra>
                  <Popover title="常用功能" trigger="click" placement="bottom">
                    <template #content>
                      <div class="flex flex-1 flex-wrap justify-around w-[470px]">
                        <div v-for="(item, index) in Commonly2" :key="index" class="m-[10px]">
                          <button @click="goCommonly(item.path)">
                            <div
                              class="bg-blue-500 w-[45px] h-[45px] rounded-lg flex flex-1 ml-[4px]"
                            >
                              <span
                                class="iconify text-white w-[40px] h-[40px] inline-block mt-[5px] ml-[3px]"
                                :data-icon="item.icon"
                              >
                              </span>
                            </div>
                            <span>{{ item.name }}</span>
                          </button>
                        </div>
                      </div>
                    </template>
                    <button>
                      <Icon icon="uil:setting" class="mr-[10px]" />
                    </button>
                  </Popover>
                </template>
                <div class="flex flex-1 justify-around">
                  <div v-for="(item, index) in Commonly1" :key="index">
                    <button @click="goCommonly(item.path)">
                      <div class="bg-blue-500 w-[45px] h-[45px] rounded-lg flex flex-1 ml-[4px]">
                        <span
                          class="iconify text-white w-[40px] h-[40px] inline-block mt-[5px] ml-[3px]"
                          :data-icon="item.icon"
                        >
                        </span>
                      </div>
                      <span>{{ item.name }}</span>
                    </button>
                  </div>
                </div>
              </Card>
            </Col>
            <!-- 审批管理 -->
            <Col :xl="{ span: 12 }" :xs="{ span: 24 }" :lg="{ span: 12 }" :sm="{ span: 24 }">
              <Card
                title="审批管理"
                :headStyle="{ borderBottom: 'unset' }"
                class="h-[178px]"
                style="border-radius: 15px"
              >
                <div class="flex flex-1 justify-around">
                  <div
                    class="flex flex-1 justify-around"
                    v-for="item in auditManagement1"
                    :key="item"
                  >
                    <div>
                      <div class="font-bold text-center">{{ item.pendingApproval }}</div>
                      <div>待我审批</div>
                    </div>
                    <div>
                      <div class="font-bold text-center">{{ item.initiatedByMe }} </div>
                      <div>我发起的</div>
                    </div>
                    <div>
                      <div class="font-bold text-center">{{ item.copyMe }} </div>
                      <div>抄送我的</div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <!-- 合约管理 -->
            <Col :xl="{ span: 12 }" :xs="{ span: 24 }" :lg="{ span: 12 }" :sm="{ span: 24 }">
              <Card
                title="合约管理"
                :headStyle="{ borderBottom: 'unset' }"
                style="border-radius: 15px"
                class="h-[312px]"
              >
                <div>
                  <div v-for="item in ContractManagement1" :key="item">
                    <div class="ml-[15px]"
                      ><span class="font-bold">租客合同</span>
                      <span class="text-blue-500 text-[30px] ml-[20px] font-bold">{{
                        item.TenantContract
                      }}</span
                      ><span class="ml-[10px]">(份)</span></div
                    >
                  </div>
                  <div
                    class="flex flex-1 justify-around mt-[60px]"
                    v-for="item in ContractManagement1"
                    :key="item"
                  >
                    <div>
                      <div>待签字({{ item.checked }})</div>
                    </div>
                    <div>
                      <div>在租中({{ item.InRent }})</div>
                    </div>
                    <div>
                      <div>即将搬出({{ item.MovingOutSoon }})</div>
                    </div>
                    <div>
                      <div>已到期({{ item.Expired }})</div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <!-- 租前 -->
            <Col :xl="{ span: 12 }" :xs="{ span: 24 }" :lg="{ span: 12 }" :sm="{ span: 24 }">
              <Card
                title="租前"
                :headStyle="{ borderBottom: 'unset' }"
                style="border-radius: 15px"
                class="h-[312px]"
              >
                <div class="flex flex-1 justify-around" v-for="item in PreRental1" :key="item">
                  <div>
                    <div class="font-bold text-center">{{ item.Tobecheckedin }}</div>
                    <div>待入住</div>
                  </div>
                  <div>
                    <div class="font-bold text-center"> {{ item.BookToday }}</div>
                    <div>今日预定</div>
                  </div>
                </div>
                <div
                  class="flex flex-1 mt-[2.5vw] mb-[2.5vw] flex-wrap justify-around"
                  v-for="item in PreRental1"
                  :key="item"
                >
                  <div>
                    <div class="font-bold text-center">{{ item.ScheduledForThisWeek }}</div>
                    <div>本周预定</div>
                  </div>
                  <div>
                    <div class="font-bold text-center"> {{ item.ScheduledForThisMonth }}</div>
                    <div>本月预定</div>
                  </div>
                </div>
              </Card>
            </Col>
            <!-- 房源管理 -->
            <Col :xl="{ span: 24 }" :xs="{ span: 24 }" :lg="{ span: 24 }" :sm="{ span: 24 }">
              <Card
                title="房源管理"
                :headStyle="{ borderBottom: 'unset' }"
                style="border-radius: 15px"
                class="h-[1082px] overflow-auto"
              >
                <Row :gutter="[10, 10]">
                  <Col :xl="{ span: 8 }" :sm="{ span: 12 }" :lg="{ span: 12 }">
                    <div>
                      <span class="ml-[1vw] font-bold">公寓(1236套,1256间)</span>
                      <span class="ml-[1vw]">出租率 45.05%</span>
                      <div
                        class="lg:w-[19.5vw] sm:w-[30vw] h-[23vh] bg-[#f5f5f5] ml-[1vw] rounded-lg pt-[1vw]"
                        v-for="item in ListingManagement1"
                        :key="item"
                      >
                        <div class="flex justify-around mt-[20px]">
                          <div>
                            <div class="font-bold text-center">{{ item.vacant }}</div>
                            <div>空置</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.Management }}</div>
                            <div>配置</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.Rented }}</div>
                            <div>已租</div>
                          </div>
                        </div>
                        <div class="flex justify-around mt-[2vw]">
                          <div>
                            <div class="font-bold text-center">{{ item.MovingInSoon }}</div>
                            <div>即将搬入(30天内)</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.ExpirationIsComing }}</div>
                            <div>即将到期(30天内)</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.Expired }}</div>
                            <div>已到期</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col :xl="{ span: 8 }" :sm="{ span: 12 }" :lg="{ span: 12 }">
                    <div>
                      <span class="ml-[1vw] font-bold">商办(1236套,1256间)</span>
                      <span class="ml-[1vw]">出租率 45.05%</span>
                      <div
                        class="lg:w-[19.5vw] sm:w-[30vw] h-[23vh] bg-[#f5f5f5] ml-[1vw] rounded-lg pt-[1vw]"
                        v-for="item in ListingManagement1"
                        :key="item"
                      >
                        <div class="flex justify-around mt-[20px]">
                          <div>
                            <div class="font-bold text-center">{{ item.vacant }}</div>
                            <div>空置</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.Management }}</div>
                            <div>配置</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.Rented }}</div>
                            <div>已租</div>
                          </div>
                        </div>
                        <div class="flex justify-around mt-[2vw]">
                          <div>
                            <div class="font-bold text-center">{{ item.MovingInSoon }}</div>
                            <div>即将搬入(30天内)</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.ExpirationIsComing }}</div>
                            <div>即将到期(30天内)</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.Expired }}</div>
                            <div>已到期</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col :xl="{ span: 8 }" :sm="{ span: 12 }" :lg="{ span: 12 }">
                    <div>
                      <span class="ml-[1vw] font-bold">商铺(1236套,1256间)</span>
                      <span class="ml-[1vw]">出租率 45.05%</span>
                      <div
                        class="lg:w-[19.5vw] sm:w-[30vw] h-[23vh] bg-[#f5f5f5] ml-[1vw] rounded-lg pt-[1vw]"
                        v-for="item in ListingManagement1"
                        :key="item"
                      >
                        <div class="flex justify-around mt-[20px]">
                          <div>
                            <div class="font-bold text-center">{{ item.vacant }}</div>
                            <div>空置</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.Management }}</div>
                            <div>配置</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.Rented }}</div>
                            <div>已租</div>
                          </div>
                        </div>
                        <div class="flex justify-around mt-[2vw]">
                          <div>
                            <div class="font-bold text-center">{{ item.MovingInSoon }}</div>
                            <div>即将搬入(30天内)</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.ExpirationIsComing }}</div>
                            <div>即将到期(30天内)</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.Expired }}</div>
                            <div>已到期</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col :xl="{ span: 8 }" :sm="{ span: 12 }" :lg="{ span: 12 }">
                    <div>
                      <span class="ml-[1vw] font-bold">厂房(1236套,1256间)</span>
                      <span class="ml-[1vw]">出租率 45.05%</span>
                      <div
                        class="lg:w-[19.5vw] sm:w-[30vw] h-[23vh] bg-[#f5f5f5] ml-[1vw] rounded-lg pt-[1vw]"
                        v-for="item in ListingManagement1"
                        :key="item"
                      >
                        <div class="flex justify-around mt-[20px]">
                          <div>
                            <div class="font-bold text-center">{{ item.vacant }}</div>
                            <div>空置</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.Management }}</div>
                            <div>配置</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.Rented }}</div>
                            <div>已租</div>
                          </div>
                        </div>
                        <div class="flex justify-around mt-[2vw]">
                          <div>
                            <div class="font-bold text-center">{{ item.MovingInSoon }}</div>
                            <div>即将搬入(30天内)</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.ExpirationIsComing }}</div>
                            <div>即将到期(30天内)</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.Expired }}</div>
                            <div>已到期</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col :xl="{ span: 8 }" :sm="{ span: 12 }" :lg="{ span: 12 }">
                    <div>
                      <span class="ml-[1vw] font-bold">车位(1236套,1256间)</span>
                      <span class="ml-[1vw]">出租率 45.05%</span>
                      <div
                        class="lg:w-[19.5vw] sm:w-[30vw] h-[23vh] bg-[#f5f5f5] ml-[1vw] rounded-lg pt-[1vw]"
                        v-for="item in ListingManagement1"
                        :key="item"
                      >
                        <div class="flex justify-around mt-[20px]">
                          <div>
                            <div class="font-bold text-center">{{ item.vacant }}</div>
                            <div>空置</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.Management }}</div>
                            <div>配置</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.Rented }}</div>
                            <div>已租</div>
                          </div>
                        </div>
                        <div class="flex justify-around mt-[2vw]">
                          <div>
                            <div class="font-bold text-center">{{ item.MovingInSoon }}</div>
                            <div>即将搬入(30天内)</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.ExpirationIsComing }}</div>
                            <div>即将到期(30天内)</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.Expired }}</div>
                            <div>已到期</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col :xl="{ span: 8 }" :sm="{ span: 12 }" :lg="{ span: 12 }">
                    <div>
                      <span class="ml-[1vw] font-bold">广告牌(1236套,1256间)</span>
                      <span class="ml-[1vw]">出租率 45.05%</span>
                      <div
                        class="lg:w-[19.5vw] sm:w-[30vw] h-[23vh] bg-[#f5f5f5] ml-[1vw] rounded-lg pt-[1vw]"
                        v-for="item in ListingManagement1"
                        :key="item"
                      >
                        <div class="flex justify-around mt-[20px]">
                          <div>
                            <div class="font-bold text-center">{{ item.vacant }}</div>
                            <div>空置</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.Management }}</div>
                            <div>配置</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.Rented }}</div>
                            <div>已租</div>
                          </div>
                        </div>
                        <div class="flex justify-around mt-[2vw]">
                          <div>
                            <div class="font-bold text-center">{{ item.MovingInSoon }}</div>
                            <div>即将搬入(30天内)</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.ExpirationIsComing }}</div>
                            <div>即将到期(30天内)</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.Expired }}</div>
                            <div>已到期</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col :xl="{ span: 8 }" :sm="{ span: 12 }" :lg="{ span: 12 }">
                    <div>
                      <span class="ml-[1vw] font-bold">会议室(1236套,1256间)</span>
                      <span class="ml-[1vw]">出租率 45.05%</span>
                      <div
                        class="lg:w-[19.5vw] sm:w-[30vw] h-[23vh] bg-[#f5f5f5] ml-[1vw] rounded-lg pt-[1vw]"
                        v-for="item in ListingManagement1"
                        :key="item"
                      >
                        <div class="flex justify-around mt-[20px]">
                          <div>
                            <div class="font-bold text-center">{{ item.vacant }}</div>
                            <div>空置</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.Management }}</div>
                            <div>配置</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.Rented }}</div>
                            <div>已租</div>
                          </div>
                        </div>
                        <div class="flex justify-around mt-[2vw]">
                          <div>
                            <div class="font-bold text-center">{{ item.MovingInSoon }}</div>
                            <div>即将搬入(30天内)</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.ExpirationIsComing }}</div>
                            <div>即将到期(30天内)</div>
                          </div>
                          <div>
                            <div class="font-bold text-center">{{ item.Expired }}</div>
                            <div>已到期</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
        <!-- 右边 -->
        <Col
          :xs="{ span: 24 }"
          :xxl="{ span: 6 }"
          :xl="{ span: 6 }"
          :lg="{ span: 6 }"
          :sm="{ span: 24 }"
        >
          <Row :gutter="[10, 10]">
            <Col
              :xl="{ span: 24 }"
              :xs="{ span: 24 }"
              :lg="{ span: 24 }"
              :sm="{ span: 24 }"
              :md="{ span: 8 }"
            >
              <Card
                title="代办事项"
                :headStyle="{ borderBottom: 'unset' }"
                class="h-[506px]"
                style="border-radius: 15px"
              >
                <template #extra>
                  <div class="mr-[1vw] text-[#1989fa] mb-[1vw]">
                    <span
                      >更多<Icon icon="mingcute:right-line" /><span
                        class="text-[gray] mx-[0.2vw] mb-[2px]"
                        >|</span
                      ><Icon icon="ic:baseline-add"
                    /></span>
                  </div>
                </template>
                <Empty />
              </Card>
            </Col>
            <Col
              :xl="{ span: 24 }"
              :xs="{ span: 24 }"
              :lg="{ span: 24 }"
              :sm="{ span: 24 }"
              :md="{ span: 8 }"
            >
              <Card
                title="最新公告"
                :headStyle="{ borderBottom: 'unset' }"
                class="h-[506px]"
                style="border-radius: 15px"
              >
                <template #extra>
                  <div class="mr-[1vw] text-[#1989fa] mb-[1vw]">
                    <span
                      >更多<Icon icon="mingcute:right-line" /><span
                        class="text-[gray] mx-[0.2vw] mb-[2px]"
                        >|</span
                      ><Icon icon="ic:baseline-add"
                    /></span>
                  </div>
                </template>
                <Empty />
              </Card>
            </Col>
            <Col
              :xl="{ span: 24 }"
              :xs="{ span: 24 }"
              :lg="{ span: 24 }"
              :sm="{ span: 24 }"
              :md="{ span: 8 }"
            >
              <Card
                title="资产出租率"
                :headStyle="{ borderBottom: 'unset' }"
                class="h-[560px]"
                style="border-radius: 15px"
              >
                <div>
                  <v-chart class="h-[408px]" :option="option" autoresize />
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </PageWrapper>
  </div>
</template>

<script setup lang="ts">
  import { PageWrapper } from '/@/components/Page';
  import { getWorkbenchData } from '/@/api/workbench/index';
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { PieChart } from 'echarts/charts';
  import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components';
  import VChart, { THEME_KEY } from 'vue-echarts';
  import { ref, provide } from 'vue';
  import Icon from '/@/components/Icon/src/Icon.vue';
  import { Row, Col, Card, Empty, Popover } from 'ant-design-vue';
  import { useRouter } from 'vue-router';

  const Commonly1 = ref();
  const auditManagement1 = ref();
  const ContractManagement1 = ref();
  const PreRental1 = ref();
  const ListingManagement1 = ref();
  const Commonly2 = ref();
  const router = useRouter();
  getWorkbenchData()
    .then((res) => {
      Commonly1.value = res.featureList.featureList.slice(0, 4);
      auditManagement1.value = res.auditManagement;
      ContractManagement1.value = res.ContractManagement;
      PreRental1.value = res.PreRental;
      ListingManagement1.value = res.ListingManagement;
      Commonly2.value = res.featureList.featureList;
    })
    .catch((err) => {
      console.log(err);
    });

  const goCommonly = (path) => {
    console.log(1);
    console.log(path);

    router.push(path);
  };
  use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent]);
  provide(THEME_KEY, 'white');
  const option = ref({
    // title: {
    //   text: 'Traffic Sources',
    //   left: 'center',
    // },
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)',
    },
    legend: {
      // orient: 'vertical',
      bottom: 'bottom',
      data: ['公寓', '商办', '商铺', '厂房', '车位', '广告牌', '会议室'],
    },
    series: [
      {
        type: 'pie',
        radius: '55%',
        center: ['50%', '40%'],
        data: [
          { value: 335, name: '公寓' },
          { value: 310, name: '商办' },
          { value: 234, name: '商铺' },
          { value: 135, name: '厂房' },
          { value: 500, name: '车位' },
          { value: 548, name: '广告牌' },
          { value: 548, name: '会议室' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  });
</script>
