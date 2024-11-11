<template>
  <div class="text-[18px] p-[25px] flex"
    ><CloseCircleFilled style="font-size: 30px; color: red" /><div class="ml-[15px]"
      >确定要禁用部门⌈公寓测试门店⌋吗？</div
    ></div
  >
  <div class="text-[#959595] ml-[50px]">禁用后该员工将不能登录本系统</div>
  <Form
    ref="formRef"
    :rules="rules"
    :model="formState"
    style="padding: 25px"
    labelAlign="left"
    :colon="false"
  >
    <FormItem label="禁用原因" name="role">
      <Input
        v-model:value="formState.role"
        style="border: 0; border-bottom: 1px solid gray; height: 40px; margin: 25px; width: 500px"
        placeholder="输入原因"
      />
    </FormItem>
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
  const rules = {
    role: [{ required: true, message: '请输入禁用原因' }],
  };
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
