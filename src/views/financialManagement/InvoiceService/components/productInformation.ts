export default {
  columns: [
    {
      title: '序号',
      dataIndex: 'id',
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '费用科目',
      dataIndex: 'cost_count',
    },
    {
      title: '商品名称',
      dataIndex: 'product_name',
    },
    {
      title: '税收分类编码',
      dataIndex: 'tax_classification_code',
    },
    {
      title: '商品税率',
      dataIndex: 'commodity_tax_rate',
    },
    {
      title: '操作',
      dataIndax: 'operation',
      slots: { customRender: 'operation' },
    },
  ],
};
