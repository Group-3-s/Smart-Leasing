<template>
  <div class="text-[18px] p-[25px] flex"
    ><CloseCircleFilled style="font-size: 30px; color: red" /><div class="ml-[15px]"
      >确定要删除员工⌈郑鹏/15927369212⌋吗？</div
    ></div
  >
  <div class="text-[#959595] ml-[50px]">删除后将不可恢复，请谨慎操作</div>
  <Form ref="formRef" :model="formState" style="padding: 25px" labelAlign="left" :colon="false">
    <FormItem :wrapper-col="{ span: 14, offset: 16 }">
      <Button @click="resetForm">取消</Button>
      <Button style="margin-left: 40px" type="primary" @click="onSubmit">确定</Button>
    </FormItem>
  </Form>
</template>
<script lang="ts" setup>
  import { CloseCircleFilled } from '@ant-design/icons-vue';
  import { Form, FormItem, Button } from 'ant-design-vue';
  import { reactive, ref, UnwrapRef, toRaw } from 'vue';
  import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';

  interface FormState {
    role: any;
  }
  const formRef = ref();
  const formState: UnwrapRef<FormState> = reactive({
    role: '',
  });
  const onSubmit = () => {
    formRef.value
      .validate()
      .then(() => {
        console.log('values', formState, toRaw(formState));
      })
      .catch((error: ValidateErrorEntity<FormState>) => {
        console.log('error', error);
      });
  };
  const resetForm = () => {
    formRef.value.resetFields();
  };
</script>
