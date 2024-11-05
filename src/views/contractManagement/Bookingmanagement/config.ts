export default {
  columns: [
    {
      title: '序号',
      dataIndex: 'id',
      key: '',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: '',
      slots: { customRender: 'Status' },
    },
    {
      title: '预订人信息',
      dataIndex: 'person',
      key: '',
    },
    {
      title: '房源信息',
      dataIndex: 'Availability',
      key: '',
    },
    {
      title: '预定类型',
      dataIndex: 'type',
      key: '',
      slots: { customRender: 'Type' },
    },
    {
      title: '预计入住日期',
      dataIndex: 'createTime',
      key: '',
    },
    {
      title: '预计入住时长',
      dataIndex: 'Duration',
      key: '',
    },
    {
      title: '定金(元)',
      dataIndex: 'price',
      key: '',
    },
    {
      title: '编号',
      dataIndex: 'serial',
      key: '',
    },
    {
      title: '操作',
      dataIndex: 'channel',
      key: '',
      slots: { customRender: 'caozuo' },
    },
  ],
};
