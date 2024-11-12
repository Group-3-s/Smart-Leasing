export default {
  columns: [
    {
      title: '租赁提成标准',
      dataIndex: 'commission_standard',
    },
    {
      title: '行业内/行业外',
      dataIndex: 'industry',
    },
    {
      title: '签约类型',
      dataIndex: 'contract_type',
    },
    {
      title: '签约时长',
      dataIndex: 'contract_time',
    },
    {
      title: '操作',
      dataIndex: 'action',

      slots: { customRender: 'action' },
    },
    {
      title: '操作',
      dataIndex: 'action1',

      slots: { customRender: 'action1' },
    },
  ],
};
