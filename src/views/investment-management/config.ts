export default {
  columns: [
    {
      title: '序号',
      dataIndex: 'id',
      key: '',
    },
    {
      title: '客户姓名',
      dataIndex: 'name',
      key: '',
    },
    {
      title: '客户电话',
      dataIndex: 'phone',
      key: '',
    },
    {
      title: '意向类别',
      dataIndex: 'intention',
      key: '',
    },
    {
      title: '客户状态',
      dataIndex: 'status',
      key: '',
      slots: { customRender: 'Status' },
    },
    {
      title: '招商人员',
      dataIndex: 'transactor',
      key: '',
    },
    {
      title: '创建日期',
      dataIndex: 'createTime',
      key: '',
    },
    {
      title: '最近联系日期',
      dataIndex: 'lastContactDate',
      key: '',
    },
    {
      title: '下次更近日期',
      dataIndex: 'nextContactDate',
      key: '',
    },
    {
      title: '客户认知途径',
      dataIndex: 'channel',
      key: '',
      slots: { customRender: 'Channel' },
    },
    {
      title: '备注',
      dataIndex: 'remark',
      key: '',
    },
    {
      title: '操作',
      dataIndex: 'caozuo',
      key: '',
      slots: { customRender: 'caozuo' },
    },
  ],
  dataSource: [
    {
      id: '1',
      name: '胡彦斌',
      phone: '19164561061',
      intention: '1',
      status: '1',
      transactor: '1',
      createTime: '1',
      lastContactDate: '1',
      nextContactDate: '1',
      channel: '1',
      remark: '1',
      caozuo: '',
    },
  ],
};
