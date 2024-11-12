<!-- eslint-disable vue/valid-v-slot -->
<template>
  <Popover title="操作" trigger="click">
    <template v-if="props.code === 70001" #content>
      <p @click="reInvoice">重新开票</p>
      <Modal v-model:visible="reModalVisible" @ok="reHideModal" />
      <p @click="tovoid">作废</p>
      <Modal v-model:visible="voidModalVisible" @ok="voidHideModal" />
    </template>
    <template v-if="props.code === 70002" #content>
      <p>开票中...</p>
    </template>
    <template v-if="props.code === 70003" #content>
      <p>冲红</p>
      <p @click="tovoid">作废</p>
      <Modal v-model:visible="voidModalVisible" @ok="voidHideModal" />
    </template>
    <template v-if="props.code === 70004">
      <p>无操作</p>
    </template>
    <template v-if="props.code === 70005">
      <p>无操作</p>
    </template>
    <template v-if="props.code === 70006">
      <p @click="reInvoice">重新开票</p>
      <Modal v-model:visible="reModalVisible" @ok="reHideModal" />
      <p @click="tovoid">作废</p>
      <Modal v-model:visible="voidModalVisible" @ok="voidHideModal" />
    </template>
    <Icon icon="mingcute:more-2-fill" />
  </Popover>
</template>

<script setup>
  import { Popover, Modal } from 'ant-design-vue';
  import { defineProps } from 'vue';
  import { Icon } from '@iconify/vue';
  import { ref, createVNode } from 'vue';
  import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
  const props = defineProps({ code: Number });
  console.log('props:', props);
  const reModalVisible = ref(false);
  const voidModalVisible = ref(false);
  // const reInvoice = () => {
  //   modalVisible.value = true;
  // };

  const reInvoice = () => {
    Modal.confirm({
      title: '确定要重新提交开票申请吗？',
      icon: createVNode(ExclamationCircleOutlined),
      content: '重新提交开票暂不支持编辑开票信息，提交后将无需确认，直接进入开票流程，请知晓',
      okText: '确认',
      cancelText: '取消',
    });
  };
  const tovoid = () => {
    Modal.confirm({
      title: '确定要作废该开票信息吗？',
      icon: createVNode(ExclamationCircleOutlined),
      content: '作废后，不支持恢复，请确认',
      okText: '确认',
      cancelText: '取消',
    });
  };
  const reHideModal = () => {
    reModalVisible.value = false;
  };
  const voidHideModal = () => {
    voidModalVisible.value = false;
  };
</script>
