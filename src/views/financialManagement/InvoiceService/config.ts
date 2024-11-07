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
      title: '申请入口',
      dataIndex: 'apply_entrance',
    },
    {
      title: '购买方类型',
      dataIndex: 'buyer_type',
    },
    {
      title: '购买方名称',
      dataIndex: 'buyer_name',
    },
    {
      title: '购买方税号',
      dataIndex: 'buyer_tax_number',
    },
    {
      title: '主商品名称',
      dataIndex: 'main_product_name',
    },
    {
      title: '主商品税率',
      dataIndex: 'main_commodity_tax_rate',
    },
    {
      title: '开票金额',
      dataIndex: 'invoice_amount',
    },
    {
      title: '税额',
      dataIndex: 'tax_amount',
    },
    {
      title: '合计',
      dataIndex: 'total',
    },
    {
      title: '开票张数',
      dataIndex: 'invoice_issued_number',
    },
    {
      title: '申请方',
      dataIndex: 'applicant',
    },
    {
      title: '申请时间',
      dataIndex: 'application_time',
    },
    {
      title: '关联账单',
      dataIndex: 'related_bill',
    },
    {
      title: '操作',
      dataIndax: 'operation',
      slots: { customRender: 'operation' },
    },
  ],
};
