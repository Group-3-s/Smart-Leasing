<template>
  <div class="text-[18px] p-[25px] flex"
    ><CheckCircleFilled style="font-size: 30px; color: green" /><div class="ml-[15px]"
      >确定要启用员工⌈郑鹏/15927369212⌋吗？</div
    ></div
  >
  <div class="text-[#959595] ml-[50px]">启用后该员工可正常登录本系统</div>
  <div class="h-[80px] mt-[30px] ml-[300px]">
    <Button>取消</Button>
    <Button type="primary" style="margin-left: 20px">确认</Button>
  </div>
</template>
<script lang="ts" setup>
  import { CheckCircleFilled } from '@ant-design/icons-vue';
  import { Button } from 'ant-design-vue';
</script>
