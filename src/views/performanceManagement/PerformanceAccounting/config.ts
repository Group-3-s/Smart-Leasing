export default {
  columns: [
    {
      title: '序号',
      dataIndex: 'key',
    },
    {
      title: '企业名称',
      dataIndex: 'companyname',
    },
    {
      title: '租赁提成标准',
      dataIndex: 'standard',
    },
    {
      title: '所属行业',
      dataIndex: 'industry',
    },
    {
      title: '房号',
      dataIndex: 'number',
    },
    {
      title: '签约时间',
      dataIndex: 'Signing_time',
    },

    {
      title: '签约面积',
      dataIndex: 'Contracted_area',
    },
    {
      title: '签约单价',
      dataIndex: 'Contract_unit_price',
    },
    {
      title: '合同起止时间',
      dataIndex: 'Starting_contract',
    },
    {
      title: '首月租金',
      dataIndex: 'deposit',
    },
    {
      title: '本次组件回款金额',
      dataIndex: 'money',
    },
    {
      title: '实际到账时间',
      dataIndex: 'time',
    },
    {
      title: '应收押金',
      dataIndex: 'receivable_deposit',
    },
    {
      title: '实收押金',
      dataIndex: 'Actual_deposit_received',
    },
    {
      title: '招商人员',
      dataIndex: 'name',
    },
    {
      title: '应提成总额',
      dataIndex: 'commission',
    },
    {
      title: '已发放提成金额',
      dataIndex: 'commissioned',
    },
    {
      title: '操作',
      dataIndex: 'action',
      slots: { customRender: 'action' },
    },
  ],
};
