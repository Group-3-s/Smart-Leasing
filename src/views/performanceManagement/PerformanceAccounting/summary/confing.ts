export default {
  columns: [
    {
      title: '序号',
      dataIndex: 'key',
    },
    {
      title: '分佣人员',
      dataIndex: 'peopleName',
    },
    {
      title: '分佣职务',
      dataIndex: 'position',
    },
    {
      title: '房源',
      dataIndex: ' contractNumber',
    },
    {
      title: '行业内/商业',
      children: [
        {
          title: '3年以上(首月租金)',
          dataIndex: 'contractAmount',
        },
        {
          title: '提成比例',
          dataIndex: 'paymentRatio',
        },

        {
          title: '3年以内(首月租金)',
          dataIndex: 'paymentAmount',
        },
        {
          title: '提成比例',
          dataIndex: 'paymentPercentage',
        },
      ],
    },
    {
      title: '行业外',
      children: [
        {
          title: '签约面积',
          dataIndex: 'paymentArea',
        },
        {
          title: '提成比例',
          dataIndex: 'paymentCoefficient',
        },
      ],
    },

    {
      title: '提成目标完成时间',
      dataIndex: 'paymentDate',
    },
    {
      title: '租赁总提成',
      dataIndex: 'paymentDue',
    },
    {
      title: '扣除金额',
      dataIndex: 'additionalPayment',
    },
    {
      title: '此次发放金额',
      dataIndex: 'totalPayment',
    },
  ],
};
