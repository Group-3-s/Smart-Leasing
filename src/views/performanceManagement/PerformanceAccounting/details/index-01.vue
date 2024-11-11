<template>
  <!-- <div>业绩台账</div> -->
  <!--下拉选框 日历 搜索 -->
  <div class="bg-white">
    <div class="bg-white rounded-lg p-4 m-5">
      <h2 class="pl-2 pr-4 pt-1 pb-1 mr-6 bg-white border-l-4 border-blue-600 rounded-3"
        >租赁提成明细</h2
      >
      <div class="flex items-center">
        <div class="w-1/3">
          <span>选择项目：</span>
          <div class="flex items-center justify-between">
            <!-- 下拉选框 -->
            <Select
              v-model:value="value"
              show-search
              placeholder="Select a position"
              style="width: 200px"
              :options="options"
              :filter-option="filterOption"
              @focus="handleFocus"
              @blur="handleBlur"
              @change:string="handleChange"
            />
          </div>
        </div>
        <div class="w-1/3 p-4">
          <span>周期</span>
          <div class="flex items-center justify-between">
            <DatePicker v-model:value="mountvalue" />
            <span>至</span>
            <DatePicker v-model:value="mountvalue1" />
          </div>
        </div>
        <div class="w-1/3 p-4">
          <div class="flex items-center justify-between">
            <div style="position: relative" @click="InputShowModal">
              <Input
                placeholder="搜索信息"
                style="
                  border: 1px solid rgb(21 136 252);
                  border-radius: 20px;
                  padding-left: 10px;
                  width: 280px;
                  height: 30px;
                  margin-top: 25px;
                  margin-left: 44px;
                "
              />
              <Icon
                icon="material-symbols:search"
                style="position: absolute; right: 10px; top: 30px; color: rgb(21 136 252)"
              />
              <div>
                <Modal v-model:visible="Inputvisible" :closable="false">
                  <InputModal />
                </Modal>
              </div>
            </div>

            <Icon icon="lucide:download" style="color: rgb(21 136 252); margin-top: 25px" />
          </div>
        </div>
      </div>
    </div>
    <!-- 表格主体 -->
    <div class="overflow-auto mt-8 bg-white p-4 shadow-md rounded-lg">
      <Table :columns="config.columns" :dataSource="tableDate" style="width: 185%">
        <template #name="{ text }">
          <a>{{ text }}</a>
        </template>
        <template #action="">
          <div>
            <div @click="detailsShowModal">查看详情</div>
          </div>
        </template>
        <template #action1="">
          <div>
            <div @click="commissionShowModal">发放提成</div>
          </div>
        </template>
      </Table>
      <!-- 对话框 -->
      <div>
        <Modal v-model:visible="detailsVisible" width="766px" :closable="false">
          <detailsModal />
        </Modal>
      </div>
      <div>
        <Modal v-model:visible="commissionvisible" width="766px" :closable="false">
          <commissionModal />
        </Modal>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { Select, Table, DatePicker, Modal } from 'ant-design-vue';
  import { SelectTypes } from 'ant-design-vue/es/select';
  import { Icon } from '/@/components/Icon';
  import { Moment } from 'moment';
  import { getmanageData } from '/@/api/performanceManagement/index';
  import commissionModal from './Modal/commissionModal.vue';
  import detailsModal from './Modal/detailsModal.vue';
  import InputModal from './Modal/InputModal.vue';
  const mountvalue = ref<Moment>();
  const mountvalue1 = ref<Moment>();
  import config from './config';
  const tableDate = ref();
  getmanageData()
    .then((res) => {
      tableDate.value = res.result.result;
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  const options = ref<SelectTypes['options']>([
    { value: '不限', label: '不限' },
    { value: '软件新城', label: '软件新城' },
    { value: '邓甲新城', label: '邓甲新城' },
    { value: '创新公寓', label: '创新公寓' },
    { value: '测试公寓楼栋', label: '测试公寓楼栋' },
  ]);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleBlur = () => {
    console.log('blur');
  };

  const handleFocus = () => {
    console.log('focus');
  };

  const filterOption = (input: string, option: any) => {
    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };

  const value = ref<string | undefined>(undefined);

  const detailsVisible = ref(false);

  const detailsShowModal = () => {
    detailsVisible.value = true;
  };
  const Inputvisible = ref(false);

  const InputShowModal = () => {
    Inputvisible.value = true;
  };
  //
  const commissionvisible = ref(false);

  const commissionShowModal = () => {
    commissionvisible.value = true;
  };
</script>
