export default {
  columns: [
    {
      title: '序号',
      dataIndex: 'key',
    },
    {
      title: '分佣人员',
      dataIndex: 'people',
    },
    {
      title: '分佣职务',
      dataIndex: 'position',
    },
    {
      title: '房源信息',
      dataIndex: 'room',
      slots: { customRender: 'action' },
    },
    {
      title: '合同周期',
      dataIndex: 'contracttime',
    },
    {
      title: '提成金额（元）',
      dataIndex: 'TotalCommissionAmount',
    },

    {
      title: '发放金额（元）',
      dataIndex: 'PaidCommissionAmount',
    },
    {
      title: '发放时间',
      dataIndex: 'LatestDistributionTime',
    },
  ],
};
