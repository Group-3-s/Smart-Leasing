export default {
  columns: [
    {
      title: '序号',
      dataIndex: 'id',
    },
    {
      title: '状态',
      dataIndex: 'status',
      slots: { customRender: 'status' },
    },
    {
      title: '开票主题/销方名称',
      dataIndex: 'invoice_theme',
    },
    {
      title: '纳税人识别号',
      dataIndex: 'taxpayer_identification_number',
    },
    {
      title: '适用范围',
      dataIndex: 'scope_application',
    },
    {
      title: '分别号',
      dataIndex: 'separate_numbers',
    },
    {
      title: '公司名',
      dataIndex: 'enterpriseName',
    },
    {
      title: '剩余发票张数',
      dataIndex: 'invoices_remaining_number',
    },
    {
      title: '开票账号设置',
      dataIndex: 'invoice_account_settings',
    },
    {
      title: '操作',
      dataIndax: 'operation',
      slots: { customRender: 'operations' },
    },
  ],
};
