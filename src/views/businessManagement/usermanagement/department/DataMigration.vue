<template>
  <div class="bg-blue-300 text-[18px] p-[25px] flex"
    ><QuestionCircleFilled style="font-size: 30px; color: #f3b541" /><div class="ml-[15px]"
      >确定要将员工⌈郑鹏/15927369212⌋名下的数据转移到其他员工名下吗？</div
    ></div
  >
  <Form
    ref="formRef"
    :rules="rules"
    :model="formState"
    style="padding: 25px"
    labelAlign="left"
    :colon="false"
  >
    <FormItem label="负责人" name="role">
      <Cascader 运营管理部 :options="options" placeholder="请选择接受人" />
    </FormItem>
    <FormItem :wrapper-col="{ span: 14, offset: 16 }">
      <Button @click="resetForm">取消</Button>
      <Button style="margin-left: 40px" type="primary" @click="onSubmit">保存</Button>
    </FormItem>
  </Form>
</template>
<script lang="ts" setup>
  import { QuestionCircleFilled } from '@ant-design/icons-vue';
  import { Form, FormItem, Button, Cascader } from 'ant-design-vue';
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
    role: [{ required: true, message: '请选择接受人' }],
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
  interface Option {
    value: string;
    label: string;
    children?: Option[];
  }
  const options: Option[] = [
    {
      value: 'E+ SPACE',
      label: 'E+ SPACE',
      children: [
        {
          value: '科技园',
          label: '科技园',
          children: [
            {
              value: '333',
              label: '333',
            },
          ],
        },
        {
          value: '招商策划',
          label: '招商策划',
          children: [
            {
              value: '555',
              label: '555',
            },
          ],
        },
        {
          value: '运营管理部',
          label: '运营管理部',
          children: [
            {
              value: '444',
              label: '444',
            },
          ],
        },
      ],
    },
  ];
</script>
